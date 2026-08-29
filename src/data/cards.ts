import type { CreditCard, CategoryType } from '../types/card';

export const CATEGORIES: { id: CategoryType; label: string; icon: string; description: string }[] = [
  { id: 'all', label: '全部卡片', icon: 'Sparkles', description: '瀏覽所有精選信用卡與回饋' },
  { id: 'general', label: '國內無腦刷', icon: 'CreditCard', description: '一般消費高回饋、低門檻無上限' },
  { id: 'mobile_pay', label: '行動支付', icon: 'Smartphone', description: 'LINE Pay、街口、全支付、Apple Pay' },
  { id: 'overseas', label: '國外/日韓旅遊', icon: 'Plane', description: '出國實體刷卡、日韓高回饋、免手續費' },
  { id: 'online_shopping', label: '網購電商', icon: 'ShoppingBag', description: '蝦皮、momo、PChome、淘寶、Amazon' },
  { id: 'food_delivery', label: '美食外送/叫車', icon: 'UtensilsCrossed', description: 'Uber Eats、foodpanda、Uber、台灣大車隊' },
  { id: 'transport', label: '交通/加油/高鐵', icon: 'Car', description: '加油站、高鐵、台鐵、悠遊卡自動加值' },
  { id: 'entertainment', label: '影音/訂閱/娛樂', icon: 'Tv', description: 'Netflix、Spotify、Disney+、YouTube' },
];

export const CREDIT_CARDS: CreditCard[] = [
  {
    id: 'cathay-cube',
    bank: '國泰世華',
    name: 'CUBE 卡',
    badge: '熱門神卡',
    colorGradient: 'from-amber-600 to-amber-900',
    annualFeeInfo: '申辦電子帳單享免年費',
    officialUrl: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 0.3,
    generalOverseasRate: 0.3,
    currencyRewardType: '小樹點 (1點 = 1元)',
    highlights: [
      '切換 5 大權益享 3%~3.3% 小樹點無上限',
      '「玩數位」網購/串流、「樂饗購」餐飲/百貨/外送',
      '「趣旅行」機票/日本/國外實體 3% 無上限',
      '「集精選」家樂福/全聯/加油站 2%~3%'
    ],
    rewards: [
      {
        name: '趣旅行 - 海外實體/機票訂房',
        category: 'overseas',
        rate: 3.3,
        capText: '無上限',
        condition: '每日可於 CUBE App 切換一次權益方案 (持有台幣存款帳戶享 3.3%)',
        channels: ['海外實體消費', '各家航空公司機票', 'Agoda', 'Booking.com', 'Klook']
      },
      {
        name: '玩數位 - 網購與數位影音',
        category: 'online_shopping',
        rate: 3.0,
        capText: '無上限',
        condition: '切換「玩數位」權益方案',
        channels: ['蝦皮購物', 'momo購物網', 'PChome 24h', 'Netflix', 'Spotify', 'Disney+']
      },
      {
        name: '樂饗購 - 美食外送與餐飲',
        category: 'food_delivery',
        rate: 3.0,
        capText: '無上限',
        condition: '切換「樂饗購」權益方案',
        channels: ['Uber Eats', 'foodpanda', '各大百貨公司', '國內知名連鎖餐廳']
      },
      {
        name: '集精選 - 日常生活消費',
        category: 'general',
        rate: 2.0,
        capText: '無上限',
        condition: '切換「集精選」權益方案',
        channels: ['全聯福利中心', '家樂福', '中油直營', '台灣中油']
      }
    ],
    tips: [
      '每天晚上 23:59 前切換權益，全天消費皆適用當天最終方案！',
      '小樹點可即時折抵帳單，或兌換各大航空里程與哩程票。'
    ]
  },
  {
    id: 'esun-unicard',
    bank: '玉山銀行',
    name: 'Unicard',
    badge: '百大特店自選',
    colorGradient: 'from-emerald-600 to-teal-900',
    annualFeeInfo: '綁定玉山帳戶自動扣繳享免年費',
    officialUrl: 'https://www.esunbank.com/zh-tw/personal/credit-card/intro/bank-card/unicard',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 1.0,
    generalOverseasRate: 1.0,
    currencyRewardType: '玉山 e point (1點 = 1元)',
    highlights: [
      '國內外一般消費 1% e point 無上限',
      '簡單選最高 3.5% / 任意選最高 4% / UP選最高 5%',
      '涵蓋 LINE Pay、日本實體、外送、網購等百大特店',
      '點數折抵消費無門檻，最高 100% 折抵'
    ],
    rewards: [
      {
        name: '行動支付 (LINE Pay / 街口 / 全支付)',
        category: 'mobile_pay',
        rate: 4.5,
        capText: '加碼每月上限 500 點 (約可刷 16,666 元)',
        capAmount: 500,
        maxSpend: 16666,
        condition: '任意選特店 / UP選方案 + 玉山帳戶自動扣繳',
        channels: ['LINE Pay', '街口支付', '全支付', '悠遊付']
      },
      {
        name: '日韓實體特店消費',
        category: 'overseas',
        rate: 5.0,
        capText: '加碼每月上限 1,000 點',
        capAmount: 1000,
        maxSpend: 25000,
        condition: 'UP選或指定特店加碼方案',
        channels: ['日本實體店面', '韓國實體店面', '驚安殿堂唐吉訶德', 'Bic Camera']
      },
      {
        name: '電商與外送平台',
        category: 'online_shopping',
        rate: 3.5,
        capText: '加碼每月上限 500 點',
        capAmount: 500,
        maxSpend: 20000,
        condition: '簡單選或任意選自選特店',
        channels: ['momo購物', '蝦皮購物', 'Uber Eats', 'foodpanda', 'Coupang 酷澎']
      }
    ],
    tips: [
      '玉山 e point 1 點可直接在 Wallet 折抵單筆消費或帳單金額。',
      'UP選方案訂閱門檻為上月簽帳達 3 萬元或完成指定資產條件。'
    ]
  },
  {
    id: 'fubon-j-card',
    bank: '台北富邦',
    name: 'J 卡 / 熊本熊卡',
    badge: '日韓神卡',
    colorGradient: 'from-blue-600 to-indigo-900',
    annualFeeInfo: '綁定富邦 LINE 官方帳號好友免年費',
    officialUrl: 'https://www.fubon.com/banking/personal/credit_card/all_card/jcard/jcard.htm',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 1.0,
    generalOverseasRate: 3.0,
    currencyRewardType: 'LINE POINTS 或 現金回饋',
    highlights: [
      '日韓實體消費 3% 回饋無上限',
      '日韓指定便利商店、藥妝、遊樂園最高 10%',
      '國內一般消費 1% 回饋無上限',
      '日韓隨身必備交通 Suica / PASMO 加值優惠'
    ],
    rewards: [
      {
        name: '日本/韓國 實體消費',
        category: 'overseas',
        rate: 6.0,
        capText: '基本 3% 無上限 + 登錄加碼 3% (每季上限 600 元)',
        capAmount: 600,
        maxSpend: 20000,
        condition: '需以實體卡或 Apple Pay 於日韓實體店家交易，加碼需每季登錄',
        channels: ['日本實體店面', '韓國實體店面', 'BicCamera', '松本清', '唐吉訶德']
      },
      {
        name: '日韓便利商店 & 交通卡加值',
        category: 'overseas',
        rate: 10.0,
        capText: '每季上限 200 元 (限 JCB 卡別)',
        capAmount: 200,
        maxSpend: 2000,
        condition: '持 J 卡 (JCB) 綁定 Apple Pay 感應加值 Suica / PASMO / ICOCA',
        channels: ['Apple Pay 加值 Suica', '日本 7-11', 'Lawson', 'FamilyMart']
      },
      {
        name: '國內 LINE Pay 支付',
        category: 'mobile_pay',
        rate: 2.0,
        capText: '每月上限 200 點',
        capAmount: 200,
        maxSpend: 20000,
        condition: '綁定台北富邦帳戶自動扣繳信用卡款',
        channels: ['LINE Pay']
      }
    ],
    tips: [
      '出國去日本必選 JCB 卡別，可享有日本機場貴賓室與 Apple Pay Suica 交通加值優惠。',
      '每季加碼活動記得準時在富邦官網或 App 登錄。'
    ]
  },
  {
    id: 'taishin-gogo',
    bank: '台新銀行',
    name: '@GoGo 卡 (黑狗卡)',
    badge: '網購/行動支付',
    colorGradient: 'from-zinc-800 to-stone-900',
    annualFeeInfo: '申辦電子帳單且使用 Richart 自動扣繳享免年費',
    officialUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 0.5,
    generalOverseasRate: 0.5,
    currencyRewardType: '台新 Point (1點 = 1元)',
    highlights: [
      '指定行動支付 & 網購最高 3.8% 台新 Point',
      '國內一般 0.5% 回饋無上限',
      '台新 Point 可即時 100% 1點折1元帳單或全家折抵',
      '支援 LINE Pay、全支付、全盈+PAY、蝦皮'
    ],
    rewards: [
      {
        name: '行動支付 (LINE Pay / 全支付 / 台新 Pay)',
        category: 'mobile_pay',
        rate: 3.8,
        capText: '每期帳單加碼上限 1,000 點 (可刷達 30,303 元)',
        capAmount: 1000,
        maxSpend: 30303,
        condition: '需使用數位帳單 + Richart 自動扣繳台新信用卡帳單',
        channels: ['LINE Pay', '全支付', '台新 Pay', '全盈+PAY']
      },
      {
        name: '熱門電商網購',
        category: 'online_shopping',
        rate: 3.8,
        capText: '每期帳單加碼上限 1,000 點 (共用上限)',
        capAmount: 1000,
        maxSpend: 30303,
        condition: '需綁定 Richart 自動扣繳',
        channels: ['蝦皮購物', 'momo購物網', 'PChome', '酷澎 Coupang']
      }
    ],
    tips: [
      '每期最高可刷達 3 萬元拿滿 3.8%，是買大額電商或日常 LINE Pay 首選！',
      '回饋以台新 Point 發放，下載 Richart Life App 可直接折抵帳單。'
    ]
  },
  {
    id: 'sinopac-sport',
    bank: '永豐銀行',
    name: 'SPORT 卡',
    badge: '運動感應神卡',
    colorGradient: 'from-orange-500 to-red-800',
    annualFeeInfo: '申請電子公簡訊帳單享免年費',
    officialUrl: 'https://bank.sinopac.com/sinopacBT/personal/credit-cards/introduction/bankcard/sport-card.html',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 1.0,
    generalOverseasRate: 1.0,
    currencyRewardType: '豐點 (1點 = 1元)',
    highlights: [
      'Apple Pay / Google Pay 感應支付最高 7% 回饋',
      '每月消耗 7,000 卡路里或運動 10 天即可解鎖加碼',
      '指定通路 (藥妝/運動休閒/生鮮) 高達 7%',
      '無腦實體感應消費主力'
    ],
    rewards: [
      {
        name: 'Apple Pay / Google Pay 指定感應支付',
        category: 'mobile_pay',
        rate: 7.0,
        capText: '指定支付加碼每月上限 300 豐點 (可刷 6,000 元)',
        capAmount: 300,
        maxSpend: 6000,
        condition: '需下載「汗水不白流」App 並月達成 7,000 卡路里或 Apple Watch 記錄',
        channels: ['Apple Pay', 'Google Pay', '實體店家感應支付']
      },
      {
        name: '運動/健康通路 (藥妝、迪卡儂)',
        category: 'general',
        rate: 7.0,
        capText: '每月上限 300 豐點 (共用指定通路上限)',
        capAmount: 300,
        maxSpend: 6000,
        condition: '達成汗水不白流運動目標',
        channels: ['屈臣氏', '康是美', '迪卡儂', '摩曼頓', '健身工廠']
      }
    ],
    tips: [
      '每個月記得打開「汗水不白流」App 確認卡路里數據同步！',
      '每個月 6,000 元內拿滿 7% 回饋，去超商、全聯、餐廳只要用 Apple Pay 都算！'
    ]
  },
  {
    id: 'taishin-flygo',
    bank: '台新銀行',
    name: 'FlyGo 卡 (飛狗卡)',
    badge: '機票交通首選',
    colorGradient: 'from-cyan-600 to-blue-900',
    annualFeeInfo: '申辦電子帳單且使用 Richart 自動扣繳免年費',
    officialUrl: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card002/',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 0.5,
    generalOverseasRate: 3.0,
    currencyRewardType: '台新 Point (1點 = 1元)',
    highlights: [
      '海外消費 3% 回饋無上限',
      '航空機票、高鐵、中油直營、交通訂房最高 5%',
      '最高 3,000 萬公共運輸旅遊平安險',
      '經常出差/旅遊通勤族的最佳拍檔'
    ],
    rewards: [
      {
        name: '航空機票與交通訂房',
        category: 'transport',
        rate: 5.0,
        capText: '每期帳單加碼上限 1,500 點 (可刷 33,333 元)',
        capAmount: 1500,
        maxSpend: 33333,
        condition: '使用數位帳單 + Richart 自動扣繳帳單',
        channels: ['台灣高鐵', '中油直營', '長榮航空', '華航', '星宇航空', 'Agoda', 'Klook', 'Trip.com']
      },
      {
        name: '海外國外實體/線上消費',
        category: 'overseas',
        rate: 3.0,
        capText: '無上限',
        condition: '使用數位帳單 + Richart 帳戶自動扣繳',
        channels: ['國外所有消費', '國外網站刷卡', '海外外幣交易']
      }
    ],
    tips: [
      '買機票刷 FlyGo 不僅有 5% 回饋，還附帶高額旅遊不便險與旅平險保障。',
      '常搭台灣高鐵或固定中油加油每月刷滿 3 萬內皆有 5% 高回饋！'
    ]
  },
  {
    id: 'sinopac-dawho',
    bank: '永豐銀行',
    name: 'DAWHO 現金回饋卡 (大戶卡)',
    badge: '全方位生活',
    colorGradient: 'from-slate-700 to-black',
    annualFeeInfo: '申請電子帳單並持續使用大戶數位帳戶免年費',
    officialUrl: 'https://bank.sinopac.com/sinopacBT/personal/credit-cards/introduction/bankcard/dawho-card.html',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 1.0,
    generalOverseasRate: 2.0,
    currencyRewardType: '現金回饋 (自動入大戶帳戶)',
    highlights: [
      '國內 1% / 國外 2% 基本現金回饋無上限',
      '大戶等級加碼 1% (上限 600 元)',
      '七大指定通路 (外送/影音/飯店/機票/旅行社) 最高 7%~8%',
      '每月自動現金入帳，不用手動折抵'
    ],
    rewards: [
      {
        name: '七大生活通路 (美食外送/影音串流/旅遊)',
        category: 'food_delivery',
        rate: 7.0,
        capText: '指定通路加碼上限 300 元 (可刷 6,000 元)',
        capAmount: 300,
        maxSpend: 6000,
        condition: '大戶數位帳戶平均資產達 10 萬元 (大戶等級) + 電子帳單',
        channels: ['Uber Eats', 'foodpanda', 'Netflix', 'Spotify', 'Disney+', 'PlayStation', '各大旅行社']
      },
      {
        name: '海外實體與國外線上消費',
        category: 'overseas',
        rate: 3.0,
        capText: '基本 2% 無上限 + 大戶加碼 1% (上限 600 元)',
        capAmount: 600,
        maxSpend: 60000,
        condition: '大戶等級資格',
        channels: ['所有國外交易', '海外線上購物']
      }
    ],
    tips: [
      '只要永豐大戶帳戶放滿 10 萬元資產（可包含高利活存與台美股投資），即可維持大戶等級享有最高回饋！',
      '回饋金直接在次月結帳日存入大戶銀行戶頭，完全現金無腦入袋。'
    ]
  },
  {
    id: 'federal-jihe',
    bank: '聯邦銀行',
    name: '吉鶴卡',
    badge: '日本 Apple Pay 神卡',
    colorGradient: 'from-rose-500 to-red-900',
    annualFeeInfo: '申辦電子帳單享免年費',
    officialUrl: 'https://card.ubot.com.tw/eCard/activity/20220801JiheCard/',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 1.0,
    generalOverseasRate: 1.0,
    currencyRewardType: '現金回饋',
    highlights: [
      '日本一般消費 2.5% 現金回饋無上限',
      '日本 Apple Pay (QUICPay) 感應最高 4%~4.5%',
      '國內日系品牌 (UNIQLO/GU/無印良品/唐吉訶德/藏壽司) 最高 4%',
      '日本三大便利商店、百貨特約商店高額回饋'
    ],
    rewards: [
      {
        name: '日本 Apple Pay 感應 (QUICPay)',
        category: 'overseas',
        rate: 4.5,
        capText: '加碼 1.5% 每月上限 1,000 元 (可刷 66,666 元)',
        capAmount: 1000,
        maxSpend: 66666,
        condition: '需綁定 Apple Pay 在日本標有 QUICPay 的收銀機感應結帳',
        channels: ['日本 QUICPay 通路', '日本 7-11', 'Lawson', '全家', '各大藥妝店']
      },
      {
        name: '國內日系名店與餐廳',
        category: 'dining',
        rate: 4.0,
        capText: '加碼每月上限 500 元',
        capAmount: 500,
        maxSpend: 16666,
        condition: '聯邦帳戶自動扣繳',
        channels: ['UNIQLO', 'GU', '無印良品 MUJI', 'DON DON DONKI 唐吉訶德', '藏壽司', '壽司郎', '一蘭拉麵']
      }
    ],
    tips: [
      '在日本結帳時跟店員說「QUICPay（クイックペイ）」並用 iPhone Apple Pay 感應，享有最強 4.5% 回饋！'
    ]
  },
  {
    id: 'ctbc-linepay',
    bank: '中國信託',
    name: 'LINE Pay 信用卡',
    badge: 'LINE POINTS 普及卡',
    colorGradient: 'from-emerald-500 to-green-800',
    annualFeeInfo: '綁定 LINE Pay 或電子帳單期間享免年費',
    officialUrl: 'https://www.ctbcbank.com/content/dam/minisite/long/creditcard/LINEPay/index.html',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 1.0,
    generalOverseasRate: 2.8,
    currencyRewardType: 'LINE POINTS (1點 = 1元)',
    highlights: [
      '國外實體消費 2.8% LINE POINTS 回饋無上限',
      '日韓泰新指定國家實體門市最高 5%',
      '國內一般 1% LINE POINTS 無上限',
      '指定星級飯店、Hotels.com 訂房最高 15%'
    ],
    rewards: [
      {
        name: '海外熱門旅遊國 (日/韓/泰/新) 實體消費',
        category: 'overseas',
        rate: 5.0,
        capText: '加碼 2.2% 每季上限 450 點 (需每季登錄)',
        capAmount: 450,
        maxSpend: 20454,
        condition: '每季登錄名額有限，限實體卡消費',
        channels: ['日本實體', '韓國實體', '泰國實體', '新加坡實體']
      },
      {
        name: 'Hotels.com 專屬訂房平台',
        category: 'overseas',
        rate: 15.0,
        capText: '無上限',
        condition: '需透過中信 LINE Pay 專屬連結預訂',
        channels: ['Hotels.com']
      }
    ],
    tips: [
      'LINE POINTS 點數無有效期限 (只要持續有入點即展延)，可全台折抵飲料店、超商、夜市商圈！'
    ]
  },
  {
    id: 'dbs-eco',
    bank: '星展銀行',
    name: 'eco 永續卡',
    badge: '無腦無上限',
    colorGradient: 'from-teal-700 to-slate-900',
    annualFeeInfo: '申辦電子帳單享免年費',
    officialUrl: 'https://www.dbs.com.tw/personal-zh/cards/cards-overview/eco-card.page',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 1.5,
    generalOverseasRate: 1.5,
    currencyRewardType: '現金積點 (1點 = 1元)',
    highlights: [
      '國內一般消費 1.5% 現金積點【無上限】無腦刷神卡',
      '新加坡/日本/韓國/美/歐實體消費最高 5%',
      '電動車充電 / 共享汽機車最高 10%',
      '亞洲首張使用生物可分解材質之環保信用卡'
    ],
    rewards: [
      {
        name: '國內一般消費 (無腦刷首選)',
        category: 'general',
        rate: 1.5,
        capText: '【真正無上限】不需登錄、無門檻',
        condition: '一般國內實體與線上消費皆適用',
        channels: ['全台所有一般消費通路', '無門檻限制']
      },
      {
        name: '日韓星美歐 實體消費',
        category: 'overseas',
        rate: 5.0,
        capText: '加碼 3.5% 每月上限 1,000 點 (可刷 28,571 元)',
        capAmount: 1000,
        maxSpend: 28571,
        condition: '限指定國家實體刷卡幣別交易',
        channels: ['日本實體', '韓國實體', '新加坡實體', '美歐實體']
      },
      {
        name: '綠色共享交通 (Tesla充電/GoShare/iRent/WeMo)',
        category: 'transport',
        rate: 10.0,
        capText: '加碼每月上限 300 點 (可刷 3,529 元)',
        capAmount: 300,
        maxSpend: 3529,
        condition: '綁定指定 APP 扣款',
        channels: ['Tesla充電', 'GoShare', 'iRent', 'WeMo Scooter', 'Gogoro電池資費']
      }
    ],
    tips: [
      '不想研究繁瑣權益或記門檻上限的人，這張卡國內無腦 1.5% 回饋無上限最省心！',
      '星展 Card+ App 內可直接勾選「每期自動全額折抵帳單」。'
    ]
  },
  {
    id: 'hsbc-hizuan',
    bank: '滙豐銀行',
    name: '匯鑽卡',
    badge: '外送影音加倍',
    colorGradient: 'from-red-600 to-neutral-900',
    annualFeeInfo: '使用電子帳單或年刷滿 12 次免年費',
    officialUrl: 'https://www.hsbc.com.tw/credit-cards/products/cashback-card/',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 1.0,
    generalOverseasRate: 1.0,
    currencyRewardType: '現金積點 (翻倍可達 2元/點)',
    highlights: [
      '指定通路 3% 現金回饋，達標翻倍享最高 6%！',
      '外送平台、街口支付、momo購物高額回饋',
      '點數累積滿 5,000 點 + 滙豐帳戶 10 萬資產，可翻倍為 10,000 元刷卡金',
      '終身點數有效'
    ],
    rewards: [
      {
        name: '指定外送/網購/行動支付 (翻倍最高 6%)',
        category: 'food_delivery',
        rate: 6.0,
        capText: '每月上限 2,000 點 (可刷高達 66,666 元)',
        capAmount: 2000,
        maxSpend: 66666,
        condition: '累積 5,000 點 + 滙豐帳戶資產滿額申請翻倍折抵',
        channels: ['街口支付', 'Uber Eats', 'foodpanda', 'momo購物網', 'Disney+']
      }
    ],
    tips: [
      '大額消費者非常適合累積點數進行 2 倍兌換，折抵金額立刻翻倍！'
    ]
  },
  {
    id: 'feib-happyplus',
    bank: '遠東商銀',
    name: '樂家+ 卡',
    badge: '親子寵物加油',
    colorGradient: 'from-amber-500 to-orange-700',
    annualFeeInfo: '申辦電子帳單且每年刷卡一次免年費',
    officialUrl: 'https://www.feib.com.tw/upload/creditcard/HappyPlus/index.html',
    lastUpdated: '2025/2026 最新權益',
    generalDomesticRate: 0.5,
    generalOverseasRate: 0.5,
    currencyRewardType: '刷卡金折抵',
    highlights: [
      '大小量販超商、加油站、外送最高 5%',
      '全台知名寵物用品店與獸醫院最高 10%',
      '親子遊樂園、生活量販指定高回饋',
      '家庭主婦與毛小孩家庭必備卡'
    ],
    rewards: [
      {
        name: '生活量販 / 加油站 / 叫車外送',
        category: 'transport',
        rate: 5.0,
        capText: '每月上限 350 元 (可刷 7,000 元)',
        capAmount: 350,
        maxSpend: 7000,
        condition: '遠東商銀帳戶自動扣繳信用卡款',
        channels: ['中油直營', '全國加油站', '台亞加油站', '全聯', '家樂福', 'Uber Eats', '台灣大車隊']
      },
      {
        name: '寵物通路 / 親子遊樂 (毛孩專屬)',
        category: 'general',
        rate: 10.0,
        capText: '每月上限 500 元 (可刷 5,000 元)',
        capAmount: 500,
        maxSpend: 5000,
        condition: '自動扣繳成功',
        channels: ['東森寵物雲', '魚中魚', '各大連鎖動物醫院', '騎士堡', '小人國', '六福村']
      }
    ],
    tips: [
      '家中有養毛小孩或常去量販超市、加油的家庭首選生活卡！'
    ]
  }
];
