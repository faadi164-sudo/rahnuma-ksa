"""Build public/data/places.json for the postal code finder.

Source: Saudi National Address Open Dataset by Yasser Al-Samman (MIT licence),
https://github.com/yasseralsamman/saudi-national-address (data/dist/*.lite.json).
Usage: python3 scripts/build-places.py <folder with regions/cities/districts .lite.json>
"""
import json, sys, os
src = sys.argv[1]
load = lambda n: json.load(open(os.path.join(src, n), encoding='utf-8'))
regions = load('regions.lite.json'); cities = load('cities.lite.json'); districts = load('districts.lite.json')
city_by_id = {c['city_id']: c for c in cities}
regs = [[r['region_id'], r['name_en'], r['name_ar']] for r in regions]
places = []
for c in cities:
    places.append([c['name_en'].strip(), c['name_ar'].strip(), c['region_id'], 0])
for d in districts:
    places.append([d['name_en'].strip(), d['name_ar'].strip(), d['region_id'], d['city_id']])
out = {'regions': regs, 'places': places}
# city names are needed only to label districts
needed = {d['city_id'] for d in districts}
out['cities'] = {str(cid): [city_by_id[cid]['name_en'].strip(), city_by_id[cid]['name_ar'].strip()] for cid in needed if cid in city_by_id}
json.dump(out, open('public/data/places.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print(len(places), 'places;', len(out['cities']), 'cities with districts;', os.path.getsize('public/data/places.json'), 'bytes')
for r in regs: print(r)
