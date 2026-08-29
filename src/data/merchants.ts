import type { Merchant } from '../types/merchant';

export const MERCHANTS: Merchant[] = [
  // ================= 遊戲 & 影音串流 =================
  {
    id: 'playstation',
    name: 'PlayStation (PSN / PS Store)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['psn', 'ps5', 'ps4', '索尼', '主機遊戲', 'sony'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/birthday/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (或慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      validUntil: '2026/12/31',
      note: '生日月切換「慶生月」享最高 10%！平日切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '數位娛樂指定特店 3.3%'
    },
    tips: '若在生日當月購買遊戲或續訂 PS Plus，首選國泰 CUBE 卡切換【慶生月】方案拿滿 10% 回饋！平日兩張皆享 3.3%。'
  },
  {
    id: 'nintendo',
    name: 'Nintendo eShop (任天堂)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['switch', '任天堂', 'eshop', '瑪利歐', '薩爾達', '主機遊戲'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (或慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      validUntil: '2026/12/31',
      note: '生日月切換「慶生月」特店享 10%！平日切換「玩數位」3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '指定娛樂遊戲通路 3.3%'
    },
    tips: '生日月強烈建議切換 CUBE【慶生月】刷 eShop 大作拿 10% 回饋。'
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
      validUntil: '2026/12/31',
      note: '切換「玩數位」方案'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '遊戲平台 3.3%'
    },
    tips: 'Steam 兩張卡皆為 3.3% 回饋，平分秋色！'
  },
  {
    id: 'netflix',
    name: 'Netflix (網飛)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['影集', '追劇', '訂閱', '串流'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '影音訂閱 3.3%'
    },
    tips: '固定每月訂閱扣款，CUBE 設定「玩數位」或 Richart「數趣刷」皆為 3.3%。'
  },
  {
    id: 'spotify',
    name: 'Spotify / YouTube Premium',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['音樂', '串流', 'youtube', '無廣告', '訂閱'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '切換「玩數位」3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '數位串流 3.3%'
    }
  },
  {
    id: 'disney-plus',
    name: 'Disney+ (迪士尼串流)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['漫威', '皮克斯', '星際大戰', '串流'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '切換「玩數位」'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '數趣刷影音'
    }
  },

  // ================= 行動支付 =================
  {
    id: 'line-pay',
    name: 'LINE Pay (連線商業)',
    category: 'mobile_pay',
    categoryLabel: '行動支付',
    tags: ['linepay', '掃碼', '行動支付', '超商', '手搖'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 0.3,
      validUntil: '2026/12/31',
      note: 'CUBE 卡綁 LINE Pay 大多僅算一般 0.3% (非指定特店無加碼)'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay著刷 (LINE Pay)',
      rate: 2.3,
      validUntil: '2026/12/31',
      payMethod: 'line_pay',
      note: '綁定 LINE Pay 享 2.3% 台新 Point'
    },
    tips: '⚠️ LINE Pay 結帳絕對優先使用【台新 Richart 卡】(2.3%)，CUBE 卡大部分通路僅 0.3%！'
  },
  {
    id: 'taishin-pay',
    name: '台新 Pay (全家/超商/特約)',
    category: 'mobile_pay',
    categoryLabel: '行動支付',
    tags: ['taishinpay', '全家', '掃碼支付', '新光三越'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 0.3,
      validUntil: '2026/12/31',
      note: '一般消費 0.3%'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay著刷 (台新Pay)',
      rate: 3.8,
      validUntil: '2026/12/31',
      payMethod: 'taishin_pay',
      note: '使用台新 Pay 綁定 Richart 卡結帳享最高 3.8%！'
    },
    tips: '能在全家、新光三越、美廉社用「台新 Pay」的地方，用 Richart 刷拿最高 3.8% 神回饋！'
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
      validUntil: '2026/12/31',
      note: '0.3%'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay著刷 (全盈+PAY)',
      rate: 2.3,
      validUntil: '2026/12/31',
      note: '享 2.3% 回饋'
    }
  },
  {
    id: 'jko-pay',
    name: '街口支付 (JKOPAY)',
    category: 'mobile_pay',
    categoryLabel: '行動支付',
    tags: ['街口', '掃碼', '外送', '繳費'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 0.3,
      validUntil: '2026/12/31',
      note: '0.3%'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '假日刷 / 平日一般',
      rate: 2.0,
      validUntil: '2026/12/31',
      note: '週末假日 2.0% / 平日 0.5%~1.0%'
    },
    tips: '街口支付無特定加碼時，週末刷 Richart 卡享 2.0% 假日回饋。'
  },

  // ================= 網購電商 =================
  {
    id: 'shopee',
    name: '蝦皮購物 (Shopee)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['網購', '電商', '蝦皮直送', '蝦皮拍賣', '免運'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '切換「玩數位」享 3.0% (持有帳戶3.3%)'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷 (網購)',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '指定熱門網購 3.3%'
    },
    tips: '蝦皮購物兩張都很高！Richart 卡直接享 3.3%，CUBE 切換「玩數位」享 3.0%~3.3%。'
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
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '切換「玩數位」享 3.0%~3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷 (網購)',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '數趣刷指定電商 3.3%'
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
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '切換「玩數位」'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '3.3%'
    }
  },
  {
    id: 'coupang',
    name: '酷澎 (Coupang)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['酷澎', '火箭跨境', '韓國網購', '火箭速配'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '切換「玩數位」'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '3.3%'
    }
  },
  {
    id: 'taobao',
    name: '淘寶 / 天貓 (Taobao)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['大陸網購', '海外網購', '集運'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '切換「玩數位」3.0%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '出國/海外刷',
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '海外交易 3.0%'
    }
  },

  // ================= 美食外送 & 餐飲 =================
  {
    id: 'uber-eats',
    name: 'Uber Eats (優食外送)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['外送', '便當', '飲料', '生鮮雜貨'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/birthday/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (或慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      validUntil: '2026/12/31',
      note: '切換「樂饗購」享 3.3%！生日月指定特店最高 10%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '外送指定 3.3%'
    },
    tips: '叫 Uber Eats 平日兩張都是 3.3%，如果是 8 月生日當月記得開 CUBE「慶生月」！'
  },
  {
    id: 'foodpanda',
    name: 'foodpanda (熊貓外送)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['外送', '熊貓', '生鮮', '熊貓超市'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '數趣刷 3.3%'
    }
  },
  {
    id: 'starbucks',
    name: '星巴克 (Starbucks)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['咖啡', '下午茶', '飲品'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (或集精選)',
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '切換「樂饗購」享 3.0%~3.3%'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '假日刷 / 平日一般',
      rate: 2.0,
      validUntil: '2026/12/31',
      note: '週末 2.0% / 平日 0.5%'
    },
    tips: '喝星巴克直接刷【國泰 CUBE 卡】（切換樂饗購享 3.0%~3.3%）大幅優於 Richart！'
  },
  {
    id: 'restaurant-domestic',
    name: '全台實體餐廳 / 聚餐 / 飯店Buffet',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['餐飲', '火鍋', '燒肉', '聚餐', '王品', '響食天堂', '瓦城'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/birthday/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (或慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      validUntil: '2026/12/31',
      note: '切換「樂饗購」實體餐廳 3.0%~3.3%！生日月特定名店高達 10%'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '假日刷 (週末2% / 平日0.5%)',
      rate: 2.0,
      validUntil: '2026/12/31',
      note: '週末假日 2.0% / 平日 0.5%~1.0%'
    },
    tips: '外出聚餐、吃大餐首選【國泰 CUBE 卡】（切換樂饗購 3.3%），若在生日月慶生更有 10% 加碼！'
  },

  // ================= 旅遊 & 交通 =================
  {
    id: 'japan-offline',
    name: '日本實體商店 (BicCamera / 唐吉訶德 / 藥妝)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['日本', '日幣', '出國', '東京', '大阪', '藥妝', '電器'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'japan',
      schemeName: '日本賞 / 趣旅行',
      rate: 3.5,
      validUntil: '2026/12/31',
      note: '切換「日本賞」或「趣旅行」日本實體消費享 3.3%~3.5% 無上限！'
    },
    richart: {
      scheme: 'travel',
      schemeName: '出國刷 (海外實體)',
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '海外實體 3.0%'
    },
    tips: '去日本實體店面結帳，切換 CUBE 卡【日本賞/趣旅行】享 3.5% 無上限，勝過 Richart 的 3.0%！'
  },
  {
    id: 'overseas-general',
    name: '國外實體刷卡 / 海外線上外幣 (非日本)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['國外', '歐美', '韓國', '泰國', '外幣', '美金'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '切換「趣旅行」國外實體 3.0%~3.3% 無上限'
    },
    richart: {
      scheme: 'travel',
      schemeName: '出國刷 (海外消費)',
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '國外消費 3.0%'
    },
    tips: '出國刷卡只要 CUBE 切換【趣旅行】，享有 3.3% 無上限！'
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
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '切換「趣旅行」高鐵享 3.0%~3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '好行刷 (交通)',
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '交通指定 3.0%'
    },
    tips: '搭高鐵買車票兩張卡皆享 3.0%~3.3%，CUBE 切換「趣旅行」即可。'
  },
  {
    id: 'cpc-gas',
    name: '台灣中油直營 / 加油站',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['中油', '加油', '開車', '機車', '油錢'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 2.0,
      validUntil: '2026/12/31',
      note: '切換「集精選」中油直營享 2.0%~3.0%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '好行刷 (加油)',
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '指定中油直營加油 3.0%'
    },
    tips: '開車或騎車加油，刷【台新 Richart 卡】享 3.0% 優於 CUBE 集精選 (2.0%)！'
  },
  {
    id: 'klook-agoda',
    name: 'Klook / KKday / Agoda / 航空公司機票',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['機票', '訂房', '長榮', '華航', '星宇', '票券', '行程'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      validUntil: '2026/12/31',
      note: '切換「趣旅行」航空公司、指定訂房享 3.3% 無上限'
    },
    richart: {
      scheme: 'travel',
      schemeName: '好行刷 / 出國刷',
      rate: 3.0,
      validUntil: '2026/12/31',
      note: '指定航空訂房 3.0%'
    },
    tips: '買機票或訂房首推【國泰 CUBE 卡】（切換趣旅行享 3.3% 無上限且附帶旅平險）！'
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
      rate: 2.0,
      validUntil: '2026/12/31',
      note: '切換「集精選」方案享 2.0%~3.0% (實體卡/感應)'
    },
    richart: {
      scheme: 'general',
      schemeName: '一般消費 / 全聯無回饋',
      rate: 0.0,
      validUntil: '2026/12/31',
      note: '台新卡在全聯門市一般刷卡通常列為非一般消費 (0%)'
    },
    tips: '🔥 去全聯買菜強烈建議刷【國泰 CUBE 卡】（切換集精選 2%~3%），台新卡在全聯通常無一般消費回饋！'
  },
  {
    id: 'carrefour',
    name: '家樂福 (Carrefour)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['量販', '超市', '生活用品'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 2.0,
      validUntil: '2026/12/31',
      note: '切換「集精選」家樂福享 2.0%~3.0%'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '假日刷 (週末2% / 平日0.5%)',
      rate: 2.0,
      validUntil: '2026/12/31',
      note: '週末 2.0% / 平日 0.5%'
    },
    tips: '平日去家樂福刷 CUBE 卡（切換集精選 2%~3%）；週末刷兩張皆有 2% 以上！'
  },
  {
    id: 'seven-eleven',
    name: '7-ELEVEN / 全家便利商店 (超商)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['7-11', '全家', '超商', '便利商店', '咖啡'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    cube: {
      scheme: 'selected',
      schemeName: '集精選 (或慶生月)',
      rate: 2.0,
      isBirthdaySpecial: true,
      validUntil: '2026/12/31',
      note: '切換「集精選」享 2.0%！'
    },
    richart: {
      scheme: 'pay',
      schemeName: '台新Pay (3.8%) / 全盈 (2.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      validUntil: '2026/12/31',
      note: '在全家使用台新 Pay 享 3.8% / 全盈 2.3%！實體直刷為 0%'
    },
    tips: '超商結帳首推在全家開【台新 Pay】綁 Richart 刷拿 3.8%！若在 7-11 則可用 CUBE 卡（切換集精選 2%）。'
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
      schemeName: '樂饗購 (或集精選/慶生月)',
      rate: 3.0,
      isBirthdaySpecial: true,
      validUntil: '2026/12/31',
      note: '百貨櫃位切換「樂饗購」3.0%！生日月特店可達 10%'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '假日刷 (週末2% / 平日0.5%)',
      rate: 2.0,
      validUntil: '2026/12/31',
      note: '週末 2.0% / 平日 0.5%~1.0%'
    },
    tips: '買衣服或日用品首選【國泰 CUBE 卡】（切換樂饗購 3.0%~3.3%），比 Richart 划算！'
  },
  {
    id: 'department-stores',
    name: '新光三越 / SOGO / 遠東百貨 / 微風',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['百貨', '專櫃', '化妝品', '微風', '新光'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/birthday/',
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (或慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      validUntil: '2026/12/31',
      note: '切換「樂饗購」百貨享 3.0%~3.3%！生日月特店高達 10%'
    },
    richart: {
      scheme: 'pay',
      schemeName: '台新Pay (3.8%) / 假日刷 (2.0%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      validUntil: '2026/12/31',
      note: '在新光三越使用台新 Pay 享最高 3.8%！直刷週末 2.0%'
    },
    tips: '逛新光三越使用【台新 Pay】綁 Richart 卡拿 3.8%；其他百貨專櫃直接刷【CUBE 卡】（切換樂饗購 3.3%）！'
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
      schemeName: '一般消費',
      rate: 0.3,
      validUntil: '2026/12/31',
      note: '0.3% 基本小樹點'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '假日刷 2.0% / 平日 1.0%',
      rate: 2.0,
      validUntil: '2026/12/31',
      note: '週末六日一般消費 2.0% / 平日 1.0%'
    },
    tips: '只要是沒在兩張卡加碼名單中的一般消費：週末六日刷【台新 Richart 卡】拿 2.0%，平日刷 Richart 拿 1.0%，均大勝 CUBE 的 0.3%！'
  }
];
