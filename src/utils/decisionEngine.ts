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

  // 慶生月判斷：必須是官方特店且當前為生日月份（新光三越/Uber Eats/Klook 為 3.5%，特色私廚/PlayStation/樂園等為 10.0%）
  if (context.isCurrentMonthBirthday && merchant.cube.isBirthdaySpecial) {
    const specialRate = merchant.cube.birthdayRate || 10.0;
    cubeRate = specialRate;
    cubeSchemeName = `慶生月 (${specialRate}%)`;
    cubeNote = `🎂 ${context.birthMonth}月壽星專屬！官方指定特店切換「慶生月」享 ${specialRate}% 小樹點回饋！`;
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

  // ================= 類型 A: 線上軟體訂閱 / AI / 遊戲串流 (Apple 內購, ChatGPT, Netflix, Steam 等) =================
  if (merchant.category === 'game_stream') {
    // 1. 根據雙卡在該商家的真實回饋，給予精確的扣款指引
    if (merchant.cube.scheme === 'digital' && (merchant.richart.scheme === 'general' || merchant.richart.scheme === 'weekend')) {
      // 如 Apple 媒體服務 / Google Play / Spotify
      pathways.push({
        icon: '💻',
        title: '線上訂閱首選推薦',
        condition: '綁定國泰 CUBE 卡自動扣款',
        recommendedCard: 'cube',
        cardName: '國泰 CUBE 卡',
        schemeName: '玩數位 (3.3%)',
        rate: 3.3,
        highlightText: '3.3% 小樹點',
        note: '此服務為 CUBE「玩數位」官方特店（最高 3.3%），台新 Richart 未列入加碼（僅一般消費 1.0%）。'
      });
    } else if (merchant.richart.scheme === 'digital_fun' && merchant.cube.scheme === 'general') {
      // 如 Steam / ChatGPT / Notion / Claude / Canva / Perplexity
      pathways.push({
        icon: '💻',
        title: '線上訂閱首選推薦',
        condition: '綁定台新 Richart 卡自動扣款',
        recommendedCard: 'richart',
        cardName: '台新 Richart 卡',
        schemeName: '數趣刷 (3.3%)',
        rate: 3.3,
        highlightText: '3.3% 台新 Point',
        note: '此服務為台新「數趣刷」官方特店（享 3.3%），CUBE 卡未列入加碼（僅一般消費 0.3%）。'
      });
    } else if (merchant.richart.scheme === 'chill') {
      // 如 Chill 刷 5% 追更 (Netflix, Disney+, 巴哈姆特等)
      pathways.push({
        icon: '🍿',
        title: '追劇與訂閱首推 Chill 刷',
        condition: '切換 Richart Chill 刷方案',
        recommendedCard: 'richart',
        cardName: '台新 Richart 卡',
        schemeName: 'Chill 刷 (5.0%)',
        rate: 5.0,
        highlightText: '5.0% 台新 Point',
        note: '切換台新「Chill 刷」享 5.0% 超高回饋，優於 CUBE 玩數位的 3.3%！'
      });
    } else {
      // 雙卡均支援 (如 PlayStation, Nintendo)
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
    }

    // 只有官方明確列入慶生月特店的數位平台 (如 PlayStation / Nintendo / 巴哈姆特動畫瘋) 才推薦慶生月
    if (merchant.cube.isBirthdaySpecial) {
      const bdayRate = merchant.cube.birthdayRate || 10.0;
      pathways.push({
        icon: '🎂',
        title: '壽星月份專屬特店加碼',
        condition: '於 8 月生日當月消費',
        recommendedCard: 'cube',
        cardName: '國泰 CUBE 卡',
        schemeName: '慶生月',
        rate: bdayRate,
        highlightText: `最高 ${bdayRate}% 小樹點`,
        note: `此平台為 CUBE 官方生日月指定特店，生日當月切換「慶生月」獨享 ${bdayRate}% 回饋！`
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
    // 1. 若本身即為新光三越
    if (merchant.id === 'shinkong-mitsukoshi') {
      pathways.push({
        icon: '💳',
        title: '新光三越專櫃首推台新 Pay',
        condition: '使用台新 Pay 或 skm pay 結帳',
        recommendedCard: 'richart',
        cardName: '台新 Richart 卡',
        schemeName: 'Pay 著刷 (台新Pay 3.8%)',
        rate: 3.8,
        highlightText: '3.8% 台新 Point',
        note: '於新光三越專櫃使用「台新 Pay」綁 Richart 卡付款享高達 3.8%，優於慶生月 3.5%！'
      });

      pathways.push({
        icon: '🎂',
        title: '新光三越壽星加碼 (3.5%)',
        condition: '於 8 月生日當月在新光三越館內消費',
        recommendedCard: 'cube',
        cardName: '國泰 CUBE 卡',
        schemeName: '慶生月 (3.5%)',
        rate: 3.5,
        highlightText: '3.5% 小樹點',
        note: '新光三越為 CUBE 官方慶生月特店，生日當月切換「慶生月」享 3.5% 小樹點無上限！'
      });
    }

    // 2. 若設櫃於各大百貨商場專櫃 (SOGO / 遠百 / 微風 / 巨城 / 夢時代 / 漢神 / Outlet 等)
    if (!merchant.id.includes('department') && !merchant.id.includes('sogo') && !merchant.id.includes('breeze')) {
      pathways.push({
        icon: '🛍️',
        title: '若設櫃於各大百貨商場專櫃',
        condition: '由百貨商場統一收銀結帳',
        recommendedCard: 'cube',
        cardName: 'CUBE 卡 / Richart 卡',
        schemeName: 'CUBE 樂饗購 (3.3%) / Richart 大筆刷 (3.3%)',
        rate: 3.3,
        highlightText: '3.3% 點數回饋',
        note: '在各大百貨專櫃結帳，切換 CUBE「樂饗購」或 Richart「大筆刷」均享 3.3%！'
      });

      // 新光三越專櫃台新 Pay / 慶生特店通道
      pathways.push({
        icon: '🏢',
        title: '若在「新光三越」各分館專櫃',
        condition: '門市設於新光三越館內',
        recommendedCard: 'richart',
        cardName: '台新 Richart 卡 / CUBE 卡',
        schemeName: '台新 Pay (3.8%) / 慶生月 CUBE (3.5%)',
        rate: 3.8,
        highlightText: '最高 3.8% ~ 3.5%',
        note: '新光三越專櫃建議綁定「台新 Pay」享 3.8% 最高！若為 8 月生日當月刷 CUBE「慶生月」享 3.5% 小樹點。'
      });
    } else if (merchant.id !== 'shinkong-mitsukoshi') {
      // 本身為非新光三越的一般百貨 (SOGO / 遠百 / 微風 / 101 等)
      pathways.push({
        icon: '🛍️',
        title: '百貨館內消費直刷',
        condition: '各專櫃或美食街刷卡結帳',
        recommendedCard: 'cube',
        cardName: 'CUBE 卡 / Richart 卡',
        schemeName: 'CUBE 樂饗購 (3.3%) / Richart 大筆刷 (3.3%)',
        rate: 3.3,
        highlightText: '3.3% 點數回饋',
        note: '切換 CUBE「樂饗購」或 Richart「大筆刷」均享 3.3% 點數回饋。'
      });
    }

    // 3. 獨立直營專賣店 Chill 刷
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
    // 1. 提醒使用者確認是否符合實體餐廳規範 (樂饗購 / 好饗刷 3.3%)
    pathways.push({
      icon: '🍽️',
      title: '請留意：若此店家為「實體餐廳」',
      condition: '店家收單機登記為餐飲業 (MCC 5811~5814)',
      recommendedCard: 'cube',
      cardName: '國泰 CUBE 卡 / 台新 Richart 卡',
      schemeName: 'CUBE 樂饗購 (3.3%) / Richart 好饗刷 (3.3%)',
      rate: 3.3,
      highlightText: '最高享 3.3% 回饋',
      note: '請確認該店是否符合實體餐飲業規範（如獨立餐廳、火鍋、咖啡廳等），若符合，結帳切換 CUBE「樂饗購」或 Richart「好饗刷」即可享 3.3% 點數回饋！'
    });

    pathways.push({
      icon: '🛵',
      title: '若店家有上架 Foodpanda / Uber Eats',
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
      title: '若此店家設於各大百貨專櫃內',
      condition: '由各大百貨商場統一收銀結帳',
      recommendedCard: 'cube',
      cardName: '國泰 CUBE 卡 / 台新 Richart 卡',
      schemeName: 'CUBE 樂饗購 (3.3%) / Richart 大筆刷 (3.3%)',
      rate: 3.3,
      highlightText: '3.3% 點數回饋',
      note: '若該店位在各大百貨專櫃內由百貨收銀結帳，切換 CUBE「樂饗購」或 Richart「大筆刷」享 3.3% 點數回饋！'
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

/**
 * 根據使用者選取的情境過濾條件，動態重新計算最優結果與 App 操作指引
 */
export function evaluateScenarioDecision(
  merchant: Merchant,
  context: UserContext,
  scenario: import('../types/merchant').SmartScenario
): EnhancedDecisionResult {
  const baseDecision = evaluateBestCard(merchant, context);

  if (scenario === 'default') {
    return {
      ...baseDecision,
      activeScenario: 'default',
    };
  }

  let cubeRate = baseDecision.runnerUpCard === 'cube' ? (baseDecision.runnerUpRate || 0.3) : baseDecision.winnerRate;
  let cubeSchemeName = merchant.cube.schemeName;
  let cubeNote = merchant.cube.note || '';

  let richartRate = baseDecision.runnerUpCard === 'richart' ? (baseDecision.runnerUpRate || 1.0) : baseDecision.winnerRate;
  let richartSchemeName = merchant.richart.schemeName;
  let richartNote = merchant.richart.note || '';
  let scenarioDesc = '';

  const standardCubeRate = context.cubeLevel === 'level1' ? 2.0 : context.cubeLevel === 'level2' ? 3.0 : 3.3;

  switch (scenario) {
    case 'dining_mcc':
      scenarioDesc = '🍽️ 實體餐飲業 (MCC 5811~5814)';
      // CUBE
      if (context.isCurrentMonthBirthday && merchant.cube.isBirthdaySpecial) {
        cubeRate = merchant.cube.birthdayRate || 10.0;
        cubeSchemeName = `慶生月 (${cubeRate}%)`;
        cubeNote = '🎂 官方指定慶生特店，生日當月切換「慶生月」享最高回饋！';
      } else {
        cubeRate = standardCubeRate;
        cubeSchemeName = `樂饗購 (${cubeRate}%)`;
        cubeNote = '全台營業登記為餐飲業（MCC 5811~5814）之獨立餐廳/火鍋/咖啡，切換「樂饗購」享小樹點！';
      }
      // Richart
      if (merchant.richart.isChillSpecial) {
        richartRate = 10.0;
        richartSchemeName = 'Chill 刷 (指定名店 10.0%)';
        richartNote = '切換 Richart「Chill 刷」享 10.0% 最狂回饋！';
      } else {
        richartRate = 3.3;
        richartSchemeName = '好饗刷 (全臺餐飲 3.3%)';
        richartNote = '切換「好饗刷」全台餐飲（MCC 5811~5814）享 3.3% 台新 Point！';
      }
      break;

    case 'delivery':
      scenarioDesc = '🛵 外送平台 (Uber Eats / Foodpanda)';
      // CUBE
      if (context.isCurrentMonthBirthday) {
        cubeRate = 3.5;
        cubeSchemeName = '慶生月 (外送 3.5%)';
        cubeNote = '🎂 8 月壽星叫 Uber Eats 切換「慶生月」享 3.5% 小樹點無上限！';
      } else {
        cubeRate = standardCubeRate;
        cubeSchemeName = `樂饗購 (外送 ${cubeRate}%)`;
        cubeNote = '透過 Uber Eats / Foodpanda 訂餐，切換「樂饗購」享小樹點！';
      }
      // Richart
      richartRate = 3.3;
      richartSchemeName = '好饗刷 (外送平台 3.3%)';
      richartNote = '切換「好饗刷」Uber Eats / Foodpanda 外送享 3.3% 台新 Point！';
      break;

    case 'shinkong_counter':
      scenarioDesc = '🏢 設於新光三越專櫃';
      // CUBE
      if (context.isCurrentMonthBirthday) {
        cubeRate = 3.5;
        cubeSchemeName = '慶生月 (新光三越 3.5%)';
        cubeNote = '🎂 新光三越為 CUBE 官方慶生特店，生日月切換「慶生月」享 3.5% 小樹點無上限！';
      } else {
        cubeRate = standardCubeRate;
        cubeSchemeName = `樂饗購 (新光三越 ${cubeRate}%)`;
        cubeNote = '新光三越各專櫃直刷，切換「樂饗購」享小樹點！';
      }
      // Richart (台新 Pay 3.8%)
      richartRate = 3.8;
      richartSchemeName = 'Pay 著刷 (台新 Pay 3.8%)';
      richartNote = '於新光三越專櫃使用「台新 Pay」綁 Richart 卡付款享高達 3.8% 台新 Point，最優首選！';
      break;

    case 'dept_counter':
      scenarioDesc = '🏬 設於各大百貨商場專櫃 (SOGO/遠百/微風/101等)';
      // CUBE
      cubeRate = standardCubeRate;
      cubeSchemeName = `樂饗購 (各大百貨 ${cubeRate}%)`;
      cubeNote = '在 SOGO / 遠百 / 微風 / 101 / 巨城 / 夢時代等專櫃由百貨統一收銀，切換「樂饗購」享小樹點！';
      // Richart
      richartRate = 3.3;
      richartSchemeName = '大筆刷 (各大百貨 3.3%)';
      richartNote = '在指定百貨商場由百貨統一收銀，切換「大筆刷」享 3.3% 台新 Point！';
      break;

    case 'line_pay':
      scenarioDesc = '📲 使用 LINE Pay 掃碼付款';
      cubeRate = 0.3;
      cubeSchemeName = '一般消費 (0.3%)';
      cubeNote = '使用 LINE Pay 綁定 CUBE 卡若未穿透特店，僅享一般消費 0.3%';
      richartRate = 2.3;
      richartSchemeName = 'Pay 著刷 (LINE Pay 2.3%)';
      richartNote = '使用 LINE Pay 綁定 Richart 卡切換「Pay 著刷」保底享 2.3% 台新 Point！';
      break;

    case 'taishin_pay':
      scenarioDesc = '💳 使用 台新 Pay 掃碼付款';
      cubeRate = 0.3;
      cubeSchemeName = '一般消費 (0.3%)';
      cubeNote = '台新 Pay 僅適用台新信用卡';
      richartRate = 3.8;
      richartSchemeName = 'Pay 著刷 (台新 Pay 3.8%)';
      richartNote = '在支援台新 Pay 特店（新光三越、全家、7-11、康是美、IKEA、NET等）掃碼享 3.8% 最高回饋！';
      break;

    case 'weekend_spend':
      scenarioDesc = '🌴 週末六日休假日消費';
      richartRate = 2.0;
      richartSchemeName = '假日刷 (週末 2.0%)';
      richartNote = '週末六日全通路一般消費切換「假日刷」享 2.0% 台新 Point！';
      break;
  }

  let finalResult: BestCardResult;

  if (cubeRate > richartRate) {
    finalResult = {
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
      activeScenario: scenario,
      scenarioDescription: scenarioDesc,
    };
  } else if (richartRate > cubeRate) {
    finalResult = {
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
      activeScenario: scenario,
      scenarioDescription: scenarioDesc,
    };
  } else {
    finalResult = {
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
      activeScenario: scenario,
      scenarioDescription: scenarioDesc,
    };
  }

  return {
    ...finalResult,
    pathways: baseDecision.pathways,
  };
}
