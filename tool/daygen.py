import json
from collections import OrderedDict

def if_warning(num):
    return num in (
        list(range(1, 11)) +
        [14, 20, 24]
    )

raws = """
一日	ついたち
二日	ふつか
三日	みっか
四日	よっか
五日	いつか
六日	むいか
七日	なのか
八日	ようか
九日	ここのか
十日	とおか
十一日	じゅういちにち
十二日	じゅうににち
十三日	じゅうさんにち
十四日	じゅうよっか
十五日	じゅうごにち
十六日	じゅうろくにち
十七日	じゅうしちにち
十八日	じゅうはちにち
十九日	じゅうくにち
二十日	はつか
二十一日	にじゅういちにち
二十二日	にじゅうににち
二十三日	にじゅうさんにち
二十四日	にじゅうよっか
二十五日	にじゅうごにち
二十六日	にじゅうろくにち
二十七日	にじゅうしちにち
二十八日	にじゅうはちにち
二十九日	にじゅうくにち
三十日	さんじゅう
三十一日	さんじゅういちにち
"""

day_read = OrderedDict()

for day_num, l in enumerate(raws.strip().splitlines(), 1):
    line = l.strip()
    _, read = line.split()

    day_read[str(day_num)] = OrderedDict((
        ('read', read),
        ('warning', if_warning(day_num)),
    ))

res = json.dumps(day_read, indent=2, ensure_ascii=False)
print(res)
