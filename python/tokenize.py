from konlpy.tag import Hannanum
import sys
import json

if __name__ == "__main__":
    input_text = sys.argv[1]
    hannanum = Hannanum()
    tokens = hannanum.nouns(input_text)
    print(json.dumps(tokens))
