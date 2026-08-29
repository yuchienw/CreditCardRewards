import type { Merchant } from '../types/merchant';

const TAISHIN_OFFICIAL_URL = 'https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html';
const CATHAY_OFFICIAL_URL = 'https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list';

export const MERCHANTS: Merchant[] = [
  // =========================================================================
  // 🎮 1. 遊戲娛樂、AI 與線上訂閱
  // =========================================================================
  {
    id: 'playstation',
    name: 'PlayStation (PSN / PS Store)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['psn', 'ps5', 'ps4', '索尼', '主機遊戲', 'sony', 'playstation', '遊戲'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (🎂生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月切換「慶生月」官方特店享 10% 小樹點！平日切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
    tips: '生日當月買遊戲或課金首選 CUBE 卡【慶生月】拿滿 10%！平日兩張卡切換對應方案皆為 3.3%。'
  },
  {
    id: 'nintendo',
    name: 'Nintendo eShop (任天堂)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['switch', '任天堂', 'eshop', '瑪利歐', '薩爾達', 'nintendo', '主機遊戲'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (🎂生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 生日月切換「慶生月」官方特店享 10%！平日切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
    tips: 'Switch 數位版遊戲，8 月生日當月刷 CUBE【慶生月】10%；平日兩張卡皆享 3.3%。'
  },
  {
    id: 'steam',
    name: 'Steam (PC 遊戲平台)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['steam', 'pc遊戲', 'valve', '特賣', '遊戲'],
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
    id: 'mycard',
    name: 'MyCard / 遊戲橘子 (GASH)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['mycard', 'gash', '遊戲橘子', '點數卡', '課金'],
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
    tags: ['chatgpt', 'openai', 'ai', 'gpt-4o', 'plus', '訂閱'],
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
      schemeName: '數趣刷 (AI 服務)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'claude',
    name: 'Claude (Anthropic AI 訂閱)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['claude', 'anthropic', 'ai', 'sonnet', 'opus'],
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
      schemeName: '數趣刷 (AI 服務)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['notion', '筆記', '生產力', 'ai', '訂閱'],
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
      schemeName: '數趣刷 (AI 服務)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'canva',
    name: 'Canva / Perplexity',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['canva', 'perplexity', '設計', 'ai', '搜尋'],
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
      schemeName: '數趣刷 (AI 服務)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'apple-services',
    name: 'Apple 直營店 / Apple 官網 / App Store',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['apple', '蘋果', 'iphone', 'mac', 'ipad', 'app store', '直營店'],
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
      scheme: 'chill',
      schemeName: 'Chill 刷 (數位外掛 3.3%) / 數趣刷',
      rate: 3.3,
      note: '切換「Chill 刷」或「數趣刷」享 3.3%'
    }
  },
  {
    id: 'samsung-official',
    name: 'Samsung 三星智慧館 / 三星商城',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['samsung', '三星', 'galaxy', '手機'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (數位外掛)',
      rate: 3.3,
      isChillSpecial: true,
      note: '切換「Chill 刷」享 3.3%'
    }
  },
  {
    id: 'dji-gopro',
    name: 'DJI / Insta360 / GoPro / Studio A',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['dji', 'insta360', 'gopro', 'studio a', '空拍機', '相機'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (數位外掛)',
      rate: 3.3,
      isChillSpecial: true,
      note: '切換「Chill 刷」享 3.3%'
    }
  },

  // =========================================================================
  // 📺 2. 影音串流平台 & 線上課程
  // =========================================================================
  {
    id: 'netflix',
    name: 'Netflix',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['netflix', '網飛', '追劇', '影集', '串流'],
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
      note: '切換「數趣刷」享 3.3%（限時 Chill 刷 5%）'
    }
  },
  {
    id: 'disney-plus',
    name: 'Disney+',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['disney', '迪士尼', '漫威', '皮克斯', '星戰'],
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
      note: '切換「數趣刷」3.3%'
    }
  },
  {
    id: 'spotify',
    name: 'Spotify',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['spotify', '音樂', '串流', '訂閱'],
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
    tags: ['youtube', 'yt', '無廣告', '影片', '串流'],
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
    id: 'bahamut-anime',
    name: '巴哈姆特動畫瘋 / 愛爾達 ELTA',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['巴哈姆特', '動畫瘋', '愛爾達', 'elta', '動漫', '體育'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (熬夜追更 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'online-courses',
    name: 'Hahow / 知識衛星 / AmazingTalker / PressPlay',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['hahow', '知識衛星', 'amazingtalker', 'pressplay', '線上課程', '學英文'],
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
      schemeName: '數趣刷 (線上課程)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },

  // =========================================================================
  // 🧋 3. 手搖飲、咖啡廳 (台新 Chill 刷 10%)
  // =========================================================================
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
      schemeName: 'Chill 刷 (日常續命 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 Richart Life 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '買 50嵐直接刷【台新 Richart 卡】切換【Chill 刷】享 10% 狂飆回饋！'
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
      schemeName: 'Chill 刷 (日常續命 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '喝得正刷【台新 Richart 卡】切換【Chill 刷】享 10% 神回饋！'
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
      schemeName: 'Chill 刷 (日常續命 10%)',
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
      schemeName: 'Chill 刷 (日常續命 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'ug-tea',
    name: 'UG TEA / 叮哥茶飲 / COMPOSE COFFEE',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['ug tea', '叮哥茶飲', 'compose coffee', '手搖', '飲料'],
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
      schemeName: 'Chill 刷 (日常續命 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'cafein',
    name: 'CAFE!N (硬咖啡) / %Arabica',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['cafein', '硬咖啡', 'arabica', '咖啡', '下午茶'],
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
      schemeName: 'Chill 刷 (日常續命 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
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
    name: '路易莎咖啡 (Louisa Coffee) / 客美多咖啡',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['louisa', '路易莎', '客美多', '咖啡', '輕食'],
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

  // =========================================================================
  // 🍲 4. 火鍋燒肉、聚餐與飯店 (台新 Chill 刷 10% / 好饗刷 3.3%)
  // =========================================================================
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
      schemeName: 'Chill 刷 (歡聚微醺 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '吃詹記刷【台新 Richart 卡】切換【Chill 刷】享 10% 狂飆回饋！'
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
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (歡聚微醺 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '吃海底撈必刷【台新 Richart 卡】切換【Chill 刷】享 10% 回饋！'
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
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (歡聚微醺 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'chaliu-bbq',
    name: '茶六燒肉堂 / 碳佐麻里 / 燒肉政宗 / 新村站著吃',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['茶六', '碳佐麻里', '燒肉政宗', '新村站著吃', '燒肉', '聚餐'],
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
      schemeName: 'Chill 刷 (歡聚微醺 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'wan-ke-hotpot',
    name: '萬客什鍋 / 雞湯大叔',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['萬客什鍋', '萬客', '雞湯大叔', '火鍋', '石頭火鍋'],
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
      schemeName: 'Chill 刷 (歡聚微醺 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'bistro-bars',
    name: '貳樓 / 樂子 / gonna共樂遊 / BRUN不然 / 臺虎精釀 / Draft Land',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['貳樓', '樂子', 'gonna', 'brun不然', '臺虎精釀', 'draft land', '餐酒館', '早午餐'],
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
      schemeName: 'Chill 刷 (歡聚微醺 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 回饋！'
    }
  },
  {
    id: 'inparadise-buffet',
    name: '饗饗 INPARADISE / NAGOMI 和食饗宴',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['饗饗', 'nagomi', 'buffet', '吃到飽', '約會', '頂級百匯'],
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
      schemeName: 'Chill 刷 (約會犒賞 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
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
    name: '摩斯漢堡 (MOS Burger) / 漢堡王',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['mos', '摩斯', '摩斯漢堡', '漢堡王', '速食'],
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
    name: '壽司郎 (Sushiro) / 藏壽司 / 爭鮮',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['壽司郎', 'sushiro', '藏壽司', '爭鮮', '迴轉壽司', '日料'],
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
      schemeName: '樂饗購 (指定旗艦店生日特店10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」3.3% / 官方指定旗艦店慶生月 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (含王品瘋Pay)',
      rate: 3.3,
      note: '切換「好饗刷」綁定王品瘋Pay享 3.3%'
    }
  },
  {
    id: 'star-hotels-dining',
    name: '晶華酒店 / 台北萬豪 / 君悅 / 老爺 / 雲朗 / 煙波 / 漢來',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['晶華', '萬豪', '君悅', '老爺', '雲朗', '煙波', '漢來', '飯店住宿', '飯店餐飲'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (晶華等指定飯店慶生特店10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」3.3% / 晶華等官方特店生日月 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (指定飯店 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」指定飯店享 3.3%'
    }
  },
  {
    id: 'ktv-cashbox',
    name: '錢櫃 KTV / 好樂迪 / ONCOR / sing!go / 享溫馨',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['錢櫃', '好樂迪', 'oncor', 'singgo', '享溫馨', 'ktv', '唱歌'],
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
      schemeName: '好饗刷 (指定KTV)',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'ticketing-tixcraft',
    name: '拓元售票 / KKTIX / 年代售票 / 寬宏售票 / OPENTIX兩廳院',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['拓元', 'kktix', '年代售票', '寬宏', 'opentix', '兩廳院', '演唱會', '門票'],
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
      schemeName: '好饗刷 (購票娛樂)',
      rate: 3.3,
      note: '切換「好饗刷」購票享 3.3%'
    }
  },

  // =========================================================================
  // 🛵 5. 外送平台
  // =========================================================================
  {
    id: 'uber-eats',
    name: 'Uber Eats (優食)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['uber eats', 'ubereats', '外送', '便當', '生鮮雜貨'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂生日月特店可達 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.3% / 生日月官方特店享 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (外送平台)',
      rate: 3.3,
      note: '切換「好饗刷」外送平台享 3.3%'
    },
    tips: '叫外送平日兩張卡皆享 3.3%（CUBE 樂饗購 / Richart 好饗刷）；8 月生日月若 CUBE 特店加碼享 10%！'
  },
  {
    id: 'foodpanda',
    name: 'foodpanda (熊貓外送)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['foodpanda', '熊貓', '外送', '熊貓超市', '生鮮'],
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
      schemeName: '好饗刷 (外送平台)',
      rate: 3.3,
      note: '切換「好饗刷」外送平台享 3.3%'
    }
  },

  // =========================================================================
  // 🏬 6. 百貨購物中心、Outlet (獨立單一條目)
  // =========================================================================
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
      schemeName: '樂饗購 (🎂生日月慶生月 10%)',
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
    name: '遠東 SOGO 百貨 (忠孝/復興/敦化/天母/中壢/新竹/高雄)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['sogo', '遠東sogo', '太平洋sogo', '復興sogo', '忠孝sogo', '天母sogo', '百貨'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.0%~3.3%！🎂 8月生日當月切換「慶生月」專屬加碼最高 10%！'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定百貨)',
      rate: 3.3,
      note: 'Richart Life 切換「大筆刷」享 3.3% 台新 Point'
    },
    tips: '在 SOGO 百貨：生日當月首選 CUBE 卡【慶生月】10%！平日兩張卡切換對應方案（CUBE 樂饗購 3.3% / Richart 大筆刷 3.3%）皆享 3.3% 高回饋。'
  },
  {
    id: 'feds-department',
    name: '遠東百貨 (遠百信義 A13 / 板橋大遠百 / 遠百竹北 / Top City 台中大遠百)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['遠百', '遠東百貨', '大遠百', 'a13', '信義a13', '板橋大遠百', '竹北遠百', 'top city'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.0%~3.3%！🎂 生日月切換「慶生月」享 10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定百貨)',
      rate: 3.3,
      note: 'Richart Life 切換「大筆刷」享 3.3%'
    },
    tips: '逛遠東百貨：生日月刷 CUBE 卡【慶生月】享 10%；平日刷 CUBE「樂饗購」或 Richart「大筆刷」均享 3.3%。'
  },
  {
    id: 'taipei-101',
    name: '台北 101 購物中心 (Taipei 101 Mall)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['101', '台北101', 'taipei 101', '精品', '觀景台', '信義區'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.0%~3.3%！🎂 生日月切換「慶生月」享 10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定百貨)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
    tips: '在 101 購物或用餐：生日當月刷 CUBE【慶生月】10% 最划算；平日刷 CUBE「樂饗購」3.3% 或 Richart「大筆刷」3.3%。'
  },
  {
    id: 'breeze-center',
    name: '微風廣場 / 微風信義 / 微風南山 / 微風松高 / 微風台北車站',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['微風', '微風廣場', '微風信義', '微風南山', '微風松高', '微風北車', 'breeze'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂生日月慶生月 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.0%~3.3%！🎂 生日月切換「慶生月」享 10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定百貨)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
    tips: '逛微風各館：生日月刷 CUBE「慶生月」10%；平日刷 CUBE「樂饗購」或 Richart「大筆刷」皆享 3.3%。'
  },
  {
    id: 'lalaport-mitsui',
    name: 'Mitsui Shopping Park LaLaport (南港 / 台中)',
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
      note: '切換「樂饗購」享 3.0%~3.3%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定百貨)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'hanshin-department',
    name: '漢神百貨 / 漢神巨蛋 / 漢神洲際',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['漢神', '漢神巨蛋', '漢神百貨', '漢神洲際', '高雄百貨'],
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
      schemeName: '大筆刷 (指定百貨)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'eslite-living',
    name: '誠品生活 (含誠品線上) / 京站時尚廣場 / 夢時代 / 統一時代 / 中友百貨',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['誠品生活', '誠品線上', '京站', '夢時代', '統一時代', '中友百貨', '三創生活', '南紡購物中心'],
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
      schemeName: '大筆刷 (指定百貨)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'mitsui-outlet',
    name: 'MITSUI OUTLET PARK (三井 Outlet 林口 / 台中港 / 台南)',
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
    name: '華泰名品城 (GLORIA OUTLETS) / SKM Park Outlets',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['華泰名品城', '華泰', 'skm park', 'outlet', '桃園高鐵', '高雄草衙'],
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

  // =========================================================================
  // 👟 7. 運動品牌、時尚服飾與健身 (台新 Chill 刷 5% / 大筆刷 3.3%)
  // =========================================================================
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
      schemeName: '樂饗購 (專櫃門市)',
      rate: 3.3,
      note: '在百貨專櫃切「樂饗購」3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (運動品牌 5%) / 大筆刷 (3.3%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '直營門市切「Chill 刷」享 5.0%！百貨專櫃切「大筆刷」享 3.3%！'
    },
    tips: 'adidas 刷法：直營專賣店刷 Richart「Chill 刷」享 5.0%！在百貨專櫃平日刷 3.3% / 生日月 CUBE「慶生月」享 10%！'
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
      schemeName: '樂饗購',
      rate: 3.3,
      note: '百貨專櫃切「樂饗購」3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (運動品牌 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '直營專賣門市切「Chill 刷」享 5.0%！'
    },
    tips: 'Nike 直營店刷 Richart「Chill 刷」享 5.0%！'
  },
  {
    id: 'new-balance',
    name: 'New Balance (NB) / PUMA / Onitsuka Tiger / HOKA / Salomon',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['nb', 'new balance', 'puma', 'hoka', 'salomon', '鬼塚虎', '球鞋', '跑鞋'],
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
      schemeName: 'Chill 刷 (運動品牌 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '直營店切換「Chill 刷」享 5.0%！'
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
      schemeName: '樂饗購',
      rate: 3.3,
      note: '百貨專櫃切「樂饗購」3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (5%) / 大筆刷 (3.3%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '直營店切「Chill 刷」享 5.0%！百貨專櫃切「大筆刷」享 3.3%'
    }
  },
  {
    id: 'fitness-gyms',
    name: '健身工廠 / World Gym / Anytime Fitness / 超核心 / 17FIT',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['健身房', '健身工廠', 'world gym', 'anytime fitness', '超核心', '皮拉提斯', '運動'],
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
      schemeName: 'Chill 刷 (體態養成 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'uniqlo',
    name: 'UNIQLO (優衣庫)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['uniqlo', '優衣庫', '發熱衣', '羽絨外套', '衣服', '服飾'],
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
      schemeName: '大筆刷 (時尚品味)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'gu-zara-net',
    name: 'GU / ZARA / NET',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['gu', 'zara', 'net', '快時尚', '衣服', '女裝', '男裝'],
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
      schemeName: '大筆刷 (NET用台新Pay享3.8%)',
      rate: 3.8,
      note: 'NET用台新Pay享 3.8%，其他切換「大筆刷」享 3.3%'
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
    id: 'nitori-testrite',
    name: '宜得利家居 (NITORI) / 特力屋 / HOLA / 瑪黑家居',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['宜得利', 'nitori', '特力屋', 'hola', '瑪黑家居', '家具', '居家修繕'],
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

  // =========================================================================
  // 🛒 8. 網購電商與海外購物 (數趣刷 / 玩數位 3.3%)
  // =========================================================================
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
    id: 'amazon-global',
    name: 'Amazon (美亞/日亞) / iHerb / Olive Young / SHEIN / Farfetch',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['amazon', '亞馬遜', 'iherb', 'olive young', 'shein', 'farfetch', '海外購物'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (或趣旅行)',
      rate: 3.3,
      note: '切換「玩數位」3.3%'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷 (或玩旅刷)',
      rate: 3.3,
      note: '切換「數趣刷」或「玩旅刷」享 3.3%'
    }
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

  // =========================================================================
  // 🏪 9. 超商、量販超市與藥妝藥局
  // =========================================================================
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
    id: 'family-mart',
    name: '全家便利商店 (FamilyMart)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['全家', 'familymart', '超商', '咖啡', '霜淇淋'],
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
    id: 'lopia-donki',
    name: 'LOPIA / 唐吉訶德 (DON DON DONKI) / 大買家 / 萬家福',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['lopia', '唐吉訶德', 'donki', '大買家', '萬家福', '超市', '日系超市'],
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
      schemeName: '天天刷 (日常採買 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
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
    id: 'watsons-pharmacies',
    name: '屈臣氏 (Watsons) / 大樹藥局 / 杏一醫療 / 丁丁藥局',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['屈臣氏', 'watsons', '大樹藥局', '杏一醫療', '丁丁藥局', '藥局', '保健品'],
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
      schemeName: '天天刷 (藥妝藥局 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%（大樹藥局用台新Pay享3.8%）'
    }
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

  // =========================================================================
  // 🚆 10. 交通通勤、加油充電與叫車 (天天刷 / 趣旅行 3.3%)
  // =========================================================================
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
    id: 'taxi-fleet',
    name: '台灣大車隊 (55688) / LINE GO / yoxi / 台灣Bolt',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['55688', '台灣大車隊', 'line go', 'yoxi', 'bolt', '計程車', '叫車'],
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
    id: 'national-gas-charging',
    name: '全國加油站 / 源點EVOASIS / 華城電能EVALUE / Autopass車麻吉',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['全國加油站', 'evoasis', 'evalue', 'autopass', '車麻吉', '加油', '充電樁', '電動車'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選 (全國加油)',
      rate: 3.0,
      note: '切換「集精選」享 3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (加油充電 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },

  // =========================================================================
  // ✈️ 11. 日本消費、航空機票與國外旅遊 (日本賞 3.5% / 玩旅刷 3.3%)
  // =========================================================================
  {
    id: 'japan-offline',
    name: '日本實體門市 (唐吉訶德/BicCamera/松本清/大國藥妝/Lawson)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['日本', '日幣', '出國', '東京', '大阪', '藥妝', '電器', 'biccamera', 'lawson', '松本清'],
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
    id: 'foreign-offline-online',
    name: '海外實體門市消費 / 國外線上外幣交易 (含歐洲實體)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['國外刷卡', '外幣', '海外實體', '歐洲', '美金', '日幣', '出國'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (海外實體 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」海外實體享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (海外消費 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」海外實體及線上交易享 3.3%'
    }
  },
  {
    id: 'airlines-global',
    name: '全球航空公司機票 (長榮/華航/星宇/虎航/國泰/日航/樂桃/酷航/新航/阿聯酋)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['機票', '長榮', '華航', '星宇', '虎航', '國泰航空', '日航', '樂桃', '酷航', '新航', '阿聯酋', '航空', '出國'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」航空公司機票享 3.3% 無上限'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    },
    tips: '買機票兩張卡皆享 3.3%（CUBE 趣旅行 / Richart 玩旅刷），CUBE 刷機票附帶高額旅平險。'
  },
  {
    id: 'hotel-booking-platforms',
    name: '訂房平台 (Agoda / Booking.com / Trip.com / Airbnb / Hotels.com)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['agoda', 'booking', 'trip.com', 'airbnb', 'hotels.com', '訂房', '住宿', '飯店'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」訂房享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」訂房平台享 3.3%'
    }
  },
  {
    id: 'klook-kkday',
    name: '旅遊體驗行程票券 (Klook / KKday)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['klook', 'kkday', '行程', '門票', '一日遊', '網卡', '票券'],
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
    id: 'travel-agencies',
    name: '旅行社 (雄獅旅遊 / 易遊網 / 東南旅遊 / 可樂旅遊 / 喜鴻 / 加利利)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['雄獅', '易遊網', '東南旅遊', '可樂旅遊', '喜鴻', '加利利', '旅行社', '跟團', '自由行'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」旅行社享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」旅行社享 3.3%'
    }
  },

  // =========================================================================
  // 📱 12. 行動支付與特殊方案 (Pay著刷 3.8%/2.3%)
  // =========================================================================
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
    name: '台新 Pay (全家/7-11/新光三越/康是美/IKEA/NET/神腦/燦坤/全國電子/大樹藥局)',
    category: 'mobile_pay',
    categoryLabel: '行動支付',
    tags: ['taishinpay', '台新pay', '全家', '7-11', '掃碼支付', '新光三越', 'ikea', '康是美', '燦坤', '全國電子', '神腦'],
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
      schemeName: 'Pay 著刷 (台新 Pay 3.8%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: 'Richart Life 切換「Pay 著刷」使用台新 Pay 享高達 3.8% 回饋！'
    },
    tips: '🔥 能使用「台新 Pay」的地方（全家、7-11、新光三越、康是美、IKEA、燦坤、全國電子），Richart 卡切換【Pay 著刷】享 3.8% 最頂回饋！'
  },

  // =========================================================================
  // 🛒 13. 一般通用消費 (未列出店家保底)
  // =========================================================================
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
