import { 
  getBondType, 
  IBond, IIBondValue, IQuotation,
  IFilterDate, IFilterNumber, IFilterString, 
  RealExchange, 
  SecurityTradingStatus, 
  TIBond,
  IFilterBoolean,
  IBondsFilter
} from './types';

export const getSeverity = (bond: IBond) => {
  switch (bond.tradingStatus) {

    case 'SECURITY_TRADING_STATUS_UNSPECIFIED':
      // Торговый статус не определен. 0
      return 'warning';

    case 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING':
      // Недоступен для торгов. 1
      return 'danger';

    case 'SECURITY_TRADING_STATUS_OPENING_PERIOD':
      // Период открытия торгов. 2
      return 'success';

    case 'SECURITY_TRADING_STATUS_CLOSING_PERIOD':
      // Период закрытия торгов.3
      return 'success';

    case 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING':
      // Перерыв в торговле. 4 
      return 'danger';

    case 'SECURITY_TRADING_STATUS_NORMAL_TRADING':
      // Нормальная торговля. 5
      return 'success';

    case 'SECURITY_TRADING_STATUS_CLOSING_AUCTION':
      // Аукцион закрытия. 6
      return 'success';

    case 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION':
      // Аукцион крупных пакетов. 7 
      return 'warning';

    case 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION':
      // Дискретный аукцион. 8 
      return 'warning';
    
    case 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD':
      // Аукцион открытия. 9 
      return 'success';

    case 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE':
      // Период торгов по цене аукциона закрытия. 10 
      return 'success';

    case 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED':
      // Сессия назначена. 11 
      return 'warning';

    case 'SECURITY_TRADING_STATUS_SESSION_CLOSE':
      // Сессия закрыта. 12 
      return 'danger';

    case 'SECURITY_TRADING_STATUS_SESSION_OPEN':
      // Сессия открыта. 13 
      return 'success';

    case 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING':
      // Доступна торговля в режиме внутренней ликвидности брокера. 14 
      return 'success';

    case 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING':
      // Перерыв торговли в режиме внутренней ликвидности брокера. 15 
      return 'success';

    case 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING':
      // Недоступна торговля в режиме внутренней ликвидности брокера. 16 
      return 'success';

    default:
      return null;
  }
};

export const getStatus = (bond: IBond) => {
  switch (bond.tradingStatus) {

    case 'SECURITY_TRADING_STATUS_UNSPECIFIED':
      // Торговый статус не определен. 0
      return 'не определен';

    case 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING':
      // Недоступен для торгов. 1
      return 'недоступно';

    case 'SECURITY_TRADING_STATUS_OPENING_PERIOD':
      // Период открытия торгов. 2
      return 'период открытия';

    case 'SECURITY_TRADING_STATUS_CLOSING_PERIOD':
      // Период закрытия торгов.3
      return 'период закрытия';

    case 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING':
      // Перерыв в торговле. 4 
      return 'перерыв';

    case 'SECURITY_TRADING_STATUS_NORMAL_TRADING':
      // Нормальная торговля. 5
      return 'доступно для торговли';

    case 'SECURITY_TRADING_STATUS_CLOSING_AUCTION':
      // Аукцион закрытия. 6
      return 'аукцион закрытия';

    case 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION':
      // Аукцион крупных пакетов. 7 
      return 'аукцион крупных пакетов';

    case 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION':
      // Дискретный аукцион. 8 
      return 'дискретный аукцион';
    
    case 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD':
      // Аукцион открытия. 9 
      return 'аукцион открытия';

    case 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE':
      // Период торгов по цене аукциона закрытия. 10 
      return 'по цене аукциона закрытия';

    case 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED':
      // Сессия назначена. 11 
      return 'сессия назначена';

    case 'SECURITY_TRADING_STATUS_SESSION_CLOSE':
      // Сессия закрыта. 12 
      return 'сессия закрыта';

    case 'SECURITY_TRADING_STATUS_SESSION_OPEN':
      // Сессия открыта. 13 
      return 'сессия открыта';

    case 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING':
      // Доступна торговля в режиме внутренней ликвидности брокера. 14 
      return 'режим внутренней ликвидности';

    case 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING':
      // Перерыв торговли в режиме внутренней ликвидности брокера. 15 
      return 'перерыв режима внутренней ликвидности';

    case 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING':
      // Недоступна торговля в режиме внутренней ликвидности брокера. 16 
      return 'режим внутренней леквидности недоступен';

    default:
      return null;
  }
};

// Уровень риска облигации.
export enum RiskLevel {
  // Не указан.
  RISK_LEVEL_UNSPECIFIED = 0,
  // Низкий уровень риска.
  RISK_LEVEL_LOW = 1,
  // Средний уровень риска.
  RISK_LEVEL_MODERATE = 2,
  // Высокий уровень риска.
  RISK_LEVEL_HIGH = 3
}

export const getRiskLevelName = (code: number) => {
  return RiskLevel[code];
}

export const getRiskLevel = (bond: IBond) => {
  switch (bond.riskLevel) {

    case 'RISK_LEVEL_UNSPECIFIED':
      // Не указан. 0
      return 0;

    case 'RISK_LEVEL_LOW':
      // Низкий уровень риска. 1
      return 3;

    case 'RISK_LEVEL_MODERATE':
      // Средний уровень риска. 2
      return 2;

    case 'RISK_LEVEL_HIGH':
      // Высокий уровень риска. 3
      return 1;

    default:
      return null;
  }
};

export const getRiskLevelText = (bond: IBond) => {
  switch (bond.riskLevel) {

    case 'RISK_LEVEL_UNSPECIFIED':
      // Не указан. 0
      return 'не указан';

    case 'RISK_LEVEL_LOW':
      // Низкий уровень риска. 1
      return 'низкий риск';

    case 'RISK_LEVEL_MODERATE':
      // Средний уровень риска. 2
      return 'средний риск';

    case 'RISK_LEVEL_HIGH':
      // Высокий уровень риска. 3
      return 'высокий риск';

    default:
      return null;
  }
};

export function getRealExchange(code: number) {
  return RealExchange[code];
}

export function getTradingStatus(code: number) {
  return SecurityTradingStatus[code];
}

export function convertTIBond(bond: TIBond): IBond {
  const bondType = getBondType(bond.bondType);
  const tradingStatus = getTradingStatus(bond.tradingStatus);
  const realExchange = getRealExchange(bond.realExchange);
  const riskLevel = getRiskLevelName(bond.riskLevel);
  let result: IBond = {
    // FIGI-идентификатор инструмента. 1
    figi: bond.figi,
    // Тикер инструмента. 2
    ticker: bond.ticker,
    // Класс-код (секция торгов). 3
    classCode: bond.classCode,
    // ISIN-код инструмента. 4
    isin: bond.isin,
    // Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру `lot`. [Подробнее](./glossary#lot). 5
    lot: bond.lot,
    // Валюта расчетов. 6
    currency: bond.currency,
    // Признак доступности для операций в шорт. 13
    shortEnabledFlag: bond.shortEnabledFlag,
    // Название инструмента. 14
    name: bond.name,
    // Tорговая площадка (секция биржи). 16
    exchange: bond.exchange,
    // Количество выплат по купонам в год. 17
    couponQuantityPerYear: bond.couponQuantityPerYear,
    // Дата погашения облигации по UTC. 18
    maturityDate: bond.maturityDate,
    // Номинал облигации. 19
    nominal: {
      currency: bond.nominal.currency,
      units: String(bond.nominal.units),
      nano: bond.nominal.nano
    },
    // Первоначальный номинал облигации. 20
    initialNominal: {
      currency: bond.initialNominal.currency,
      units: String(bond.initialNominal.units),
      nano: bond.initialNominal.nano
    },
    // Дата выпуска облигации по UTC. 21
    stateRegDate: bond.stateRegDate,
    // Дата размещения по UTC. 22
    placementDate: bond.placementDate,
    // Цена размещения. 23
    placementPrice: {
      currency: bond.placementPrice.currency,
      units: String(bond.placementPrice.units),
      nano: bond.placementPrice.nano
    },
    // Значение НКД (накопленного купонного дохода) на дату. 24
    aciValue: {
      currency: bond.aciValue.currency,
      units: String(bond.aciValue.units),
      nano: bond.aciValue.nano
    },
    // Код страны риска — то есть страны, в которой компания ведет основной бизнес. 25
    countryOfRisk: bond.countryOfRisk,
    // Наименование страны риска — то есть страны, в которой компания ведет основной бизнес. 26
    countryOfRiskName: bond.countryOfRiskName,
    // Сектор экономики. 27
    sector: bond.sector,
    // Форма выпуска. Возможные значения: <br/>**documentary** — документарная; <br/>**non_documentary** — бездокументарная. 28
    issueKind: bond.issueKind,
    // Размер выпуска. 29
    issueSize: String(bond.issueSize),
    // Плановый размер выпуска. 30
    issueSizePlan: String(bond.issueSizePlan),
    // Текущий режим торгов инструмента. 31
    tradingStatus: tradingStatus,
    // Флаг, используемый ранее для определения внебиржевых инструментов. На данный момент не используется для торгуемых через API инструментов. Может использоваться как фильтр для операций, совершавшихся некоторое время назад на ОТС площадке. 32
    otcFlag: bond.otcFlag,
    // Признак доступности для покупки. 33
    buyAvailableFlag: bond.buyAvailableFlag,
    // Признак доступности для продажи. 34
    sellAvailableFlag: bond.sellAvailableFlag,
    // Признак облигации с плавающим купоном. 35
    floatingCouponFlag: bond.floatingCouponFlag,
    // Признак бессрочной облигации. 36
    perpetualFlag: bond.perpetualFlag,
    // Признак облигации с амортизацией долга. 37
    amortizationFlag: bond.amortizationFlag,
    // Шаг цены. 38
    minPriceIncrement: {
      units: String(bond?.minPriceIncrement?.units) || '0',
      nano: bond?.minPriceIncrement?.nano || 0,
    },
    // Параметр указывает на возможность торговать инструментом через API. 39
    apiTradeAvailableFlag: bond.apiTradeAvailableFlag,
    // Уникальный идентификатор инструмента. 40
    uid: bond.uid,
    // Реальная площадка исполнения расчетов. (биржа) 41
    realExchange: realExchange,
    // Уникальный идентификатор позиции инструмента. 42
    positionUid: bond.positionUid,
    // Уникальный идентификатор актива. 43
    assetUid: bond.assetUid,
    // Тесты, которые необходимо пройти клиенту, чтобы совершать сделки по инструменту. 44
    requiredTests: bond.requiredTests,
    // Признак доступности для ИИС. 51
    forIisFlag: bond.forIisFlag,
    // Флаг, отображающий доступность торговли инструментом только для квалифицированных инвесторов. 52
    forQualInvestorFlag: bond.forQualInvestorFlag,
    // Флаг, отображающий доступность торговли инструментом по выходным. 53
    weekendFlag: bond.weekendFlag,
    // Флаг заблокированного ТКС. 54
    blockedTcaFlag: bond.blockedTcaFlag,
    // Признак субординированной облигации. 55
    subordinatedFlag: bond.subordinatedFlag,
    // Флаг достаточной ликвидности. 56
    liquidityFlag: bond.liquidityFlag,
    // Дата первой минутной свечи. 61
    first1minCandleDate: bond.first1dayCandleDate,
    // Дата первой дневной свечи. 62
    first1dayCandleDate: bond.first1dayCandleDate,
    // Уровень риска. 63
    riskLevel: riskLevel,
    // Информация о бренде. 64
    brand: {
      logoName: bond.brand.logoName,
      logoBaseColor: bond.brand.logoBaseColor,
      textColor: bond.brand.textColor,
    },
    // Тип облигации. 65
    bondType: bondType,
  }
  return result;
}

export const parseTokens = (data: string | null) => {
  const tokens = typeof data === 'string' ? JSON.parse(data || '{}') : data; 
  
  if (tokens.readonly === '' && tokens.fullaccess === '' && tokens.sandbox === '') return;
  const ttoken = tokens.readonly !== '' ? tokens.readonly : tokens.fullaccess !== '' ? tokens.fullaccess : tokens.sandbox !== '' ? tokens.sandbox : '';
  return ttoken;
}

export const getPlatform = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  let platform: string;
  if (/iphone|ipad|ipod/.test(userAgent)) {
    platform = 'ios';
  } else if (/android/.test(userAgent)) {
    platform = 'android';
  } else {
    platform = 'desktop';
  }
  return platform
}    

// Функция получения номинального значения
export function getNominalValue(nominal: IIBondValue | IQuotation): number {
  return parseFloat(nominal.units + '.' + nominal.nano / 1e9);
}

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
/////////////////////////////////// ФИЛЬТРЫ

export function isNumberMatchFilter(num: number, filter: IFilterNumber): boolean {
  // Если нет условий фильтрации — считаем, что строка подходит
  if (!filter || Object.keys(filter).length === 0) {
    return true;
  }

  const { equal, min, max, even, odd, regex } = filter;

  // Коррекция min и max, если min > max
  let effectiveMin = min;
  let effectiveMax = max;

  if (min !== undefined && max !== undefined && min > max) {
    effectiveMin = max;
    effectiveMax = min;
  }

  // Проверка точного совпадения
  if (equal !== undefined && num !== equal) {
    return false;
  }

  // Проверка минимального значения (работает только если min задан)
  if (effectiveMin !== undefined && num < effectiveMin) {
    return false;
  }

  // Проверка максимального значения (работает только если max задан)
  if (effectiveMax !== undefined && num > effectiveMax) {
    return false;
  }

  // Обработка конфликта even и odd: если оба заданы, условие игнорируется
  const hasEven = even !== undefined;
  const hasOdd = odd !== undefined;

  if (!(hasEven && hasOdd)) {
    if (even !== undefined) {
      if (even && num % 2 !== 0) return false;
      if (!even && num % 2 === 0) return false;
    }
    if (odd !== undefined) {
      if (odd && num % 2 === 0) return false;
      if (!odd && num % 2 !== 0) return false;
    }
  }

  // Проверка по регулярному выражению
  if (regex !== undefined) {
    try {
      const regexObj = new RegExp(regex);
      if (!regexObj.test(num.toString())) {
        return false;
      }
    } catch (error: any) {
      throw new Error(`Некорректное регулярное выражение: ${regex}. Ошибка: ${error.message}`);
    }
  }

  return true;
}

function isStringMatchFilter(value: string, filter: IFilterString): boolean {
  // Если нет условий фильтрации — считаем, что строка подходит
  if (!filter || Object.keys(filter).length === 0) {
    return true;
  }

  const checks: boolean[] = [];

  // Проверка на точное совпадение
  if (filter.equal !== undefined) {
    checks.push(value === filter.equal);
  }

  // Проверка на вхождение подстроки
  if (filter.contain !== undefined) {
    checks.push(value.includes(filter.contain));
  }

  // Проверка на принадлежность к массиву
  if (filter.arr !== undefined) {
    checks.push(filter.arr.includes(value));
  }

  // Проверка по регулярному выражению
  if (filter.regex !== undefined) {
    try {
      const regexObj = new RegExp(filter.regex);
      checks.push(regexObj.test(value));
    } catch (error) {
      console.warn(`Invalid regex pattern: ${filter.regex}`, error);
      return false;
    }
  }

  // Все указанные условия должны быть выполнены
  return checks.every(check => check);
}

export function isDateMatchFilter(date: Date, filter?: IFilterDate): boolean {
  // Если нет условий фильтрации — считаем, что строка подходит
  if (!filter || !date || Object.keys(filter).length === 0) {
    return true;
  }

  const { equal, min, max, year, month, day, weekDay, regex } = filter;

  // Проверка точной даты
  if (equal && date.getTime() !== equal.getTime()) return false;

  // Проверка диапазона дат
  if (min && date < min) return false;
  if (max && date > max) return false;

  // Проверка года
  if (year && !isNumberMatchFilter(date.getFullYear(), year)) return false;

  // Проверка месяца (getMonth() возвращает 0–11, поэтому +1)
  if (month && !isNumberMatchFilter(date.getMonth() + 1, month)) return false;

  // Проверка дня месяца
  if (day && !isNumberMatchFilter(date.getDate(), day)) return false;

  // Проверка дня недели (getDay() возвращает 0–6, где 0 — воскресенье)
  if (weekDay && !isNumberMatchFilter(date.getDay(), weekDay)) return false;

  // Проверка по регулярному выражению (преобразуем дату в строку)
  if (regex) {
    const dateStr = date.toISOString();
    const regexObj = typeof regex === 'string' ? new RegExp(regex) : regex;
    if (!regexObj.test(dateStr)) return false;
  }

  return true;
}

function isBooleanMatchFilter(
  value: boolean | null | undefined,
  filter: IFilterBoolean
): boolean {

    // Сначала проверяем any: true — если разрешено всё, возвращаем true
  if (filter.any === true) {
    return true;
  }

  // Затем проверяем equal — если фильтр явно указывает null,
  // то null должен быть разрешён, даже если includeNull: false
  if ('equal' in filter) {
    return value === filter.equal;
  }

  // Только если equal не задан, применяем includeNull
  if ((value === null || value === undefined) && !filter.includeNull) {
    return false;
  }

  // По умолчанию — значение подходит
  return true;
}


export function isBondMatchFilter(bond: IBond, filter: IBondsFilter | undefined): boolean {
  // Проверка на пустоту фильтра: если нет ни одного заданного поля, считаем, что объект подходит
  if (!filter || Object.keys(filter).length === 0) {
    return true;
  }

  // Проверяем каждое поле фильтра
  return (
    (filter.ticker === undefined || isStringMatchFilter(bond.ticker, filter.ticker)) &&
    (filter.classCode === undefined || isStringMatchFilter(bond.classCode, filter.classCode)) &&
    (filter.lot === undefined || isNumberMatchFilter(bond.lot, filter.lot)) &&
    (filter.currency === undefined || isStringMatchFilter(bond.currency, filter.currency)) &&
    (filter.shortEnabledFlag === undefined || isBooleanMatchFilter(bond.shortEnabledFlag, filter.shortEnabledFlag)) &&
    (filter.name === undefined || isStringMatchFilter(bond.name, filter.name)) &&
    (filter.exchange === undefined || isStringMatchFilter(bond.exchange, filter.exchange)) &&
    (filter.couponQuantityPerYear === undefined || isNumberMatchFilter(bond.couponQuantityPerYear, filter.couponQuantityPerYear)) &&
    (filter.maturity === undefined || isDateMatchFilter(new Date(bond.maturityDate), filter.maturity)) &&
    (filter.nominal === undefined || isNumberMatchFilter(getNominalValue(bond.nominal), filter.nominal)) &&
    (filter.initialNominal === undefined || isNumberMatchFilter(getNominalValue(bond.initialNominal), filter.initialNominal)) &&
    (filter.stateRegDate === undefined || isDateMatchFilter(new Date(bond.stateRegDate), filter.stateRegDate)) &&
    (filter.placementDate === undefined || isDateMatchFilter(new Date(bond.placementDate), filter.placementDate)) &&
    (filter.placementPrice === undefined || isNumberMatchFilter(getNominalValue(bond.placementPrice), filter.placementPrice)) &&
    (filter.aciValue === undefined || isNumberMatchFilter(getNominalValue(bond.aciValue), filter.aciValue)) &&
    (filter.countryOfRisk === undefined || isStringMatchFilter(bond.countryOfRisk, filter.countryOfRisk)) &&
    (filter.countryOfRiskName === undefined || isStringMatchFilter(bond.countryOfRiskName, filter.countryOfRiskName)) &&
    (filter.sector === undefined || isStringMatchFilter(bond.sector, filter.sector)) &&
    (filter.issueKind === undefined || isStringMatchFilter(bond.issueKind, filter.issueKind)) &&
    (filter.issueSize === undefined || isNumberMatchFilter(Number(bond.issueSize), filter.issueSize)) &&
    (filter.issueSizePlan === undefined || isNumberMatchFilter(Number(bond.issueSizePlan), filter.issueSizePlan)) &&
    (filter.tradingStatus === undefined || isStringMatchFilter(bond.tradingStatus, filter.tradingStatus)) &&
    (filter.otcFlag === undefined || isBooleanMatchFilter(bond.otcFlag, filter.otcFlag)) &&
    (filter.buyAvailableFlag === undefined || isBooleanMatchFilter(bond.buyAvailableFlag, filter.buyAvailableFlag)) &&
    (filter.sellAvailableFlag === undefined || isBooleanMatchFilter(bond.sellAvailableFlag, filter.sellAvailableFlag)) &&
    (filter.floatingCouponFlag === undefined || isBooleanMatchFilter(bond.floatingCouponFlag, filter.floatingCouponFlag)) &&
    (filter.perpetualFlag === undefined || isBooleanMatchFilter(bond.perpetualFlag, filter.perpetualFlag)) &&
    (filter.amortizationFlag === undefined || isBooleanMatchFilter(bond.amortizationFlag, filter.amortizationFlag)) &&
    (filter.apiTradeAvailableFlag === undefined || isBooleanMatchFilter(bond.apiTradeAvailableFlag, filter.apiTradeAvailableFlag)) &&
    (filter.realExchange === undefined || isStringMatchFilter(bond.realExchange, filter.realExchange)) &&
    (filter.forIisFlag === undefined || isBooleanMatchFilter(bond.forIisFlag, filter.forIisFlag)) &&
    (filter.forQualInvestorFlag === undefined || isBooleanMatchFilter(bond.forQualInvestorFlag, filter.forQualInvestorFlag)) &&
    (filter.weekendFlag === undefined || isBooleanMatchFilter(bond.weekendFlag, filter.weekendFlag)) &&
    (filter.blockedTcaFlag === undefined || isBooleanMatchFilter(bond.blockedTcaFlag, filter.blockedTcaFlag)) &&
    (filter.subordinatedFlag === undefined || isBooleanMatchFilter(bond.subordinatedFlag, filter.subordinatedFlag)) &&
    (filter.liquidityFlag === undefined || isBooleanMatchFilter(bond.liquidityFlag, filter.liquidityFlag)) &&
    (filter.riskLevel === undefined || isStringMatchFilter(bond.riskLevel, filter.riskLevel)) &&
    (filter.bondType === undefined || isStringMatchFilter(bond.bondType, filter.bondType)) &&
    (filter.callDate === undefined || isDateMatchFilter(new Date(bond.callDate || ''), filter.callDate))
  );
}

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////// ТЕСТЫ
// Подумать над интеграцией vitest с проектом
// Константа для включения/выключения выполнения тестов
const RUN_TESTS = true;

// Самоисполняющаяся анонимная функция (IIFE)
(function runBondFilterTests(on: boolean) {
  // Если тесты отключены, выходим сразу
  if (!on) {
    console.log('%cТесты фильтра облигаций ОТКЛЮЧЕНЫ (RUN_TESTS = false)', 'color: darkorange');
    return;
  }

  const TEST_NUMBERS = false;
  const TEST_STRINGS = true;
  const TEST_DATES = false;
  const TEST_BOOLEANS = false;
  const TEST_BONDS = false;

  (function runNumberFilterTests(on: boolean) {
    if (!on) {
      console.log('%cТесты фильтра чисел ОТКЛЮЧЕНЫ (TEST_NUMEBRS = false)', 'color: darkorange');
      return;
    }

    console.log('%c\n=== Проверка чисел ===','color: gold');

    // Пример 1
    const filter: IFilterNumber = {
      min: 20,
      //max: 22,
      //odd: true,
      //regex: '5'
    };
    console.log(`%cЧисло: 15, Фильтр: {
      min: 20,
    } = `,'color: cyan',isNumberMatchFilter(15, filter));  // true
    console.log(`%cЧисло: 23, Фильтр: {
      min: 20,
    } = `,'color: cyan',isNumberMatchFilter(23, filter));  // false
  }(TEST_NUMBERS));

  (function runStringFilterTests(on: boolean) {
    if (!on) {
      console.log('%cТесты фильтра строк ОТКЛЮЧЕНЫ (TEST_STRINGS = false)', 'color: darkorange');
      return;
    }


    console.log('%c\n=== Проверка строк ===', 'color: gold');
    // Примеры вызовов функции
    console.log('%cСтрока: "hello", Фильтр: { equal: "hello" } = ', 'color: cyan;', isStringMatchFilter('hello', { equal: 'hello' })); // true
    console.log('%cСтрока: "hello world", Фильтр: { contain: "world" } = ', 'color: cyan;', isStringMatchFilter('hello world', { contain: 'world' })); // true
    console.log(isStringMatchFilter('apple', { arr: ['apple', 'banana', 'orange'] })); // true
    console.log(isStringMatchFilter('test123', { regex: /^[a-z]+\d+$/ })); // true

    // Комбинация условий
    console.log(isStringMatchFilter('javascript', {
      contain: 'java',
      regex: '^[a-z]{10,}$'
    })); // true

    // Невыполнение условий
    console.log(isStringMatchFilter('hello', { equal: 'world' })); // false
    console.log(isStringMatchFilter('test', { contain: 'xyz' })); // false
  }(TEST_STRINGS));

  (function runDateFilterTests(on: boolean) {
    if (!on) {
      console.log('%cТесты фильтра дат ОТКЛЮЧЕНЫ (TEST_DATES = false)', 'color: darkorange');
      return;
    }

    console.log('\nПримеры проверки дат\n');

    // Пример 1: проверка на конкретную дату
    console.log('\nПример 1: проверка на конкретную дату\n');
    const filter1: IFilterDate = {
      equal: new Date('2023-10-15')
    };
    console.log(`%cДата: 2023-10-15, Фильтр: "{
      equal: new Date('2023-10-15')
    }" = %o`, 'color: cyan;', isDateMatchFilter(new Date('2023-10-15'), filter1)); // true
    console.log(`%cДата: 2023-10-15, Фильтр: "{
      equal: new Date('2023-10-16')
    }" = %o`, 'color: cyan;', isDateMatchFilter(new Date('2023-10-15'), filter1)); // false

    // Пример 2: проверка диапазона дат
    console.log('Пример 2: проверка диапазона дат\n');
    const filter2: IFilterDate = {
      min: new Date('2023-10-01'),
      max: new Date('2023-10-31')
    };
    console.log(`%cДата: 2023-10-15, Фильтр: "{
      min: new Date('2023-10-01'),
      max: new Date('2023-10-31')
    }" = %o`, 'color: cyan;', isDateMatchFilter(new Date('2023-10-15'), filter2)); // true
    console.log(`%cДата: 2023-09-15, Фильтр: "{
      min: new Date('2023-10-01'),
      max: new Date('2023-10-31')
    }" = %o`, 'color: cyan;', isDateMatchFilter(new Date('2023-09-15'), filter2)); // false

    // Пример 3: проверка года и месяца
    console.log('Пример 3: проверка года и месяца\n');
    const filter3: IFilterDate = {
      year: { equal: 2023 },
      month: { equal: 10 }
    };
    console.log(`%cДата: 2023-10-15, Фильтр: "{
      year: { equal: 2023 },
      month: { equal: 10 }
    }" = %o`, 'color: cyan;', isDateMatchFilter(new Date('2023-10-15'), filter3)); // true
    console.log(`%cДата: 2024-10-15, Фильтр: "{
      year: { equal: 2023 },
      month: { equal: 10 }
    }" = %o`, 'color: cyan;', isDateMatchFilter(new Date('2024-10-15'), filter3)); // false

    // Пример 4: проверка дня недели (понедельник = 1)
    console.log('Пример 4: проверка дня недели (понедельник = 1)\n');
    const filter4: IFilterDate = {
      weekDay: { equal: 1 } // понедельник
    };
    console.log(`%cДата: 2023-10-16, Фильтр: "{
      weekDay: { equal: 1 } // понедельник
    }" = %o`, 'color: cyan;', isDateMatchFilter(new Date('2023-10-16'), filter4)); // false (16.10.2023 — понедельник)

    // Пример 5: проверка по регулярному выражению
    console.log('Пример 5: проверка по регулярному выражению\n');
    const filter5: IFilterDate = {
      regex: /2023.*10/
    };
    console.log(`%cДата: 2023-10-15, Фильтр: "{
      regex: /2023.*10/
    }" = %o`, 'color: cyan;', isDateMatchFilter(new Date('2023-10-15'), filter5)); // true

  }(TEST_DATES));

  (function runBooleanFilterTests(on: boolean) {
    if (!on) {
      console.log('%cТесты фильтра булевых значений ОТКЛЮЧЕНЫ (TEST_BOOLEAN = false)', 'color: darkorange');
      return;
    }

    console.log('\nПримеры проверки булевых значений\n');
    // Примеры вызовов функции
    console.log(isBooleanMatchFilter(true, { equal: true }));     // true
    console.log(isBooleanMatchFilter(false, { equal: true }));   // false
    console.log(isBooleanMatchFilter(true, { any: true }));      // true
    console.log(isBooleanMatchFilter(false, { any: true }));    // true
    console.log(isBooleanMatchFilter(true, {}));                 // true
    console.log(isBooleanMatchFilter(false, {}));               // true

    console.log(isBooleanMatchFilter(null, { includeNull: true })); // true
    console.log(isBooleanMatchFilter(undefined, { includeNull: false })); // false
    console.log('Ошибка');
    console.log(isBooleanMatchFilter(null, { equal: null }));     // true

  }(TEST_BOOLEANS));


  (function runBondFilterTests(on) {
    if (!on) {
      console.log('%cТесты фильтра облигаций ОТКЛЮЧЕНЫ (TEST_BONDS = false)', 'color: darkorange');
      return;
    }
    console.log("Запуск тестов фильтра облигаций...");

    // Тесты фильтрации
    console.log('\n=== Проверка основного фильтра ===');


    // 1. Пустой фильтр (все облигации должны подходить)
    console.log('\n1. Пустой фильтр (все облигации должны подходить)');
    const bond1: IBond = {
      figi: 'BBG000000001',
      ticker: 'SU26207RMFS9',
      classCode: 'TQOB',
      isin: 'RU000A0JXQN7',
      lot: 10,
      currency: 'RUB',
      shortEnabledFlag: true,
      name: 'ОФЗ 26207',
      exchange: 'MOEX',
      couponQuantityPerYear: 2,
      maturityDate: '2030-12-15T00:00:00Z',
      nominal: { currency: 'RUB', units: '1000', nano: 0 },
      initialNominal: { currency: 'RUB', units: '1000', nano: 0 },
      stateRegDate: '2020-03-15T00:00:00Z',
      placementDate: '2020-03-20T00:00:00Z',
      placementPrice: { currency: 'RUB', units: '980', nano: 500000000 },
      aciValue: { currency: 'RUB', units: '35', nano: 200000000 },
      countryOfRisk: 'RU',
      countryOfRiskName: 'Россия',
      sector: 'Government',
      issueKind: 'non_documentary',
      issueSize: '50000000000',
      issueSizePlan: '50000000000',
      tradingStatus: 'Trading',
      otcFlag: false,
      buyAvailableFlag: true,
      sellAvailableFlag: true,
      floatingCouponFlag: false,
      perpetualFlag: false,
      amortizationFlag: false,
      minPriceIncrement: { units: '0', nano: 100000000 },
      apiTradeAvailableFlag: true,
      uid: 'uid-1',
      realExchange: 'MOEX',
      positionUid: 'pos-1',
      assetUid: 'asset-1',
      requiredTests: [],
      forIisFlag: true,
      forQualInvestorFlag: false,
      weekendFlag: false,
      blockedTcaFlag: false,
      subordinatedFlag: false,
      liquidityFlag: true,
      first1minCandleDate: '2020-03-23T00:00:00Z',
      first1dayCandleDate: '2020-03-23T00:00:00Z',
      riskLevel: 'Low',
      brand: { logoName: 'logo1', logoBaseColor: '#FF0000', textColor: '#FFFFFF' },
      bondType: 'OFZ',
      callDate: '2030-12-15T00:00:00Z'
    };

    // Тест: пустой фильтр
    console.log('\nТест: пустой фильтр');
    const emptyFilter: IBondsFilter = {};
    console.log(isBondMatchFilter(bond1, emptyFilter)); // true

    // Тест: undefined фильтр
    console.log('\nТест: undefined фильтр');
    console.log(isBondMatchFilter(bond1, undefined)); // true


    // 2. Фильтрация по строковым полям
    console.log('\n2. Фильтрация по строковым полям');
    // Фильтр: classCode = "TQOB"
    console.log('\nФильтр: classCode = "TQOB"');
    const stringFilter: IBondsFilter = {
      classCode: { equal: 'TQOB' }
    };
    console.log(isBondMatchFilter(bond1, stringFilter)); // true

    // Фильтр: name содержит "ОФЗ"
    console.log('\nФильтр: name содержит "ОФЗ"');
    const nameFilter: IBondsFilter = {
      name: { contain: 'ОФЗ' }
    };
    console.log(isBondMatchFilter(bond1, nameFilter)); // true

    // Фильтр: countryOfRisk в массиве ["RU", "US"]
    console.log('\nФильтр: countryOfRisk в массиве ["RU", "US"]');
    const countryFilter: IBondsFilter = {
      countryOfRisk: { arr: ['RU', 'US'] }
    };
    console.log(isBondMatchFilter(bond1, countryFilter)); // true


    // 3. Фильтрация по числовым полям
    console.log('\n3. Фильтрация по числовым полям');
    // Фильтр: lot = 10
    console.log('\nФильтр: lot = 10');
    const lotFilter: IBondsFilter = {
      lot: { equal: 10 }
    };
    console.log(isBondMatchFilter(bond1, lotFilter)); // true

    // Фильтр: couponQuantityPerYear >= 2
    console.log('\nФильтр: couponQuantityPerYear >= 2');
    const couponFilter: IBondsFilter = {
      couponQuantityPerYear: { min: 2 }
    };
    console.log(isBondMatchFilter(bond1, couponFilter)); // true

    // Фильтр: issueSize между 40 000 000 000 и 60 000 000 000
    console.log('\nФильтр: issueSize между 40 000 000 000 и 60 000 000 000');
    const issueSizeFilter: IBondsFilter = {
      issueSize: { min: 40000000000, max: 60000000000 }
    };
    console.log(isBondMatchFilter(bond1, issueSizeFilter)); // true


    // 4. Фильтрация по булевым полям
    console.log('\n4. Фильтрация по булевым полям');
    // Фильтр: shortEnabledFlag = true
    console.log('\nФильтр: shortEnabledFlag = true');
    const shortFilter: IBondsFilter = {
      shortEnabledFlag: { equal: true }
    };
    console.log(isBondMatchFilter(bond1, shortFilter)); // true

    // Фильтр: buyAvailableFlag = true и sellAvailableFlag = true
    console.log('\nФильтр: buyAvailableFlag = true и sellAvailableFlag = true');
    const tradeFilter: IBondsFilter = {
      buyAvailableFlag: { equal: true },
      sellAvailableFlag: { equal: true }
    };
    console.log(isBondMatchFilter(bond1, tradeFilter)); // true


    // 5. Фильтрация по датам
    console.log('\n5. Фильтрация по датам');
    // Фильтр: maturity после 2025 года
    console.log('\nФильтр: maturity после 2025 года');
    const dateFilter: IBondsFilter = {
      maturity: {
        min: new Date('2025-01-01T00:00:00Z')
      }
    };
    console.log(isBondMatchFilter(bond1, dateFilter)); // true


    // Фильтр: placementDate в 2020 году
    console.log('\nФильтр: placementDate в 2020 году');
    const yearFilter: IBondsFilter = {
      placementDate: {
        year: { equal: 2020 }
      }
    };
    console.log(isBondMatchFilter(bond1, yearFilter)); // true


    // 6. Комбинированный фильтр (несколько условий)
    console.log('\n6. Комбинированный фильтр (несколько условий)');
    // Комбинированный фильтр:
    // - classCode = "TQOB"
    // - lot >= 5
    // - shortEnabledFlag = true
    // - maturity после 2028 года
    console.log(`\nКомбинированный фильтр:
    - classCode = "TQOB"
    - lot >= 5
    - shortEnabledFlag = true
    - maturity после 2028 года`);
    const complexFilter: IBondsFilter = {
      classCode: { equal: 'TQOB' },
      lot: { min: 5 },
      shortEnabledFlag: { equal: true },
      maturity: {
        min: new Date('2028-01-01T00:00:00Z')
      }
    };
    console.log(isBondMatchFilter(bond1, complexFilter)); // true


    // 7. Негативные тесты (облигация не должна подходить)
    console.log('\n7. Негативные тесты (облигация не должна подходить)');
    // Тест 1: неверный classCode
    console.log('\nТест 1: неверный classCode');
    const wrongClassFilter: IBondsFilter = {
      classCode: { equal: 'TQCB' }
    };
    console.log(isBondMatchFilter(bond1, wrongClassFilter)); // false


    // Тест 2: lot меньше требуемого
    console.log('\nТест 2: lot меньше требуемого');
    const smallLotFilter: IBondsFilter = {
      lot: { min: 15 }
    };
    console.log(isBondMatchFilter(bond1, smallLotFilter)); // false

    // Тест 3: maturity до 2025 года
    console.log('\nТест 3: maturity до 2025 года');
    const earlyMaturityFilter: IBondsFilter = {
      maturity: {
        max: new Date('2025-01-01T00:00:00Z')
      }
    };
    console.log(isBondMatchFilter(bond1, earlyMaturityFilter)); // false


    // 8. Тест с регулярными выражениями
    console.log('\n8. Тест с регулярными выражениями');
    // Фильтр: ticker соответствует шаблону SU*
    console.log('\nФильтр: ticker соответствует шаблону SU*');
    const tickerRegexFilter: IBondsFilter = {
      ticker: { regex: /^SU/ }
    };
    console.log(isBondMatchFilter(bond1, tickerRegexFilter)); // true

    // Фильтр: name содержит "ОФЗ" или "ГКО"
    console.log('\nФильтр: name содержит "ОФЗ" или "ГКО"');
    const nameRegexFilter: IBondsFilter = {
      name: { regex: /ОФЗ|ГКО/ }
    };
    console.log(isBondMatchFilter(bond1, nameRegexFilter)); // true

    // Фильтр: countryOfRiskName начинается с "Рос"
    console.log('\nФильтр: countryOfRiskName начинается с "Рос"');
    const countryRegexFilter: IBondsFilter = {
      countryOfRiskName: { regex: /^Рос/ }
    };
    console.log(isBondMatchFilter(bond1, countryRegexFilter)); // true


    // 9. Тест с фильтрацией по номиналу (используя поле units в IIBondValue)
    console.log('\n9. Тест с фильтрацией по номиналу (используя поле units в IIBondValue)');
    // Фильтр: номинал равен 1000 руб.
    console.log('\nФильтр: номинал равен 1000 руб.');
    const nominalFilter: IBondsFilter = {
      nominal: { equal: 1000 }
    };
    console.log(isBondMatchFilter(bond1, nominalFilter)); // true

    // Фильтр: номинал больше 500 руб.
    console.log('\nФильтр: номинал больше 500 руб.');
    const highNominalFilter: IBondsFilter = {
      nominal: { min: 500 }
    };
    console.log(isBondMatchFilter(bond1, highNominalFilter)); // true

    // Фильтр: номинал между 900 и 1100 руб.
    console.log('\nФильтр: номинал между 900 и 1100 руб.');
    const rangeNominalFilter: IBondsFilter = {
      nominal: { min: 900, max: 1100 }
    };
    console.log(isBondMatchFilter(bond1, rangeNominalFilter)); // true


    // 10. Тест с фильтрацией по уровню риска
    console.log('\n10. Тест с фильтрацией по уровню риска');
    // Фильтр: riskLevel равен "Low"
    console.log('\nФильтр: riskLevel равен "Low"');
    const riskFilter: IBondsFilter = {
      riskLevel: { equal: "Low" }
    };
    console.log(isBondMatchFilter(bond1, riskFilter)); // true

    // Фильтр: riskLevel содержит "Low" или "Medium"
    console.log('\nФильтр: riskLevel содержит "Low" или "Medium"');
    const riskRegexFilter: IBondsFilter = {
      riskLevel: { regex: /Low|Medium/ }
    };
    console.log(isBondMatchFilter(bond1, riskRegexFilter)); // true


    // 11. Тест с фильтрацией по типу облигации
    console.log('\n11. Тест с фильтрацией по типу облигации');
    // Фильтр: bondType равен "OFZ"
    console.log('\nФильтр: bondType равен "OFZ"');
    const bondTypeFilter: IBondsFilter = {
      bondType: { equal: 'OFZ' }
    };
    console.log(isBondMatchFilter(bond1, bondTypeFilter)); // true

    // Фильтр: bondType содержит "OFZ" или "Municipal"
    console.log('\nФильтр: bondType содержит "OFZ" или "Municipal"');
    const bondTypeRegexFilter: IBondsFilter = {
      bondType: { regex: /OFZ|Municipal/ }
    };
    console.log(isBondMatchFilter(bond1, bondTypeRegexFilter)); // true


    // 12. Тест с фильтрацией по флагу доступности для ИИС
    console.log('\nТест с фильтрацией по флагу доступности для ИИС');
    // Фильтр: forIisFlag равен true
    console.log('\nФильтр: forIisFlag равен true');
    const iisFilter: IBondsFilter = {
      forIisFlag: { equal: true }
    };
    console.log(isBondMatchFilter(bond1, iisFilter)); // true

    // Фильтр: forQualInvestorFlag равен false
    console.log('\nФильтр: forQualInvestorFlag равен false');
    const qualFilter: IBondsFilter = {
      forQualInvestorFlag: { equal: false }
    };
    console.log(isBondMatchFilter(bond1, qualFilter)); // true


    // 13. Комплексный тест с множеством условий
    console.log('\n13. Комплексный тест с множеством условий');
    // Сложный фильтр: ищем облигации:
    // - класса "TQOB"
    // - с лотом не менее 5
    // - доступные для шорта
    // - с выплатами купонов 1–4 раза в год
    // - размещённые после 2019 года
    // - с низким или средним уровнем риска
    // - доступные для ИИС
    console.log(`\nСложный фильтр: ищем облигации:
    - класса "TQOB"
    - с лотом не менее 5
    - доступные для шорта
    - с выплатами купонов 1–4 раза в год
    - размещённые после 2019 года
    - с низким или средним уровнем риска
    - доступные для ИИС`);
    const complexAdvancedFilter: IBondsFilter = {
      classCode: { equal: "TQOB" },
      lot: { min: 5 },
      shortEnabledFlag: { equal: true },
      couponQuantityPerYear: { min: 1, max: 4 },
      placementDate: {
        min: new Date('2019-01-01T00:00:00Z')
      },
      riskLevel: { regex: /Low|Medium/ },
      forIisFlag: { equal: true }
    };

    console.log(isBondMatchFilter(bond1, complexAdvancedFilter)); // true


    // 14. Тест с некорректным регулярным выражением
    console.log('\n14. Тест с некорректным регулярным выражением');
    // Тест обработки ошибки в регулярном выражении
    console.log('\nТест обработки ошибки в регулярном выражении');
    const invalidRegexFilter: IBondsFilter = {
      name: { regex: '[invalid regex' } // некорректное регулярное выражение
    };

    try {
      console.log(isBondMatchFilter(bond1, invalidRegexFilter));
    } catch (error: any) {
      console.error('Ошибка в регулярном выражении:', error.message);
    }
  }(TEST_BONDS));
  
  console.log('\n%cВсе тесты завершены!', 'color: gold');
})(RUN_TESTS);