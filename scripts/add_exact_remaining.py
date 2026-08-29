import json
import re

with open('src/data/merchants.ts', 'r', encoding='utf-8') as f:
    code = f.read()

CATHAY_OFFICIAL_URL = 'https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list?Cub_ProjectCode=DBB4100001'
TAISHIN_OFFICIAL_URL = 'https://richart.tw/TSDIB_RAW_URL/C1/TS02/TS0201/TS020101?source=richart'

existing_ids = set(re.findall(r"id:\s*'([^']+)'", code))
existing_names = set(re.findall(r"name:\s*'([^']+)'", code))

new_items = []

def add(m_id, name, cat, cat_label, tags, valid_until, cube_scheme, cube_name, cube_rate, cube_bday, cube_note, richart_scheme, richart_name, richart_rate, richart_note, tips=""):
    if m_id in existing_ids or name in existing_names:
        return
    existing_ids.add(m_id)
    existing_names.add(name)
    bday_line = "      isBirthdaySpecial: true,\n" if cube_bday else ""
    tips_line = f"    tips: '{tips}',\n" if tips else ""
    
    ts = f"""  {{
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
    new_items.append(ts)

# KTV 慶生特店
add("holiday-ktv", "好樂迪 KTV", "dining_delivery", "外送 & 餐飲", ["好樂迪", "好樂迪ktv", "唱歌", "包廂", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "chill", "Chill 刷 (KTV 狂歡 10%)", 10.0, "🔥 切換「Chill 刷」享 10% 台新 Point！", "生日唱好樂迪刷 CUBE【慶生月】或 Richart【Chill 刷】皆享 10% 高回饋！")
add("newcbparty-ktv", "星聚點 KTV", "dining_delivery", "外送 & 餐飲", ["星聚點", "星聚點ktv", "唱歌", "熱炒", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "chill", "Chill 刷 (KTV 狂歡 10%)", 10.0, "🔥 切換「Chill 刷」享 10% 台新 Point！")
add("enjoy-ktv", "享溫馨 KTV", "dining_delivery", "外送 & 餐飲", ["享溫馨", "享溫馨ktv", "南部ktv", "唱歌", "慶生"], "2026/09/30", "dining", "樂饗購 (🎂官方慶生特店 10%)", 3.3, True, "🎂 8月生日月切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%", "chill", "Chill 刷 (KTV 狂歡 10%)", 10.0, "🔥 切換「Chill 刷」享 10% 台新 Point！")

# 航空公司
add("jetstar-air", "捷星航空 (Jetstar Airways)", "travel_traffic", "海外 & 訂房", ["捷星", "捷星航空", "jetstar", "廉航", "機票"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("ana-all-nippon", "ANA 全日空 (All Nippon Airways)", "travel_traffic", "海外 & 訂房", ["ana", "全日空", "日本機票", "東京機票"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("airasia-air", "亞洲航空 (AirAsia)", "travel_traffic", "海外 & 訂房", ["airasia", "亞洲航空", "亞航", "東南亞廉航"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("united-airlines", "聯合航空 (United Airlines)", "travel_traffic", "海外 & 訂房", ["聯合航空", "united airlines", "美加機票", "舊金山直飛"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("vietjet-air", "越捷航空 (VietJet Air)", "travel_traffic", "海外 & 訂房", ["越捷航空", "vietjet", "越南機票", "廉航"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("korean-air", "大韓航空 (Korean Air)", "travel_traffic", "海外 & 訂房", ["大韓航空", "korean air", "首爾機票", "韓國旅遊"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("delta-air-lines", "達美航空 (Delta Air Lines)", "travel_traffic", "海外 & 訂房", ["達美航空", "delta", "美加機票", "西雅圖直飛"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("turkish-airlines", "土耳其航空 (Turkish Airlines)", "travel_traffic", "海外 & 訂房", ["土耳其航空", "turkish airlines", "伊斯坦堡", "歐洲轉機"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("qatar-airways", "卡達航空 (Qatar Airways)", "travel_traffic", "海外 & 訂房", ["卡達航空", "qatar airways", "杜哈", "五星級航空"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("air-france", "法國航空 (Air France)", "travel_traffic", "海外 & 訂房", ["法國航空", "air france", "巴黎機票", "歐洲機票"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")

# 租車與出行
add("easy-rent-car", "和運租車", "travel_traffic", "交通 & 叫車", ["和運租車", "和運", "租車自駕", "irent"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("carplus-rent", "格上租車", "travel_traffic", "交通 & 叫車", ["格上租車", "格上", "租車自駕", "格上go smart"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")

# 旅行社
add("lifetour-tw", "五福旅遊", "travel_traffic", "海外 & 訂房", ["五福旅遊", "五福旅行社", "日本跟團", "旅遊行程"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("startravel-tw", "燦星旅遊", "travel_traffic", "海外 & 訂房", ["燦星旅遊", "燦星", "四國包機", "普吉島包機"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("richmond-travel", "山富旅遊", "travel_traffic", "海外 & 訂房", ["山富旅遊", "山富旅行社", "日本包機", "郵輪假期"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("everfun-travel", "長汎假期 (長榮航空直營旅行社)", "travel_traffic", "海外 & 訂房", ["長汎假期", "長汎旅行社", "長榮旅行社", "長榮假期"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("phoenix-tour", "鳳凰旅行社", "travel_traffic", "海外 & 訂房", ["鳳凰旅行社", "鳳凰旅遊", "上市旅行社", "歐洲跟團"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("ezfly-tw", "Ezfly 易飛網", "travel_traffic", "海外 & 訂房", ["ezfly", "易飛網", "機票比價", "自由行"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("perfect-travel", "理想旅遊", "travel_traffic", "海外 & 訂房", ["理想旅遊", "理想旅行社", "高端旅遊", "歐洲頂級團"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("win-win-travel", "永利旅行社", "travel_traffic", "海外 & 訂房", ["永利旅行社", "永利旅遊", "海外旅遊"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("sanka-travel", "三賀旅行社", "travel_traffic", "海外 & 訂房", ["三賀旅行社", "三賀旅遊", "海外旅遊"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("eztravel-tw", "ezTravel 易遊網", "travel_traffic", "海外 & 訂房", ["eztravel", "易遊網", "環島之星", "火車票", "訂房"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")

# 飯店集團
add("hoshino-resorts", "星野集團 (Hoshino Resorts)", "travel_traffic", "海外 & 訂房", ["星野集團", "星野渡假村", "虹夕諾雅", "界", "omo", "risonare"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")
add("disney-hotels-global", "全球迪士尼飯店 (Disney Hotels)", "travel_traffic", "海外 & 訂房", ["迪士尼飯店", "東京迪士尼飯店", "全球迪士尼飯店", "迪士尼樂園酒店"], "2026/12/31", "travel", "趣旅行", 3.3, False, "切換「趣旅行」享 3.3% 小樹點", "travel", "玩旅刷", 3.3, "切換「玩旅刷」享 3.3%")

# 百貨
add("fareastern-garden-city", "遠東 Garden City (大巨蛋商場)", "department_fashion", "百貨 & 服飾", ["garden city", "遠東gardencity", "大巨蛋商場", "潮美食公園"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("uni-president-taipei", "統一時代百貨台北店", "department_fashion", "百貨 & 服飾", ["統一時代", "時代百貨", "市政府站時代百貨", "統一時代台北店"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點（不含DREAM PLAZA）", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("dayeh-takashimaya", "大葉高島屋 (天母高島屋)", "department_fashion", "百貨 & 服飾", ["大葉高島屋", "天母高島屋", "高島屋", "天母百貨"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("honhui-plaza", "宏匯廣場 (新莊宏匯)", "department_fashion", "百貨 & 服飾", ["宏匯廣場", "新莊宏匯", "副都心宏匯", "宏匯"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("taimall-shopping", "台茂購物中心 (桃園台茂)", "department_fashion", "百貨 & 服飾", ["台茂", "台茂購物中心", "桃園台茂", "南崁台茂"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("metrowalk-shopping", "大江國際購物中心 (中壢大江)", "department_fashion", "百貨 & 服飾", ["大江購物中心", "大江國際", "中壢大江", "大江"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("kuang-san-sogo", "廣三 SOGO 百貨 (台中)", "department_fashion", "百貨 & 服飾", ["廣三sogo", "台中sogo", "廣三百貨", "台灣大道sogo"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("nice-plaza-chiayi", "耐斯廣場 (嘉義耐斯)", "department_fashion", "百貨 & 服飾", ["耐斯廣場", "嘉義耐斯", "耐斯松屋", "嘉義百貨"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("luna-plaza-yilan", "蘭城新月廣場 (宜蘭新月)", "department_fashion", "百貨 & 服飾", ["新月廣場", "宜蘭新月", "蘭城新月", "宜蘭百貨"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("showtime-live", "秀泰生活 (各分館商場)", "department_fashion", "百貨 & 服飾", ["秀泰生活", "秀泰生活館", "樹林秀泰", "台中秀泰", "嘉義秀泰"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("global-mall-tw", "環球購物中心 (Global Mall 全台分館)", "department_fashion", "百貨 & 服飾", ["環球購物中心", "global mall", "中和環球", "板橋環球", "南港環球", "桃園A8", "新左營環球", "屏東環球"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("pacific-department", "太平洋百貨 (豐原/屏東)", "department_fashion", "百貨 & 服飾", ["太平洋百貨", "豐原太平洋", "屏東太平洋", "太百"], "2026/12/31", "dining", "樂饗購", 3.3, False, "切換「樂饗購」享 3.3% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")

# 集精選 / 台塑家 / 家居
add("lopia-supermarket-tw", "LOPIA 台灣 (日系連鎖超市)", "grocery_convenience", "超市 & 藥妝", ["lopia", "樂比亞", "日系超市", "台中lopia", "中和lopia", "桃園lopia"], "2026/12/31", "selected", "集精選", 3.0, False, "切換「集精選」享 3.0% 小樹點", "everyday", "天天刷", 3.3, "切換「天天刷」享 3.3%")
add("ikea-furniture-tw", "IKEA 宜家家居", "department_fashion", "百貨 & 服飾", ["ikea", "宜家家居", "ikea家具", "ikea餐廳", "瑞典肉丸"], "2026/12/31", "selected", "集精選", 3.0, False, "切換「集精選」享 3.0% 小樹點", "big_spend", "大筆刷", 3.3, "切換「大筆刷」享 3.3%")
add("smile-gas-station", "統一速邁樂加油站 (限台灣本島)", "travel_traffic", "交通 & 叫車", ["速邁樂", "統一速邁樂", "速邁樂加油", "openpoint加油"], "2026/12/31", "formosa", "台塑家", 3.3, False, "切換「台塑家」享 3.3% 小樹點", "everyday", "天天刷", 3.3, "切換「天天刷」享 3.3%")
add("formosa-vegetable-store", "台塑蔬菜實體門市", "grocery_convenience", "超市 & 藥妝", ["台塑蔬菜", "台塑生機", "台塑生醫門市"], "2026/12/31", "formosa", "台塑家", 3.3, False, "切換「台塑家」享 3.3% 小樹點", "general", "一般消費", 1.0, "一般消費享 1.0%")
add("formosa-shopping-online", "台塑購物網", "ecommerce", "線上網購", ["台塑購物網", "台塑生醫網購", "線上購物"], "2026/12/31", "formosa", "台塑家", 3.3, False, "切換「台塑家」享 3.3% 小樹點", "general", "一般消費", 1.0, "一般消費享 1.0%")
add("hilife-convenience-tw", "萊爾富實體門市 (Hi-Life)", "grocery_convenience", "超市 & 藥妝", ["萊爾富", "hi-life", "hilife", "便利商店"], "2026/12/31", "formosa", "台塑家", 3.3, False, "切換「台塑家」享 3.3% 小樹點", "everyday", "天天刷", 3.3, "切換「天天刷」享 3.3%")

print(f"Adding {len(new_items)} exact matched items")

marker = "\n];\n"
if marker in code:
    updated_code = code.replace(marker, ",\n" + ",\n".join(new_items) + marker)
    with open('src/data/merchants.ts', 'w', encoding='utf-8') as f:
        f.write(updated_code)
    print("Successfully added all remaining items to src/data/merchants.ts!")
