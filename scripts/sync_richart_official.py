import json
import re

# Save official Richart URL
TAISHIN_OFFICIAL_URL = "https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html?gad_campaignid=22054035743"
CATHAY_OFFICIAL_URL = "https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list?Cub_ProjectCode=DBB4100001"

with open('src/data/merchants.ts', 'r', encoding='utf-8') as f:
    code = f.read()

print("Verifying and synchronizing Taishin Richart official merchants...")

existing_ids = set(re.findall(r"id:\s*'([^']+)'", code))
existing_names = set(re.findall(r"name:\s*'([^']+)'", code))

new_items = []

def add(m_id, name, cat, cat_label, tags, valid_until, cube_scheme, cube_name, cube_rate, cube_bday, cube_note, richart_scheme, richart_name, richart_rate, richart_chill, richart_note, tips=""):
    if m_id in existing_ids or name in existing_names:
        return
    existing_ids.add(m_id)
    existing_names.add(name)
    bday_line = "      isBirthdaySpecial: true,\n" if cube_bday else ""
    chill_line = "      isChillSpecial: true,\n" if richart_chill else ""
    tips_line = f"    tips: '{tips}',\n" if tips else ""
    
    ts = f"""  {{
    id: '{m_id}',
    name: '{name}',
    category: '{cat}',
    categoryLabel: '{cat_label}',
    tags: {json.dumps(tags, ensure_ascii=False)},
    validUntil: '{valid_until}',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
{chill_line}      note: '{richart_note}'
    }},
{tips_line}  }}"""
    new_items.append(ts)

# Richart Chill 刷特店 (10% & 5%)
add("ug-tea", "UG TEA (手搖飲)", "dining_delivery", "外送 & 餐飲", ["ug tea", "ugtea", "手搖飲", "茶飲", "chill"], "2026/09/30", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "chill", "Chill 刷 (日常續命 10%)", 10.0, True, "🔥 切換「Chill 刷」享 10% 台新 Point！", "喝 UG TEA 必刷【台新 Richart 卡】切換【Chill 刷】享 10% 狂飆回饋！")
add("ding-ge-tea", "叮哥茶飲 (台東手搖之光)", "dining_delivery", "外送 & 餐飲", ["叮哥茶飲", "叮哥", "台東手搖", "初鹿鮮奶茶", "chill"], "2026/09/30", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "chill", "Chill 刷 (日常續命 10%)", 10.0, True, "🔥 切換「Chill 刷」享 10% 台新 Point！", "喝叮哥茶飲必刷【台新 Richart 卡】切換【Chill 刷】享 10% 回饋！")
add("cafe-in-coffee", "CAFE!N (硬咖啡)", "dining_delivery", "外送 & 餐飲", ["cafe!n", "cafe in", "硬咖啡", "冠軍咖啡", "chill"], "2026/09/30", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "chill", "Chill 刷 (日常續命 10%)", 10.0, True, "🔥 切換「Chill 刷」享 10% 台新 Point！", "喝 CAFE!N 必刷【台新 Richart 卡】切換【Chill 刷】享 10% 回饋！")
add("arabica-coffee", "% Arabica (京都精品咖啡)", "dining_delivery", "外送 & 餐飲", ["% arabica", "arabica", "象山咖啡", "京都咖啡", "chill"], "2026/09/30", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "chill", "Chill 刷 (日常續命 10%)", 10.0, True, "🔥 切換「Chill 刷」享 10% 台新 Point！", "喝 % Arabica 必刷【台新 Richart 卡】切換【Chill 刷】享 10% 回饋！")
add("compose-coffee", "COMPOSE COFFEE (韓國國民咖啡)", "dining_delivery", "外送 & 餐飲", ["compose coffee", "compose", "韓國咖啡", "v代言咖啡", "chill"], "2026/09/30", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "chill", "Chill 刷 (日常續命 10%)", 10.0, True, "🔥 切換「Chill 刷」享 10% 台新 Point！", "喝 COMPOSE COFFEE 必刷【台新 Richart 卡】切換【Chill 刷】享 10% 回饋！")

add("nagomi-buffet", "NAGOMI 和食饗宴 (欣葉頂級日料百匯)", "dining_delivery", "外送 & 餐飲", ["nagomi", "欣葉日料", "中山區buffet", "頂級和食吃到飽", "chill"], "2026/09/30", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "chill", "Chill 刷 (約會犒賞 5%)", 5.0, True, "🔥 切換「Chill 刷」享 5.0% 台新 Point！", "吃 NAGOMI 必刷【台新 Richart 卡】切換【Chill 刷】享 5.0% 高回饋！")

# 追星應援平台
add("fanme-kpop", "FANME (追星周邊平台)", "game_stream", "遊戲 & 影音", ["fanme", "kpop", "韓星周邊", "應援", "chill"], "2026/09/30", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "chill", "Chill 刷 (應援追星 5%)", 5.0, True, "🔥 切換「Chill 刷」享 5.0% 台新 Point！")
add("nol-ticket", "NOL (NOL Ticket 韓國售票)", "game_stream", "遊戲 & 影音", ["nol", "nol ticket", "韓國門票", "演唱會", "chill"], "2026/09/30", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "chill", "Chill 刷 (應援追星 5%)", 5.0, True, "🔥 切換「Chill 刷」享 5.0% 台新 Point！")
add("elta-tv", "愛爾達電視 (ELTA TV / 體育賽事串流)", "game_stream", "遊戲 & 影音", ["愛爾達", "elta tv", "奧運轉播", "體育串流", "chill"], "2026/09/30", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "chill", "Chill 刷 (熬夜追更 5%)", 5.0, True, "🔥 切換「Chill 刷」享 5.0% 台新 Point！")

# 攝影與裝備 (Chill 刷 3.3%)
add("straight-a-apple", "Straight A (校園 Apple 授權店)", "department_fashion", "百貨 & 服飾", ["straight a", "studio a", "校園教育價", "apple經銷"], "2026/09/30", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "chill", "Chill 刷 (數位外掛 3.3%)", 3.3, True, "切換「Chill 刷」享 3.3% 台新 Point")
add("insta360-camera", "Insta360 (全景相機官網/門市)", "ecommerce", "線上網購", ["insta360", "全景相機", "運動相機", "x4", "ace pro"], "2026/09/30", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "chill", "Chill 刷 (數位外掛 3.3%)", 3.3, True, "切換「Chill 刷」享 3.3% 台新 Point")
add("gopro-camera", "GoPro (運動相機官網/專賣)", "ecommerce", "線上網購", ["gopro", "hero12", "hero13", "運動相機", "極限攝影"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "chill", "Chill 刷 (數位外掛 3.3%)", 3.3, True, "切換「Chill 刷」享 3.3% 台新 Point")

# 健身與運動品牌
add("onitsuka-tiger-shoes", "Onitsuka Tiger (鬼塚虎日本復古慢跑鞋)", "department_fashion", "百貨 & 服飾", ["鬼塚虎", "onitsuka tiger", "mexico 66", "日本潮鞋", "chill"], "2026/09/30", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "chill", "Chill 刷 (運動品牌 5%)", 5.0, True, "🔥 切換「Chill 刷」享 5.0% 台新 Point！")
add("salomon-running", "Salomon (薩洛蒙戶外越野鞋)", "department_fashion", "百貨 & 服飾", ["salomon", "薩洛蒙", "xt-6", "越野跑鞋", "山系穿搭", "chill"], "2026/09/30", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "chill", "Chill 刷 (運動品牌 5%)", 5.0, True, "🔥 切換「Chill 刷」享 5.0% 台新 Point！")

# 交通與生活日常
add("taiwan-bolt", "台灣 Bolt (叫車平台)", "travel_traffic", "交通 & 叫車", ["bolt", "台灣bolt", "bolt叫車", "計程車"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "everyday", "天天刷", 3.3, False, "切換「天天刷」享 3.3% 台新 Point")
add("smart-daily-life", "智生活 (社區管理與智慧繳費)", "grocery_convenience", "超市 & 藥妝", ["智生活", "社區繳費", "管理費", "包裹通知"], "2026/12/31", "general", "一般消費", 0.3, False, "一般消費 0.3%", "everyday", "天天刷", 3.3, False, "切換「天天刷」享 3.3% 台新 Point")
add("dudufang-parking", "嘟嘟房停車場 (中興電工)", "travel_traffic", "交通 & 叫車", ["嘟嘟房", "嘟嘟房停車", "停車費", "市區停車"], "2026/12/31", "selected", "集精選", 3.0, False, "切換「集精選」享 3.0% 小樹點", "everyday", "天天刷", 3.3, False, "切換「天天刷」享 3.3% 台新 Point")

# 購票與售票系統
add("tixcraft-ticket", "拓元售票系統 (tixCraft)", "dining_delivery", "外送 & 餐飲", ["拓元", "拓元售票", "演唱會搶票", "tixcraft", "大巨蛋門票"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "dining", "好饗刷", 3.3, False, "切換「好饗刷」享 3.3% 台新 Point")
add("kktix-ticket", "KKTIX 售票平台", "dining_delivery", "外送 & 餐飲", ["kktix", "kktix售票", "售票系統", "見面會門票"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "dining", "好饗刷", 3.3, False, "切換「好饗刷」享 3.3% 台新 Point")
add("era-ticket", "年代售票系統 (ERA Ticket)", "dining_delivery", "外送 & 餐飲", ["年代售票", "era ticket", "藝文展演", "音樂會門票"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "dining", "好饗刷", 3.3, False, "切換「好饗刷」享 3.3% 台新 Point")
add("kham-ticket", "寬宏售票系統 (KHAM)", "dining_delivery", "外送 & 餐飲", ["寬宏售票", "kham", "音樂劇", "演唱會門票"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "dining", "好饗刷", 3.3, False, "切換「好饗刷」享 3.3% 台新 Point")
add("opentix-arts", "OPENTIX 兩廳院文化生活", "dining_delivery", "外送 & 餐飲", ["opentix", "兩廳院", "國家戲劇院", "國家音樂廳", "舞台劇門票"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "dining", "好饗刷", 3.3, False, "切換「好饗刷」享 3.3% 台新 Point")

# 指定高級 KTV
add("oncor-ktv", "ONCOR 頂級會所 KTV (信義區奢華 KTV)", "dining_delivery", "外送 & 餐飲", ["oncor", "oncor ktv", "信義區ktv", "頂級包廂", "奢華聚會"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "dining", "好饗刷", 3.3, False, "切換「好饗刷」享 3.3% 台新 Point")
add("sing-go-ktv", "Sing!Go 聚唱 KTV (信義 ATT / 忠孝概念館)", "dining_delivery", "外送 & 餐飲", ["sing go", "singgo", "sing!go", "att ktv", "忠孝ktv"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "dining", "好饗刷", 3.3, False, "切換「好饗刷」享 3.3% 台新 Point")

# 線上課程
add("sat-knowledge-course", "知識衛星 (SAT. Knowledge 線上課程)", "ecommerce", "線上網購", ["知識衛星", "sat knowledge", "線上課程", "進修學習"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, False, "切換「數趣刷」享 3.3% 台新 Point")
add("amazing-talker-course", "AmazingTalker (線上家教一對一)", "ecommerce", "線上網購", ["amazingtalker", "線上英文", "外語家教", "語言學習"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, False, "切換「數趣刷」享 3.3% 台新 Point")
add("tutor-abc-course", "TutorABC (線上英語真人互動)", "ecommerce", "線上網購", ["tutorabc", "tutor abc", "線上英文", "真人外教"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, False, "切換「數趣刷」享 3.3% 台新 Point")
add("hahow-course", "Hahow 好學校 (線上跨領域學習)", "ecommerce", "線上網購", ["hahow", "好學校", "線上課程", "設計插畫", "程式學習"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, False, "切換「數趣刷」享 3.3% 台新 Point")
add("pressplay-academy", "PressPlay Academy (PPA 知識訂閱課程)", "ecommerce", "線上網購", ["pressplay", "ppa", "知識訂閱", "線上課程", "投資理財課"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, False, "切換「數趣刷」享 3.3% 台新 Point")

# 跨境網購
add("shein-online", "SHEIN (全球時尚流行服飾)", "ecommerce", "線上網購", ["shein", "希音", "快時尚", "海外網購"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, False, "切換「數趣刷」享 3.3% 台新 Point")
add("farfetch-luxury", "Farfetch (全球精品買手店平台)", "ecommerce", "線上網購", ["farfetch", "精品網購", "歐洲精品", "奢侈品海淘"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, False, "切換「數趣刷」享 3.3% 台新 Point")
add("olive-young-global", "Olive Young (韓國藥妝直郵官網)", "ecommerce", "線上網購", ["olive young", "oliveyoung", "韓國藥妝", "韓系美妝直郵"], "2026/12/31", "digital", "玩數位", 3.3, False, "切換「玩數位」享 3.3% 小樹點", "digital_fun", "數趣刷", 3.3, False, "切換「數趣刷」享 3.3% 台新 Point")

# 網卡與交通
add("airsim-roam", "AIRSIM (無國界上網卡)", "travel_traffic", "海外 & 訂房", ["airsim", "airsim roam", "出國網卡", "esim", "出國上網"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, False, "切換「玩旅刷」享 3.3% 台新 Point")
add("wowpass-korea", "WOWPASS (韓國預付交通卡)", "travel_traffic", "海外 & 訂房", ["wowpass", "韓國交通卡", "韓國刷卡", "t-money"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, False, "切換「玩旅刷」享 3.3% 台新 Point")

# 頂級專業旅行社
add("galilee-tours", "加利利旅行社 (Galilee Tours 歐洲頂級蜜月)", "travel_traffic", "海外 & 訂房", ["加利利", "加利利旅行社", "歐洲蜜月", "頂級團", "奧捷團"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, False, "切換「玩旅刷」享 3.3% 台新 Point")
add("see-mark-travel", "喜鴻假期 (喜鴻旅行社)", "travel_traffic", "海外 & 訂房", ["喜鴻假期", "喜鴻旅行社", "日本跟團", "海島渡假"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, False, "切換「玩旅刷」享 3.3% 台新 Point")
add("sunday-tour", "行健旅遊 (行健旅行社 中東歐美專業)", "travel_traffic", "海外 & 訂房", ["行健旅遊", "行健旅行社", "長程線專家", "歐洲旅遊", "土耳其旅遊"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, False, "切換「玩旅刷」享 3.3% 台新 Point")

# 家居品牌
add("nitori-furniture", "宜得利家居 (NITORI 日本家具)", "department_fashion", "百貨 & 服飾", ["宜得利", "nitori", "日本家具", "日系家飾", "涼感被"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, False, "切換「大筆刷」享 3.3% 台新 Point")
add("marais-home", "瑪黑家居選物 (Marais Living)", "department_fashion", "百貨 & 服飾", ["瑪黑家居", "marais", "歐洲選物", "設計家飾", "生活美學"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, False, "切換「大筆刷」享 3.3% 台新 Point")

print(f"Generated {len(new_items)} new Richart official items to add!")

marker = "\n];\n"
if marker in code:
    updated_code = code.replace(marker, ",\n" + ",\n".join(new_items) + marker)
    with open('src/data/merchants.ts', 'w', encoding='utf-8') as f:
        f.write(updated_code)
    print("Successfully synchronized all official Taishin Richart merchants!")
