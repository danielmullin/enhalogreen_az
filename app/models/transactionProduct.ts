import { Transaction } from './transaction';


export interface TransactionProduct {
  sequence: number;
  transaction: Transaction;
  units: number;
  uuid: string;
}

export async function list(transactionUuid: string): Promise<TransactionProduct[]> {
    return [{
    sequence: 1,
    transaction: {
      cost: 1000,
      currency: 'GBP',
      products: 100,
      secret: '1234567890987654321',
      tonnes: 3
    },
    units: 10,
    uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d'
  }, {
    sequence: 2,
    transaction: {
      cost: 1000,
      currency: 'GBP',
      products: 100,
      secret: '1234567890987654321',
      tonnes: 3
    },
    units: 10,
    uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d'
  },{
    sequence: 3,
    transaction: {
      cost: 1000,
      currency: 'GBP',
      products: 100,
      secret: '1234567890987654321',
      tonnes: 3
    },
    units: 10,
    uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d'
  },{
    sequence: 4,
    transaction: {
      cost: 1000,
      currency: 'GBP',
      products: 100,
      secret: '1234567890987654321',
      tonnes: 3
    },
    units: 10,
    uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d'
  },{
    sequence: 5,
    transaction: {
      cost: 1000,
      currency: 'GBP',
      products: 100,
      secret: '1234567890987654321',
      tonnes: 3
    },
    units: 10,
    uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d'
  }];
  
  const response = await fetch(`${api.protocol}://${api.base}${api.port}/transactions/${uuid}?api_key=${api.key}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  const jsonn = await response.json();
  return json;
}

export async function retrieve(uuid: string):Promise<TransactionProduct> {
  return {
    sequence: 5,
    transaction: {
      cost: 1000,
      currency: 'GBP',
      secret: '1234567890987654321',
      tonnes: 3
    },
    units: 10,
    uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d'
  }
  const response = await fetch(`${api.protocol}://${api.base}${api.port}/transactions/${uuid}?api_key=${api.key}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  const jsonn = await response.json();
  return json;
}