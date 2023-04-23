from os import listdir
import re

def count(num):
    strs = []
    for img in listdir("./static/img"):
        obj = re.search(f"MC{num}", img)
        if obj:
            strs.append(obj.string)
    return strs