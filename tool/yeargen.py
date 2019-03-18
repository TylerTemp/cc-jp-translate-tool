import json
from collections import OrderedDict

def if_warning(pos, num):
    return (pos, num) in (
        ('qian', '3'),
        ('bai', '3'),
        ('ge', '4'),
        ('bai', '6'),
        ('ge', '7'),
        ('ge', '7'),
        ('qian', '8'),
        ('bai', '8'),
        ('ge', '9'),
    )

raws = """    1	せん	ひゃく	じゅう	いち	ねん
    2	にせん	にひゃく	にじゅう	に	ねん
    3	さんぜん	さんびゃく	さんじゅう	さん	ねん
    4	よんせん	よんひゃく	よんじゅう	よん	ねん
    5	ごせん	ごひゃく	ごじゅう	ご	ねん
    6	ろくせん	ろっぴゃく	ろくじゅう	ろく	ねん
    7	ななせん	ななひゃく	ななじゅう	なな	ねん
    8	はっせん	はっぴゃく	はちじゅう	はち	ねん
    9	きゅうせん	きゅうひゃく	きゅうじゅう	きゅう	ねん"""

year_read = OrderedDict((
    ('nian', 'ねん'),
))

for l in raws.splitlines():
    line = l.strip()
    num, qian, bai, shi, ge, _read_year = line.split()

    for position, read in (
                ('qian', qian),
                ('bai', bai),
                ('shi', shi),
                ('ge', ge),
            ):
        info = year_read.setdefault(position, OrderedDict((
            ('0', OrderedDict((
                ('read', ''),
                ('warning', False),
            ))),
        )))
        info[num] = OrderedDict((
            ('read', read),
            ('warning', if_warning(position, num)),
        ))


res = json.dumps(year_read, indent=2, ensure_ascii=False)
print(res)
