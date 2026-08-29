import type { Merchant, UserContext, BestCardResult } from '../types/merchant';

export interface StrategyPathway {
  icon: string;
  title: string;
  condition: string;
  recommendedCard: 'cube' | 'richart';
  cardName: string;
  schemeName: string;
  rate: number;
  highlightText: string;
  note: string;
}

export interface EnhancedDecisionResult extends BestCardResult {
  pathways: StrategyPathway[];
}

export function evaluateBestCard(merchant: Merchant, context: UserContext): EnhancedDecisionResult {
  // 1. 計算國泰 CUBE 卡在該條件下的實際回饋率
  let cubeRate = merchant.cube.rate;
  let cubeSchemeName = merchant.cube.schemeName;
  let cubeNote = merchant.cube.note || '';

  // 根據 CUBE 會員等級調整回饋率 (Level 1: 2.0%, Level 2: 3.0%, Level 3: 3.3%)
  if (!merchant.cube.isBirthdaySpecial && merchant.cube.scheme !== 'japan' && merchant.cube.scheme !== 'general') {
    if (context.cubeLevel === 'level1') {
      cubeRate = 2.0;
      cubeSchemeName = `${merchant.cube.schemeName} (Level 1: 2%)`;
      cubeNote = '目前為 CUBE Level 1 一般卡友（2% 小樹點），開立帳戶扣繳可升級至 Level 2 (3%)！';
    } else if (context.cubeLevel === 'level2') {
      cubeRate = 3.0;
      cubeSchemeName = `${merchant.cube.schemeName} (Level 2: 3%)`;
      cubeNote = '目前為 CUBE Level 2（帳戶自動扣繳享 3% 小樹點）';
    } else if (context.cubeLevel === 'level3') {
      cubeRate = 3.3;
      cubeSchemeName = `${merchant.cube.schemeName} (Level 3 VIP: 3.3%)`;
      cubeNote = '目前為 CUBE Level 3（財富管理貴賓 VIP 享 3.3% 小樹點）';
    }
  }

  // 慶生月 10% 判斷：必須是官方特店且當前為生日月份
  if (context.isCurrentMonthBirthday && merchant.cube.isBirthdaySpecial) {
    cubeRate = 10.0;
    cubeSchemeName = '慶生月 (官方生日專屬特店)';
    cubeNote = `🎂 ${context.birthMonth}月壽星專屬！官方指定特店切換「慶生月」獨享 10% 小樹點加碼！`;
  }

  // 2. 計算台新 Richart 卡在該條件下的實際回饋率
  let richartRate = merchant.richart.rate;
  let richartSchemeName = merchant.richart.schemeName;
  let richartNote = merchant.richart.note || '';

  // 假日刷情境
  if (merchant.richart.scheme === 'weekend') {
    if (context.isWeekend) {
      richartRate = 2.0;
      richartSchemeName = '假日刷 (週末六日)';
      richartNote = '週末假日全通路一般消費享 2.0% 台新 Point！';
    } else {
      richartRate = 1.0;
      richartSchemeName = '平日一般消費';
      richartNote = '平日一般消費 1.0% (基礎 0.5% + 扣繳加碼 0.5%)';
    }
  }

  // 3. 根據通路的實際屬性，精準生成專屬的「聰明刷法情境通道 (Pathways)」
  const pathways: StrategyPathway[] = [];

  // ================= 類型 A: 線上軟體訂閱 / AI / 遊戲串流 (Notion, ChatGPT, Netflix, Steam 等) =================
  if (merchant.category === 'game_stream') {
    // 專屬線上訂閱方案
    pathways.push({
      icon: '💻',
      title: '線上訂閱與數位扣款',
      condition: '綁定信用卡自動扣款訂閱',
      recommendedCard: 'richart',
      cardName: '台新 Richart 卡 / CUBE 卡',
      schemeName: 'Richart 數趣刷 (3.3%) / CUBE 玩數位 (3.3%)',
      rate: 3.3,
      highlightText: '3.3% 回饋',
      note: '切換 Richart「數趣刷」或 CUBE「玩數位」均享 3.3% 點數回饋。'
    });

    // 只有官方明確列入慶生月特店的數位平台 (如 PlayStation / Nintendo) 才推薦慶生月
    if (merchant.cube.isBirthdaySpecial) {
      pathways.push({
        icon: '🎂',
        title: '壽星月份專屬特店加碼',
        condition: '於 8 月生日當月消費',
        recommendedCard: 'cube',
        cardName: '國泰 CUBE 卡',
        schemeName: '慶生月',
        rate: 10.0,
        highlightText: '最高 10.0% 小樹點',
        note: '此平台為 CUBE 官方生日月指定特店，生日當月切換「慶生月」獨享 10% 超高回饋！'
      });
    }

    // 國外交易手續費提醒
    pathways.push({
      icon: '🌐',
      title: '海外伺服器跨境交易提醒',
      condition: '美金計價或海外交易',
      recommendedCard: 'richart',
      cardName: '雙卡皆適用',
      schemeName: '海外交易 1.5% 手續費',
      rate: 1.8,
      highlightText: '實拿約 1.8%',
      note: '國外線上交易扣除 1.5% 國際手續費後，實質淨賺約 1.8% 點數回饋。'
    });
  }

  // ================= 類型 B: 實體服飾 / 運動品牌 / 百貨品牌 (adidas, Nike, UNIQLO, 百貨專櫃) =================
  else if (merchant.category === 'department_fashion') {
    // 若本來就是百貨專櫃或百貨本身
    if (merchant.id.includes('department') || merchant.id.includes('shinkong') || merchant.id.includes('sogo') || merchant.id.includes('101') || merchant.id.includes('breeze')) {
      if (merchant.cube.isBirthdaySpecial) {
        pathways.push({
          icon: '🎂',
          title: '生日當月百貨專屬加碼',
          condition: '於 8 月生日當月於百貨館內消費',
          recommendedCard: 'cube',
          cardName: '國泰 CUBE 卡',
          schemeName: '慶生月',
          rate: 10.0,
          highlightText: '最高 10.0% 小樹點',
          note: '生日當月在該指定百貨切換 CUBE「慶生月」享 10% 小樹點！'
        });
      }
    } else {
      // 品牌服飾 (如 adidas, Nike, UNIQLO) 若設櫃於百貨
      pathways.push({
        icon: '🎂',
        title: '若在「合作百貨專櫃」且為生日當月',
        condition: '門市設於新光三越、SOGO、遠百等百貨館內',
        recommendedCard: 'cube',
        cardName: '國泰 CUBE 卡',
        schemeName: '慶生月',
        rate: 10.0,
        highlightText: '最高 10.0% 小樹點',
        note: '若該專櫃開在指定合作百貨內，生日當月切換 CUBE「慶生月」享 10% 小樹點！'
      });
    }

    // 新光三越台新Pay
    if (merchant.id === 'shinkong-mitsukoshi' || !merchant.id.includes('department')) {
      pathways.push({
        icon: '🏢',
        title: '若在「新光三越」各分館專櫃',
        condition: '使用台新 Pay 或 skm pay 結帳',
        recommendedCard: 'richart',
        cardName: '台新 Richart 卡',
        schemeName: 'Pay 著刷 (台新Pay 3.8%)',
        rate: 3.8,
        highlightText: '3.8% 台新 Point',
        note: '新光三越各專櫃開啟「台新 Pay」綁 Richart 卡付款享高達 3.8%！'
      });
    }

    // 其他百貨/Outlet
    pathways.push({
      icon: '🛍️',
      title: '若在「SOGO / 遠百 / 微風 / Outlet」專櫃',
      condition: '一般感應或直刷',
      recommendedCard: 'cube',
      cardName: 'CUBE 卡 / Richart 卡',
      schemeName: 'CUBE 樂饗購 (3.3%) / Richart 大筆刷 (3.3%)',
      rate: 3.3,
      highlightText: '3.3% 回饋',
      note: '平日在各大百貨專櫃刷卡，切換 CUBE「樂饗購」或 Richart「大筆刷」均享 3.3%。'
    });

    // 獨立專賣店 Chill 刷
    if (merchant.richart.isChillSpecial) {
      pathways.push({
        icon: '🏃',
        title: '若在「直營專賣門市」實體直刷',
        condition: '獨立街邊直營門市',
        recommendedCard: 'richart',
        cardName: '台新 Richart 卡',
        schemeName: 'Chill 刷 (5.0%)',
        rate: 5.0,
        highlightText: '5.0% 台新 Point',
        note: '在直營專賣門市切換「Chill 刷」享 5.0% 專屬加碼！'
      });
    }

    // LINE Pay 結帳
    pathways.push({
      icon: '📲',
      title: '門市支援 LINE Pay 掃碼付款',
      condition: '使用 LINE Pay 綁定信用卡',
      recommendedCard: 'richart',
      cardName: '台新 Richart 卡',
      schemeName: 'Pay 著刷 (LINE Pay)',
      rate: 2.3,
      highlightText: '2.3% 台新 Point',
      note: '若門市支援 LINE Pay，Richart「Pay 著刷」保底享有 2.3%。'
    });
  }

  // ================= 類型 C: 餐飲美食 / 手搖飲 / 火鍋燒肉 / 速食 =================
  else if (merchant.category === 'dining_delivery') {
    // 1. Chill 刷門市直刷
    if (merchant.richart.isChillSpecial) {
      pathways.push({
        icon: '🔥',
        title: '實體門市內用 / 外帶直刷',
        condition: '至門市消費',
        recommendedCard: 'richart',
        cardName: '台新 Richart 卡',
        schemeName: 'Chill 刷 (10.0%)',
        rate: 10.0,
        highlightText: '10.0% 台新 Point',
        note: '切換 Richart「Chill 刷」方案享 10.0% 最狂回饋！'
      });
    }

    // 2. 只有真正的 CUBE 官方生日特店 (如王品特定旗艦、饗饗、晶華) 才顯示慶生月，速食(KFC/麥當勞/摩斯)絕對不顯示
    if (merchant.cube.isBirthdaySpecial) {
      pathways.push({
        icon: '🎂',
        title: '生日當月官方特店慶生聚餐',
        condition: '於 8 月生日當月消費',
        recommendedCard: 'cube',
        cardName: '國泰 CUBE 卡',
        schemeName: '慶生月',
        rate: 10.0,
        highlightText: '10.0% 小樹點',
        note: '此餐廳為 CUBE 官方生日特約名店，生日當月切換「慶生月」享 10% 小樹點！'
      });
    }

    // 3. 外送平台 (Foodpanda / Uber Eats) 通道
    if (merchant.id !== 'uber-eats' && merchant.id !== 'foodpanda') {
      pathways.push({
        icon: '🛵',
        title: '改用 Foodpanda / Uber Eats 外送訂購',
        condition: '透過外送平台訂餐或外帶自取',
        recommendedCard: 'richart',
        cardName: 'Richart 卡 / CUBE 卡',
        schemeName: 'Richart 好饗刷 (3.3%) / CUBE 樂饗購 (3.3%)',
        rate: 3.3,
        highlightText: '3.3% 回饋',
        note: '若該店有上架外送，透過 Uber Eats / Foodpanda 訂餐切換 Richart「好饗刷」或 CUBE「樂饗購」享 3.3% 回饋！'
      });
    }

    // 4. LINE Pay
    pathways.push({
      icon: '📲',
      title: '使用 LINE Pay 掃碼付款',
      condition: '店家支援 LINE Pay 行動支付',
      recommendedCard: 'richart',
      cardName: '台新 Richart 卡',
      schemeName: 'Pay 著刷 (LINE Pay)',
      rate: 2.3,
      highlightText: '2.3% 台新 Point',
      note: '手搖或餐廳支援 LINE Pay，刷 Richart「Pay 著刷」享 2.3%。'
    });

    // 5. 週末聚餐
    pathways.push({
      icon: '🌴',
      title: '週末聚餐結帳',
      condition: '週六或週日消費',
      recommendedCard: 'richart',
      cardName: '台新 Richart 卡',
      schemeName: '假日刷',
      rate: 2.0,
      highlightText: '2.0% 台新 Point',
      note: '週末聚餐實體刷 Richart「假日刷」全通路 2.0% 無腦回饋！'
    });
  }

  // ================= 類型 D: 網購電商 (蝦皮, momo, 酷澎, 淘寶) =================
  else if (merchant.category === 'ecommerce') {
    pathways.push({
      icon: '🛒',
      title: '線上刷卡結帳',
      condition: '網購平台直刷',
      recommendedCard: 'richart',
      cardName: '台新 Richart 卡 / CUBE 卡',
      schemeName: 'Richart 數趣刷 (3.3%) / CUBE 玩數位 (3.3%)',
      rate: 3.3,
      highlightText: '3.3% 回饋',
      note: '切換 Richart「數趣刷」或 CUBE「玩數位」均享 3.3%。'
    });

    if (merchant.id === 'taobao') {
      pathways.push({
        icon: '🌏',
        title: '淘寶跨境線上結帳',
        condition: '海外跨境交易',
        recommendedCard: 'richart',
        cardName: '台新 Richart 卡',
        schemeName: '玩旅刷 (海外線上)',
        rate: 3.3,
        highlightText: '3.3% 台新 Point',
        note: '淘寶切換 Richart「玩旅刷」海外消費享 3.3%，優於 CUBE「玩數位」3.0%！'
      });
    }
  }

  // ================= 類型 E: 交通 / 加油 / 叫車 =================
  else if (merchant.category === 'travel_traffic') {
    pathways.push({
      icon: '🚗',
      title: '交通通勤與加油充電',
      condition: '直刷或感應結帳',
      recommendedCard: 'richart',
      cardName: '台新 Richart 卡 (天天刷)',
      schemeName: '天天刷 (3.3%)',
      rate: 3.3,
      highlightText: '3.3% 台新 Point',
      note: '切換 Richart「天天刷」高鐵、台鐵、叫車、加油充電皆享 3.3%！'
    });

    if (merchant.id === 'japan-offline') {
      pathways.push({
        icon: '🗾',
        title: '日本實體門市消費',
        condition: '日本當地門市實體刷卡',
        recommendedCard: 'cube',
        cardName: '國泰 CUBE 卡',
        schemeName: '日本賞',
        rate: 3.5,
        highlightText: '3.5% 小樹點',
        note: '日本當地實體刷卡切換 CUBE「日本賞」享 3.5% 無上限！'
      });
    }
  }

  // ================= 類型 F: 未列出之自訂/一般消費 =================
  else {
    pathways.push({
      icon: '🛵',
      title: '若是餐飲店家，可看是否有 Foodpanda / Uber Eats',
      condition: '透過外送平台下單訂購',
      recommendedCard: 'richart',
      cardName: 'Richart 卡 / CUBE 卡',
      schemeName: 'Richart 好饗刷 (3.3%) / CUBE 樂饗購 (3.3%)',
      rate: 3.3,
      highlightText: '3.3% 回饋',
      note: '若該店有配合外送，透過 Uber Eats 或 Foodpanda 點餐直接升級為 3.3% 高回饋！'
    });

    pathways.push({
      icon: '🏢',
      title: '若此店家設於百貨專櫃內',
      condition: '門市在百貨內且生日當月',
      recommendedCard: 'cube',
      cardName: '國泰 CUBE 卡',
      schemeName: '慶生月 (10%) / 樂饗購 (3.3%)',
      rate: 10.0,
      highlightText: '最高 10.0%',
      note: '若該店位在百貨專櫃內，生日月切 CUBE「慶生月」享 10%，平日享 3.3%！'
    });

    pathways.push({
      icon: '📲',
      title: '若店家支援 LINE Pay 掃碼結帳',
      condition: '使用 LINE Pay 綁定信用卡付款',
      recommendedCard: 'richart',
      cardName: '台新 Richart 卡',
      schemeName: 'Pay 著刷 (LINE Pay)',
      rate: 2.3,
      highlightText: '2.3% 台新 Point',
      note: '只要店家支援 LINE Pay，改用 Richart 卡「Pay 著刷」保底享有 2.3%！'
    });

    pathways.push({
      icon: '🌴',
      title: '選在週末六日結帳（實體店面 / 官網）',
      condition: '週六或週日消費',
      recommendedCard: 'richart',
      cardName: '台新 Richart 卡',
      schemeName: '假日刷',
      rate: 2.0,
      highlightText: '2.0% 台新 Point',
      note: '一般獨立門市直刷，週六週日刷 Richart 卡切換「假日刷」享 2.0% 無腦回饋！'
    });
  }

  // 4. 判定勝出者
  let baseResult: BestCardResult;

  if (cubeRate > richartRate) {
    baseResult = {
      merchant,
      winnerCard: 'cube',
      winnerRate: cubeRate,
      winnerSchemeName: cubeSchemeName,
      winnerNote: cubeNote,
      validUntil: merchant.validUntil,
      runnerUpCard: 'richart',
      runnerUpRate: richartRate,
      runnerUpSchemeName: richartSchemeName,
      runnerUpNote: richartNote,
    };
  } else if (richartRate > cubeRate) {
    baseResult = {
      merchant,
      winnerCard: 'richart',
      winnerRate: richartRate,
      winnerSchemeName: richartSchemeName,
      winnerNote: richartNote,
      validUntil: merchant.validUntil,
      runnerUpCard: 'cube',
      runnerUpRate: cubeRate,
      runnerUpSchemeName: cubeSchemeName,
      runnerUpNote: cubeNote,
    };
  } else {
    baseResult = {
      merchant,
      winnerCard: 'tie',
      winnerRate: cubeRate,
      winnerSchemeName: `雙卡皆享 ${cubeRate}% (CUBE: ${cubeSchemeName} / 台新: ${richartSchemeName})`,
      winnerNote: cubeNote || richartNote,
      validUntil: merchant.validUntil,
      runnerUpCard: undefined,
      runnerUpRate: richartRate,
      runnerUpSchemeName: richartSchemeName,
      runnerUpNote: richartNote,
    };
  }

  return {
    ...baseResult,
    pathways,
  };
}
