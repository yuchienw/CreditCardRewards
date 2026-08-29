export type CategoryType = 
  | 'all'
  | 'general'
  | 'overseas'
  | 'mobile_pay'
  | 'online_shopping'
  | 'food_delivery'
  | 'transport'
  | 'entertainment'
  | 'dining';

export interface RewardItem {
  name: string;
  category: string;
  rate: number; // 百分比，例如 3.8
  capText: string; // 上限說明，例如 "每月上限 300 元"
  capAmount?: number; // 上限金額（元/點），若無上限則為 undefined
  maxSpend?: number; // 達到上限的消費金額，例如 10000
  condition: string; // 門檻或條件，例如 "需綁定電子帳單與自動扣繳"
  channels: string[]; // 適用通路，例如 ["LINE Pay", "街口支付", "全支付"]
}

export interface CreditCard {
  id: string;
  bank: string;
  name: string;
  badge?: string; // e.g. "熱門推薦", "日韓神卡", "無腦刷首選"
  colorGradient: string; // CSS 漸層色
  annualFeeInfo: string;
  officialUrl?: string;
  lastUpdated: string;
  generalDomesticRate: number; // 國內一般回饋 %
  generalOverseasRate: number; // 國外一般回饋 %
  currencyRewardType: string; // e.g. "現金回饋", "小樹點", "LINE POINTS", "悠遊付儲值金", "P幣"
  highlights: string[];
  rewards: RewardItem[];
  tips: string[];
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: CategoryType;
  selectedBank: string;
  minRate: number;
  sortBy: 'maxRate' | 'domesticRate' | 'overseasRate' | 'name' | 'bank';
  sortOrder: 'asc' | 'desc';
}
