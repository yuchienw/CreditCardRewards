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
    id: 'cathay-cube-official-cards',
    bank: '國泰世華銀行',
    cardName: '國泰 CUBE 卡',
    title: '國泰世華 CUBE 信用卡 官方主頁',
    url: 'https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube',
    currentCycle: '2026 年度最新公告權益',
    validUntil: '2026/12/31',
    lastChecked: '2026/08/29',
    description: '官方主頁：包含 Level 1 (2%) / Level 2 (3%) / Level 3 (3.3%) 回饋機制與切換說明。'
  },
  {
    id: 'cathay-cube-list-official',
    bank: '國泰世華銀行',
    cardName: '國泰 CUBE 卡 (權益清單)',
    title: '國泰 CUBE 卡 官方特約商店完整清單 (cube-list)',
    url: 'https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list',
    currentCycle: '2026 年度最新特店清單',
    validUntil: '2026/12/31',
    lastChecked: '2026/08/29',
    description: '官方詳細方案清單：玩數位、樂饗購、趣旅行、集精選、日本賞、慶生月、全支付、台塑家、童樂匯所有特約店家。'
  },
  {
    id: 'taishin-richart-official-mkp',
    bank: '台新銀行',
    cardName: '台新 Richart 卡',
    title: '台新 Richart 卡 官方權益與 7+1 大刷活動頁',
    url: 'https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html',
    currentCycle: '2026 官方最新 7+1 刷權益方案',
    validUntil: '2026/12/31',
    lastChecked: '2026/08/29',
    description: '官方即時活動頁：Chill刷(10%)、Pay著刷(3.8%/2.3%)、天天刷(3.3%)、大筆刷(3.3%)、好饗刷(3.3%)、數趣刷(3.3%)、玩旅刷(3.3%)、假日刷(2.0%) 完整特店。'
  }
];
