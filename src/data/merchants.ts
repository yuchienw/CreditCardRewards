import type { Merchant } from '../types/merchant';

export const MERCHANTS: Merchant[] = [
  // ================= 遊戲 & 影音串流 =================
  {
    id: 'playstation',
    name: 'PlayStation (PSN / PS Store)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['psn', 'ps5', 'ps4', '索尼', '主機遊戲', 'sony', 'playstation'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/birthday/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (生日月可切慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '生日月切換「慶生月」特店享 10%！平日切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: 'Richart Life 切換「數趣刷」享 3.3% 台新 Point'
    },
    tips: '生日月強烈推薦使用國泰 CUBE 卡切換【慶生月】方案拿滿 10% 小樹點！平日刷兩張卡（CUBE玩數位 3.3% / Richart數趣刷 3.3%）皆享 3.3%。'
  },
  {
    id: 'nintendo',
    name: 'Nintendo eShop (任天堂)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['switch', '任天堂', 'eshop', '瑪利歐', '薩爾達', '主機遊戲', 'nintendo'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/birthday/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (生日月可切慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '生日月切換「慶生月」特店享 10%！平日切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」遊戲影音享 3.3%'
    },
    tips: '買 Switch 數位遊戲，生日月選 CUBE【慶生月】享 10%；平日兩張卡切換對應方案皆為 3.3%。'
  },
  {
    id: 'steam',
    name: 'Steam (PC 遊戲平台)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['pc', 'steam', 'valve', '特賣', '遊戲平台'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: 'CUBE App 切換「玩數位」'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: 'Richart Life 切換「數趣刷」'
    },
    tips: 'Steam 平台購買遊戲，CUBE「玩數位」與 Richart「數趣刷」回饋率相同（皆為 3.3%）。'
  },
  {
    id: 'netflix',
    name: 'Netflix (網飛)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['影集', '追劇', '訂閱', '串流', 'netflix'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
    tips: '每月固定扣款串流服務，兩張卡只要切換到對應方案（玩數位 / 數趣刷）均享 3.3% 回饋。'
  },
  {
    id: 'spotify',
    name: 'Spotify / YouTube Premium',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['音樂', '串流', 'youtube', '無廣告', '訂閱', 'spotify'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」'
    }
  },
  {
    id: 'disney-plus',
    name: 'Disney+ (迪士尼串流)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['漫威', '皮克斯', '星際大戰', '串流', 'disney'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」3.3%'
    }
  },

  // ================= 行動支付 =================
  {
    id: 'line-pay',
    name: 'LINE Pay (連線商業)',
    category: 'mobile_pay',
    categoryLabel: '行動支付',
    tags: ['linepay', '掃碼', '行動支付', '超商', '手搖', '連線'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'general',
      schemeName: '一般消費 (大部分特店無加碼)',
      rate: 0.3,
      note: 'CUBE 卡綁定 LINE Pay 在非指定加碼通路通常僅列 0.3%'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay 著刷 (LINE Pay)',
      rate: 2.3,
      payMethod: 'line_pay',
      note: 'Richart 卡切換「Pay 著刷」綁定 LINE Pay 享 2.3% 加碼！'
    },
    tips: '⚠️ LINE Pay 結帳絕對優先使用【台新 Richart 卡】（Pay 著刷 2.3%），CUBE 卡大部分特店僅 0.3%！'
  },
  {
    id: 'taishin-pay',
    name: '台新 Pay (全家/超商/新光三越/特約)',
    category: 'mobile_pay',
    categoryLabel: '行動支付',
    tags: ['taishinpay', '全家', '掃碼支付', '新光三越', '台新pay'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 0.3,
      note: '0.3% 基本回饋'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay 著刷 (台新 Pay)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: 'Richart Life 切換「Pay 著刷」並使用台新 Pay 享高達 3.8% 回饋！'
    },
    tips: '🔥 能使用「台新 Pay」的地方（如全家、新光三越），Richart 卡切換【Pay 著刷】享 3.8% 最頂回饋！'
  },
  {
    id: 'px-pay-plus',
    name: '全盈+PAY (全盈支付)',
    category: 'mobile_pay',
    categoryLabel: '行動支付',
    tags: ['全盈', '全家', '行動支付'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 0.3,
      note: '0.3%'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay 著刷 (全盈+PAY)',
      rate: 2.3,
      note: '享 2.3% 回饋'
    }
  },
  {
    id: 'jko-pay',
    name: '街口支付 (JKOPAY)',
    category: 'mobile_pay',
    categoryLabel: '行動支付',
    tags: ['街口', '掃碼', '外送', '繳費', 'jko'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 0.3,
      note: '0.3%'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '假日刷 (週末六日)',
      rate: 2.0,
      note: '週末六日切換「假日刷」街口支付享 2.0%！平日 0.5%~1.0%'
    },
    tips: '街口支付在週末假日結帳時，使用台新 Richart 卡（假日刷）享 2.0% 台新 Point。'
  },

  // ================= 網購電商 =================
  {
    id: 'shopee',
    name: '蝦皮購物 (Shopee)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['網購', '電商', '蝦皮直送', '蝦皮拍賣', '免運', 'shopee'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.0%~3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」指定網購享 3.3%'
    },
    tips: '蝦皮購物兩張卡回饋率相同（皆為 3.3%），CUBE 切「玩數位」、Richart 切「數趣刷」即可。'
  },
  {
    id: 'momo',
    name: 'momo 購物網',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['momo', '富邦媒', '網購', '24h'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'pchome',
    name: 'PChome 24h 購物',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['pchome', '3c', '24h'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」'
    }
  },
  {
    id: 'coupang',
    name: '酷澎 (Coupang)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['酷澎', '火箭跨境', '韓國網購', '火箭速配', 'coupang'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」'
    }
  },
  {
    id: 'taobao',
    name: '淘寶 / 天貓 (Taobao)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['大陸網購', '海外網購', '集運', 'taobao'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.0,
      note: '切換「玩數位」3.0%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (海外線上)',
      rate: 3.3,
      note: '切換「玩旅刷」海外消費享 3.3%'
    },
    tips: '淘寶屬於海外交易，Richart 卡切換【玩旅刷】享 3.3%，略勝 CUBE「玩數位」3.0%！'
  },

  // ================= 美食外送 & 餐飲 =================
  {
    id: 'uber-eats',
    name: 'Uber Eats (優食外送)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['外送', '便當', '飲料', '生鮮雜貨', 'ubereats'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/birthday/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.3%！生日月特店享最高 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: 'Richart Life 切換「好饗刷」外送享 3.3%'
    },
    tips: '叫外送平日兩張皆為 3.3%（CUBE 樂饗購 / Richart 好饗刷）；8 月生日月若 CUBE 慶生特店有 Uber Eats 則可衝 10%！'
  },
  {
    id: 'foodpanda',
    name: 'foodpanda (熊貓外送)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['外送', '熊貓', '生鮮', '熊貓超市', 'foodpanda'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'starbucks',
    name: '星巴克 (Starbucks)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['咖啡', '下午茶', '飲品', 'starbucks'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (或集精選)',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」全台餐飲 3.3%'
    },
    tips: '喝星巴克兩張卡切換對應方案（CUBE 樂饗購 / Richart 好饗刷）均享 3.3%！'
  },
  {
    id: 'restaurant-domestic',
    name: '全台實體餐廳 / 聚餐 / 飯店Buffet / 燒肉火鍋',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['餐飲', '火鍋', '燒肉', '聚餐', '王品', '響食天堂', '瓦城'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/birthday/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」實體餐飲享 3.3%！生日月指定特店高達 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: 'Richart Life 切換「好饗刷」全台實體餐廳 3.3%'
    },
    tips: '外出聚餐兩張卡皆為 3.3%（CUBE 樂饗購 / Richart 好饗刷）；8 月生日慶生若在 CUBE 指定名店享 10% 小樹點！'
  },

  // ================= 旅遊 & 交通 =================
  {
    id: 'japan-offline',
    name: '日本實體商店 (BicCamera / 唐吉訶德 / 藥妝 / 百貨)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['日本', '日幣', '出國', '東京', '大阪', '藥妝', '電器', 'biccamera'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'japan',
      schemeName: '日本賞 (或趣旅行)',
      rate: 3.5,
      note: 'CUBE App 切換「日本賞」日本實體門市享最高 3.5% 無上限！'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (海外實體)',
      rate: 3.3,
      note: 'Richart Life 切換「玩旅刷」海外消費享 3.3%'
    },
    tips: '去日本實體門市結帳，切換 CUBE 卡【日本賞】享 3.5% 無上限，勝過 Richart「玩旅刷」的 3.3%！'
  },
  {
    id: 'overseas-general',
    name: '國外實體刷卡 / 海外線上外幣 (非日本)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['國外', '歐美', '韓國', '泰國', '外幣', '美金', '出國'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」國外實體享 3.3% 無上限'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」海外實體與線上交易享 3.3%'
    },
    tips: '國外一般刷卡，CUBE「趣旅行」與 Richart「玩旅刷」皆為 3.3% 回饋！'
  },
  {
    id: 'high-speed-rail',
    name: '台灣高鐵 (TSR)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['高鐵', '車票', '返鄉', '出差'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」高鐵享 3.3%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (交通)',
      rate: 3.3,
      note: '切換「天天刷」交通通路享 3.3%'
    },
    tips: '買高鐵車票兩張卡皆享 3.3%（CUBE 趣旅行 / Richart 天天刷）。'
  },
  {
    id: 'cpc-gas',
    name: '台灣中油直營 / 加油站 (台塑/全國)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['中油', '加油', '開車', '機車', '油錢', '台塑'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'selected',
      schemeName: '集精選 (或台塑家)',
      rate: 3.0,
      note: '中油直營切「集精選」2%~3%，台塑加油站切「台塑家」3%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (加油)',
      rate: 3.3,
      note: 'Richart Life 切換「天天刷」加油站享 3.3%'
    },
    tips: '加油首選【台新 Richart 卡】（切換天天刷享 3.3%），略勝 CUBE 集精選 (2.0%~3.0%)！'
  },
  {
    id: 'klook-agoda',
    name: 'Klook / KKday / Agoda / 航空公司機票',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['機票', '訂房', '長榮', '華航', '星宇', '票券', '行程', 'agoda', 'klook'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」航空公司、指定訂房享 3.3% 無上限'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司與訂房平台享 3.3%'
    },
    tips: '買機票或訂房兩張卡皆享 3.3%（CUBE 趣旅行 / Richart 玩旅刷），CUBE 刷機票附帶高額旅平險。'
  },

  // ================= 生活量販 & 超商 =================
  {
    id: 'pxmart',
    name: '全聯福利中心 (Pxmart)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['全聯', '生鮮', '全支付', 'pxpay', '超市'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」方案享 2.0%~3.0% (實體卡/感應/全支付)'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (或全聯實體0%)',
      rate: 0.0,
      note: '台新卡在全聯門市一般直刷通常為非一般消費 (0%)，需確認全支付加碼'
    },
    tips: '🔥 去全聯買菜強烈建議刷【國泰 CUBE 卡】（切換集精選 2%~3%），台新卡在全聯通常無一般消費回饋！'
  },
  {
    id: 'carrefour',
    name: '家樂福 (Carrefour)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['量販', '超市', '生活用品', '家樂福'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」家樂福享 2.0%~3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (量販)',
      rate: 3.3,
      note: 'Richart Life 切換「天天刷」量販店享 3.3%'
    },
    tips: '逛家樂福量販店，刷【台新 Richart 卡】（切換天天刷享 3.3%）回饋率最高！'
  },
  {
    id: 'seven-eleven',
    name: '7-ELEVEN / 全家便利商店 (超商)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['7-11', '全家', '超商', '便利商店', '咖啡', 'seven'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 2.0,
      note: '切換「集精選」享 2.0%'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 天天刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在全家使用台新 Pay 享最高 3.8%！或切換「天天刷」超商享 3.3%'
    },
    tips: '超商結帳最神刷法：在全家打開【台新 Pay】綁 Richart 卡（Pay 著刷）拿 3.8%！'
  },

  // ================= 百貨 & 日系名店 =================
  {
    id: 'uniqlo-gu-muji',
    name: 'UNIQLO / GU / 無印良品 (MUJI)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['服飾', '衣服', '日系', '無印', 'uniqlo', 'gu', 'muji'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '百貨櫃位切換「樂饗購」3.3%！生日月特店可達 10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (時尚品味)',
      rate: 3.3,
      note: 'Richart Life 切換「大筆刷」時尚服飾享 3.3%'
    },
    tips: '買衣服兩張卡皆享 3.3%（CUBE 樂饗購 / Richart 大筆刷）；生日月若在指定特店則 CUBE「慶生月」10% 最強！'
  },
  {
    id: 'department-stores',
    name: '新光三越 / SOGO / 遠東百貨 / 微風',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['百貨', '專櫃', '化妝品', '微風', '新光', 'sogo', '遠百'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」百貨享 3.3%！生日月特店高達 10%'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 大筆刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在新光三越使用台新 Pay 享最高 3.8%！直刷切換「大筆刷」享 3.3%'
    },
    tips: '逛新光三越使用【台新 Pay】綁 Richart 卡拿 3.8%；其他百貨專櫃刷【CUBE 卡】（樂饗購 3.3%）或 Richart（大筆刷 3.3%）！'
  },

  // ================= 一般通用消費 =================
  {
    id: 'general-domestic',
    name: '其他未列出之國內一般消費 (無指定通路)',
    category: 'general',
    categoryLabel: '一般消費',
    tags: ['其他', '一般', '無腦刷', '雜項'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'general',
      schemeName: '一般消費 (或固定回饋 1.2%)',
      rate: 0.3,
      note: '基礎 0.3% (若切換「固定回饋」方案則一般消費 1.2%)'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '假日刷 (週末2.0%) / 平日 1.0%',
      rate: 2.0,
      note: '週末六日切換「假日刷」全台一般消費 2.0%！平日 1.0%'
    },
    tips: '一般無特定加碼消費：週末六日刷【台新 Richart 卡】切換【假日刷】拿 2.0% 無腦刷，平日刷 Richart 拿 1.0%，均優於 CUBE 的 0.3%！'
  }
];
