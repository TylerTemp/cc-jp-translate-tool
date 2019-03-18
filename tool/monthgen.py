import json
from collections import OrderedDict

def if_warning(num):
    return num in (4, 7, 9)

raws = """
一月　	いち がつ
二月　	に がつ
三月　	さん がつ
四月　	し がつ
五月　	ご がつ
六月　	ろく がつ
七月　	しち がつ
八月　	はち がつ
九月　	く がつ
十月　	じゅう がつ
十一月　	じゅういち がつ
十二月　	じゅうに がつ
"""

month_read = OrderedDict((
    ('yue', 'がつ'),
))

for month_num, l in enumerate(raws.strip().splitlines(), 1):
    line = l.strip()
    _, read, _ = line.split()

    month_read[str(month_num)] = OrderedDict((
        ('read', read),
        ('warning', if_warning(month_num)),
    ))

res = json.dumps(month_read, indent=2, ensure_ascii=False)
print(res)
