export interface OfficialSource {
  id: string;
  bank: string;
  cardName: string;
  title: string;
  url: string;
  currentCycle: string; // 例如 "2026 年上半年度權益 (至 2026/06/30)"
  validUntil: string;
  lastChecked: string;
  description: string;
}

export const OFFICIAL_SOURCES: OfficialSource[] = [
  {
    id: 'cathay-cube-official',
    bank: '國泰世華銀行',
    cardName: 'CUBE 卡',
    title: '國泰 CUBE 卡 官方權益與特約商店總覽',
    url: 'https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/',
    currentCycle: '2026 年度最新公告權益',
    validUntil: '2026/12/31',
    lastChecked: '2026/08/29',
    description: '包含玩數位、樂饗購、趣旅行、集精選、日本賞、慶生月 6 大方案特約特店與加碼細則。'
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
    description: '每月 1 號更新當月壽星特店名單（如 PlayStation、精選百貨、餐廳、影城等）。'
  },
  {
    id: 'taishin-richart-official',
    bank: '台新銀行',
    cardName: 'Richart 卡',
    title: '台新 Richart 卡 官方權益公告',
    url: 'https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/',
    currentCycle: '2026 全年權益',
    validUntil: '2026/12/31',
    lastChecked: '2026/08/29',
    description: '包含數趣刷 3.3%、Pay著刷 (台新Pay 3.8% / LINE Pay 2.3%)、假日刷 2.0%、好行刷 3.0% 等回饋細則。'
  },
  {
    id: 'taishin-point-rules',
    bank: '台新銀行',
    cardName: 'Richart Life',
    title: '台新 Point 點數折抵與兌換說明',
    url: 'https://richart.tw/',
    currentCycle: '常態機制',
    validUntil: '2026/12/31',
    lastChecked: '2026/08/29',
    description: '台新 Point 1點 = 1元，可即時 100% 折抵信用卡未出帳單或全家折抵。'
  }
];
