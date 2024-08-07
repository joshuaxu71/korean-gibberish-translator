require('module-alias/register');

const Hangul = require('hangul-js');
const natural = require('natural');
const { PythonShell } = require('python-shell');

const { englishToKoreanKeyMap, koreanToEnglishKeyMap } = require('@mappings/en_kr_map.js');
const { englishCommonWords } = require('@data/en_words.js');
const { koreanCommonWords } = require('@data/kr_words.js');
const { Language } = require('@enums/language.js');

const tokenizer = new natural.WordTokenizer();

async function translate(input, sourceLanguage) {
    keyMap = sourceLanguage === Language.ENGLISH ? englishToKoreanKeyMap : koreanToEnglishKeyMap

    newLineOutputs = []
    newLineInputs = input.split('\n')

    newLineInputs.forEach(input => {
        spacedOutputs = []
        spacedInputs = input.split(' ')
    
        spacedInputs.forEach(input => {
            const disassembled = Hangul.disassemble(input);
            const translated = []
            disassembled.forEach(element => {
                translatedElement = keyMap.get(element) || element
                translated.push(translatedElement)
            })
            spacedOutputs.push(Hangul.assemble(translated));
        })

        newLineOutputs.push(spacedOutputs.join(' '))
    })
	
    return newLineOutputs.join('\n');
}

function isGibberishEn(sentence) {
    const words = tokenizer.tokenize(sentence);

    const threshold = 0.7;
    let gibberishCount = 0;
    words.forEach(word => {
        if (!englishCommonWords.has(word)) {
            gibberishCount++;
        }
    });

    return gibberishCount / words.length > threshold;
}

function tokenizeKoreanText(text) {
    let options = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: 'python',
        args: text
    };

    return new Promise((resolve, reject) => {
        PythonShell.run('tokenize.py', options).then(result => {
            try {
                const parsedResult = JSON.parse(result[0]);
                resolve(parsedResult);
            } catch (e) {
                console.error('Error parsing result:', e);
                reject(e);
            }
        });
    });
}

async function isGibberishKr(sentence) {
    try {
        const words = await tokenizeKoreanText(sentence);
                
        const threshold = 0.7;
        let gibberishCount = 0;
        const totalWords = words.length;

        words.forEach(word => {
            if (!koreanCommonWords.has(word)) {
                gibberishCount++;
            }
        });

        const gibberishRatio = gibberishCount / totalWords;
        return gibberishRatio > threshold;
    } catch (err) {
        console.error('Error in isGibberishKr:', err);
        return false;
    }
}

function detectLanguage(text) {
    const koreanRegex = /[가-힣]/; // Matches any Korean character
    const englishRegex = /[a-zA-Z]/; // Matches any English character

    if (koreanRegex.test(text) && englishRegex.test(text)) {
        return Language.UNSUPPORTED;
    } else if (koreanRegex.test(text)) {
        return Language.KOREAN;
    } else if (englishRegex.test(text)) {
        return Language.ENGLISH;
    } else {
        return Language.UNSUPPORTED; // If neither English nor Korean characters are found
    }
}

async function translateIfGibberish(sentence) {
    const language = detectLanguage(sentence)

    var isGibberish = false;
    switch (language) {
        case Language.ENGLISH:
            isGibberish = isGibberishEn(sentence)
            break;
        case Language.KOREAN:
            isGibberish = await isGibberishKr(sentence)
            break;
    }
    
    if (isGibberish) {
        try {
            const translation = await translate(sentence, language);
            var translationIsAlsoGibberish = false;

            switch (language) {
                case Language.ENGLISH:
                    translationIsAlsoGibberish = await isGibberishKr(translation)
                    break;
                case Language.KOREAN:
                    translationIsAlsoGibberish = isGibberishEn(translation)
                    break;
            }

            /*
             * If translation is also gibberish, it's probably a typo / unregistered word, 
             * so we won't return the gibberish translation
             */
            if (!translationIsAlsoGibberish) {
                return translation
            }
        } catch (error) {
            console.error('Error processing message:', error);
        }
    }
}

module.exports = {
    translateIfGibberish
}