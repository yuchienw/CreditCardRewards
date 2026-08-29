import type { Merchant } from '../types/merchant';

const TAISHIN_OFFICIAL_URL = 'https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html';
const CATHAY_OFFICIAL_URL = 'https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list';
const CATHAY_BIRTHDAY_URL = 'https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list';

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
    officialSourceUrl: CATHAY_BIRTHDAY_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (生日月切換「慶生月」享 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 生日月切換「慶生月」享最高 10% 小樹點！平日切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷 (遊戲影音)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
    tips: '若在 8 月生日當月購買 PS 遊戲或課金，首選【國泰 CUBE 卡】切換【慶生月】方案拿滿 10% 回饋！平日刷兩張卡（CUBE玩數位 3.3% / Richart數趣刷 3.3%）皆享 3.3%。'
  },
  {
    id: 'nintendo',
    name: 'Nintendo eShop (任天堂)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['switch', '任天堂', 'eshop', '瑪利歐', '薩爾達', '主機遊戲', 'nintendo'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_BIRTHDAY_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (生日月切換「慶生月」享 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 生日月切換「慶生月」特店享 10%！平日切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷 (遊戲影音)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
    tips: '買 Switch 遊戲，生日月強推 CUBE【慶生月】10%；平日兩張卡切換對應方案皆為 3.3%。'
  },
  {
    id: 'steam',
    name: 'Steam (PC 遊戲平台)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['pc', 'steam', 'valve', '特賣', '遊戲平台'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: 'CUBE App 切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷 (遊戲影音)',
      rate: 3.3,
      note: 'Richart Life 切換「數趣刷」享 3.3%'
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
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷 (或 Chill刷 5%)',
      rate: 3.3,
      note: 'Richart 切換「數趣刷」享 3.3%（限時 Chill 刷熬夜追更享 5%）'
    },
    tips: '串流訂閱兩張卡皆享 3.3%（CUBE 玩數位 / Richart 數趣刷）。'
  },
  {
    id: 'spotify',
    name: 'Spotify / YouTube Premium',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['音樂', '串流', 'youtube', '無廣告', '訂閱', 'spotify'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
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
    id: 'disney-plus',
    name: 'Disney+ (迪士尼串流)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['漫威', '皮克斯', '星際大戰', '串流', 'disney'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
  {
    id: 'chatgpt-ai',
    name: 'ChatGPT / Claude / Notion / Canva (AI訂閱)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['ai', 'chatgpt', 'openai', 'claude', 'notion', 'canva', 'perplexity'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: 'CUBE 切換「玩數位」AI 服務享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷 (AI服務)',
      rate: 3.3,
      note: 'Richart 切換「數趣刷」AI 服務享 3.3%'
    },
    tips: '訂閱 ChatGPT Plus、Claude Pro 等 AI 工具，兩張卡切換對應方案皆享 3.3%！'
  },

  // ================= 聚會火鍋 & 手搖飲 (台新 Chill 刷 10%) =================
  {
    id: 'hotpot-bbq',
    name: '詹記麻辣火鍋 / 萬客什鍋 / 海底撈 / 屋馬燒肉 / 茶六',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['火鍋', '燒肉', '海底撈', '屋馬', '茶六', '詹記', '萬客', '聚餐'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: 'CUBE App 切換「樂饗購」餐飲享 3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (歡聚微醺)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 Richart Life 切換「Chill 刷」指定火鍋/燒肉享狂飆 10% 回饋！'
    },
    tips: '🔥 吃詹記、海底撈、屋馬、茶六、萬客什鍋時，務必開【台新 Richart 卡】切換【Chill 刷】方案拿滿 10% 台新 Point！'
  },
  {
    id: 'drinks-tea',
    name: '50嵐 / 得正 / 五桐號 / 龜記 / CAFE!N / %Arabica',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['手搖飲', '飲料', '咖啡', '50嵐', '得正', '五桐號', '龜記', 'cafein'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (日常續命)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 Richart Life 切換「Chill 刷」指定手搖飲/咖啡享 10% 神回饋！'
    },
    tips: '買 50嵐、得正、五桐號、龜記手搖飲，刷【台新 Richart 卡】切換【Chill 刷】享 10% 最狂回饋！'
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
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'general',
      schemeName: '一般消費 (大部分特店無加碼)',
      rate: 0.3,
      note: 'CUBE 卡綁定 LINE Pay 在非指定特店僅 0.3%'
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
    name: '台新 Pay (全家/7-11/新光三越/康是美/IKEA)',
    category: 'mobile_pay',
    categoryLabel: '行動支付',
    tags: ['taishinpay', '全家', '7-11', '掃碼支付', '新光三越', 'ikea', '康是美'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
      note: 'Richart Life 切換「Pay 著刷」使用台新 Pay 享高達 3.8% 回饋！'
    },
    tips: '🔥 能使用「台新 Pay」的地方（全家、7-11、新光三越、康是美、IKEA），Richart 卡切換【Pay 著刷】享 3.8% 最頂回饋！'
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
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: 'CUBE 切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: 'Richart 切換「數趣刷」享 3.3%'
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
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
    id: 'coupang',
    name: '酷澎 (Coupang)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['酷澎', '火箭跨境', '韓國網購', '火箭速配', 'coupang'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
  {
    id: 'pchome',
    name: 'PChome 24h 購物',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['pchome', '3c', '24h'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
  {
    id: 'taobao',
    name: '淘寶 / 天貓 (Taobao)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['大陸網購', '海外網購', '集運', 'taobao'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
      note: 'Richart Life 切換「玩旅刷」海外消費享 3.3%'
    },
    tips: '淘寶屬於海外外幣交易，Richart 卡切換【玩旅刷】享 3.3%，略勝 CUBE「玩數位」3.0%！'
  },
  {
    id: 'books-com-tw',
    name: '博客來網路書店 / 誠品線上',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['買書', '書店', '博客來', '誠品', '文創'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (或樂饗購誠品)',
      rate: 3.3,
      note: '博客來切「玩數位」3.3%，誠品生活切「樂饗購」3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷 (或大筆刷誠品)',
      rate: 3.3,
      note: '博客來切「數趣刷」3.3%，誠品切「大筆刷」3.3%'
    }
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
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
      note: 'Richart Life 切換「好饗刷」外送平台享 3.3%'
    },
    tips: '叫外送平日兩張皆為 3.3%（CUBE 樂饗購 / Richart 好饗刷）；8 月生日月若 CUBE 慶生特店加碼則可衝 10%！'
  },
  {
    id: 'foodpanda',
    name: 'foodpanda (熊貓外送)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['外送', '熊貓', '生鮮', '熊貓超市', 'foodpanda'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
      note: '切換「好饗刷」外送平台享 3.3%'
    }
  },
  {
    id: 'starbucks',
    name: '星巴克 (Starbucks) / 路易莎 / 客美多',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['咖啡', '下午茶', '飲品', 'starbucks', '路易莎', 'louisa'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
    tips: '喝咖啡兩張卡切換對應方案（CUBE 樂饗購 / Richart 好饗刷）均享 3.3%！'
  },
  {
    id: 'fast-food',
    name: '麥當勞 / 肯德基 / 摩斯漢堡 / 漢堡王',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['速食', '麥當勞', '肯德基', '摩斯', '漢堡王', '炸雞', '漢堡'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」餐飲享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (或台新Pay 3.8%)',
      rate: 3.8,
      note: '在麥當勞可用台新Pay享 3.8%，其他速食切換「好饗刷」享 3.3%'
    },
    tips: '在麥當勞用【台新 Pay】綁 Richart 卡拿 3.8%；其他速食店兩張切換對應方案皆為 3.3%！'
  },
  {
    id: 'sushi-chain',
    name: '壽司郎 / 藏壽司 / 爭鮮 / 瓦城 / 王品集團',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['壽司', '壽司郎', '藏壽司', '爭鮮', '瓦城', '王品', '陶板屋', '西堤'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」餐飲享 3.3%！生日月指定特店 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: 'Richart 切換「好饗刷」享 3.3%'
    }
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
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'japan',
      schemeName: '日本賞 (或趣旅行)',
      rate: 3.5,
      note: 'CUBE App 切換「日本賞」日本實體門市享最高 3.5% 無上限！'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (或台新Pay+免手續費)',
      rate: 3.3,
      note: 'Richart Life 切換「玩旅刷」海外消費享 3.3%（在 Lawson / BicCamera 用台新Pay+ 再享免 1.5% 手續費）'
    },
    tips: '日本實體刷卡首選 CUBE 卡【日本賞】享 3.5% 無上限！若在 BicCamera / Lawson 也可用 Richart 卡綁【台新 Pay+】免 1.5% 海外手續費！'
  },
  {
    id: 'high-speed-rail',
    name: '台灣高鐵 (TSR) / 臺鐵',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['高鐵', '台鐵', '火車', '車票', '返鄉', '出差'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」高鐵享 3.3%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (通勤交通)',
      rate: 3.3,
      note: 'Richart Life 切換「天天刷」高鐵/臺鐵享 3.3%'
    },
    tips: '搭高鐵或臺鐵兩張卡皆享 3.3%（CUBE 趣旅行 / Richart 天天刷）。'
  },
  {
    id: 'uber-taxi',
    name: 'Uber 叫車 / 台灣大車隊 / LINE GO / yoxi',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['計程車', '叫車', 'uber', '55688', 'linego', 'yoxi'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (通勤交通)',
      rate: 3.3,
      note: 'Richart 切換「天天刷」計程車叫車享 3.3%'
    },
    tips: '叫車兩張卡皆享 3.3%（CUBE 趣旅行 / Richart 天天刷）。'
  },
  {
    id: 'cpc-gas',
    name: '台灣中油直營 / 全國加油站 / 充電樁',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['中油', '加油', '開車', '機車', '油錢', '全國加油', '充電'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」中油直營享 2.0%~3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (加油充電)',
      rate: 3.3,
      note: 'Richart Life 切換「天天刷」中油直營/全國加油/充電站享 3.3%'
    },
    tips: '加油充電首選【台新 Richart 卡】（切換天天刷享 3.3%），略勝 CUBE 集精選 (2.0%~3.0%)！'
  },
  {
    id: 'klook-agoda',
    name: 'Klook / KKday / Agoda / 航空公司機票',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['機票', '訂房', '長榮', '華航', '星宇', '票券', '行程', 'agoda', 'klook'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」航空公司、指定訂房享 3.3% 無上限'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司/訂房)',
      rate: 3.3,
      note: 'Richart 切換「玩旅刷」航空公司與訂房平台享 3.3%'
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
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」方案享 2.0%~3.0% (實體卡/感應/全支付)'
    },
    richart: {
      scheme: 'general',
      schemeName: '一般門市直刷無回饋 (0%)',
      rate: 0.0,
      note: '台新卡在全聯門市一般刷卡為非一般消費 (0%)'
    },
    tips: '🔥 去全聯買菜強烈建議刷【國泰 CUBE 卡】（切換集精選 2%~3%），台新卡在全聯門市直刷無回饋！'
  },
  {
    id: 'costco',
    name: 'Costco 好市多 (需聯名卡/一般消費)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['好市多', 'costco', '量販', '大賣場'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'general',
      schemeName: '非富邦聯名卡無法直刷 (0%)',
      rate: 0.0,
      note: '好市多門市僅限富邦Costco聯名卡或現金結帳'
    },
    richart: {
      scheme: 'general',
      schemeName: '門市無法直刷 (0%)',
      rate: 0.0,
      note: '好市多線上購物若有特約則視一般消費'
    },
    tips: '好市多實體門市僅能使用台北富邦 Costco 聯名卡或現金結帳，CUBE 與 Richart 皆無法在實體門市刷卡！'
  },
  {
    id: 'carrefour',
    name: '家樂福 (Carrefour) / 大買家 / 唐吉訶德 / LOPIA',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['量販', '超市', '生活用品', '家樂福', 'lopia', '唐吉訶德'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」家樂福享 2.0%~3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (日常採買)',
      rate: 3.3,
      note: 'Richart Life 切換「天天刷」量販超市享 3.3%'
    },
    tips: '逛家樂福、唐吉訶德、LOPIA，刷【台新 Richart 卡】（切換天天刷享 3.3%）回饋率最高！'
  },
  {
    id: 'seven-eleven',
    name: '全家便利商店 / 7-ELEVEN (超商)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['7-11', '全家', '超商', '便利商店', '咖啡', 'seven'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
      note: '全家與 7-11 使用台新 Pay 享最高 3.8%！'
    },
    tips: '超商結帳最神刷法：在全家或 7-11 打開【台新 Pay】綁 Richart 卡（Pay 著刷）拿 3.8%！'
  },
  {
    id: 'pharmacy',
    name: '寶雅 (POYA) / 康是美 / 屈臣氏 / 大樹藥局',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['寶雅', '康是美', '屈臣氏', '大樹藥局', '藥妝', '美妝', '生活用品'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (或集精選康是美)',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (藥妝藥局 3.3%) / 康是美台新Pay (3.8%)',
      rate: 3.8,
      note: '康是美用台新Pay享 3.8%，其他藥妝切換「天天刷」享 3.3%'
    },
    tips: '買藥妝保養品：在康是美用【台新 Pay】綁 Richart 卡拿 3.8%；寶雅與屈臣氏刷兩張卡皆享 3.3%！'
  },

  // ================= 百貨 & 日系名店 =================
  {
    id: 'uniqlo-gu-muji',
    name: 'UNIQLO / GU / ZARA / NET / lululemon',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['服飾', '衣服', '日系', '無印', 'uniqlo', 'gu', 'zara', 'net', 'lululemon'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
    name: '新光三越 / SOGO / 遠東百貨 / 微風 / 台北101',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['百貨', '專櫃', '化妝品', '微風', '新光', 'sogo', '遠百', '101'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
  {
    id: 'ikea-home',
    name: 'IKEA / 特力屋 / HOLA / 宜得利家居',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['ikea', '特力屋', 'hola', '宜得利', '家具', '居家裝修'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: 'CUBE 切換「樂饗購」居家百貨享 3.3%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (或 IKEA 台新Pay 3.8%)',
      rate: 3.8,
      note: 'IKEA 用台新 Pay 享 3.8%，其他特力屋/宜得利切「大筆刷」享 3.3%'
    },
    tips: '在 IKEA 結帳用【台新 Pay】綁 Richart 卡享 3.8%；特力屋與宜得利刷兩張卡皆享 3.3%！'
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
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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
