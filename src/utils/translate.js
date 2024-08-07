require('module-alias/register');

const Hangul = require('hangul-js');
const natural = require('natural');

const { englishToKoreanKeyMap, koreanToEnglishKeyMap } = require('@mappings/en_kr_map.js');
const { englishCommonWords } = require('@data/en_words.js');
const { koreanCommonWords } = require('@data/kr_words.js');
const tokenizer = new natural.WordTokenizer();

function translateEnglishToKorean(input) {
    newLineOutputs = []
    newLineInputs = input.split('\n')

    newLineInputs.forEach(input => {
        spacedOutputs = []
        spacedInputs = input.split(' ')
    
        spacedInputs.forEach(input => {
            const disassembled = Hangul.disassemble(input);
            const translated = []
            disassembled.forEach(element => {
                translated.push(englishToKoreanKeyMap[element])
            })
            spacedOutputs.push(Hangul.assemble(translated));
        })

        newLineOutputs.push(spacedOutputs.join(' '))
    })
	
    return newLineOutputs.join('\n');
}

function translateKoreanToEnglish(input) {
    newLineOutputs = []
    newLineInputs = input.split('\n')

    newLineInputs.forEach(input => {
        spacedOutputs = []
        spacedInputs = input.split(' ')
    
        spacedInputs.forEach(input => {
            const disassembled = Hangul.disassemble(input);
            const translated = []
            disassembled.forEach(element => {
                translated.push(koreanToEnglishKeyMap[element])
            })
            spacedOutputs.push(translated.join(''));
        })

        newLineOutputs.push(spacedOutputs.join(' '))
    })
	
    return newLineOutputs.join('\n');
}

function isGibberish(sentence, language) {
    switch(language) {
        case "en":
            return isGibberishEn(sentence)
        case "kr":
            return isGibberishKr(sentence)
        default:
            return false
    }
}

function isGibberishEn(sentence) {
    const threshold = 0.8;
    const words = tokenizer.tokenize(sentence);

    let gibberishCount = 0;
    words.forEach(word => {
        if (!englishCommonWords.has(word)) {
            gibberishCount++;
        }
    });

    return gibberishCount / words.length > threshold;
}

function isGibberishKr(sentence) {
    
}

function translateIfGibberish(sentence) {
    if (isGibberish(sentence, "en")) {
        return translateEnglishToKorean(sentence)
    }
}

module.exports = {
    translateIfGibberish
}