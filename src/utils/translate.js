require('module-alias/register');

const Hangul = require('hangul-js');

const { englishToKoreanKeyMap } = require('@mappings/en_kr_map.js');

function translateEnglishToKorean(input) {
	const disassembled = Hangul.disassemble(input);
    const translated = []
    disassembled.forEach(element => {
        translated.push(englishToKoreanKeyMap[element])
    })
    return Hangul.assemble(translated);
}

module.exports = {
    translateEnglishToKorean
}