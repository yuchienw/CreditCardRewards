import type { Merchant } from '../types/merchant';

const TAISHIN_OFFICIAL_URL = 'https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html';
const CATHAY_OFFICIAL_URL = 'https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list';

export const MERCHANTS: Merchant[] = [
  // =========================================================================
  // 🎮 遊戲主機、AI 與數位 3C
  // =========================================================================
  {
    id: 'playstation',
    name: 'PlayStation (PSN 數位商城)',
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
    name: 'Nintendo eShop (任天堂商城)',
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
    name: 'Steam',
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
    name: 'MyCard 點數卡',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['mycard', '智冠', '點數卡', '課金'],
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
    id: 'gash-gamania',
    name: '遊戲橘子 (GASH)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['gash', '遊戲橘子', '天堂', '楓之谷', '點數卡'],
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
    name: 'ChatGPT (OpenAI)',
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
    name: 'Claude (Anthropic)',
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
    name: 'Canva',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['canva', '設計', '簡報', '修圖'],
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
    id: 'perplexity',
    name: 'Perplexity AI',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['perplexity', 'ai', '搜尋', '訂閱'],
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
    id: 'apple-store-online',
    name: 'Apple 直營店與官方商城',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['apple', '蘋果', 'iphone', 'mac', 'ipad', '直營店', '101直營店', 'a13直營店'],
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
      schemeName: 'Chill 刷 (數位外掛 3.3%)',
      rate: 3.3,
      note: '切換「Chill 刷」或「數趣刷」享 3.3%'
    }
  },
  {
    id: 'apple-app-store',
    name: 'App Store (Apple 訂閱與課金)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['app store', 'icloud', 'apple music', '蘋果課金', 'ios訂閱', 'apple內購', '蘋果內購'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (3.3%)',
      rate: 3.3,
      note: '切換「玩數位」享 3.0%~3.3% 小樹點（Apple 媒體服務官方特店）'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '一般消費 (1.0%) / 假日刷 (2.0%)',
      rate: 1.0,
      note: '非台新數趣刷特店，平日一般消費 1.0% / 週末假日刷 2.0%'
    },
    tips: 'Apple 內購與訂閱（App Store、iCloud+、Apple Music、iOS 遊戲課金等）為國泰 CUBE 卡【玩數位】官方指定特店，享 3.0%~3.3% 小樹點！台新 Richart 卡未列入加碼（僅一般消費 1.0% / 假日 2.0%），因此絕對首選 CUBE 卡！'
  },
  {
    id: 'samsung-official',
    name: 'Samsung 三星智慧館與線上商城',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['samsung', '三星', 'galaxy', '手機', '平板'],
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
      schemeName: 'Chill 刷 (數位外掛 3.3%)',
      rate: 3.3,
      isChillSpecial: true,
      note: '切換「Chill 刷」享 3.3%'
    }
  },
  {
    id: 'studio-a',
    name: 'Studio A (Straight A)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['studio a', 'straight a', '蘋果經銷', 'apple'],
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
      schemeName: 'Chill 刷 (數位外掛 3.3%)',
      rate: 3.3,
      isChillSpecial: true,
      note: '切換「Chill 刷」享 3.3%'
    }
  },
  {
    id: 'dji',
    name: 'DJI (大疆創新)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['dji', '大疆', '空拍機', 'pocket', 'action', '穩定器'],
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
      schemeName: 'Chill 刷 (數位外掛 3.3%)',
      rate: 3.3,
      isChillSpecial: true,
      note: '切換「Chill 刷」享 3.3%'
    }
  },
  {
    id: 'insta360',
    name: 'Insta360',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['insta360', '全景相機', '運動相機', 'x4', 'ace pro'],
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
      schemeName: 'Chill 刷 (數位外掛 3.3%)',
      rate: 3.3,
      isChillSpecial: true,
      note: '切換「Chill 刷」享 3.3%'
    }
  },
  {
    id: 'gopro',
    name: 'GoPro',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['gopro', '運動相機', 'hero', '潛水相機'],
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
      schemeName: 'Chill 刷 (數位外掛 3.3%)',
      rate: 3.3,
      isChillSpecial: true,
      note: '切換「Chill 刷」享 3.3%'
    }
  },

  // =========================================================================
  // 📺 影音串流平台與線上課程
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
    name: '巴哈姆特動畫瘋',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['巴哈姆特', '動畫瘋', '動漫', '新番'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '慶生月 (10%) / 玩數位 (3.3%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      birthdayRate: 10.0,
      note: '🎂 8月生日當月切換「慶生月」享 10% 小樹點！平日切換「玩數位」享 3.3%'
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
    id: 'elta-tv',
    name: '愛爾達 ELTA TV',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['愛爾達', 'elta', '體育', '奧運', 'nba', 'mlb', '轉播'],
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
    id: 'hahow',
    name: 'Hahow 好學校',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['hahow', '好學校', '線上課程', '學程式', '投資'],
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
      schemeName: '數趣刷 (線上課程 3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'sat-knowledge',
    name: '知識衛星 (SAT. Knowledge)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['知識衛星', 'sat knowledge', '線上課程', '精品課程'],
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
      schemeName: '數趣刷 (線上課程 3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'amazing-talker',
    name: 'AmazingTalker',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['amazingtalker', '英文家教', '家教', '一對一', '學語言'],
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
      schemeName: '數趣刷 (線上課程 3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'tutor-abc',
    name: 'TutorABC',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['tutorabc', '學英文', '線上英文', '外師'],
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
      schemeName: '數趣刷 (線上課程 3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'pressplay',
    name: 'PressPlay (PPA 線上課程)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['pressplay', 'ppa', '線上課程', '烘焙', '訂閱專欄'],
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
      schemeName: '數趣刷 (線上課程 3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },

  // =========================================================================
  // 🧋 熱門手搖飲與咖啡廳
  // =========================================================================
  {
    id: 'fifty-lan',
    name: '50嵐',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['50嵐', '手搖飲', '珍奶', '飲料', '1號'],
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
    tags: ['得正', '烏龍茶', '手搖飲', '飲料', '春烏龍'],
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
    name: 'UG TEA',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['ug tea', '手搖飲', '飲料', '東區'],
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
    id: 'ding-go-tea',
    name: '叮哥茶飲',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['叮哥茶飲', '叮哥', '台東飲料', '洛神花茶'],
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
    name: 'CAFE!N (硬咖啡)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['cafein', '硬咖啡', '咖啡', '吐司'],
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
    id: 'arabica-coffee',
    name: '%Arabica 咖啡',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['arabica', '象山', '京都咖啡', '拿鐵'],
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
    id: 'compose-coffee',
    name: 'COMPOSE COFFEE',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['compose coffee', '韓國咖啡', '平價咖啡'],
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
    tags: ['starbucks', '星巴克', '咖啡', '星禮程', '星冰樂'],
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
    tags: ['louisa', '路易莎', '咖啡', '輕食', '三明治'],
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
    id: 'komeda-coffee',
    name: '客美多咖啡 (Komeda\'s Coffee)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['客美多', 'komeda', '名古屋咖啡', '早餐', '吐司'],
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
  // 🍲 火鍋、燒肉、特色餐飲、王品與瓦城集團各獨立餐廳
  // =========================================================================
  {
    id: 'dashu-jiushi',
    name: '大叔酒食 (炭火串燒居酒屋)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['大叔酒食', '大叔富弟', '串燒', '居酒屋', '新竹居酒屋', '東門國小'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    }
  },
  {
    id: 'dashu-yakiniku',
    name: '大叔燒肉 (新竹總店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['大叔燒肉', '大叔富弟', '新竹燒肉', '北大路燒肉', '老字號燒肉'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    }
  },

  // --- 饗賓餐旅集團旗下各獨立餐廳 ---
  {
    id: 'xiang-a-joy',
    name: '饗 A Joy (台北 101 頂級高空 Buffet)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['饗a joy', 'ajoy', '台北101', '全台最貴buffet', '頂級吃到飽', '約會'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點（⚠️ 非慶生月特店，切勿切換慶生月）'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (狂歡聚會 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '吃饗 A Joy 唯一首選【台新 Richart 卡】切換【Chill 刷】享 10% 狂飆回饋！國泰 CUBE 卡請切換【樂饗購】享 3.3%（非慶生特店切換慶生月僅 0.3%）。'
  },
  {
    id: 'xiang-xiang',
    name: '饗饗 (INPARADISE 頂級自助百匯)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['饗饗', 'inparadise', '微風信義', '新莊饗饗', '頂級buffet', '吃到飽'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點（⚠️ 非慶生特店）'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (瘋聚會 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '吃饗饗首選【台新 Richart 卡】切換【Chill 刷】享 10% 超高回饋！CUBE 卡切換【樂饗購】享 3.3%。'
  },
  {
    id: 'xuji-buffet',
    name: '旭集 (和食集錦日料 Buffet)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['旭集', '和食集錦', '遠百信義a13', '日料吃到飽', '生魚片', '烤香魚'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (瘋聚會 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '吃旭集首選【台新 Richart 卡】切換【Chill 刷】享 10% 超高回饋！'
  },
  {
    id: 'eatogether',
    name: '饗食天堂 (自助美饌)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['饗食天堂', 'eatogether', 'buffet', '吃到飽', '聚餐', '生日'],
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
    id: 'fruitful-food',
    name: '果然匯 (多國蔬食 Buffet)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['果然匯', '蔬食吃到飽', '素食buffet', '健康素食'],
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
    id: 'kaifun',
    name: '開飯川食堂',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['開飯川食堂', '開飯', '川菜', '聚餐', '饗賓集團'],
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
    id: 'siam-more',
    name: '饗泰多 (Siam More 泰式風格餐廳)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['饗泰多', 'siam more', '泰式料理', '月亮蝦餅', '饗賓集團'],
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
    id: 'zhenzhu-taiwan',
    name: '真珠 (台灣佳味台菜餐廳)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['真珠', '台灣佳味', '台菜', '經典台菜', '饗賓集團'],
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
    id: 'xiaofu-hotpot',
    name: '小福利麻辣鍋 (火鍋吃到飽)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['小福利', '小福利麻辣鍋', '麻辣鍋吃到飽', '饗賓集團'],
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

  // --- 漢來美食集團旗下各獨立餐廳 ---
  {
    id: 'island-buffet',
    name: '島語自助餐廳 (台北漢來大飯店頂級 Buffet)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['島語', '島語自助餐廳', '台北漢來', '南港buffet', '頂級海鮮吃到飽'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'hilai-harbour',
    name: '漢來海港餐廳 (Harbour Buffet)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['漢來海港', '海港餐廳', '海鮮吃到飽', 'buffet', '敦化sogo', '天母sogo'],
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
    id: 'hilai-celebrity-square',
    name: '漢來名人坊 (米其林星級頂級粵菜)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['漢來名人坊', '名人坊', '富哥', '米其林星級', '頂級粵菜', '世貿聯誼社'],
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
    id: 'hilai-vegetarian',
    name: '漢來蔬食',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['漢來蔬食', '精緻素食', '蔬食飲茶', '忠孝sogo'],
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
    id: 'hilai-dumpling',
    name: '漢來上海湯包',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['漢來上海湯包', '小籠湯包', '上海點心', '排骨蛋炒飯'],
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
    id: 'liuliu-fish',
    name: '溜溜酸菜魚專賣店',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['溜溜酸菜魚', '溜溜', '酸菜魚', '漢來美食', '巨蛋美食'],
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
    id: 'shang-cai-duck',
    name: '上菜 (片皮鴨專賣店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['上菜', '片皮鴨', '烤鴨專賣', '漢來美食', '竹北遠百', '桃園台茂'],
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

  // --- 築間餐飲集團旗下各獨立餐廳 ---
  {
    id: 'jhujian-hotpot',
    name: '築間幸福鍋物',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['築間', '築間幸福鍋物', '石頭火鍋', '蔬菜吃到飽', '宵夜火鍋'],
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
    id: 'yakiniku-smile',
    name: '燒肉 Smile (個人燒肉)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['燒肉smile', 'smile燒肉', '個人燒肉', '一人燒肉', '築間集團'],
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
    id: 'youzhi-wagyu',
    name: '有之和牛鍋物放題',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['有之和牛', '和牛吃到飽', '火鍋放題', '築間集團'],
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
    id: 'benge-wagyu',
    name: '本格和牛燒肉放題',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['本格和牛', '本格和牛燒肉', '燒肉吃到飽', '築間集團'],
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
    id: 'jhujian-suancaiyu',
    name: '築間酸菜魚',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['築間酸菜魚', '酸菜魚', '築間集團', '總督魚'],
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

  // --- 馬辣集團旗下各獨立餐廳 ---
  {
    id: 'mala-hotpot',
    name: '馬辣頂級麻辣鴛鴦火鍋',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['馬辣', '馬辣火鍋', '麻辣鍋吃到飽', '哈根達斯吃到飽', '西門馬辣', '公館馬辣'],
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
    id: 'new-mala-hotpot',
    name: '新馬辣經典麻辣鍋',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['新馬辣', '新馬辣經典麻辣鍋', '和牛吃到飽', '海鮮吃到飽'],
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
    id: 'new-mala-plus',
    name: '新馬辣經典麻辣鍋 Plus+',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['新馬辣plus', '新馬辣plus+', '頂級和牛吃到飽', '松菸新馬辣', '信義遠百新馬辣'],
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
    id: 'wending-hotpot',
    name: '問鼎 (皇上吉祥宮廷火鍋)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['問鼎', '宮廷火鍋', '變臉表演', '美甲按摩', '馬辣集團'],
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
    id: 'gou-yixia-izakaya',
    name: '狗一下居酒食堂',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['狗一下', '居酒屋', '日料吃到飽', '公館居酒屋', '忠孝居酒屋', '馬辣集團'],
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
    id: 'xiongyi-yakiniku',
    name: '熊一頂級燒肉',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['熊一', '熊一頂級燒肉', '西門町燒肉', '燒肉吃到飽', '馬辣集團'],
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

  // --- 豆府餐飲集團旗下各獨立餐廳 ---
  {
    id: 'juan-doufu',
    name: '涓豆腐 (精緻韓式料理)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['涓豆腐', '嫩豆腐煲', '韓式炸雞', '海鮮煎餅', '豆府集團'],
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
    id: 'beicun-doufu',
    name: '北村豆腐家',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['北村豆腐家', '韓式豆腐煲', '鑄鐵拌飯', '香蕉牛奶霜淇淋', '豆府集團'],
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
    id: 'jiangmantang-bbq',
    name: '姜滿堂 (正宗韓國直火燒肉)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['姜滿堂', '韓式燒肉', '直火燒肉', '豆府集團', '新竹巨城'],
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
    id: 'baan-phadthai',
    name: '帕泰家 (Baan Phadthai 米其林泰式炒河粉)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['帕泰家', 'baan phadthai', '米其林泰式', '炒河粉', '豆府集團'],
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

  // --- 頂級五星飯店與自助餐美饌 ---
  {
    id: 'regent-taipei-dining',
    name: '台北晶華酒店 (栢麗廳 / Robin\'s / 晶華軒)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['晶華酒店', '台北晶華', '栢麗廳', 'robins牛排屋', '晶華軒', '頂級buffet', '慶生'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '生日吃台北晶華酒店（栢麗廳、Robin\'s、晶華軒），刷 CUBE【慶生月】拿滿 10% 小樹點！平日刷 3.3%。'
  },
  {
    id: 'grand-hyatt-taipei',
    name: '台北君悅酒店 (凱菲屋 / 寶艾西餐廳)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['君悅酒店', '台北君悅', '凱菲屋', '寶艾西餐廳', '信義區buffet', '求婚桌'],
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
    id: 'sheraton-grand-taipei',
    name: '台北喜來登大飯店 (十二廚 / 請客樓 / 安東廳)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['喜來登', '台北喜來登', '十二廚', '請客樓', '安東廳', '米其林二星'],
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
    id: 'le-meridien-taipei',
    name: '台北寒舍艾美酒店 (探索廚房)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['寒舍艾美', '探索廚房', '信義區buffet', '頂級牛排吃到飽'],
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
    id: 'taipei-marriott',
    name: '台北萬豪酒店 (Garden Kitchen / INGE\'S Bar & Grill)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['台北萬豪', '萬豪酒店', 'garden kitchen', 'inges', '高空酒吧', '大直景觀'],
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
    id: 'grand-mayfull-taipei',
    name: '台北美福大飯店 (彩匯自助餐廳 / GMT 義大利餐廳)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['美福大飯店', '彩匯自助餐', 'gmt義大利餐廳', '和牛吃到飽', '大直飯店'],
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
    id: 'mandarin-oriental-taipei',
    name: '台北文華東方酒店 (文華Cafe / 雅閣 / Bencotto)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['文華東方', '文華cafe', '雅閣', '米其林一星', 'bencotto', '頂級奢華飯店'],
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
    id: 'a-cut-steakhouse',
    name: 'A CUT 牛排館 (台北國賓大飯店米其林一星)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['a cut', 'acut', '國賓acut', '米其林一星牛排', '乾式熟成牛排', '慶生約會'],
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
    id: 'tainan-silks-place',
    name: '台南晶英酒店 (ROBIN\'S 牛排館鐵板燒)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['台南晶英', '晶英酒店', 'robins', '台南牛排', '台南鐵板燒'],
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
    id: 'hsinchu-sheraton',
    name: '新竹喜來登大飯店 (盛宴自助餐廳 / 邀月鐵板燒)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['新竹喜來登', '竹北喜來登', '盛宴自助餐廳', '邀月鐵板燒', '采悅軒'],
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
    id: 'hsinchu-hotel-royal',
    name: '新竹老爺酒店 (Le Café 自助餐廳 / 明宮粵菜)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['新竹老爺', '老爺酒店', 'le cafe', '明宮', '光復路老爺'],
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
    id: 'hsinchu-ambassador',
    name: '新竹國賓大飯店 (八方燴西餐廳 / A CUT 牛排館)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['新竹國賓', '八方燴', '新竹acut', '中華路國賓'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'chen-ayi-hotpot-hsinchu',
    name: '陳阿姨火鍋灶咖 (新竹總店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['陳阿姨', '陳阿姨火鍋', '陳阿姨火鍋灶咖', '新竹火鍋', '大叔富弟', '經國路火鍋'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    }
  },
  {
    id: 'chen-ayi-hotpot-zhubei',
    name: '陳阿姨火鍋灶咖 (竹北中正東店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['陳阿姨', '陳阿姨火鍋', '陳阿姨火鍋灶咖', '竹北火鍋', '大叔富弟', '中正東路'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    }
  },
  {
    id: 'kanpai-yakiniku',
    name: '乾杯燒肉居酒屋',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['乾杯', '乾杯燒肉', '居酒屋', '八點乾杯', '親親五花肉', '燒肉'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
    tips: '吃乾杯在 8 月生日當月必刷【國泰 CUBE 卡】切換【慶生月】享 10% 小樹點！平日刷 3.3%。'
  },
  {
    id: 'kanpai-classic-steak',
    name: 'KANPAI CLASSIC (澳洲和牛燒肉)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['kanpai classic', '澳洲和牛', '乾杯集團', '燒肉', '天母燒肉'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'lao-kanpai',
    name: '老乾杯 (頂級日澳和牛燒肉)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['老乾杯', '頂級和牛', '乾杯集團', '燒肉', '米其林', '約會慶生'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '生日吃老乾杯，刷 CUBE【慶生月】享 10% 小樹點無上限！平日刷 3.3%。'
  },
  {
    id: 'kurogeya-honke',
    name: '黑毛屋本家 (日本頂級和牛火鍋)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['黑毛屋本家', '乾杯集團', '和牛火鍋', '信義三越火鍋', '壽喜燒', '涮涮鍋'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'kurogeya-hotpot',
    name: '黑毛屋 (和牛火鍋專門店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['黑毛屋', '乾杯集團', '和牛鍋物', '個人鍋', '壽喜燒'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'mala-45',
    name: '麻辣45 (純和牛牛油重慶麻辣鍋)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['麻辣45', '微風信義', '和牛油麻辣鍋', '乾杯集團', '麻辣鍋'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'hutong-yakiniku',
    name: '胡同燒肉 (HUTONG Yakiniku)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['胡同', '胡同燒肉', '橘焱胡同', '日式燒肉', '頂級燒肉'],
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
      note: '切換「好饗刷」享 3.3% 台新 Point'
    }
  },
  {
    id: 'dawan-yakiniku',
    name: '大腕燒肉 (Da-Wan 米其林一星)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['大腕', '大腕燒肉', '米其林一星', '頂級燒肉', '大直燒肉'],
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
    id: 'chaliu-yakiniku',
    name: '茶六燒肉堂 (輕井澤集團)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['茶六', '茶六燒肉', '輕井澤', '台中燒肉', '高雄燒肉'],
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
    id: 'tanzuomali',
    name: '碳佐麻里精品燒肉 (南部燒肉南霸天)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['碳佐麻里', '燒肉南霸天', '台南燒肉', '高雄燒肉', '精品燒肉'],
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
    id: 'raw-restaurant',
    name: 'RAW (米其林二星法式料理)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['raw', '江振誠', '米其林二星', '大直法式', '頂級餐廳'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'mume-restaurant',
    name: 'MUME (米其林一星永續料理)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['mume', '米其林一星', '大安法式', '約會餐廳'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'jl-studio',
    name: 'JL Studio (台中米其林三星新加坡料理)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['jl studio', 'jlstudio', '米其林三星', '台中法式', '頂級餐廳'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'tairroir-restaurant',
    name: '態芮 Taïrroir (台北米其林三星法式台灣菜)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['態芮', 'tairroir', '米其林三星', '大直法式', '頂級料理'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'the-palace-le-palais',
    name: '頤宮中餐廳 (君品酒店米其林三星)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['頤宮', '君品頤宮', '米其林三星', '先知鴨', '烤鴨'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'ruths-chris',
    name: '茹絲葵經典牛排館 (Ruth\'s Chris Steak House)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['茹絲葵', 'ruths chris', '頂級牛排', '大直牛排', '民生牛排', '慶生約會'],
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
    id: 'mortons-steakhouse',
    name: '莫爾頓牛排館 (Morton\'s The Steakhouse)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['莫爾頓', 'mortons', '微風信義', '101夜景', '景觀餐廳', '頂級牛排', '慶生'],
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
      schemeName: '大筆刷 (微風百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'lawrys-prime-rib',
    name: '勞瑞斯牛肋排餐廳 (Lawry\'s The Prime Rib)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['勞瑞斯', 'lawrys', '牛肋排', '貴婦百貨', 'bellavita', '慶生'],
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
      schemeName: '大筆刷 (BELLAVITA 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'uncle-shawn-taipei-1',
    name: 'UNCLE SHAWN 燒肉餐酒館 (台北一號店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['uncle shawn', 'uncleshawn', 'uncle shawn 燒肉', '大叔燒肉', '敦南燒肉', '東區燒肉', '慶生燒肉', '大安區'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
    tips: '吃 UNCLE SHAWN 燒肉（台北一號店）在 8 月生日當月必刷【國泰 CUBE 卡】切換【慶生月】享 10% 小樹點（門市另招待壽星小菜與肉品）！平日切換樂饗購或刷 Richart 好饗刷享 3.3%。'
  },
  {
    id: 'uncle-shawn-taipei-2',
    name: 'UNCLE SHAWN 燒肉餐酒館 (台北二號店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['uncle shawn', 'uncleshawn', 'uncle shawn 燒肉', '大叔燒肉', '市民大道燒肉', '東區燒肉', '慶生燒肉'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
    tips: '吃 UNCLE SHAWN 燒肉（台北二號店）在 8 月生日當月必刷【國泰 CUBE 卡】切換【慶生月】享 10% 小樹點！平日刷 3.3%。'
  },
  {
    id: 'uncle-shawn-hsinchu',
    name: 'UNCLE SHAWN 燒肉餐酒館 (新竹旗艦店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['uncle shawn', 'uncleshawn', '新竹燒肉', '新竹餐酒館', '新竹大叔燒肉', '慶生'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '吃 UNCLE SHAWN 燒肉（新竹店）在 8 月生日當月必刷【國泰 CUBE 卡】切換【慶生月】享 10% 小樹點！平日刷 3.3%。'
  },
  {
    id: 'er-ben-song',
    name: '二本松涮涮屋 (頂級火鍋)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['二本松', '二本松涮涮屋', '頂級火鍋', '米其林', '大安火鍋', '慶生'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
    tips: '吃二本松在 8 月生日當月必刷【國泰 CUBE 卡】切換【慶生月】享 10% 小樹點！平日切換樂饗購享 3.3%。'
  },
  {
    id: 'qiaoshan-sukiyaki',
    name: '橋山壽喜燒 (頂級日本和牛)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['橋山壽喜燒', '橋山', '二本松', '頂級壽喜燒', '和牛', '慶生'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    }
  },
  {
    id: 'chun-xi-hotpot',
    name: '春囍打邊爐 (港式麻辣鍋)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['春囍打邊爐', '春囍', '港式火鍋', '卜卜蜆', '酸菜魚', '高雄火鍋', '台南火鍋', '台中火鍋'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'hechino-tea-food',
    name: '做茶菜 (hechino 台中美食)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['做茶菜', 'hechino', '台中美食', '台菜沙龍', '餐酒館', '勤美'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'sung-restaurant',
    name: '嵩 sung (法式餐酒館)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['嵩', 'sung', '法式餐酒', '台中餐酒', '台北餐酒', '大安餐酒', '慶生約會'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'jai-zhai',
    name: 'JAI 宅 (義大利麵與網美餐廳)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['jai宅', 'jai', '宅', '義大利麵', '西門町', '台中一中', '新竹巨城'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'huohuo-bbq',
    name: '火火燒肉販賣所',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['火火燒肉', '火火燒肉販賣所', '台中燒肉', '生日慶生燒肉', '日式燒肉'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'maofang-hotpot',
    name: '毛房蔥柚鍋 (台南冷藏肉鍋物)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['毛房', '毛房蔥柚鍋', '台南火鍋', '冷藏肉', '老屋餐廳'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'maodon-donburi',
    name: '毛丼 (台南頂級海鮮丼飯)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['毛丼', '台南美食', '海鮮丼', '生魚片丼飯', '日料'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'creammm-t',
    name: 'creammm.t (台中精品甜點 / 檸檬塔)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['creammm.t', 'creammmt', '花美檸檬塔', '精品甜點', '司康', '排隊甜點'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'secret-french-dessert',
    name: '法國的秘密甜點',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['法國的秘密甜點', '諾曼地牛奶蛋糕', '生日蛋糕', '甜點', '大安甜點'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'jun-beef-daan',
    name: '竣師父牛肉麵 (大安店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['竣師父', '竣師父牛肉麵', '大安店', '大安路', '牛肉麵', '東區宵夜', '麻辣牛肉麵'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
    tips: '在 8 月生日當月去竣師父牛肉麵（大安店）必刷【國泰 CUBE 卡】切換【慶生月】享 10% 小樹點！平日切換樂饗購或刷 Richart 好饗刷享 3.3%。'
  },
  {
    id: 'jun-beef-dunhua',
    name: '竣師父牛肉麵 (敦化店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['竣師父', '竣師父牛肉麵', '敦化店', '市民大道', '牛肉麵', '東區宵夜', '麻辣牛肉麵'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
    tips: '在 8 月生日當月去竣師父牛肉麵（敦化店）必刷【國泰 CUBE 卡】切換【慶生月】享 10% 小樹點！平日切換樂饗購或刷 Richart 好饗刷享 3.3%。'
  },
  {
    id: 'pastaio',
    name: 'PASTAIO 手工義大利麵',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['pastaio', 'PASTAIO', 'Pastaio', '義大利麵', '手工麵', '光復店', '內湖店', '新店店', '排隊美食'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
    tips: '吃 PASTAIO 在 8 月生日當月必刷【國泰 CUBE 卡】切換【慶生月】享 10% 小樹點！平日兩張卡切換對應方案皆為 3.3%。'
  },
  {
    id: 'orange-shabu',
    name: '橘色涮涮屋 (頂級鍋物)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['橘色', '橘色涮涮屋', '火鍋界lv', '頂級火鍋', '慶生聚餐'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '生日去吃橘色涮涮屋，刷 CUBE【慶生月】拿滿 10% 小樹點！平日刷 3.3%。'
  },
  {
    id: 'dannys-steakhouse',
    name: '教父牛排 (Danny\'s Steakhouse)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['教父牛排', '米其林一星', '牛排', '慶生', '鄧有癸'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'smith-wollensky',
    name: 'Smith & Wollensky (微風南山牛排)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['smith wollensky', '巴菲特牛排', '微風南山', '景觀餐廳', '約會牛排'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'meowvelous',
    name: '貓下去敦達商行 (Meowvelous Inc.)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['貓下去', 'meowvelous', '餐酒館', '台北餐酒館', '慶生'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
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
    name: '茶六燒肉堂',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['茶六', '輕井澤', '燒肉', '台中燒肉', '聚餐'],
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
    id: 'tan-zuo-ma-li',
    name: '碳佐麻里精品燒肉',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['碳佐麻里', '燒肉', '台南燒肉', '高雄燒肉', '精品燒肉'],
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
    id: 'yakiniku-masamune',
    name: '燒肉政宗',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['燒肉政宗', '個人燒肉', '單人燒肉', '台北燒肉'],
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
    id: 'standing-bbq',
    name: '新村站著吃烤肉',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['新村站著吃', '韓式烤肉', '站著吃', '烤肉'],
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
    name: '萬客什鍋',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['萬客什鍋', '萬客', '火鍋', '石頭火鍋', '燒酒雞'],
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
    id: 'chicken-uncle',
    name: '雞湯大叔',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['雞湯大叔', '雞湯火鍋', '火鍋', '雞肉'],
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
    id: 'second-floor',
    name: '貳樓 (Second Floor Cafe)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['貳樓', '美式餐廳', '早午餐', '義大利麵', '寵物友善'],
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
    id: 'the-diner',
    name: '樂子 the Diner',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['樂子', 'the diner', '早午餐', '漢堡', '美式餐廳'],
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
    id: 'gonna-cafe',
    name: 'gonna共樂遊',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['gonna', '共樂遊', '雄獅', '健康餐', '早午餐'],
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
    id: 'brun-cafe',
    name: 'BRUN 不然',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['brun', '不然', '早午餐', '網美咖啡廳', '安和'],
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
    id: 'taihu-brewing',
    name: '臺虎精釀 (啜飲室)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['臺虎精釀', '啜飲室', '精釀啤酒', '餐酒館', '調酒'],
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
    id: 'draft-land',
    name: 'Draft Land',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['draft land', '調酒', '汲飲調酒', '酒吧', '東區酒吧'],
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
    id: 'abv-bar',
    name: 'ABV 系列餐酒館 (ABV Bar & Kitchen)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['abv', '精釀啤酒', '餐酒館', '閣樓', '地中海', '加勒比海', '日式居酒館'],
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
    id: 'inparadise',
    name: '饗饗 INPARADISE',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['饗饗', 'inparadise', 'buffet', '吃到飽', '微風信義', '新莊頂級百匯'],
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
    id: 'nagomi-buffet',
    name: 'NAGOMI 和食饗宴',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['nagomi', '和食', '日式buffet', '吃到飽', '中山站'],
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
    tags: ['麥當勞', 'mcdonald', '速食', '漢堡', '薯條', '大麥克'],
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
    tags: ['kfc', '肯德基', '炸雞', '蛋撻', '速食', '卡啦脆雞'],
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
    tags: ['mos', '摩斯', '摩斯漢堡', '米漢堡', '紅茶', '摩斯紅茶'],
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
    id: 'burger-king',
    name: '漢堡王 (Burger King)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['漢堡王', 'burger king', '華堡', '速食', '牛肉堡'],
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
    tags: ['壽司郎', 'sushiro', '迴轉壽司', '日料', '握壽司'],
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
    tags: ['藏壽司', 'kura', '扭蛋', '迴轉壽司', '日料'],
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
    id: 'sushi-express',
    name: '爭鮮迴轉壽司',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['爭鮮', 'sushi express', '平價壽司', '日料'],
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
    id: 'sushi-plus',
    name: '爭鮮 PLUS',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['爭鮮plus', '爭鮮', '精緻壽司', '日料'],
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
    id: 'thai-town',
    name: '瓦城泰國料理',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['瓦城', '泰國菜', '月亮蝦餅', '聚餐'],
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
    id: 'very-thai',
    name: '非常泰 (Very Thai)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['非常泰', '瓦城集團', '泰式料理', '餐酒'],
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
    id: '1010-xiang',
    name: '1010 湘 (湖南菜)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['1010湘', '湖南菜', '瓦城集團', '中式料理', '聚餐'],
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
    id: 'daxin-noodle',
    name: '大心新泰式麵食',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['大心', '泰式麵食', '瓦城集團', '酸辣麵', '冰淇淋'],
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
    id: 'shishi-xiang',
    name: '時時香 (RICE BAR)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['時時香', '中式料理', '瓦城集團', '聚餐', '米食'],
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
    id: 'yabi-kitchen',
    name: 'YABI KITCHEN (南洋跨界料理)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['yabi', 'yabi kitchen', '瓦城集團', '南洋料理', '聚餐'],
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
    id: 'wang-steak',
    name: '王品牛排 (Wang Steak)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['王品', '王品牛排', '牛排', '生日慶生', '紀念日'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方指定特店慶生月 10%)',
      rate: 3.3,
      
      note: '切換「樂饗購」3.3% / 🎂 官方指定旗艦店慶生月享 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (含王品瘋Pay 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」綁定王品瘋Pay享 3.3%'
    }
  },
  {
    id: 'tasty-steak',
    name: '西堤牛排 (TASTy)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['西堤', '西堤牛排', 'tasty', '牛排', '聚餐'],
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
      scheme: 'dining',
      schemeName: '好饗刷 (含王品瘋Pay 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」綁定王品瘋Pay享 3.3%'
    }
  },
  {
    id: 'tokiya',
    name: '陶板屋和風創作料理',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['陶板屋', '王品集團', '和風洋食', '聚餐'],
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
      scheme: 'dining',
      schemeName: '好饗刷 (含王品瘋Pay 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」綁定王品瘋Pay享 3.3%'
    }
  },
  {
    id: 'chamonix',
    name: '夏慕尼新香榭鉄板燒',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['夏慕尼', '鐵板燒', '王品集團', '約會', '生日慶生'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方指定特店慶生月 10%)',
      rate: 3.3,
      
      note: '切換「樂饗購」3.3% / 🎂 官方指定旗艦店慶生月享 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (含王品瘋Pay 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」綁定王品瘋Pay享 3.3%'
    }
  },
  {
    id: 'giguo-hotpot',
    name: '聚日式鍋物',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['聚', '聚火鍋', '王品集團', '日式火鍋', '吃到飽'],
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
      scheme: 'dining',
      schemeName: '好饗刷 (含王品瘋Pay 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」綁定王品瘋Pay享 3.3%'
    }
  },
  {
    id: '12hotpot',
    name: '石二鍋',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['石二鍋', '平價火鍋', '王品集團', '檸檬冬瓜冰沙'],
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
      scheme: 'dining',
      schemeName: '好饗刷 (含王品瘋Pay 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」綁定王品瘋Pay享 3.3%'
    }
  },
  {
    id: 'wangprime-crazy-pay',
    name: '王品瘋Pay (王品集團全品牌)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['王品瘋pay', '瘋pay', '王品app', '瘋點數'],
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
      scheme: 'dining',
      schemeName: '好饗刷 (王品瘋Pay 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」綁定王品瘋Pay享 3.3%'
    }
  },

  // =========================================================================
  // 🏨 星級飯店、KTV 與購票娛樂
  // =========================================================================
  {
    id: 'regent-hotel',
    name: '晶華酒店 (Regent Taipei)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['晶華', '晶華酒店', '柏麗廳', '晶華軒', '五星級飯店', '慶生'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '切換「樂饗購」3.3% / '
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (指定飯店 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」指定飯店享 3.3%'
    }
  },
  {
    id: 'marriott-hotel',
    name: '台北萬豪酒店 (Taipei Marriott)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['萬豪', '台北萬豪', '大直萬豪', '飯店餐飲', '住宿'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (或趣旅行 3.3%)',
      rate: 3.3,
      note: '切換「樂饗購」3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (指定飯店 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」指定飯店享 3.3%'
    }
  },
  {
    id: 'grand-hyatt',
    name: '台北君悅酒店 (Grand Hyatt Taipei)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['君悅', '台北君悅', '凱菲屋', '信義區飯店', 'buffet'],
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
      scheme: 'dining',
      schemeName: '好饗刷 (指定飯店 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」指定飯店享 3.3%'
    }
  },
  {
    id: 'royal-hotel',
    name: '老爺酒店集團 (礁溪老爺與知本老爺等)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['老爺酒店', '礁溪老爺', '知本老爺', '老爺行旅', '溫泉飯店'],
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
      scheme: 'dining',
      schemeName: '好饗刷 (指定飯店 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」指定飯店享 3.3%'
    }
  },
  {
    id: 'ldc-hotels',
    name: '雲朗觀光 (君品酒店與雲品溫泉酒店等)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['雲朗', '君品', '雲品', '翰品', '日月潭雲品', '頤宮'],
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
      scheme: 'dining',
      schemeName: '好饗刷 (指定飯店 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」指定飯店享 3.3%'
    }
  },
  {
    id: 'lakeshore-hotel',
    name: '煙波大飯店 (Lakeshore Hotel)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['煙波', '煙波大飯店', '蘇澳煙波', '新竹煙波', '花蓮煙波', '台南煙波'],
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
      scheme: 'dining',
      schemeName: '好饗刷 (指定飯店 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」指定飯店享 3.3%'
    }
  },
  {
    id: 'grand-hilai',
    name: '漢來大飯店與漢來海港餐廳',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['漢來', '漢來大飯店', '漢來海港', '高雄漢來', '南港漢來', '海港buffet'],
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
      scheme: 'dining',
      schemeName: '好饗刷 (指定飯店 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」指定飯店享 3.3%'
    }
  },
  {
    id: 'enjoy-ktv',
    name: '享溫馨 KTV',
    category: 'dining_delivery',
    categoryLabel: '休閒 & 娛樂',
    tags: ['享溫馨', '享溫馨KTV', 'ktv', '唱歌', '包廂'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '慶生月 (10%) / 樂饗購 (3.3%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      birthdayRate: 10.0,
      note: '🎂 8月生日當月切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (娛樂歡唱 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
    tips: '8 月生日當月去享溫馨 KTV 唱歌，切換 CUBE 卡【慶生月】享 10% 小樹點！平日刷 Richart 卡【好饗刷】或 CUBE【樂饗購】享 3.3%。'
  },
  {
    id: 'cashbox-ktv',
    name: '錢櫃 KTV',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['錢櫃', 'ktv', '唱歌', '夜唱', '牛肉麵'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '慶生月 (10%) / 樂饗購 (3.3%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      birthdayRate: 10.0,
      note: '🎂 8月生日當月切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (指定KTV 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'holiday-ktv',
    name: '好樂迪 KTV',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['好樂迪', 'ktv', '唱歌', '歡唱'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '慶生月 (10%) / 樂饗購 (3.3%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      birthdayRate: 10.0,
      note: '🎂 8月生日當月切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (指定KTV 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'oncor-ktv',
    name: 'ONCOR 頂級 KTV',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['oncor', '頂級ktv', '信義區ktv', '奢華包廂'],
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
      schemeName: '好饗刷 (指定KTV 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'sing-go-ktv',
    name: 'sing!go 聚唱 KTV',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['singgo', '聚唱', 'ktv', '信義店', '西門店'],
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
      schemeName: '好饗刷 (指定KTV 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'enjoy-warm-ktv',
    name: '享溫馨 KTV',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['享溫馨', '南部ktv', '高雄ktv', '台南ktv'],
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
      schemeName: '好饗刷 (指定KTV 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'tixcraft',
    name: '拓元售票 (tixCraft)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['拓元', 'tixcraft', '搶票', '演唱會', '門票'],
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
      schemeName: '好饗刷 (購票娛樂 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」購票享 3.3%'
    }
  },
  {
    id: 'kktix',
    name: 'KKTIX',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['kktix', '售票', '演唱會', '活動報名', '門票'],
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
      schemeName: '好饗刷 (購票娛樂 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」購票享 3.3%'
    }
  },
  {
    id: 'era-ticket',
    name: '年代售票',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['年代售票', '演唱會', '舞台劇', '門票'],
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
      schemeName: '好饗刷 (購票娛樂 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」購票享 3.3%'
    }
  },
  {
    id: 'kham-ticket',
    name: '寬宏售票',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['寬宏售票', '寬宏藝術', '演唱會', '展覽門票'],
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
      schemeName: '好饗刷 (購票娛樂 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」購票享 3.3%'
    }
  },
  {
    id: 'opentix',
    name: 'OPENTIX 兩廳院文化生活',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['opentix', '兩廳院', '國家戲劇院', '音樂會', '舞台劇'],
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
      schemeName: '好饗刷 (購票娛樂 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」購票享 3.3%'
    }
  },

  // =========================================================================
  // 🛵 外送平台
  // =========================================================================
  {
    id: 'uber-eats',
    name: 'Uber Eats (優食)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['uber eats', 'ubereats', '外送', '便當', '生鮮雜貨'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '慶生月 (3.5%) / 樂饗購 (3.3%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      birthdayRate: 3.5,
      note: '🎂 8月生日當月切換「慶生月」享 3.5% 小樹點無上限！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (外送平台 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」外送平台享 3.3%'
    },
    tips: '叫外送平日兩張卡皆享 3.3%（CUBE 樂饗購 / Richart 好饗刷）；8 月生日當月刷 CUBE 卡切換【慶生月】升級享 3.5% 小樹點！'
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
      schemeName: '好饗刷 (外送平台 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」外送平台享 3.3%'
    }
  },

  // =========================================================================
  // 🏬 百貨購物中心與 Outlet (全部獨立無斜線)
  // =========================================================================
  {
    id: 'shinkong-mitsukoshi',
    name: '新光三越 (含 skm pay)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['新光三越', '新光', 'skmpay', '百貨', '信義新天地', '南西新光', '台中新光', '台南新天地'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '慶生月 (3.5%) / 樂饗購 (3.3%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      birthdayRate: 3.5,
      note: '🎂 8月生日當月切換「慶生月」享 3.5% 小樹點無上限！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'pay',
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 大筆刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在新光三越櫃位打開「台新 Pay」綁 Richart 刷享高達 3.8%！或直刷切換「大筆刷」享 3.3%'
    },
    tips: '新光三越首推綁定【台新 Pay】刷 Richart 卡（Pay 著刷）享 3.8% 台新 Point！若在 8 月生日當月，刷 CUBE 卡切換【慶生月】享 3.5% 小樹點。'
  },
  {
    id: 'sogo-department',
    name: '遠東 SOGO 百貨 (全台分館)',
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
      
      note: '切換「樂饗購」享 3.0%~3.3%！🎂 8月生日當月切換「慶生月」專屬加碼最高 10%！'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: 'Richart Life 切換「大筆刷」享 3.3% 台新 Point'
    },
    tips: '在 SOGO 百貨：生日當月首選 CUBE 卡【慶生月】10%！平日兩張卡切換對應方案（CUBE 樂饗購 3.3% / Richart 大筆刷 3.3%）皆享 3.3% 高回饋。'
  },
  {
    id: 'feds-department',
    name: '遠東百貨 (遠百信義A13與大遠百等全台分館)',
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
      
      note: '切換「樂饗購」享 3.0%~3.3%！🎂 生日月切換「慶生月」享 10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: 'Richart Life 切換「大筆刷」享 3.3%'
    },
    tips: '逛遠東百貨：生日月刷 CUBE 卡【慶生月】享 10%；平日刷 CUBE「樂饗購」或 Richart「大筆刷」均享 3.3%。'
  },
  {
    id: 'taipei-101',
    name: '台北 101 購物中心',
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
      
      note: '切換「樂饗購」享 3.0%~3.3%！🎂 生日月切換「慶生月」享 10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
    tips: '在 101 購物或用餐：生日當月刷 CUBE【慶生月】10% 最划算；平日刷 CUBE「樂饗購」3.3% 或 Richart「大筆刷」3.3%。'
  },
  {
    id: 'breeze-center',
    name: '微風百貨 (微風廣場與微風信義等全館)',
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
      
      note: '切換「樂饗購」享 3.0%~3.3%！🎂 生日月切換「慶生月」享 10%'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
    tips: '逛微風各館：生日月刷 CUBE「慶生月」10%；平日刷 CUBE「樂饗購」或 Richart「大筆刷」皆享 3.3%。'
  },
  {
    id: 'lalaport',
    name: 'LaLaport (南港與台中分館)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['lalaport', '南港lalaport', '台中lalaport', '三井', '大型購物中心'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'hanshin-department',
    name: '漢神百貨與漢神巨蛋',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['漢神', '漢神巨蛋', '漢神百貨', '漢神洲際', '高雄百貨', '巨蛋'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'eslite-living',
    name: '誠品生活 (含誠品線上)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['誠品生活', '誠品線上', '誠品書店', '松菸誠品', '新店誠品', '文創'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'q-square',
    name: '京站時尚廣場 (Q Square)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['京站', 'q square', '台北轉運站', '小碧潭京站', '百貨'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'dream-mall',
    name: '高雄夢時代購物中心',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['夢時代', '高雄夢時代', '時代大道', '摩天輪'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'uni-president-dept',
    name: '統一時代百貨 (含 DREAM PLAZA)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['統一時代', 'dream plaza', '市府轉運站', '信義區百貨'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'chung-yo',
    name: '中友百貨 (台中)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['中友百貨', '台中中友', '一中商圈', '百貨'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'syntrend',
    name: '三創生活園區 (SYNTREND)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['三創', 'syntrend', '光華商場', '3c', '動漫', '玩具'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'ts-mall',
    name: '南紡購物中心 (T.S. Mall)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['南紡', '南紡購物中心', '台南百貨', 'ts mall'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'big-city-hsinchu',
    name: 'Big City 遠東巨城購物中心',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['巨城', 'big city', '新竹巨城', '新竹百貨'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'kuang-san-sogo',
    name: '廣三 SOGO 百貨 (台中)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['廣三sogo', '廣三', '台中sogo', '台中百貨'],
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'mitsui-outlet',
    name: 'MITSUI OUTLET PARK 三井 Outlet (全台分館)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['三井outlet', 'outlet', '林口三井', '台中港三井', '台南三井', '名牌特賣'],
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
      schemeName: '大筆刷 (指定Outlet 3.3%)',
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
      schemeName: '大筆刷 (指定Outlet 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'skm-park',
    name: 'SKM Park Outlets (高雄草衙)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['skm park', '草衙道', '高雄outlet', '新光三越outlet'],
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
      schemeName: '大筆刷 (指定Outlet 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },

  // =========================================================================
  // 👟 運動品牌、時尚服飾與健身房
  // =========================================================================
  {
    id: 'adidas',
    name: 'adidas (愛迪達)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['adidas', 'Adidas', 'ADIDAS', '愛迪達', '三葉草', '球鞋', '慢跑鞋', '運動服'],
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
    tags: ['nike', 'Nike', '耐吉', 'jordan', '球鞋', '運動鞋', 'air max'],
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
    name: 'New Balance (NB)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['nb', 'new balance', '紐巴倫', '復古球鞋', '慢跑鞋'],
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
    id: 'puma',
    name: 'PUMA',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['puma', 'Puma', '彪馬', '運動鞋', '球鞋', '賽車鞋'],
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
      note: '直營門市切「Chill 刷」享 5.0%'
    }
  },
  {
    id: 'onitsuka-tiger',
    name: 'Onitsuka Tiger (鬼塚虎)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['onitsuka tiger', '鬼塚虎', '亞瑟士', '經典鞋', '休閒鞋'],
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
      note: '直營門市切「Chill 刷」享 5.0%'
    }
  },
  {
    id: 'hoka',
    name: 'HOKA',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['hoka', 'hoka one one', '厚底跑鞋', '越野跑鞋', 'clifton', 'bondi'],
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
      note: '直營門市切「Chill 刷」享 5.0%'
    }
  },
  {
    id: 'salomon',
    name: 'Salomon (薩洛蒙)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['salomon', '薩洛蒙', '山系', '越野跑鞋', '戶外鞋', 'xt-6'],
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
      note: '直營門市切「Chill 刷」享 5.0%'
    }
  },
  {
    id: 'lululemon',
    name: 'lululemon (露露檸檬)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['lululemon', '露露檸檬', '瑜珈褲', '運動服', 'align'],
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
    id: 'fitness-factory',
    name: '健身工廠 (Fitness Factory)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['健身工廠', '健工', '柏文', '健身房', '重訓'],
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
    id: 'world-gym',
    name: 'World Gym (世界健身俱樂部)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['world gym', '世界健身', '健身房', '重訓', '有氧'],
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
    id: 'anytime-fitness',
    name: 'Anytime Fitness (24小時健身)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['anytime fitness', '24小時健身房', '健身房'],
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
    id: 'hypercore-fitness',
    name: '超核心健身 (Hypercore Fitness)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['超核心', 'hypercore', '免綁約健身房', '教練課'],
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
      schemeName: '大筆刷 (時尚品味 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'gu-fashion',
    name: 'GU',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['gu', 'GU', '極優', '快時尚', '衣服', '女裝', '男裝'],
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
      schemeName: '大筆刷 (時尚品味 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'zara',
    name: 'ZARA',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['zara', 'ZARA', '快時尚', '衣服', '女裝', '男裝', '西班牙女裝'],
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
      schemeName: '大筆刷 (時尚品味 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'net-fashion',
    name: 'NET (主婦商場)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['net', 'NET', '平價服飾', '衣服'],
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
      scheme: 'pay',
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 大筆刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在 NET 使用台新 Pay 享高達 3.8%！直刷切換「大筆刷」享 3.3%'
    },
    tips: '在 NET 結帳使用【台新 Pay】綁 Richart 卡享 3.8%！'
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
    tags: ['宜得利', 'nitori', '家具', '日系居家', '寢具', '涼感被'],
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
      schemeName: '大筆刷 (居家裝修 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'testrite',
    name: '特力屋 (Testrite)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['特力屋', '五金', '修繕', '油漆', '居家修繕', '木工'],
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
      schemeName: '大筆刷 (居家裝修 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'hola',
    name: 'HOLA 和樂家居',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['hola', '和樂家居', '寢具', '鍋具', '家飾'],
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
      schemeName: '大筆刷 (居家裝修 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },
  {
    id: 'marais-home',
    name: '瑪黑家居選物 (MARAIS)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['瑪黑家居', 'marais', '設計家飾', '選物店'],
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
      schemeName: '大筆刷 (居家裝修 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    }
  },

  // =========================================================================
  // 🛒 網購電商與海外購物
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
    name: '淘寶與天貓 (Taobao)',
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
      schemeName: '玩旅刷 (海外線上 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」海外消費享 3.3%'
    },
    tips: '淘寶屬於海外交易，Richart 卡切換【玩旅刷】享 3.3%，略勝 CUBE「玩數位」3.0%！'
  },
  {
    id: 'amazon',
    name: 'Amazon (美亞與日亞商城)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['amazon', '亞馬遜', '美亞', '日亞', '美國網購', '日本網購'],
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
      schemeName: '數趣刷 (或玩旅刷 3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」或「玩旅刷」享 3.3%'
    }
  },
  {
    id: 'iherb',
    name: 'iHerb',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['iherb', '保健食品', '魚油', '維他命', '海外代購'],
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
      schemeName: '數趣刷 (或玩旅刷 3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」或「玩旅刷」享 3.3%'
    }
  },
  {
    id: 'olive-young',
    name: 'Olive Young (全球官網)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['olive young', '韓國美妝', '韓系保養', '韓國直送'],
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
      schemeName: '數趣刷 (或玩旅刷 3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'shein',
    name: 'SHEIN',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['shein', '快時尚網購', '女裝', '平價衣服'],
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
      schemeName: '數趣刷 (或玩旅刷 3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'farfetch',
    name: 'Farfetch (精品網購)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['farfetch', '精品代購', '名牌包', '設計師品牌'],
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
      schemeName: '數趣刷 (或玩旅刷 3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    }
  },
  {
    id: 'books-com-tw',
    name: '博客來網路書店',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['博客來', '買書', '書店', '網購', '電子書'],
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
      schemeName: '數趣刷 (3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」3.3%'
    }
  },
  {
    id: 'etmall',
    name: '東森購物 (ETMall)',
    category: 'ecommerce',
    categoryLabel: '網購電商',
    tags: ['東森購物', 'etmall', '電視購物', '網購'],
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
      schemeName: '數趣刷 (3.3%)',
      rate: 3.3,
      note: '切換「數趣刷」3.3%'
    }
  },

  // =========================================================================
  // 🏪 超商、量販超市與藥妝藥局 (全部獨立無斜線)
  // =========================================================================
  {
    id: 'pxmart',
    name: '全聯福利中心 (Pxmart)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['全聯', '生鮮', '全支付', 'pxpay', '超市', '買菜'],
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
    tags: ['全家', 'familymart', '超商', '咖啡', '霜淇淋', '全盈'],
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
    tags: ['家樂福', 'carrefour', '量販', '大賣場', '家樂福超市'],
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
      schemeName: '天天刷 (日常採買 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」量販享 3.3%'
    },
    tips: '逛家樂福刷【台新 Richart 卡】（切換天天刷享 3.3%）回饋率最高！'
  },
  {
    id: 'lopia',
    name: 'LOPIA (日系超市)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['lopia', '樂比亞', '日系超市', '生鮮', '和牛', '熟食', 'lalaport超市'],
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
    },
    tips: '逛 LOPIA 刷【台新 Richart 卡】切換「天天刷」享 3.3%！'
  },
  {
    id: 'donki',
    name: '唐吉訶德 (DON DON DONKI)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['唐吉訶德', 'donki', 'dondondonki', '西門町', '日系雜貨', '24小時超市'],
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
    id: 'great-buy',
    name: '大買家 (Great Buy)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['大買家', '台中大買家', '量販店', '大賣場'],
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
      schemeName: '天天刷 (日常採買 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'wan-jia-fu',
    name: '萬家福',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['萬家福', '超市', '生活雜貨'],
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
    tags: ['寶雅', 'poya', '美妝', '生活用品', '藥妝', '寶家'],
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
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'cosmed',
    name: '康是美 (COSMED)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['康是美', 'cosmed', '藥妝', '保健品', '美妝', '面膜'],
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
    tags: ['屈臣氏', 'watsons', '小屈', '藥妝', '美妝', '保健品'],
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
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'great-tree-pharmacy',
    name: '大樹藥局 (Great Tree)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['大樹藥局', '大樹', '奶粉', '尿布', '處方簽', '藥局'],
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
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 天天刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在大樹藥局使用台新 Pay 享 3.8%！直刷切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'medfirst',
    name: '杏一醫療用品',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['杏一', '醫療用品', '血壓計', '輪椅', '保健品'],
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
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'norbel-baby',
    name: '丁丁連鎖藥局',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['丁丁藥局', '丁丁', '嬰幼兒', '奶粉', '藥局'],
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
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'costco',
    name: 'Costco 好市多 (實體門市需富邦聯名卡)',
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
  // 🚆 交通通勤、加油充電與叫車 (全部獨立無斜線)
  // =========================================================================
  {
    id: 'high-speed-rail',
    name: '台灣高鐵 (TSR)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['高鐵', '車票', '返鄉', '出差', '商務車廂'],
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
      schemeName: '天天刷 (通勤交通 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'taiwan-railway',
    name: '臺灣鐵路 (臺鐵)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['台鐵', '臺鐵', '火車', '自強號', '普悠瑪', '太魯閣', '區間車'],
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
      schemeName: '天天刷 (通勤交通 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'uber-ride',
    name: 'Uber 叫車',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['uber', '叫車', '計程車', '小黃', '優步'],
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
      schemeName: '天天刷 (通勤交通 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'taiwan-taxi',
    name: '台灣大車隊 (55688)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['55688', '台灣大車隊', '計程車', '叫車', '小黃'],
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
      schemeName: '天天刷 (通勤交通 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'line-go',
    name: 'LINE GO (計程車與共享車租車)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['line go', 'line taxi', 'line叫車', '共享車'],
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
      schemeName: '天天刷 (通勤交通 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'yoxi',
    name: 'yoxi 叫車 (和泰集團)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['yoxi', '和泰叫車', '計程車', 'toyota'],
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
      schemeName: '天天刷 (通勤交通 3.3%)',
      rate: 3.3,
      note: '切按「天天刷」享 3.3%'
    }
  },
  {
    id: 'bolt-taiwan',
    name: '台灣 Bolt (叫車平台)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['bolt', '台灣bolt', '叫車平台', '歐洲叫車'],
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
      schemeName: '天天刷 (通勤交通 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'cpc-gas',
    name: '台灣中油直營加油站',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['中油', '中油直營', '加油', '機車', '汽車', '95', '98', '台灣中油'],
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
      schemeName: '天天刷 (加油充電 3.3%)',
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
      schemeName: '集精選 (全國加油 3.0%)',
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
  {
    id: 'evoasis',
    name: '源點 EVOASIS (電動車充電)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['evoasis', '電動車充電', '充電樁', 'tesla', '快充'],
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
      schemeName: '天天刷 (加油充電 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'evalue',
    name: '華城電能 EVALUE (電動車充電)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['evalue', '華城電能', '電動車充電', '充電樁', '快充'],
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
      schemeName: '天天刷 (加油充電 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'autopass',
    name: 'Autopass (車麻吉)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['autopass', '車麻吉', '加油支付', '停車繳費'],
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
      schemeName: '天天刷 (加油充電 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'uspace',
    name: 'USPACE (共享車位與智慧停車)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['uspace', '停車位', '共享車位', '停車繳費'],
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
      schemeName: '天天刷 (加油充電 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },

  // =========================================================================
  // ✈️ 航空公司、國外旅遊與日本實體 (全部獨立無斜線)
  // =========================================================================
  {
    id: 'japan-offline',
    name: '日本當地實體門市消費 (BicCamera、松本清、Lawson 等)',
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
    name: '海外實體與國外線上外幣交易 (含歐洲實體)',
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
    id: 'eva-air',
    name: '長榮航空 (EVA Air)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['長榮', 'eva', '機票', '航空', '出國', '長榮航空'],
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
    tips: '買長榮機票兩張卡皆享 3.3%（CUBE 趣旅行 / Richart 玩旅刷），CUBE 刷機票附帶高額旅平險。'
  },
  {
    id: 'china-airlines',
    name: '中華航空 (China Airlines)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['華航', '中華航空', '機票', '出國', '華航官網'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」航空公司機票享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    }
  },
  {
    id: 'starlux-airlines',
    name: '星宇航空 (STARLUX Airlines)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['星宇', 'starlux', '張國煒', '機票', '出國', '星宇航空'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」航空公司享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    }
  },
  {
    id: 'tigerair-taiwan',
    name: '台灣虎航 (Tigerair Taiwan)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['虎航', '台灣虎航', '廉航', '日本機票', '韓國機票'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」航空公司享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    }
  },
  {
    id: 'cathay-pacific',
    name: '國泰航空 (Cathay Pacific)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['國泰航空', 'cathay pacific', '香港機票', '歐美機票'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」航空公司享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    }
  },
  {
    id: 'japan-airlines',
    name: '日本航空 (JAL)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['日航', 'jal', '日本航空', '日本機票'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」航空公司享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    }
  },
  {
    id: 'peach-aviation',
    name: '樂桃航空 (Peach)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['樂桃', 'peach', '廉航', '日本廉航', '機票'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」航空公司享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    }
  },
  {
    id: 'scoot-airlines',
    name: '酷航 (Scoot)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['酷航', 'scoot', '新加坡酷航', '廉航', '機票'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」航空公司享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    }
  },
  {
    id: 'singapore-airlines',
    name: '新加坡航空 (Singapore Airlines)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['新航', '新加坡航空', '五星航空', '機票'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」航空公司享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    }
  },
  {
    id: 'emirates-airlines',
    name: '阿聯酋航空 (Emirates)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['阿聯酋', 'emirates', '杜拜', '歐洲機票', '豪華航空'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「趣旅行」航空公司享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (航空公司 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」航空公司享 3.3%'
    }
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
      schemeName: '玩旅刷 (訂房平台 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」訂房平台享 3.3%'
    }
  },
  {
    id: 'booking-com',
    name: 'Booking.com',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['booking', 'booking.com', '訂房', '民宿', '飯店'],
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
      schemeName: '玩旅刷 (訂房平台 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」訂房平台享 3.3%'
    }
  },
  {
    id: 'trip-com',
    name: 'Trip.com (攜程)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['trip.com', '攜程', '機票', '訂房', '高鐵票'],
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
      schemeName: '玩旅刷 (訂房平台 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」訂房平台享 3.3%'
    }
  },
  {
    id: 'airbnb',
    name: 'Airbnb (愛彼迎)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['airbnb', '愛彼迎', '民宿', '度假屋', '包棟'],
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
      schemeName: '玩旅刷 (訂房平台 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」訂房平台享 3.3%'
    }
  },
  {
    id: 'klook',
    name: 'Klook (客路)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['klook', '客路', '門票', '一日遊', '行程', 'sim卡', '交通券'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '慶生月 (3.5%) / 趣旅行 (3.3%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      birthdayRate: 3.5,
      note: '🎂 8月生日當月切換「慶生月」享 3.5% 小樹點無上限！平日切換「趣旅行」享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (旅遊體驗 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
    tips: '8 月生日當月預訂 Klook 票券與行程，切換 CUBE 卡【慶生月】享 3.5% 小樹點；平日刷 Richart 卡【玩旅刷】或 CUBE 卡【趣旅行】享 3.3%。'
  },
  {
    id: 'kkday',
    name: 'KKday',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['kkday', '票券', '行程', '一日遊', '網卡', '包車'],
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
      schemeName: '玩旅刷 (旅遊體驗 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    }
  },
  {
    id: 'lion-travel',
    name: '雄獅旅遊 (Lion Travel)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['雄獅', '雄獅旅遊', '旅行社', '跟團', '自由行', '機加酒'],
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
      schemeName: '玩旅刷 (旅行社 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」旅行社享 3.3%'
    }
  },
  {
    id: 'eztravel',
    name: '易遊網 (ezTravel)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['易遊網', 'eztravel', '環島之星', '機票', '火車訂票'],
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
      schemeName: '玩旅刷 (旅行社 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」旅行社享 3.3%'
    }
  },
  {
    id: 'southeast-travel',
    name: '東南旅遊',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['東南旅遊', '旅行社', '跟團', '自由行'],
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
      schemeName: '玩旅刷 (旅行社 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」旅行社享 3.3%'
    }
  },
  {
    id: 'cola-tour',
    name: '可樂旅遊 (康福旅行社)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['可樂旅遊', '可樂', '康福', '旅行社', '跟團'],
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
      schemeName: '玩旅刷 (旅行社 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」旅行社享 3.3%'
    }
  },
  {
    id: 'best-tour',
    name: '喜鴻假期',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['喜鴻', '喜鴻假期', '旅行社', '跟團', '自由行'],
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
      schemeName: '玩旅刷 (旅行社 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」旅行社享 3.3%'
    }
  },
  {
    id: 'galilee-tour',
    name: '加利利旅行社 (歐洲頂級旅遊)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['加利利', '頂級團', '歐洲蜜月', '旅行社'],
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
      schemeName: '玩旅刷 (旅行社 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」旅行社享 3.3%'
    }
  },

  // =========================================================================
  // 🎬 影城、主題樂園與購票休閒 (全部獨立單一條目)
  // =========================================================================
  {
    id: 'vieshow-cinemas',
    name: '威秀影城 (VieShow Cinemas)',
    category: 'dining_delivery',
    categoryLabel: '休閒 & 娛樂',
    tags: ['威秀', '威秀影城', '電影票', 'imax', '信義威秀', '板橋威秀'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'general',
      schemeName: '一般消費 (0.3%)',
      rate: 0.3,
      note: '非 CUBE 特約加碼通路，享一般消費 0.3%（若切換固定回饋則 1.2%）'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (購票娛樂 3.3%) / 平日 7 折',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point；週一至週四購票享 2D 全票 7 折！'
    },
    tips: '威秀影城非 CUBE 加碼通路（僅 0.3%）。推薦刷【台新 Richart 卡】切換【好饗刷】享 3.3% 回饋，週一至週四購票更享 7 折專屬優惠！'
  },
  {
    id: 'ambassador-theatres',
    name: '國賓影城 (Ambassador Theatres)',
    category: 'dining_delivery',
    categoryLabel: '休閒 & 娛樂',
    tags: ['國賓影城', '國賓', '電影票', '看電影'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'general',
      schemeName: '一般消費 (0.3%)',
      rate: 0.3,
      note: '非 CUBE 特約加碼通路，享一般消費 0.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (購票娛樂 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
    tips: '國賓影城非 CUBE 特店（僅 0.3%），建議刷【台新 Richart 卡】切換【好饗刷】享 3.3% 回饋！'
  },
  {
    id: 'showtimes-cinemas',
    name: '秀泰影城 (Showtimes Cinemas)',
    category: 'dining_delivery',
    categoryLabel: '休閒 & 娛樂',
    tags: ['秀泰影城', '秀泰', '電影票', '樹林秀泰', '台中文心秀泰'],
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
      schemeName: '好饗刷 (購票娛樂 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'miramar-cinemas',
    name: '美麗華影城 (Miramar Cinemas)',
    category: 'dining_delivery',
    categoryLabel: '休閒 & 娛樂',
    tags: ['美麗華影城', '大直美麗華', 'imax', '電影票'],
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
      schemeName: '好饗刷 (購票娛樂 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    }
  },
  {
    id: 'tokyo-disney',
    name: '東京迪士尼樂園 (Tokyo Disney Resort)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['東京迪士尼', '迪士尼樂園', 'disney', '日本旅遊', '門票', '海洋迪士尼'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「趣旅行」享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (海外消費 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3% 台新 Point'
    },
    tips: '生日月去東京迪士尼買門票或園區刷卡，刷 CUBE【慶生月】獨享 10% 小樹點！'
  },
  {
    id: 'usj-japan',
    name: '日本環球影城 (Universal Studios Japan)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['環球影城', 'usj', '大阪環球', '瑪利歐園區', '哈利波特', '日本旅遊'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「趣旅行」享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷 (海外消費 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    }
  },

  // =========================================================================
  // 📚 動漫、電子書與韓流追星 (台新 Chill 刷 5% 官方特店)
  // =========================================================================
  {
    id: 'book-walker',
    name: 'BOOK WALKER (台灣漫讀電子書)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['book walker', 'bookwalker', '漫畫', '輕小說', '角川', '電子書'],
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
      schemeName: 'Chill 刷 (熬夜追更 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'animate-tw',
    name: 'Animate (安利美特動漫周邊)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['animate', '安利美特', '動漫', '周邊', '西門町', '模型', '漫畫'],
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
      schemeName: 'Chill 刷 (熬夜追更 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'rakuten-kobo',
    name: '樂天 KOBO (電子書商城)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['kobo', '樂天kobo', '電子書', '閱讀器'],
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
      schemeName: 'Chill 刷 (熬夜追更 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'readmoo',
    name: 'Readmoo 讀墨 (繁體中文電子書)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['readmoo', '讀墨', 'mooink', '繁中電子書', '閱讀器'],
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
      schemeName: 'Chill 刷 (熬夜追更 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'weverse-shop',
    name: 'Weverse Shop (韓星官方周邊)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['weverse', 'weverse shop', '防彈少年團', 'bts', 'seventeen', 'newjeans', '手燈', '專輯'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (或趣旅行)',
      rate: 3.3,
      note: '切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (應援追星 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'k-monstar',
    name: 'K-MONSTAR (韓流偶像周邊)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['k-monstar', 'kmonstar', '韓流專輯', '小卡', '偶像周邊'],
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
      schemeName: 'Chill 刷 (應援追星 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'will-music',
    name: '微樂客 (Will Music)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['微樂客', 'will music', '韓專代購', '歐美黑膠', '唱片行'],
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
      schemeName: 'Chill 刷 (應援追星 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'five-music',
    name: '五大唱片 (5Music)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['五大唱片', '5music', '唱片行', '專輯', '海報'],
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
      schemeName: 'Chill 刷 (應援追星 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'fairy-tree',
    name: '仙女樹 (韓星應援代購)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ['仙女樹', '韓星代購', '應援物', '手燈'],
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
      schemeName: 'Chill 刷 (應援追星 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },

  // =========================================================================
  // 🏋️‍♂️ 體態養成、皮拉提斯與營養保健 (台新 Chill 刷 5% 官方特店)
  // =========================================================================
  {
    id: 'kx-pilates',
    name: 'KX PILATES (動態皮拉提斯)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['kx pilates', '皮拉提斯', '核心訓練', '器械皮拉提斯'],
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
      schemeName: 'Chill 刷 (體態養成 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'titor-fitness',
    name: '虎鐵健身 (Titor Fitness)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['虎鐵健身', 'titor fitness', '一對一健身', '教練課'],
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
      schemeName: 'Chill 刷 (體態養成 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: '17fit-platform',
    name: '17FIT (運動線上預約平台)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ['17fit', '運動預約', '瑜珈預約', '健身預約'],
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
      schemeName: 'Chill 刷 (體態養成 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'better-health-tw',
    name: '好好生醫 (Better Health)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['好好生醫', '理科太太', '太空人膠囊', '燕窩酸', '保健品'],
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
      schemeName: 'Chill 刷 (營養補給 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'dietician-light-food',
    name: '營養師輕食 (Dietician)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['營養師輕食', '江欣樺', '益生菌', '魚油', '保健食品'],
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
      schemeName: 'Chill 刷 (營養補給 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'popcare',
    name: 'POPCARE 好在乎 (客製化保健品)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['popcare', '好在乎', '維他命', '保健品'],
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
      schemeName: 'Chill 刷 (營養補給 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'vitabox',
    name: 'VITABOX (維他盒子天然保健品)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['vitabox', '維他盒子', '天然保健品', '葉黃素', '益生菌'],
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
      schemeName: 'Chill 刷 (營養補給 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'myprotein-uk',
    name: 'MYPROTEIN (英國乳清蛋白官方官網)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['myprotein', '英國乳清', '高蛋白', '健身補品', '乳清蛋白'],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (或趣旅行 3.3%)',
      rate: 3.3,
      note: '切換「玩數位」享 3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (營養補給 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },
  {
    id: 'urmart',
    name: 'UrMart (優馬選品健康市集)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['urmart', '優馬選品', '燕麥奶', '高蛋白零食', '健康食品'],
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
      schemeName: 'Chill 刷 (營養補給 5.0%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    }
  },

  // =========================================================================
  // 🍸 人氣酒吧與早午餐 (台新 Chill 刷 10% 官方特店)
  // =========================================================================
  {
    id: 'cafe-acme',
    name: 'CAFE ACME (早午餐與質感咖啡)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['cafe acme', 'acme', '早午餐', '士林acme', '北美館acme', '網美咖啡'],
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
      schemeName: 'Chill 刷 (歡聚微醺 10.0%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    }
  },
  {
    id: 'the-antipodean',
    name: 'The Antipodean (早午餐與巴西莓碗)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['the antipodean', 'antipodean', '澳洲早午餐', '巴西莓碗', '內湖早午餐', '富錦街'],
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
      schemeName: 'Chill 刷 (歡聚微醺 10.0%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    }
  },
  {
    id: 'fake-sober',
    name: 'Fake Sober (信義區人氣街頭酒吧)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['fake sober', '信義區酒吧', 'att4fun', '調酒', '街頭餐酒'],
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
      schemeName: 'Chill 刷 (歡聚微醺 10.0%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    }
  },
  {
    id: 'bar-tcrc',
    name: 'Bar TCRC (台南老屋前科累累酒吧)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['tcrc', 'bar tcrc', '台南酒吧', '亞洲50大酒吧', '老屋調酒'],
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
      schemeName: 'Chill 刷 (歡聚微醺 10.0%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    }
  },
  {
    id: 'bar-home',
    name: 'Bar Home (台南洋房餐酒館)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['bar home', '台南酒吧', '老洋房酒吧', '調酒餐酒'],
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
      schemeName: 'Chill 刷 (歡聚微醺 10.0%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    }
  },
  {
    id: 'phowa-bar',
    name: 'Phowa (台南新概念酒吧)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['phowa', 'tcrc二店', '台南酒吧', '特色調酒'],
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
      schemeName: 'Chill 刷 (歡聚微醺 10.0%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    }
  },
  {
    id: 'moonrock-bar',
    name: 'MOONROCK (台南知名沉浸酒吧)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['moonrock', '台南酒吧', '亞洲50大酒吧', '設計師酒吧'],
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
      schemeName: 'Chill 刷 (歡聚微醺 10.0%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    }
  },

  // =========================================================================
  // 🏪 超市量販、3C 電子與台塑石油 (天天刷 3.3% / 台新Pay 3.8% / 台塑家 3.0%)
  // =========================================================================
  {
    id: 'rt-mart',
    name: '大潤發 (RT-MART)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['大潤發', 'rt mart', '量販', '大賣場', '超市', '全聯集團'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '全支付 (3.0%)',
      rate: 3.0,
      note: '切換「全支付」方案享 3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (日常採買 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」量販享 3.3%'
    }
  },
  {
    id: 'simple-mart',
    name: '美廉社 (Simple Mart)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['美廉社', 'simple mart', '社區超市', '啤酒', '雜貨'],
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
      note: '在美廉社使用台新 Pay 享高達 3.8%！直刷切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'tsannkuen-3c',
    name: '燦坤 3C (Tsann Kuen)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['燦坤', '燦坤3c', '黃色鬼屋', '家電', '筆電', '冷氣', '電視'],
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
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 天天刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在燦坤使用台新 Pay 享高達 3.8%！直刷切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'elife-mall',
    name: '全國電子 (Digital City)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['全國電子', '揪感心', 'digital city', '家電', '冰箱', '洗衣機'],
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
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 天天刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在全國電子使用台新 Pay 享高達 3.8%！直刷切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'senao-international',
    name: '神腦國際 (Senao)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['神腦', '神腦國際', '中華電信', '手機維修', '買手機'],
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
      schemeName: 'Pay 著刷 (台新Pay 3.8%) / 天天刷 (3.3%)',
      rate: 3.8,
      payMethod: 'taishin_pay',
      note: '在神腦使用台新 Pay 享高達 3.8%！直刷切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'formosa-gas',
    name: '台塑石油加油站',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['台塑', '台塑石油', '加油', '95plus', '98', '柴油'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '台塑家 (3.0%)',
      rate: 3.0,
      note: '切換「台塑家」方案享 3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (加油充電 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3% 台新 Point'
    }
  },
  {
    id: 'taiya-gas',
    name: '台亞加油站 (Formosa Oil)',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['台亞', '台亞加油站', '台塑加油', '帝國'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '台塑家 (3.0%)',
      rate: 3.0,
      note: '切換「台塑家」方案享 3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (加油充電 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'fortune-gas',
    name: '福懋加油站',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['福懋', '福懋加油站', '加油', '台塑油品'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '台塑家 (3.0%)',
      rate: 3.0,
      note: '切換「台塑家」方案享 3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (加油充電 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'formosa-biomedical',
    name: '台塑生醫 (FORTE 與 Dr\'s Formula 實體門市)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['台塑生醫', 'forte', 'drs formula', '洗髮精', '保養品'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '台塑家 (3.0%)',
      rate: 3.0,
      note: '切換「台塑家」方案享 3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (日常採買 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
  {
    id: 'chang-gung-biotech',
    name: '長庚生技 (Chang Gung Biotech)',
    category: 'grocery_convenience',
    categoryLabel: '量販 & 超商',
    tags: ['長庚生技', '長庚', '養生保健', '牛樟芝', '冬蟲夏草'],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '台塑家 (3.0%)',
      rate: 3.0,
      note: '切換「台塑家」方案享 3.0%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷 (日常採買 3.3%)',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    }
  },
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
      schemeName: 'Pay 著刷 (LINE Pay 2.3%)',
      rate: 2.3,
      payMethod: 'line_pay',
      note: 'Richart 卡切換「Pay 著刷」綁定 LINE Pay 享 2.3% 加碼！'
    },
    tips: '⚠️ LINE Pay 結帳絕對優先使用【台新 Richart 卡】（Pay 著刷 2.3%），CUBE 卡大部分特店僅 0.3%！'
  },
  {
    id: 'taishin-pay',
    name: '台新 Pay (全家、7-11、新光三越、IKEA等特店)',
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
  },
  {
    id: 'official-bday-bday-0',
    name: '澄居烤物燒肉',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["澄居烤物燒肉", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-torien-yakitori',
    name: '鳥苑 Torien Yakitori',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["鳥苑 Torien Yakitori", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-2',
    name: '豐生茶館梅川東店',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["豐生茶館梅川東店", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-sozai',
    name: 'Sozai',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["Sozai", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-4',
    name: '稻鎮經典台灣菜',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["稻鎮經典台灣菜", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-suo',
    name: '所 SUO',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["所 SUO", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-another-eatery',
    name: 'Another Eatery',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["Another Eatery", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-the-other-eatery',
    name: 'The other Eatery中山小酒館',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["The other Eatery中山小酒館", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-8',
    name: '輝室',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["輝室", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-9',
    name: '鯡魚工作室',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["鯡魚工作室", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-10',
    name: '三點三',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["三點三", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-11',
    name: '粥起粥底火鍋熱炒',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["粥起粥底火鍋熱炒", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-12',
    name: '你家樓下',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["你家樓下", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-13',
    name: '銀杏中餐廳',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["銀杏中餐廳", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-ashin',
    name: 'Ashin 阿鑫',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["Ashin 阿鑫", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-15',
    name: '京丘炭火燒鳥專門店',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["京丘炭火燒鳥專門店", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-16',
    name: '京丘燒鳥酒処',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["京丘燒鳥酒処", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-17',
    name: '燒鳩',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["燒鳩", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-18',
    name: '朧板前燒肉',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["朧板前燒肉", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-19',
    name: '久碳吉炭火燒肉',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["久碳吉炭火燒肉", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-20',
    name: '小方舟串燒酒場',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["小方舟串燒酒場", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-21',
    name: '毛蔬亞洲蔬食',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["毛蔬亞洲蔬食", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-komboi',
    name: 'KOMBOI',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["KOMBOI", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-hosu',
    name: '好嶼 HOSU',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["好嶼 HOSU", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-24',
    name: '肉料理福',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["肉料理福", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-sur',
    name: '澀 Sur-',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["澀 Sur-", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'uncle-ray-daan',
    name: 'UNCLE RAY 串燒·牛飲·咖喱 (台北大安店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["uncle ray", "uncleray", "大安串燒", "大安居酒屋", "咖哩", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '8 月生日當月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'uncle-ray-taichung',
    name: 'UNCLE RAY 串燒·牛飲·咖喱 (台中店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["uncle ray", "uncleray", "台中串燒", "台中居酒屋", "咖哩", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '8 月生日當月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'chen-ayi-hotpot-zhubei-bday',
    name: '陳阿姨火鍋灶咖 (竹北店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["陳阿姨", "陳阿姨火鍋", "陳阿姨火鍋灶咖", "竹北火鍋", "大叔富弟", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '吃陳阿姨火鍋灶咖：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-29',
    name: '蜀叔麻辣鍋',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["蜀叔麻辣鍋", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-pastaio',
    name: 'Pastaio',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["Pastaio", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-pastaio-noodle-cafe',
    name: 'Pastaio noodle cafe',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["Pastaio noodle cafe", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-32',
    name: '青沐',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["青沐", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-rachel',
    name: '芮秋 Rachel',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["芮秋 Rachel", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-li-chiu',
    name: '立秋 Li Chiu',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["立秋 Li Chiu", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-35',
    name: '祇園.禪院壽喜燒',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["祇園.禪院壽喜燒", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-36',
    name: '有你真好湘菜沙龍',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["有你真好湘菜沙龍", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-bday-37',
    name: '水鳥和洋創作料理',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["水鳥和洋創作料理", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'gao-taipei-store',
    name: '髙 GAO Taipei (實體門市)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["gao taipei", "gao", "高taipei", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
  },
  {
    id: 'gao-taipei-online',
    name: '髙 GAO Taipei (線上官網)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["gao taipei", "gao", "高taipei", "線上購物", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'secret-cake-daan',
    name: '法國的秘密甜點 (大安門市)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["法國的秘密甜點", "諾曼地牛奶蛋糕", "大安甜點", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
  },
  {
    id: 'secret-cake-online',
    name: '法國的秘密甜點 (線上官網)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["法國的秘密甜點", "諾曼地牛奶蛋糕", "線上訂購", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'creammm-t-store',
    name: 'creammm.t (台中美村門市)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["creammm.t", "creammmt", "檸檬塔", "台中甜點", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
  },
  {
    id: 'creammm-t-online',
    name: 'creammm.t (線上官網)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["creammm.t", "creammmt", "檸檬塔", "線上訂購", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方特店切換「慶生月」享 10% 小樹點！'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-bday-aufglet',
    name: 'AUFGLET',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["AUFGLET", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-fake-sober',
    name: 'Fake Sober',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["Fake Sober", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-sober-bakery',
    name: 'Sober Bakery',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["Sober Bakery", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-sober-burger',
    name: 'Sober & Burger',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["Sober & Burger", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '🎂 8月生日月官方指定特店切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-ktv-ktv',
    name: '錢櫃KTV',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["錢櫃KTV", "ktv", "唱歌", "聚會", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (KTV 狂歡 10%)',
      rate: 10.0,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '唱 錢櫃KTV 生日當月刷 CUBE【慶生月】享 10% 小樹點！或刷台新【Chill 刷】享 10% 台新 Point！',
  },
  {
    id: 'official-bday-uber-eats',
    name: 'Uber Eats',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["Uber Eats", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'official-bday-klook',
    name: 'Klook',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["Klook", "慶生特店", "精選美饌", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購 (3.3%)',
      rate: 3.3,
      
      note: '平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
    tips: '【CUBE 官方慶生特店】：8 月生日月刷 CUBE【慶生月】享 10% 小樹點！平日刷 3.3%。',
  },
  {
    id: 'funnow-app',
    name: 'FunNow (即時預訂平台)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["funnow", "即時預訂", "休息", "按摩", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '慶生月 (3.5%) / 趣旅行 (3.3%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      birthdayRate: 3.5,
      note: '🎂 8月生日當月切換「慶生月」享 3.5% 小樹點！平日切換「趣旅行」享 3.3%'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
    tips: '8 月生日當月使用 FunNow 預訂，切換 CUBE 卡【慶生月】享 3.5% 小樹點；平日刷 Richart 卡【玩旅刷】或 CUBE 卡【趣旅行】享 3.3%。'
  },
  {
    id: 'official-ai-chatgpt',
    name: 'ChatGPT',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["ChatGPT", "AI訂閱", "生產力工具", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-ai-claude',
    name: 'Claude',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["Claude", "AI訂閱", "生產力工具", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-ai-cursor',
    name: 'Cursor',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["Cursor", "AI訂閱", "生產力工具", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-ai-duolingo',
    name: 'Duolingo',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["Duolingo", "AI訂閱", "生產力工具", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-ai-gamma',
    name: 'Gamma',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["Gamma", "AI訂閱", "生產力工具", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-ai-gemini',
    name: 'Gemini',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["Gemini", "AI訂閱", "生產力工具", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-ai-perplexity',
    name: 'Perplexity',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["Perplexity", "AI訂閱", "生產力工具", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-ai-speak',
    name: 'Speak',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["Speak", "AI訂閱", "生產力工具", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-stream-apple',
    name: 'Apple 媒體服務 (App Store / 內購 / iCloud)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["Apple 媒體服務", "App Store", "Apple內購", "iCloud", "Apple Music", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (3.3%)',
      rate: 3.3,
      note: '切換「玩數位」享 3.0%~3.3% 小樹點（官方指定特店）'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '一般消費 (1.0%) / 假日刷 (2.0%)',
      rate: 1.0,
      note: '非台新數趣刷特店，平日 1.0% / 假日 2.0%'
    },
    tips: 'Apple 媒體服務為國泰 CUBE 卡【玩數位】指定特店（最高 3.3%），台新 Richart 卡非加碼特店（僅 1.0%~2.0%）。'
  },
  {
    id: 'official-stream-google-play',
    name: 'Google Play (安卓課金與應用程式)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["Google Play", "安卓課金", "Google訂閱", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位 (3.3%)',
      rate: 3.3,
      note: '切換「玩數位」享 3.0%~3.3% 小樹點（官方指定特店）'
    },
    richart: {
      scheme: 'weekend',
      schemeName: '一般消費 (1.0%) / 假日刷 (2.0%)',
      rate: 1.0,
      note: '非台新數趣刷特店，平日 1.0% / 假日 2.0%'
    },
    tips: 'Google Play 為國泰 CUBE 卡【玩數位】指定特店（最高 3.3%），台新 Richart 卡非加碼特店（僅 1.0%~2.0%）。'
  },
  {
    id: 'official-stream-max',
    name: 'Max',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["Max", "串流影音", "數位訂閱", "玩數位"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-ec-',
    name: '蝦皮購物',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["蝦皮購物", "線上網購", "電商平台"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-ec-momo',
    name: 'momo購物網',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["momo購物網", "線上網購", "電商平台"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-ec-pchome-24h',
    name: 'PChome 24h購物',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["PChome 24h購物", "線上網購", "電商平台"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-tree-buy',
    name: '小樹購 (國泰小樹點商城)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["小樹購", "國泰小樹購", "樹點商城"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 1.0,
      note: '一般消費享 1.0%'
    },
  },
  {
    id: 'official-coupang-tw',
    name: 'Coupang 酷澎 (台灣)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["coupang", "酷澎", "火箭跨境", "火箭速配"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-taobao',
    name: '淘寶 (Taobao / 天貓)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["淘寶", "天貓", "taobao", "海外電商", "跨境網購"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3%'
    },
  },
  {
    id: 'official-dept-sogo',
    name: '遠東SOGO百貨',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["遠東SOGO百貨", "百貨", "購物中心", "樂饗購"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'official-dept-',
    name: '遠東百貨',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["遠東百貨", "百貨", "購物中心", "樂饗購"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'official-dept-att-4-fun',
    name: 'ATT 4 FUN',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["ATT 4 FUN", "百貨", "購物中心", "樂饗購"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'official-dept-noke',
    name: 'NOKE忠泰樂生活',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["NOKE忠泰樂生活", "百貨", "購物中心", "樂饗購"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'lalaport-nangang',
    name: 'Mitsui Shopping Park LaLaport (南港)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["lalaport", "南港lalaport", "三井lalaport", "百貨購物"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'lalaport-taichung',
    name: 'Mitsui Shopping Park LaLaport (台中)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["lalaport", "台中lalaport", "三井lalaport", "百貨購物"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'official-dept-big-city',
    name: 'Big City遠東巨城購物中心',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["Big City遠東巨城購物中心", "百貨", "購物中心", "樂饗購"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'official-dept-citylink',
    name: 'CITYLINK',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["CITYLINK", "百貨", "購物中心", "樂饗購"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'official-dept-skm-park',
    name: 'SKM Park',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["SKM Park", "百貨", "購物中心", "樂饗購"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'mitsui-outlet-linkou',
    name: 'MITSUI OUTLET PARK (林口)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["三井outlet", "林口outlet", "mitsui", "outlet"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'mitsui-outlet-taichung',
    name: 'MITSUI OUTLET PARK (台中港)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["三井outlet", "台中港outlet", "mitsui", "outlet"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'mitsui-outlet-tainan',
    name: 'MITSUI OUTLET PARK (台南)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["三井outlet", "台南outlet", "mitsui", "outlet"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'official-domestic-dining',
    name: '全台國內餐飲 (實體餐廳與獨立名店)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["全台餐飲", "國內餐飲", "餐廳", "小吃", "美食"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點（排除餐券）'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3%'
    },
  },
  {
    id: 'official-hotel-',
    name: '海外實體消費(含國外餐飲、飯店到店付款等)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["海外實體消費(含國外餐飲、飯店到店付款等)", "飯店住宿", "訂房", "國外飯店"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-park-',
    name: '東京華納兄弟哈利波特影城',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["東京華納兄弟哈利波特影城", "哈利波特", "日本影城", "東京旅遊"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-park-usj',
    name: '大阪環球影城(USJ)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["大阪環球影城(USJ)", "哈利波特", "日本影城", "東京旅遊"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'apple-wallet-suica',
    name: 'Apple 錢包 (Suica 日本西瓜卡加值)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["suica", "西瓜卡", "apple pay suica", "日本交通", "日本旅遊"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'apple-wallet-pasmo',
    name: 'Apple 錢包 (PASMO 日本交通卡加值)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["pasmo", "pasmo卡", "apple pay pasmo", "日本交通", "日本旅遊"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'apple-wallet-icoca',
    name: 'Apple 錢包 (ICOCA 關西交通卡加值)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["icoca", "icoca卡", "apple pay icoca", "關西交通", "日本旅遊"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-transport-grab',
    name: 'Grab',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["Grab", "叫車", "租車", "出行交通"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-transport-yoxi',
    name: 'yoxi',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["yoxi", "叫車", "租車", "出行交通"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-transport-',
    name: '台灣大車隊',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["台灣大車隊", "叫車", "租車", "出行交通"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-transport-irent',
    name: 'iRent',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["iRent", "叫車", "租車", "出行交通"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-airline-',
    name: '中華航空',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["中華航空", "機票", "航空", "海外旅遊"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-hotel-inn',
    name: '東橫INN',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["東橫INN", "飯店住宿", "訂房", "國外飯店"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-travel-agency-',
    name: '雄獅旅遊',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["雄獅旅遊", "旅行社", "跟團", "機加酒"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-ev-u-power',
    name: 'U-POWER',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["U-POWER", "電動車充電", "充電樁", "EV充電"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-ev-evoasis',
    name: 'EVOASIS',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["EVOASIS", "電動車充電", "充電樁", "EV充電"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-ev-evalue',
    name: 'EVALUE',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["EVALUE", "電動車充電", "充電樁", "EV充電"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-ev-tail',
    name: 'TAIL',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["TAIL", "電動車充電", "充電樁", "EV充電"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-ev-icharging',
    name: 'iCharging',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["iCharging", "電動車充電", "充電樁", "EV充電"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'official-parking-',
    name: '車麻吉',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["車麻吉", "路邊停車", "自動繳費", "停車場"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 1.0,
      note: '一般消費享 1.0%'
    },
  },
  {
    id: 'official-parking-utaggo',
    name: 'uTagGo',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["uTagGo", "路邊停車", "自動繳費", "停車場"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 1.0,
      note: '一般消費享 1.0%'
    },
  },
  {
    id: 'official-px-',
    name: '全聯福利中心(不含大全聯)',
    category: 'grocery_convenience',
    categoryLabel: '超市 & 藥妝',
    tags: ["全聯福利中心(不含大全聯)", "全支付", "大全聯", "行動支付"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'pxpay',
      schemeName: '全支付',
      rate: 3.0,
      note: '切換「全支付」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 1.0,
      note: '一般消費享 1.0%'
    },
  },
  {
    id: 'official-formosa-',
    name: '台塑生醫實體門市',
    category: 'grocery_convenience',
    categoryLabel: '超市 & 藥妝',
    tags: ["台塑生醫實體門市", "台塑生醫", "長庚生技", "台塑家"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'formosa',
      schemeName: '台塑家',
      rate: 3.3,
      note: '切換「台塑家」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 1.0,
      note: '一般消費享 1.0%'
    },
  },
  {
    id: 'newcbparty-ktv',
    name: '星聚點 KTV',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["星聚點", "星聚點ktv", "唱歌", "熱炒", "慶生"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '慶生月 (10%) / 樂饗購 (3.3%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      birthdayRate: 10.0,
      note: '🎂 8月生日當月切換「慶生月」享 10% 小樹點！平日切換「樂饗購」享 3.3%'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (KTV 狂歡 10%)',
      rate: 10.0,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
  },
  {
    id: 'jetstar-air',
    name: '捷星航空 (Jetstar Airways)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["捷星", "捷星航空", "jetstar", "廉航", "機票"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'ana-all-nippon',
    name: 'ANA 全日空 (All Nippon Airways)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["ana", "全日空", "日本機票", "東京機票"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'airasia-air',
    name: '亞洲航空 (AirAsia)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["airasia", "亞洲航空", "亞航", "東南亞廉航"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'united-airlines',
    name: '聯合航空 (United Airlines)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["聯合航空", "united airlines", "美加機票", "舊金山直飛"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'vietjet-air',
    name: '越捷航空 (VietJet Air)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["越捷航空", "vietjet", "越南機票", "廉航"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'korean-air',
    name: '大韓航空 (Korean Air)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["大韓航空", "korean air", "首爾機票", "韓國旅遊"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'delta-air-lines',
    name: '達美航空 (Delta Air Lines)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["達美航空", "delta", "美加機票", "西雅圖直飛"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'turkish-airlines',
    name: '土耳其航空 (Turkish Airlines)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["土耳其航空", "turkish airlines", "伊斯坦堡", "歐洲轉機"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'qatar-airways',
    name: '卡達航空 (Qatar Airways)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["卡達航空", "qatar airways", "杜哈", "五星級航空"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'air-france',
    name: '法國航空 (Air France)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["法國航空", "air france", "巴黎機票", "歐洲機票"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'easy-rent-car',
    name: '和運租車',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["和運租車", "和運", "租車自駕", "irent"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'carplus-rent',
    name: '格上租車',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["格上租車", "格上", "租車自駕", "格上go smart"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'lifetour-tw',
    name: '五福旅遊',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["五福旅遊", "五福旅行社", "日本跟團", "旅遊行程"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'startravel-tw',
    name: '燦星旅遊',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["燦星旅遊", "燦星", "四國包機", "普吉島包機"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'richmond-travel',
    name: '山富旅遊',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["山富旅遊", "山富旅行社", "日本包機", "郵輪假期"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'everfun-travel',
    name: '長汎假期 (長榮航空直營旅行社)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["長汎假期", "長汎旅行社", "長榮旅行社", "長榮假期"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'phoenix-tour',
    name: '鳳凰旅行社',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["鳳凰旅行社", "鳳凰旅遊", "上市旅行社", "歐洲跟團"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'ezfly-tw',
    name: 'Ezfly 易飛網',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["ezfly", "易飛網", "機票比價", "自由行"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'perfect-travel',
    name: '理想旅遊',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["理想旅遊", "理想旅行社", "高端旅遊", "歐洲頂級團"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'win-win-travel',
    name: '永利旅行社',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["永利旅行社", "永利旅遊", "海外旅遊"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'sanka-travel',
    name: '三賀旅行社',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["三賀旅行社", "三賀旅遊", "海外旅遊"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'eztravel-tw',
    name: 'ezTravel 易遊網',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["eztravel", "易遊網", "環島之星", "火車票", "訂房"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'hoshino-resorts',
    name: '星野集團 (Hoshino Resorts)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["星野集團", "星野渡假村", "虹夕諾雅", "界", "omo", "risonare"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'disney-hotels-global',
    name: '全球迪士尼飯店 (Disney Hotels)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["迪士尼飯店", "東京迪士尼飯店", "全球迪士尼飯店", "迪士尼樂園酒店"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3%'
    },
  },
  {
    id: 'fareastern-garden-city',
    name: '遠東 Garden City (大巨蛋商場)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["garden city", "遠東gardencity", "大巨蛋商場", "潮美食公園"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'uni-president-taipei',
    name: '統一時代百貨台北店',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["統一時代", "時代百貨", "市政府站時代百貨", "統一時代台北店"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點（不含DREAM PLAZA）'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'dayeh-takashimaya',
    name: '大葉高島屋 (天母高島屋)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["大葉高島屋", "天母高島屋", "高島屋", "天母百貨"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'honhui-plaza',
    name: '宏匯廣場 (新莊宏匯)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["宏匯廣場", "新莊宏匯", "副都心宏匯", "宏匯"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'taimall-shopping',
    name: '台茂購物中心 (桃園台茂)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["台茂", "台茂購物中心", "桃園台茂", "南崁台茂"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'metrowalk-shopping',
    name: '大江國際購物中心 (中壢大江)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["大江購物中心", "大江國際", "中壢大江", "大江"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'nice-plaza-chiayi',
    name: '耐斯廣場 (嘉義耐斯)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["耐斯廣場", "嘉義耐斯", "耐斯松屋", "嘉義百貨"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'luna-plaza-yilan',
    name: '蘭城新月廣場 (宜蘭新月)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["新月廣場", "宜蘭新月", "蘭城新月", "宜蘭百貨"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'showtime-live',
    name: '秀泰生活 (各分館商場)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["秀泰生活", "秀泰生活館", "樹林秀泰", "台中秀泰", "嘉義秀泰"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'global-mall-tw',
    name: '環球購物中心 (Global Mall 全台分館)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["環球購物中心", "global mall", "中和環球", "板橋環球", "南港環球", "桃園A8", "新左營環球", "屏東環球"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'pacific-department',
    name: '太平洋百貨 (豐原/屏東)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["太平洋百貨", "豐原太平洋", "屏東太平洋", "太百"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'lopia-supermarket-tw',
    name: 'LOPIA 台灣 (日系連鎖超市)',
    category: 'grocery_convenience',
    categoryLabel: '超市 & 藥妝',
    tags: ["lopia", "樂比亞", "日系超市", "台中lopia", "中和lopia", "桃園lopia"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    },
  },
  {
    id: 'ikea-furniture-tw',
    name: 'IKEA 宜家家居',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["ikea", "宜家家居", "ikea家具", "ikea餐廳", "瑞典肉丸"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
  },
  {
    id: 'smile-gas-station',
    name: '統一速邁樂加油站 (限台灣本島)',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["速邁樂", "統一速邁樂", "速邁樂加油", "openpoint加油"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'formosa',
      schemeName: '台塑家',
      rate: 3.3,
      note: '切換「台塑家」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    },
  },
  {
    id: 'formosa-vegetable-store',
    name: '台塑蔬菜實體門市',
    category: 'grocery_convenience',
    categoryLabel: '超市 & 藥妝',
    tags: ["台塑蔬菜", "台塑生機", "台塑生醫門市"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'formosa',
      schemeName: '台塑家',
      rate: 3.3,
      note: '切換「台塑家」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 1.0,
      note: '一般消費享 1.0%'
    },
  },
  {
    id: 'formosa-shopping-online',
    name: '台塑購物網',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["台塑購物網", "台塑生醫網購", "線上購物"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'formosa',
      schemeName: '台塑家',
      rate: 3.3,
      note: '切換「台塑家」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 1.0,
      note: '一般消費享 1.0%'
    },
  },
  {
    id: 'hilife-convenience-tw',
    name: '萊爾富實體門市 (Hi-Life)',
    category: 'grocery_convenience',
    categoryLabel: '超市 & 藥妝',
    tags: ["萊爾富", "hi-life", "hilife", "便利商店"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: CATHAY_OFFICIAL_URL,
    cube: {
      scheme: 'formosa',
      schemeName: '台塑家',
      rate: 3.3,
      note: '切換「台塑家」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷',
      rate: 3.3,
      note: '切換「天天刷」享 3.3%'
    },
  },
  {
    id: 'ding-ge-tea',
    name: '叮哥茶飲 (台東手搖之光)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["叮哥茶飲", "叮哥", "台東手搖", "初鹿鮮奶茶", "chill"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (日常續命 10%)',
      rate: 10.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 10% 台新 Point！'
    },
    tips: '喝叮哥茶飲必刷【台新 Richart 卡】切換【Chill 刷】享 10% 回饋！',
  },
  {
    id: 'fanme-kpop',
    name: 'FANME (追星周邊平台)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["fanme", "kpop", "韓星周邊", "應援", "chill"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (應援追星 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    },
  },
  {
    id: 'nol-ticket',
    name: 'NOL (NOL Ticket 韓國售票)',
    category: 'game_stream',
    categoryLabel: '遊戲 & 影音',
    tags: ["nol", "nol ticket", "韓國門票", "演唱會", "chill"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (應援追星 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    },
  },
  {
    id: 'straight-a-apple',
    name: 'Straight A (校園 Apple 授權店)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["straight a", "studio a", "校園教育價", "apple經銷"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (數位外掛 3.3%)',
      rate: 3.3,
      isChillSpecial: true,
      note: '切換「Chill 刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'insta360-camera',
    name: 'Insta360 (全景相機官網/門市)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["insta360", "全景相機", "運動相機", "x4", "ace pro"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (數位外掛 3.3%)',
      rate: 3.3,
      isChillSpecial: true,
      note: '切換「Chill 刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'gopro-camera',
    name: 'GoPro (運動相機官網/專賣)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["gopro", "hero12", "hero13", "運動相機", "極限攝影"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (數位外掛 3.3%)',
      rate: 3.3,
      isChillSpecial: true,
      note: '切換「Chill 刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'onitsuka-tiger-shoes',
    name: 'Onitsuka Tiger (鬼塚虎日本復古慢跑鞋)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["鬼塚虎", "onitsuka tiger", "mexico 66", "日本潮鞋", "chill"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (運動品牌 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    },
  },
  {
    id: 'salomon-running',
    name: 'Salomon (薩洛蒙戶外越野鞋)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["salomon", "薩洛蒙", "xt-6", "越野跑鞋", "山系穿搭", "chill"],
    validUntil: '2026/09/30',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'chill',
      schemeName: 'Chill 刷 (運動品牌 5%)',
      rate: 5.0,
      isChillSpecial: true,
      note: '🔥 切換「Chill 刷」享 5.0% 台新 Point！'
    },
  },
  {
    id: 'smart-daily-life',
    name: '智生活 (社區管理與智慧繳費)',
    category: 'grocery_convenience',
    categoryLabel: '超市 & 藥妝',
    tags: ["智生活", "社區繳費", "管理費", "包裹通知"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'general',
      schemeName: '一般消費',
      rate: 0.3,
      note: '一般消費 0.3%'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷',
      rate: 3.3,
      note: '切換「天天刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'dudufang-parking',
    name: '嘟嘟房停車場 (中興電工)',
    category: 'travel_traffic',
    categoryLabel: '交通 & 叫車',
    tags: ["嘟嘟房", "嘟嘟房停車", "停車費", "市區停車"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'selected',
      schemeName: '集精選',
      rate: 3.0,
      note: '切換「集精選」享 3.0% 小樹點'
    },
    richart: {
      scheme: 'everyday',
      schemeName: '天天刷',
      rate: 3.3,
      note: '切換「天天刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'tixcraft-ticket',
    name: '拓元售票系統 (tixCraft)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["拓元", "拓元售票", "演唱會搶票", "tixcraft", "大巨蛋門票"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'kktix-ticket',
    name: 'KKTIX 售票平台',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ["kktix", "kktix售票", "售票系統", "見面會門票"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷',
      rate: 3.3,
      note: '切換「好饗刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'sat-knowledge-course',
    name: '知識衛星 (SAT. Knowledge 線上課程)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["知識衛星", "sat knowledge", "線上課程", "進修學習"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'amazing-talker-course',
    name: 'AmazingTalker (線上家教一對一)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["amazingtalker", "線上英文", "外語家教", "語言學習"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'tutor-abc-course',
    name: 'TutorABC (線上英語真人互動)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["tutorabc", "tutor abc", "線上英文", "真人外教"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'hahow-course',
    name: 'Hahow 好學校 (線上跨領域學習)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["hahow", "好學校", "線上課程", "設計插畫", "程式學習"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'pressplay-academy',
    name: 'PressPlay Academy (PPA 知識訂閱課程)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["pressplay", "ppa", "知識訂閱", "線上課程", "投資理財課"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'shein-online',
    name: 'SHEIN (全球時尚流行服飾)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["shein", "希音", "快時尚", "海外網購"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'farfetch-luxury',
    name: 'Farfetch (全球精品買手店平台)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["farfetch", "精品網購", "歐洲精品", "奢侈品海淘"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'olive-young-global',
    name: 'Olive Young (韓國藥妝直郵官網)',
    category: 'ecommerce',
    categoryLabel: '線上網購',
    tags: ["olive young", "oliveyoung", "韓國藥妝", "韓系美妝直郵"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'digital',
      schemeName: '玩數位',
      rate: 3.3,
      note: '切換「玩數位」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'digital_fun',
      schemeName: '數趣刷',
      rate: 3.3,
      note: '切換「數趣刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'airsim-roam',
    name: 'AIRSIM (無國界上網卡)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["airsim", "airsim roam", "出國網卡", "esim", "出國上網"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'wowpass-korea',
    name: 'WOWPASS (韓國預付交通卡)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["wowpass", "韓國交通卡", "韓國刷卡", "t-money"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'galilee-tours',
    name: '加利利旅行社 (Galilee Tours 歐洲頂級蜜月)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["加利利", "加利利旅行社", "歐洲蜜月", "頂級團", "奧捷團"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'see-mark-travel',
    name: '喜鴻假期 (喜鴻旅行社)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["喜鴻假期", "喜鴻旅行社", "日本跟團", "海島渡假"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'sunday-tour',
    name: '行健旅遊 (行健旅行社 中東歐美專業)',
    category: 'travel_traffic',
    categoryLabel: '海外 & 訂房',
    tags: ["行健旅遊", "行健旅行社", "長程線專家", "歐洲旅遊", "土耳其旅遊"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'travel',
      schemeName: '趣旅行',
      rate: 3.3,
      note: '切換「趣旅行」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'travel',
      schemeName: '玩旅刷',
      rate: 3.3,
      note: '切換「玩旅刷」享 3.3% 台新 Point'
    },
  },
  {
    id: 'nitori-furniture',
    name: '宜得利家居 (NITORI 日本家具)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 服飾',
    tags: ["宜得利", "nitori", "日本家具", "日系家飾", "涼感被"],
    validUntil: '2026/12/31',
    lastVerifiedAt: '2026/08/29',
    officialSourceUrl: TAISHIN_OFFICIAL_URL,
    cube: {
      scheme: 'dining',
      schemeName: '樂饗購',
      rate: 3.3,
      note: '切換「樂饗購」享 3.3% 小樹點'
    },
    richart: {
      scheme: 'big_spend',
      schemeName: '大筆刷',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3% 台新 Point'
    },
  }
];
