from konlpy.tag import Kkma
import sys
import json

if __name__ == "__main__":
    input_text = sys.argv[1]
    kkma = Kkma()
    tokens = kkma.nouns(input_text)
    print(json.dumps(tokens))
