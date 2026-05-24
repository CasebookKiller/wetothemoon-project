// Публичный api для запросов биржевой информации
import axios from 'axios';

import { IBond, TIBond } from './types';
import { convertTIBond } from './methods';

export const API_URL = 'https://invest-public-api.tbank.ru/rest/tinkoff.public.invest.api.contract.v1.'

// Запрос облигаций через axios
export async function Bonds(token: string) {
  const request = JSON.stringify({
      //"instrumentStatus": 2,
      //"instrumentExchange": 0
    });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: API_URL + 'InstrumentsService/Bonds',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json', 
      'Authorization': 'Bearer ' + token
    },
    data: request
  };

  const res = await axios.request(config);
  if (res.status === 200) {
    const instruments = res.data.instruments;
    let bonds: IBond[] = [];
    instruments && instruments.forEach((bond: TIBond) => {
      bonds.push(convertTIBond(bond));
    })
    return bonds;
  } else {
    return [];
  }
}

// Запрос облигаций через fetch
export async function fetchBonds(token: string) {
  const requestBody = JSON.stringify({
    //'instrumentStatus': 2,
    //'instrumentExchange': 0
  });

  const response = await fetch(API_URL + 'InstrumentsService/Bonds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: requestBody
  });

  // Проверяем статус ответа (успешный ли запрос)
  if (!response.ok) {
    throw new Error(`Ошибка HTTP! статус: ${response.status}`);
  }

  // Парсим JSON из ответа
  const res = await response.json();
  if (res.instruments) {
    const instruments = res.instruments;
    let bonds: IBond[] = [];
    instruments && instruments.forEach((bond: TIBond) => {
      bonds.push(convertTIBond(bond));
    })
    return bonds;
  } else {
    return [];
  }
}

interface ITokens {
  readonly: string;
  fullaccess: string;
  sandbox: string; 
}

// Запрос облигаций через axios с получением ключа из localstorage
export async function getBondsAxios() {
  const storage = localStorage.getItem('tokens');
  const tokens: ITokens = JSON.parse(storage || '{}');
  
  if (tokens.readonly === '' && tokens.fullaccess === '' && tokens.sandbox === '') return;
  const ttoken = tokens.readonly !== '' ? tokens.readonly : tokens.fullaccess !== '' ? tokens.fullaccess : tokens.sandbox !== '' ? tokens.sandbox : '';

  const bonds = await Bonds(ttoken);
  return bonds; 
}

// Запрос облигации через axios
export async function Bond(ticker: string, classcode: string, token: string) {
  const options = {idType: 2, classCode: classcode, id: ticker};

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: API_URL + 'InstrumentsService/BondBy',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json', 
      'Authorization': 'Bearer ' + token
    },
    data: JSON.stringify(options)
  };

  const res = await axios.request(config);
  if (res.status === 200) {
    console.log('..res: ', res);
    return res;
  } else {
    return [];
  }
}

// Запрос событий облигации через axios
export async function BondEvents(from: string, to: string, instrumentId: string, type: string, token: string) {
  const options = {from: new Date(from), to: new Date(to), instrumentId: instrumentId, type: type};

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: API_URL + 'InstrumentsService/GetBondEvents',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json', 
      'Authorization': 'Bearer ' + token
    },
    data: JSON.stringify(options)
  };

  const res = await axios.request(config);
  if (res.status === 200) {
    return res;
  } else {
    return [];
  }
}

// Запрос счетов через axios
export async function Accounts(status: number, token: string) {
  const options = {status: status};

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: API_URL + 'UsersService/GetAccounts',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json', 
      'Authorization': 'Bearer ' + token
    },
    data: JSON.stringify(options)
  };

  const res = await axios.request(config);
  if (res.status === 200) {
    return res;
  } else {
    return [];
  }
}

// Запрос портфеля через axios
export async function Portfolio(account: number, token: string) {
  const options = {accountId: account, currency: 'RUB'};

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: API_URL + 'OperationsService/GetPortfolio',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json', 
      'Authorization': 'Bearer ' + token
    },
    data: JSON.stringify(options)
  };

  const res = await axios.request(config);
  if (res.status === 200) {
    return res;
  } else {
    return [];
  }
}

// Запрос инструмента через axios
export async function Instrument(ticker: string, classcode: string,token: string) {
  const options = {
    idType: 2,
    classCode: classcode,
    id: ticker,
  };

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: API_URL + 'InstrumentsService/GetInstrumentBy',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json', 
      'Authorization': 'Bearer ' + token
    },
    data: JSON.stringify(options)
  };

  const res = await axios.request(config);
  if (res.status === 200) {
    return res;
  } else {
    return [];
  }
}