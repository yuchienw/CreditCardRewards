import type { Merchant } from '../types/merchant';

const TAISHIN_OFFICIAL_URL = 'https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html';
const CATHAY_OFFICIAL_URL = 'https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list';

export const MERCHANTS: Merchant[] = [
  // =========================================================================
  // 🎮 遊戲平台、AI 服務與數位 3C (100% 單一獨立條目)
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
    name: 'MyCard',
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
  // 📺 影音串流平台與線上課程 (100% 單一獨立條目)
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
    name: 'Hahow (好學校)',
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
  // 🧋 熱門手搖飲與咖啡廳 (100% 單一獨立條目)
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
    name: '%Arabica',
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
  // 🍲 火鍋、燒肉、餐酒館與速食 (100% 單一獨立條目)
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
    name: '臺虎精釀 (含啜飲室)',
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
    name: '爭鮮迴轉壽司 / 爭鮮 Plus',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['爭鮮', 'sushi express', '爭鮮plus', '平價壽司', '日料'],
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
    id: 'ttfb-group',
    name: '瓦城泰統集團 (瓦城/非常泰/1010湘/大心/時時香/YABI)',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['瓦城', '非常泰', '1010湘', '大心', '時時香', 'yabi', '泰國菜', '聚餐'],
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
      schemeName: '樂饗購 (官方指定旗艦店慶生特店10%)',
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
      schemeName: '樂饗購 (🎂官方慶生特店 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」3.3% / 🎂 8月生日月官方特店享 10% 小樹點！'
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
      schemeName: '樂饗購 (或趣旅行)',
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
    name: '老爺酒店集團 (Hotel Royal / 礁溪老爺 / 知本老爺 / 老爺行旅)',
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
    name: '雲朗觀光 (君品 / 雲品 / 翰品 / 兆品)',
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
    name: '漢來大飯店 (高雄漢來 / 台北漢來 / 漢來海港)',
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
    id: 'cashbox-ktv',
    name: '錢櫃 KTV',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['錢櫃', 'ktv', '唱歌', '夜唱', '牛肉麵'],
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
    id: 'oncor-ktv',
    name: 'ONCOR KTV / sing!go / 享溫馨',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['oncor', 'singgo', '享溫馨', '頂級ktv', '信義區ktv'],
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
    name: '年代售票 / 寬宏售票 / OPENTIX 兩廳院',
    category: 'dining_delivery',
    categoryLabel: '外送 & 餐飲',
    tags: ['年代售票', '寬宏售票', 'opentix', '兩廳院', '舞台劇', '音樂劇', '門票'],
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
  // 🛵 外送平台 (100% 單一獨立條目)
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
      schemeName: '樂饗購 (🎂生日月特店最高 10%)',
      rate: 3.3,
      isBirthdaySpecial: true,
      note: '切換「樂饗購」享 3.3% / 生日月官方特店享 10%'
    },
    richart: {
      scheme: 'dining',
      schemeName: '好饗刷 (外送平台 3.3%)',
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
      schemeName: '好饗刷 (外送平台 3.3%)',
      rate: 3.3,
      note: '切換「好饗刷」外送平台享 3.3%'
    }
  },

  // =========================================================================
  // 🏬 百貨購物中心與 Outlet (100% 單一獨立條目)
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
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
      schemeName: '大筆刷 (指定百貨 3.3%)',
      rate: 3.3,
      note: '切換「大筆刷」享 3.3%'
    },
    tips: '逛微風各館：生日月刷 CUBE「慶生月」10%；平日刷 CUBE「樂饗購」或 Richart「大筆刷」皆享 3.3%。'
  },
  {
    id: 'lalaport',
    name: 'LaLaport (南港 / 台中)',
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
    name: '漢神百貨 / 漢神巨蛋 / 漢神洲際',
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
    name: '高雄夢時代購物中心 / 統一時代百貨 (含 DREAM PLAZA)',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['夢時代', '統一時代', 'dream plaza', '高雄夢時代', '市府轉運站'],
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
    name: 'Big City 遠東巨城購物中心 / 廣三 SOGO',
    category: 'department_fashion',
    categoryLabel: '百貨 & 購物',
    tags: ['巨城', 'big city', '新竹巨城', '廣三sogo', '台中廣三'],
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
    name: 'MITSUI OUTLET PARK (三井 Outlet 林口 / 台中港 / 台南)',
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
  // 👟 運動品牌、時尚服飾與健身房 (100% 單一獨立條目)
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
  // 🛒 網購電商與海外購物 (100% 單一獨立條目)
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
      schemeName: '玩旅刷 (海外線上 3.3%)',
      rate: 3.3,
      note: '切換「玩旅刷」海外消費享 3.3%'
    },
    tips: '淘寶屬於海外交易，Richart 卡切換【玩旅刷】享 3.3%，略勝 CUBE「玩數位」3.0%！'
  },
  {
    id: 'amazon',
    name: 'Amazon (美亞 / 日亞)',
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
  // 🏪 超商、量販超市與藥妝藥局 (100% 單一獨立條目)
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
  // 🚆 交通通勤、加油充電與叫車 (100% 單一獨立條目)
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
    name: 'LINE GO (計程車/共享車/租車)',
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
      note: '切換「天天刷」享 3.3%'
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
    name: 'USPACE (共享車位/停車)',
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
  // ✈️ 航空公司、國外旅遊與日本實體 (100% 單一獨立條目)
  // =========================================================================
  {
    id: 'japan-offline',
    name: '日本實體門市消費 (唐吉訶德 / BicCamera / 松本清 / 大國藥妝 / Lawson)',
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
    name: '日本航空 (JAL) / 樂桃航空 / 酷航 / 新加坡航空 / 阿聯酋航空',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['日航', 'jal', '樂桃', '酷航', '新航', '阿聯酋', '機票', '出國'],
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
    name: '東南旅遊 / 可樂旅遊 / 喜鴻 / 加利利',
    category: 'travel_traffic',
    categoryLabel: '旅遊 & 交通',
    tags: ['東南旅遊', '可樂旅遊', '喜鴻', '加利利', '五福旅遊', '旅行社', '跟團'],
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
  // 📱 行動支付與一般消費 (100% 單一獨立條目)
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
      schemeName: 'Pay 著刷 (LINE Pay 2.3%)',
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
