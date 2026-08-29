import type { Merchant } from '../types/merchant';

const TAISHIN_OFFICIAL_URL = 'https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html';
const CATHAY_OFFICIAL_URL = 'https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list';

export const MERCHANTS: Merchant[] = [
  // ================= 🎮 遊戲平台 & AI =================
  {
    id: 'playstation',
    name: 'PlayStation (PSN / PS Store)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['psn', 'ps5', 'ps4', '索尼', '主機遊戲', 'sony', 'playstation'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (生日月可切「慶生月」10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月切換「慶生月」特店享 10% 小樹點！平日切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷 (遊戲影音)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
    tips: '生日當月買遊戲或續訂 PS Plus，首選 CUBE 卡【慶生月】10%！平日兩張切對應方案皆為 3.3%。'
  },
  {
    id: 'nintendo',
    name: 'Nintendo eShop (任天堂)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['switch', '任天堂', 'eshop', '瑪利歐', '薩爾達', 'nintendo'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (生日月可切「慶生月」10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 生日月切換「慶生月」特店享 10%！平日切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
    tips: '買 Switch 數位版遊戲，生日月選 CUBE【慶生月】10%；平日兩張卡皆為 3.3%。'
  },
  {
    id: 'steam',
    name: 'Steam',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['steam', 'pc遊戲', 'valve', '特賣'],
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
    id: 'chatgpt',
    name: 'ChatGPT (OpenAI 訂閱)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['chatgpt', 'openai', 'ai', 'gpt-4o', 'plus'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」AI 服務享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」AI 服務享 3.3%'
    }
  },
  {
    id: 'claude',
    name: 'Claude (Anthropic AI 訂閱)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['claude', 'anthropic', 'ai', 'sonnet'],
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
    id: 'notion',
    name: 'Notion',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['notion', '筆記', '生產力', 'ai'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
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

  // ================= 📺 影音串流 =================
  {
    id: 'netflix',
    name: 'Netflix',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['netflix', '網飛', '追劇', '影集'],
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
      schemeName: '數趣刷 (或 Chill 刷 5%)',
      rate: 3.3,
      note: '數趣刷 3.3% / Chill 刷熬夜追更 5%'
    }
  },
  {
    id: 'spotify',
    name: 'Spotify',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['spotify', '音樂', '串流'],
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
    id: 'youtube-premium',
    name: 'YouTube Premium',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['youtube', 'yt premium', '無廣告', '音樂'],
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
    name: 'Disney+',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['disney', '迪士尼', '漫威', '皮克斯'],
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
      schemeName: '數趣刷 (或 Chill 刷 5%)',
      rate: 3.3,
      note: '數趣刷 3.3% / Chill 刷 5%'
    }
  },

  // ================= 🧋 熱門手搖飲 (台新 Chill 刷 10%) =================
  {
    id: 'fifty-lan',
    name: '50嵐',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['50嵐', '手搖飲', '珍奶', '飲料'],
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
      note: '🔥 切換「Chill 刷」手搖飲享 10% 台新 Point！'
    },
    tips: '買 50嵐直接刷【台新 Richart 卡】切換【Chill 刷】享 10% 神回饋！'
  },
  {
    id: 'de-zheng',
    name: '得正 (Oolong TEA)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['得正', '烏龍茶', '手搖飲', '飲料'],
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
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '喝得正推薦刷【台新 Richart 卡】切換【Chill 刷】享 10% 回饋！'
  },
  {
    id: 'wu-tong-hao',
    name: '五桐號',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['五桐號', '手搖飲', '飲料', '茶凍'],
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
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'gui-ji',
    name: '龜記茗品',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['龜記', '手搖飲', '紅柚翡翠', '飲料'],
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
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'cafein',
    name: 'CAFE!N (硬咖啡)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['cafein', '硬咖啡', '咖啡', '下午茶'],
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
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },

  // ================= 🍲 聚會餐廳 & 火鍋燒肉 (台新 Chill 刷 10%) =================
  {
    id: 'zhan-ji',
    name: '詹記麻辣火鍋',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['詹記', '麻辣鍋', '鴨血', '火鍋', '聚餐'],
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
      schemeName: 'Chill 刷 (歡聚微醺)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    },
    tips: '吃詹記刷【台新 Richart 卡】切換【Chill 刷】享 10% 最狂回饋！'
  },
  {
    id: 'haidilao',
    name: '海底撈火鍋',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['海底撈', '火鍋', '川味', '聚餐'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.3% / 生日月慶生月 10%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (歡聚微醺)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '吃海底撈兩張卡都很神！Richart 卡切【Chill 刷】直接享 10%；生日月 CUBE【慶生月】也享 10%！'
  },
  {
    id: 'uma-bbq',
    name: '屋馬燒肉',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['屋馬', '燒肉', '台中燒肉', '聚餐'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」3.3% / 生日月慶生月 10%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (歡聚微醺)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'chaliu-bbq',
    name: '茶六燒肉堂',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['茶六', '輕井澤', '燒肉', '聚餐'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (歡聚微醺)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'wan-ke-hotpot',
    name: '萬客什鍋',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['萬客什鍋', '萬客', '石頭火鍋', '燒酒雞'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (歡聚微醺)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'second-floor',
    name: '貳樓 (Second Floor Cafe) / 樂子 the Diner',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['貳樓', '樂子', '早午餐', '義大利麵', '美式餐廳'],
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
      schemeName: 'Chill 刷 (歡聚微醺)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },

  // ================= 👟 運動品牌 (台新 Chill 刷 5%) =================
  {
    id: 'adidas',
    name: 'adidas (愛迪達)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['adidas', '愛迪達', '三葉草', '球鞋', '慢跑鞋', '運動服'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (專櫃/生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '在百貨專櫃切「樂饗購」3.3%！生日月在百貨專櫃切「慶生月」享 10%！'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (運動品牌 5%) / 大筆刷 (3.3%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '直營門市切「Chill 刷」享 5.0%！百貨專櫃切「大筆刷」享 3.3%！'
    },
    tips: 'adidas 刷法指南：1. 直營門市刷 Richart「Chill 刷」享 5%！ 2. 生日月在百貨專櫃刷 CUBE「慶生月」享 10%！ 3. 新光三越用「台新 Pay」享 3.8%！ 4. 週末實體刷 Richart「假日刷」享 2%！'
  },
  {
    id: 'nike',
    name: 'Nike (耐吉)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['nike', '耐吉', 'jordan', '球鞋', '運動鞋'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (專櫃/生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '百貨專櫃切「樂饗購」3.3% / 生日月專櫃切「慶生月」10%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (運動品牌 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '直營專賣門市切「Chill 刷」享 5.0%！'
    },
    tips: 'Nike 直營店刷 Richart「Chill 刷」享 5%！在百貨專櫃生日月刷 CUBE「慶生月」拿 10%！'
  },
  {
    id: 'new-balance',
    name: 'New Balance (NB)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['nb', 'new balance', '紐巴倫', '球鞋', '復古鞋'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (專櫃/生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '百貨專櫃切「樂饗購」3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (運動品牌 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '直營店切換「Chill 刷」享 5.0%！'
    }
  },
  {
    id: 'puma',
    name: 'PUMA',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['puma', '彪馬', '運動鞋', '球鞋'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '百貨專櫃切「樂饗購」3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '直營門市切「Chill 刷」享 5.0%'
    }
  },
  {
    id: 'lululemon',
    name: 'lululemon (露露檸檬)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['lululemon', '露露檸檬', '瑜珈褲', '運動服'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (專櫃/生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '百貨專櫃切「樂饗購」3.3% / 生日月慶生月 10%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (5%) / 大筆刷 (3.3%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '直營店切「Chill 刷」享 5.0%！百貨專櫃切「大筆刷」享 3.3%'
    }
  },

  // ================= 🛒 網購電商 =================
  {
    id: 'shopee',
    name: '蝦皮購物 (Shopee)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['shopee', '蝦皮', '蝦皮直送', '網購', '免運'],
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
    tags: ['coupang', '酷澎', '火箭跨境', '火箭速配'],
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
    tags: ['pchome', '3c', '24h', '網購'],
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
    tags: ['taobao', '淘寶', '天貓', '集運', '海外網購'],
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
      note: '切換「玩旅刷」海外消費享 3.3%'
    },
    tips: '淘寶屬於海外交易，Richart 卡切換【玩旅刷】享 3.3%，略勝 CUBE「玩數位」3.0%！'
  },
  {
    id: 'books-com-tw',
    name: '博客來網路書店',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['博客來', '買書', '書店', '網購'],
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

  // ================= 🛵 美食外送 & 連鎖餐飲 =================
  {
    id: 'uber-eats',
    name: 'Uber Eats (優食)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['uber eats', 'ubereats', '外送', '便當', '生鮮'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.3% / 生日月特店 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」外送平台享 3.3%'
    }
  },
  {
    id: 'foodpanda',
    name: 'foodpanda (熊貓外送)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['foodpanda', '熊貓', '外送', '生鮮雜貨'],
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
    name: '星巴克 (Starbucks)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['starbucks', '星巴克', '咖啡', '星禮程'],
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
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'louisa-coffee',
    name: '路易莎咖啡 (Louisa Coffee)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['louisa', '路易莎', '咖啡', '輕食'],
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
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'mcdonalds',
    name: '麥當勞 (McDonald\'s)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['麥當勞', 'mcdonald', '速食', '漢堡', '薯條'],
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
      scheme: 'pay',
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 好饗刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在麥當勞使用台新 Pay 享 3.8%！直刷切換「好饗刷」享 3.3%'
    },
    tips: '在麥當勞結帳用【台新 Pay】綁 Richart 卡拿滿 3.8% 台新 Point！'
  },
  {
    id: 'kfc',
    name: '肯德基 (KFC)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['kfc', '肯德基', '炸雞', '蛋撻', '速食'],
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
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'mos-burger',
    name: '摩斯漢堡 (MOS Burger)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['mos', '摩斯', '摩斯漢堡', '米漢堡', '紅茶'],
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
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'sushiro',
    name: '壽司郎 (Sushiro)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['壽司郎', 'sushiro', '迴轉壽司', '日料'],
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
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'kura-sushi',
    name: '藏壽司 (Kura Sushi)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['藏壽司', 'kura', '扭蛋', '迴轉壽司'],
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
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'wowprime-group',
    name: '王品集團 (王品/西堤/陶板屋/夏慕尼/聚/石二鍋/王品瘋Pay)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['王品', '西堤', '陶板屋', '夏慕尼', '石二鍋', '聚火鍋', '瘋pay'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」3.3% / 生日月慶生特店 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (含王品瘋Pay)',
      rate: 3.3,
      note: '切換「好饗刷」綁定王品瘋Pay享 3.3%'
    }
  },

  // ================= 🏬 百貨購物中心 (獨立單一條目) =================
  {
    id: 'shinkong-mitsukoshi',
    name: '新光三越 (Shin Kong Mitsukoshi - 含 skm pay)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['新光三越', '新光', 'skmpay', '百貨', '信義新天地', '南西新光', '台中新光', '台南新天地'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切「慶生月」10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.0%~3.3%！🎂 8月生日當月切換「慶生月」指定特店享 10% 小樹點！'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 大筆刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在新光三越櫃位打開「台新 Pay」綁 Richart 刷享高達 3.8%！或直刷切換「大筆刷」享 3.3%'
    },
    tips: '新光三越最神刷法：平常用【台新 Pay】綁 Richart 卡（Pay 著刷）享 3.8% 台新 Point；若在 8 月生日當月，則刷 CUBE 卡切換【慶生月】享最高 10% 小樹點！'
  },
  {
    id: 'sogo-department',
    name: '遠東 SOGO 百貨',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['sogo', '遠東sogo', '太平洋sogo', '復興sogo', '忠孝sogo', '天母sogo', '百貨'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切「慶生月」10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.0%~3.3%！🎂 生日月切「慶生月」最高 10%！'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'feds-department',
    name: '遠東百貨 (遠百信義 A13 / 板橋大遠百 / Top City)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['遠百', '遠東百貨', '大遠百', 'a13', '信義a13', '板橋大遠百', '竹北遠百', 'top city'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切「慶生月」10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」3.3% / 生日月切「慶生月」10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'taipei-101',
    name: '台北 101 購物中心',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['101', '台北101', 'taipei 101', '精品', '觀景台'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切「慶生月」10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」3.3% / 生日月切「慶生月」10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'breeze-center',
    name: '微風廣場 (微風信義 / 微風南山 / 微風松高)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['微風', '微風廣場', '微風信義', '微風南山', '微風松高', '微風北車', 'breeze'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切「慶生月」10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」3.3% / 生日月切「慶生月」10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'lalaport-mitsui',
    name: 'LaLaport (南港 / 台中)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['lalaport', '南港lalaport', '台中lalaport', '三井'],
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
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'mitsui-outlet',
    name: 'MITSUI OUTLET PARK (三井 Outlet 林口/台中港/台南)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['三井outlet', 'outlet', '林口三井', '台中港三井', '台南三井'],
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
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定Outlet)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'gloria-outlets',
    name: '華泰名品城 (GLORIA OUTLETS)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['華泰名品城', '華泰', 'outlet', '桃園高鐵', '精品特賣'],
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
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定Outlet)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },

  // ================= 👕 時尚服飾 & 居家 =================
  {
    id: 'uniqlo',
    name: 'UNIQLO (優衣庫)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['uniqlo', '優衣庫', '發熱衣', '羽絨外套', '衣服'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (生日月可切慶生月)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」3.3% / 生日月慶生特店 10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (時尚品味)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'gu-fashion',
    name: 'GU',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['gu', '服飾', '衣服', '時尚'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」3.3%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」3.3%'
    }
  },
  {
    id: 'zara',
    name: 'ZARA',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['zara', '快時尚', '衣服', '女裝', '男裝'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (若在百貨)',
      rate: 3.3,
      note: '在百貨專櫃切「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (時尚品味)',
      rate: 3.3,
      note: 'Richart 切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'ikea',
    name: 'IKEA (宜家家居)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['ikea', '宜家', '家具', '肉丸', '家飾'],
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
      scheme: 'pay',
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 大筆刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在 IKEA 使用台新 Pay 享高達 3.8%！或切換「大筆刷」享 3.3%'
    },
    tips: '在 IKEA 結帳打開【台新 Pay】綁 Richart 卡享 3.8% 最神回饋！'
  },
  {
    id: 'nitori',
    name: '宜得利家居 (NITORI)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['宜得利', 'nitori', '家具', '寢具', '日系居家'],
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
      scheme: 'big_spend',
      schemeName: '大筆刷 (居家裝修)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'testrite',
    name: '特力屋 / HOLA',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['特力屋', 'hola', '五金', '修繕', '居家'],
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
      scheme: 'big_spend',
      schemeName: '大筆刷 (居家裝修)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },

  // ================= 🏪 量販超市 & 超商 =================
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
    id: 'family-mart',
    name: '全家便利商店 (FamilyMart)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['全家', 'familymart', '超商', '咖啡', '霜淇淋', '超商'],
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
      schemeName: 'Pay 著刷 (台新Pay 3.8% / 全盈 2.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在全家打開「台新 Pay」綁 Richart 刷享高達 3.8%！'
    },
    tips: '全家結帳神招：打開【台新 Pay】綁 Richart 卡享 3.8% 台新 Point！'
  },
  {
    id: 'seven-eleven',
    name: '7-ELEVEN (統一超商)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['7-11', '711', 'seven', '統一超商', '超商', 'city cafe'],
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
      note: '在 7-11 使用台新 Pay 享 3.8%！'
    },
    tips: '在 7-11 結帳用【台新 Pay】綁 Richart 卡享 3.8%！'
  },
  {
    id: 'carrefour',
    name: '家樂福 (Carrefour)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['家樂福', 'carrefour', '量販', '大賣場', '超市'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 2.0%~3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (日常採買)',
      rate: 3.3,
      note: '切換「天天刷」量販享 3.3%'
    },
    tips: '逛家樂福刷【台新 Richart 卡】（切換天天刷享 3.3%）回饋率最高！'
  },
  {
    id: 'poya',
    name: '寶雅 (POYA)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['寶雅', 'poya', '美妝', '生活用品', '藥妝'],
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
      scheme: 'everyday',
      schemeName: '天天刷 (藥妝藥局)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'cosmed',
    name: '康是美 (COSMED)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['康是美', 'cosmed', '藥妝', '保健品', '美妝'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選 (或樂饗購)',
      rate: 3.3,
      note: '切換「集精選」或「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 天天刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在康是美使用台新 Pay 享高達 3.8%！'
    },
    tips: '在康是美買藥妝用【台新 Pay】綁 Richart 卡拿 3.8%！'
  },
  {
    id: 'watsons',
    name: '屈臣氏 (Watsons)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['屈臣氏', 'watsons', '藥妝', '美妝', '保健品'],
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
      scheme: 'everyday',
      schemeName: '天天刷 (藥妝藥局)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },

  // ================= 🚆 交通 & 加油 & 叫車 =================
  {
    id: 'high-speed-rail',
    name: '台灣高鐵 (TSR)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['高鐵', '車票', '返鄉', '出差'],
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
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'taiwan-railway',
    name: '臺灣鐵路 (臺鐵)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['台鐵', '臺鐵', '火車', '自強號', '普悠瑪'],
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
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'uber-ride',
    name: 'Uber 叫車',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['uber', '叫車', '計程車', '小黃'],
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
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'taiwan-taxi',
    name: '台灣大車隊 (55688)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['55688', '台灣大車隊', '計程車', '叫車'],
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
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'cpc-gas',
    name: '台灣中油直營加油站',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['中油', '中油直營', '加油', '機車', '汽車', '95', '98'],
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
      note: '切換「天天刷」中油直營享 3.3%'
    },
    tips: '加油首選【台新 Richart 卡】（切換天天刷享 3.3%），略勝 CUBE 集精選 (2.0%~3.0%)！'
  },
  {
    id: 'national-gas',
    name: '全國加油站',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['全國加油站', '全國加油', '加油', '油錢'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (加油充電)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },

  // ================= ✈️ 機票 & 訂房 & 國外 =================
  {
    id: 'japan-offline',
    name: '日本實體門市消費 (BicCamera / 唐吉訶德 / 藥妝 / 實體刷卡)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['日本', '日幣', '出國', '東京', '大阪', '藥妝', '電器', 'biccamera'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'japan',
      schemeName: '日本賞',
      rate: 3.5,
      note: 'CUBE App 切換「日本賞」日本實體門市享最高 3.5% 無上限！'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (或台新Pay+免手續費)',
      rate: 3.3,
      note: '切換「玩旅刷」海外消費享 3.3%（在 Lawson / BicCamera 用台新Pay+ 再享免 1.5% 手續費）'
    },
    tips: '日本實體刷卡首選 CUBE 卡【日本賞】享 3.5% 無上限！若在 BicCamera / Lawson 也可用 Richart 卡綁【台新 Pay+】免 1.5% 海外手續費！'
  },
  {
    id: 'agoda',
    name: 'Agoda (線上訂房)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['agoda', '訂房', '飯店', '住宿', '國外旅遊'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 無上限'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」訂房平台享 3.3%'
    }
  },
  {
    id: 'klook',
    name: 'Klook (客路)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['klook', '客路', '門票', '一日遊', '行程', 'sim卡'],
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
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    }
  },
  {
    id: 'kkday',
    name: 'KKday',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['kkday', '票券', '行程', '一日遊', '網卡'],
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
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    }
  },
  {
    id: 'eva-air',
    name: '長榮航空 (EVA Air)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['長榮', 'eva', '機票', '航空', '出國'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」航空公司享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    },
    tips: '買機票兩張卡皆享 3.3%（CUBE 趣旅行 / Richart 玩旅刷），CUBE 刷機票附帶高額旅平險。'
  },
  {
    id: 'china-airlines',
    name: '中華航空 (China Airlines)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['華航', '中華航空', '機票', '出國'],
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
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    }
  },
  {
    id: 'starlux-airlines',
    name: '星宇航空 (STARLUX Airlines)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['星宇', 'starlux', '張國煒', '機票', '出國'],
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
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    }
  },

  // ================= 💳 常用支付工具 =================
  {
    id: 'line-pay',
    name: 'LINE Pay (連線商業)',
    category: 'mobile_pay',
    categoryLabel: '行動支付',
    tags: ['linepay', 'line pay', '掃碼', '行動支付', '超商', '手搖', '連線'],
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
    tags: ['taishinpay', '台新pay', '全家', '7-11', '掃碼支付', '新光三越', 'ikea', '康是美'],
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

  // ================= 🛒 一般通用消費 =================
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
