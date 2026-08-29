import json
import re

with open('/tmp/official_cube_merchants.json', 'r', encoding='utf-8') as f:
    official = json.load(f)

with open('src/data/merchants.ts', 'r', encoding='utf-8') as f:
    code = f.read()

marker = "  id: 'official-bday-bday-0'"
if marker in code:
    code = code.split(marker)[0]
    last_idx = code.rfind('  },')
    if last_idx != -1:
        code = code[:last_idx+4] + '\n];\n'

CATHAY_OFFICIAL_URL = 'https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list?Cub_ProjectCode=DBB4100001'
TAISHIN_OFFICIAL_URL = 'https://richart.tw/TSDIB_RAW_URL/C1/TS02/TS0201/TS020101?source=richart'

existing_ids = set(re.findall(r"id:\s*'([^']+)'", code))
existing_names = set(re.findall(r"name:\s*'([^']+)'", code))

new_merchants = []

def add_merchant(m_id, name, cat, cat_label, tags, valid_until, cube_scheme, cube_name, cube_rate, cube_bday, cube_note, richart_scheme, richart_name, richart_rate, richart_note, tips=""):
    if m_id in existing_ids or name in existing_names:
        return
    existing_ids.add(m_id)
    existing_names.add(name)
    
    bday_line = "      isBirthdaySpecial: true,\n" if cube_bday else ""
    tips_line = f"    tips: '{tips}',\n" if tips else ""
    
    ts_entry = f"""  {{
    id: '{m_id}',
    name: '{name}',
    category: '{cat}',
    categoryLabel: '{cat_label}',
    tags: {json.dumps(tags, ensure_ascii=False)},
    validUntil: '{valid_until}',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {{
      scheme: '{cube_scheme}',
      schemeName: '{cube_name}',
      rate: {cube_rate},
{bday_line}      note: '{cube_note}'
    }},
    richart: {{
      scheme: '{richart_scheme}',
      schemeName: '{richart_name}',
      rate: {richart_rate},
      note: '{richart_note}'
    }},
{tips_line}  }}"""
    new_merchants.append(ts_entry)

# 1. 慶生月
for m in official.get('慶生月', []):
    if 'UNCLE RAY' in m:
        add_merchant("uncle-ray-daan", "UNCLE RAY 串燒·牛飲·咖喱 (台北大安店)", "dining_delivery", "外送 & 餐飲", ["uncle ray", "uncleray", "大安串燒", "大安居酒屋", "咖哩", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%", "8 月生日當月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。")
        add_merchant("uncle-ray-taichung", "UNCLE RAY 串燒·牛飲·咖喱 (台中店)", "dining_delivery", "外送 & 餐飲", ["uncle ray", "uncleray", "台中串燒", "台中居酒屋", "咖哩", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%", "8 月生日當月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。")
    elif '竣師父牛肉麵' in m:
        add_merchant("junsifu-beef-noodle-daan", "竣師父牛肉麵 (大安店)", "dining_delivery", "外送 & 餐飲", ["竣師父", "竣師父牛肉麵", "牛肉麵", "大安牛肉麵", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%", "8 月生日當月刷 CUBE【慶生月】享 10% 小樹點！")
        add_merchant("junsifu-beef-noodle-dunhua", "竣師父牛肉麵 (敦化店)", "dining_delivery", "外送 & 餐飲", ["竣師父", "竣師父牛肉麵", "牛肉麵", "敦化牛肉麵", "東區牛肉麵", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%", "8 月生日當月刷 CUBE【慶生月】享 10% 小樹點！")
    elif '陳阿姨火鍋灶咖' in m:
        add_merchant("chen-ayi-hotpot-hsinchu-bday", "陳阿姨火鍋灶咖 (新竹總店)", "dining_delivery", "外送 & 餐飲", ["陳阿姨", "陳阿姨火鍋", "陳阿姨火鍋灶咖", "新竹火鍋", "大叔富弟", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%", "吃陳阿姨火鍋灶咖：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。")
        add_merchant("chen-ayi-hotpot-zhubei-bday", "陳阿姨火鍋灶咖 (竹北店)", "dining_delivery", "外送 & 餐飲", ["陳阿姨", "陳阿姨火鍋", "陳阿姨火鍋灶咖", "竹北火鍋", "大叔富弟", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%", "吃陳阿姨火鍋灶咖：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。")
    elif '法國的秘密甜點' in m:
        add_merchant("secret-cake-daan", "法國的秘密甜點 (大安門市)", "dining_delivery", "外送 & 餐飲", ["法國的秘密甜點", "諾曼地牛奶蛋糕", "大安甜點", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%")
        add_merchant("secret-cake-online", "法國的秘密甜點 (線上官網)", "ecommerce", "線上網購", ["法國的秘密甜點", "諾曼地牛奶蛋糕", "線上訂購", "慶生"], "2026/09/30", "digital", "玩數位 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！", "digital_fun", "數趣刷", 3.3, "切換「數趣刷」享 3.3%")
    elif 'creammm.t' in m:
        add_merchant("creammm-t-store", "creammm.t (台中美村門市)", "dining_delivery", "外送 & 餐飲", ["creammm.t", "creammmt", "檸檬塔", "台中甜點", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%")
        add_merchant("creammm-t-online", "creammm.t (線上官網)", "ecommerce", "線上網購", ["creammm.t", "creammmt", "檸檬塔", "線上訂購", "慶生"], "2026/09/30", "digital", "玩數位 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！", "digital_fun", "數趣刷", 3.3, "切換「數趣刷」享 3.3%")
    elif '髙 GAO Taipei' in m:
        add_merchant("gao-taipei-store", "髙 GAO Taipei (實體門市)", "dining_delivery", "外送 & 餐飲", ["gao taipei", "gao", "高taipei", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%")
        add_merchant("gao-taipei-online", "髙 GAO Taipei (線上官網)", "ecommerce", "線上網購", ["gao taipei", "gao", "高taipei", "線上購物", "慶生"], "2026/09/30", "digital", "玩數位 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！", "digital_fun", "數趣刷", 3.3, "切換「數趣刷」享 3.3%")
    elif 'KTV' in m:
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', m).strip('-').lower()
        add_merchant(f"official-ktv-{slug}", m, "dining_delivery", "外送 & 餐飲", [m, "ktv", "唱歌", "聚會", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "chill", "Chill 刷 (KTV 狂歡 10%)", 10.0, "🔥 切換「Chill 刷」享 10% 台新 Point！", f"唱 {m} 生日當月刷 CUBE【慶生月】享 10% 小樹點！或刷台新【Chill 刷】享 10% 台新 Point！")
    elif '巴哈姆特動畫瘋' in m:
        add_merchant("gamer-acg-animax", "巴哈姆特動畫瘋", "game_stream", "遊戲 & 影音", ["巴哈姆特", "動畫瘋", "巴哈", "動漫", "慶生"], "2026/09/30", "digital", "玩數位 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「玩數位」享 3.3%", "digital_fun", "數趣刷", 3.3, "切換「數趣刷」享 3.3%")
    elif 'FunNow' in m:
        add_merchant("funnow-app", "FunNow (即時預訂平台)", "travel_traffic", "海外 & 訂房", ["funnow", "即時預訂", "休息", "按摩", "慶生"], "2026/09/30", "travel", "趣旅行 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「趣旅行」享 3.3%", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
    elif '新光三越' in m or 'PlayStation' in m or 'Nintendo' in m or '東京迪士尼' in m or '環球影城' in m or '二本松' in m or '橋山' in m or '春囍' in m or '做茶菜' in m or '嵩' in m or 'JAI' in m or '火火燒肉' in m or '毛房' in m or '毛丼' in m or 'UNCLE SHAWN' in m:
        continue
    else:
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', m).strip('-').lower()
        if not slug:
            slug = f"bday-{len(new_merchants)}"
        add_merchant(f"official-bday-{slug}", m, "dining_delivery", "外送 & 餐飲", [m, "慶生特店", "精選美饌", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%", f"【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。")

# 2. 玩數位
for m in official.get('玩數位', []):
    slug = re.sub(r'[^a-zA-Z0-9]+', '-', m).strip('-').lower()
    clean_name = m.replace('(不含儲值及電子票券)', '').replace('(不含電子票券)', '').strip()
    if any(k in m for k in ['ChatGPT', 'Claude', 'Cursor', 'Gemini', 'Notion', 'Perplexity', 'Gamma', 'Canva', 'Duolingo', 'Speak']):
        add_merchant(f"official-ai-{slug}", clean_name, "game_stream", "遊戲 & 影音", [clean_name, "AI訂閱", "生產力工具", "玩數位"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, "切換「數趣刷」享 3.3%")
    elif any(k in m for k in ['Apple 媒體服務', 'Google Play', 'Max', 'Disney+', 'Netflix', 'Spotify', 'YouTube']):
        add_merchant(f"official-stream-{slug}", clean_name, "game_stream", "遊戲 & 影音", [clean_name, "串流影音", "數位訂閱", "玩數位"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, "切換「數趣刷」享 3.3%")
    elif any(k in m for k in ['蝦皮', 'momo', 'PChome', '小樹購', '酷澎', '淘寶']):
        if '淘寶' in m:
            add_merchant("official-taobao", "淘寶 (Taobao / 天貓)", "ecommerce", "線上網購", ["淘寶", "天貓", "taobao", "海外電商", "跨境網購"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, "切換「數趣刷」享 3.3%")
        elif '酷澎' in m:
            add_merchant("official-coupang-tw", "Coupang 酷澎 (台灣)", "ecommerce", "線上網購", ["coupang", "酷澎", "火箭跨境", "火箭速配"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, "切換「數趣刷」享 3.3%")
        elif '小樹購' in m:
            add_merchant("official-tree-buy", "小樹購 (國泰小樹點商城)", "ecommerce", "線上網購", ["小樹購", "國泰小樹購", "樹點商城"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "general", "一般消費", 1.0, "一般消費享 1.0%")
        else:
            add_merchant(f"official-ec-{slug}", clean_name, "ecommerce", "線上網購", [clean_name, "線上網購", "電商平台"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, "切換「數趣刷」享 3.3%")

# 3. 樂饗購
for m in official.get('樂饗購', []):
    if 'LaLaport' in m:
        add_merchant("lalaport-nangang", "Mitsui Shopping Park LaLaport (南港)", "department_fashion", "百貨 & 服飾", ["lalaport", "南港lalaport", "三井lalaport", "百貨購物"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
        add_merchant("lalaport-taichung", "Mitsui Shopping Park LaLaport (台中)", "department_fashion", "百貨 & 服飾", ["lalaport", "台中lalaport", "三井lalaport", "百貨購物"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
    elif 'MITSUI OUTLET PARK' in m:
        add_merchant("mitsui-outlet-linkou", "MITSUI OUTLET PARK (林口)", "department_fashion", "百貨 & 服飾", ["三井outlet", "林口outlet", "mitsui", "outlet"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
        add_merchant("mitsui-outlet-taichung", "MITSUI OUTLET PARK (台中港)", "department_fashion", "百貨 & 服飾", ["三井outlet", "台中港outlet", "mitsui", "outlet"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
        add_merchant("mitsui-outlet-tainan", "MITSUI OUTLET PARK (台南)", "department_fashion", "百貨 & 服飾", ["三井outlet", "台南outlet", "mitsui", "outlet"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
    elif any(d in m for d in ['百貨', '廣場', '購物中心', '京站', '美麗華', '誠品', 'ATT', 'NOKE', 'CITYLINK', '秀泰', '環球', '華泰', 'SKM']):
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', m).strip('-').lower()
        clean_name = m.replace('(不含DREAM PLAZA)', '').strip()
        add_merchant(f"official-dept-{slug}", clean_name, "department_fashion", "百貨 & 服飾", [clean_name, "百貨", "購物中心", "樂饗購"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
    elif '國內餐飲' in m:
        add_merchant("official-domestic-dining", "全台國內餐飲 (實體餐廳與獨立名店)", "dining_delivery", "外送 & 餐飲", ["全台餐飲", "國內餐飲", "餐廳", "小吃", "美食"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點（排除餐券）", "dining", "好饗刷", 3.3, "切換「好饗刷」享 3.3%")

# 4. 趣旅行
for m in official.get('趣旅行', []):
    if 'Apple錢包指定交通卡' in m:
        add_merchant("apple-wallet-suica", "Apple 錢包 (Suica 日本西瓜卡加值)", "travel_traffic", "海外 & 訂房", ["suica", "西瓜卡", "apple pay suica", "日本交通", "日本旅遊"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
        add_merchant("apple-wallet-pasmo", "Apple 錢包 (PASMO 日本交通卡加值)", "travel_traffic", "海外 & 訂房", ["pasmo", "pasmo卡", "apple pay pasmo", "日本交通", "日本旅遊"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
        add_merchant("apple-wallet-icoca", "Apple 錢包 (ICOCA 關西交通卡加值)", "travel_traffic", "海外 & 訂房", ["icoca", "icoca卡", "apple pay icoca", "關西交通", "日本旅遊"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
    elif '航空' in m:
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', m).strip('-').lower()
        add_merchant(f"official-airline-{slug}", m, "travel_traffic", "海外 & 訂房", [m, "機票", "航空", "海外旅遊"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
    elif '旅遊' in m or '旅行社' in m or '假期' in m:
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', m).strip('-').lower()
        add_merchant(f"official-travel-agency-{slug}", m, "travel_traffic", "海外 & 訂房", [m, "旅行社", "跟團", "機加酒"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
    elif '車' in m or 'yoxi' in m or 'Grab' in m or 'iRent' in m:
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', m).strip('-').lower()
        add_merchant(f"official-transport-{slug}", m, "travel_traffic", "交通 & 叫車", [m, "叫車", "租車", "出行交通"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
    elif '飯店' in m or '星野' in m or '東橫' in m:
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', m).strip('-').lower()
        add_merchant(f"official-hotel-{slug}", m, "travel_traffic", "海外 & 訂房", [m, "飯店住宿", "訂房", "國外飯店"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
    elif '影城' in m:
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', m).strip('-').lower()
        add_merchant(f"official-park-{slug}", m, "travel_traffic", "海外 & 訂房", [m, "哈利波特", "日本影城", "東京旅遊"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")

# 5. 集精選 / 台塑家 / 全支付
for m in official.get('集精選', []) + official.get('台塑家', []) + official.get('全支付', []):
    slug = re.sub(r'[^a-zA-Z0-9]+', '-', m).strip('-').lower()
    clean_name = m.replace(' 實體門市', '').replace('(限本島)', '').replace('(不含加油、充電)', '').replace('(不含月租停車)', '').strip()
    if any(k in m for k in ['POWER', 'EVOASIS', 'EVALUE', 'TAIL', 'iCharging']):
        add_merchant(f"official-ev-{slug}", clean_name, "travel_traffic", "交通 & 叫車", [clean_name, "電動車充電", "充電樁", "EV充電"], "2026/12/31", "selected", "集精選", 3.0, False, "切換「集精選」享 3.0% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
    elif '車麻吉' in m or 'uTagGo' in m:
        add_merchant(f"official-parking-{slug}", clean_name, "travel_traffic", "交通 & 叫車", [clean_name, "路邊停車", "自動繳費", "停車場"], "2026/12/31", "selected", "集精選", 3.0, False, "切換「集精選」享 3.0% 小樹點", "general", "一般消費", 1.0, "一般消費享 1.0%")
    elif '台塑' in m or '長庚' in m:
        add_merchant(f"official-formosa-{slug}", clean_name, "grocery_convenience", "超市 & 藥妝", [clean_name, "台塑生醫", "長庚生技", "台塑家"], "2026/12/31", "formosa", "台塑家", 3.3, False, "切換「台塑家」享 3.3% 小樹點", "general", "一般消費", 1.0, "一般消費享 1.0%")
    elif '大全聯' in m or '全支付' in m:
        add_merchant(f"official-px-{slug}", clean_name, "grocery_convenience", "超市 & 藥妝", [clean_name, "全支付", "大全聯", "行動支付"], "2026/12/31", "pxpay", "全支付", 3.0, False, "切換「全支付」享 3.0% 小樹點", "general", "一般消費", 1.0, "一般消費享 1.0%")

print(f"Total new valid official TS entries: {len(new_merchants)}")

marker = "\n];\n"
if marker in code:
    updated_code = code.replace(marker, ",\n" + ",\n".join(new_merchants) + marker)
    with open('src/data/merchants.ts', 'w', encoding='utf-8') as f:
        f.write(updated_code)
    print("Successfully updated src/data/merchants.ts with 100% typed official merchants!")
