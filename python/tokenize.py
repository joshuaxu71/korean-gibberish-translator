from konlpy.tag import Okt
import sys
import json

def tokenize(text):
    okt = Okt()
    tokens = okt.morphs(text)
    return tokens

if __name__ == "__main__":
    input_text = sys.argv[1]
    tokens = tokenize(input_text)
    print(json.dumps(tokens))