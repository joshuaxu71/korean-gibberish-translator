require('module-alias/register');

const Hangul = require('hangul-js');

const { englishToKoreanKeyMap } = require('@mappings/en_kr_map.js');

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

module.exports = {
    translateEnglishToKorean
}