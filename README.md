# Korean Gibberish Translator

YouTube Explanation and Demo: [link](https://www.youtube.com/watch?v=wo320bk81gU)

Hello :D

This Discord bot translates misinputs between Korean and English. 
For example, if a user writes `dkssudgktpdy`, the bot will detect that the message is supposed to be in Korean input, which translates to `안녕하세요`. 
Inversely, if the user types `ㅗ디ㅣㅐ`, the bot will translate it to `hello`.

This happens through the following process:
1. Detecting input language
2. Detecting gibberishness
3. Translate
4. Detecting translation's gibberishness
5. Return translation

## Detecting Input Language
The flow here is very simple. We are simply using a regular expression of [가-힣] for Korean inputs and [a-zA-Z] for English inputs.
This means that if the user inputs `Oui oui, mon ami, je m’apelle Lafayette` (yeah I like Alexander Hamilton), the bot will count that as English.

However, if the user inputs `早安` or `こんにちわ`, then it will be detected as neither Korean nor English. In this case, the bot will drop the message and stop processing it.
If the message contains both Korean and English inputs, then it will also be dropped.

## Detecting Gibberishness
No idea if gibberishness is an actual word, but if it isn't, it should be. 

We detect gibberishness by matching the tokenized inputs with our dictionary. For English,
we are using Natural to tokenize the input. For Korean, we are using KoNLPy's Kkma class to tokenize the inputs into nouns to avoid handling all the possible changes to
Korean words (e.g. 가다 can be 가요, 갔어요, 갈 거예요, and many more forms). We are using the python-shell library to execute the Python script (KoNLPy) from Node.js.

If the input is detected as non-gibberish, then the message will not be processed any further by the bot.

## Translate
If the input is Korean, the input will be translated into English, vice versa. The way the translation works is that we maintain 2 dictionaries to translate each key input to the opposing language's.
So there is a map that translates the Roman characters `a -> ㅁ` and another map that translates the Hangul characters `ㅖ -> P`.

For Korean inputs, e.g. `안 좋아요`, it is broken down into `[['ㅇ','ㅏ','ㄴ'], ['ㅈ','ㅗ','ㅎ','ㅇ','ㅏ','ㅇ','ㅛ']]`, by using the hangul-js library.

## Detecting Translation's Gibberishness
After the input has been translated, we try to check whether the translated input is still gibberish or not. The reason we do this is to avoid actual gibberish from being translated.
For example, some people smash their keyboard and say `DSHBSDBHBDDAS`, which is gibberish, but not a misinput (yeah the name of this project is a bit misleading, but I'm attached to the name now).

If it's still gibberish after translation, then the message will nto be processed any further by the bot.

## Return Translation
The translated input is then returned by the bot in the form of a reply
