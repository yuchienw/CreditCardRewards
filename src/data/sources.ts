export interface OfficialSource {
  id: string;
  bank: string;
  cardName: string;
  title: string;
  url: string;
  currentCycle: string;
  validUntil: string;
  lastChecked: string;
  description: string;
}

export const OFFICIAL_SOURCES: OfficialSource[] = [
  {
    id: 'taishin-richart-official-mkp',
    bank: '台新銀行',
    cardName: '台新 Richart 卡',
    title: '台新 Richart 卡 官方權益與 7+1 大刷活動頁',
    url: 'https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html',
    currentCycle: '2026 官方最新 7+1 刷權益方案',
    validUntil: '2026/12/31',
    lastChecked: '2026/08/29',
    description: '官方即時活動頁，包含 Chill刷(10%)、Pay著刷(3.8%/2.3%)、天天刷(3.3%)、大筆刷(3.3%)、好饗刷(3.3%)、數趣刷(3.3%)、玩旅刷(3.3%)、假日刷(2.0%) 完整特店清單。'
  },
  {
    id: 'cathay-cube-official',
    bank: '國泰世華銀行',
    cardName: 'CUBE 卡',
    title: '國泰 CUBE 卡 官方權益與特約商店總覽',
    url: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    currentCycle: '2026 年度最新公告權益',
    validUntil: '2026/12/31',
    lastChecked: '2026/08/29',
    description: '包含玩數位、樂饗購、趣旅行、集精選、日本賞、慶生月、全支付、台塑家等方案特約名單。'
  },
  {
    id: 'cathay-cube-birthday',
    bank: '國泰世華銀行',
    cardName: 'CUBE 卡 (慶生月)',
    title: '國泰 CUBE 慶生月專屬特店與回饋 10% 說明',
    url: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/birthday/',
    currentCycle: '當年度壽星專屬權益',
    validUntil: '2026/12/31',
    lastChecked: '2026/08/29',
    description: '每月 1 號更新當月壽星特店名單（如 PlayStation、精選百貨、指定餐廳、影城等）。'
  }
];
