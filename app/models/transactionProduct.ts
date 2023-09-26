import { Transaction } from './transaction';
import { api } from '~/helpers/api';

export interface TransactionProduct {
	name: string;
	sequence: number;
	transaction: Transaction;
	offsetunits: number;
	uuid: string;
}

export async function list(transactionUuid: string): Promise<TransactionProduct[]> {
	return [
		{
			sequence: 1,
			transaction: {
				cost: 1000,
				currency: 'GBP',
				products: 100,
				secret: '1234567890987654321',
				tonnes: 3,
			},
			units: 10,
			uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d',
		},
		{
			sequence: 2,
			transaction: {
				cost: 1000,
				currency: 'GBP',
				products: 100,
				secret: '1234567890987654321',
				tonnes: 3,
			},
			units: 10,
			uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d',
		},
		{
			sequence: 3,
			transaction: {
				cost: 1000,
				currency: 'GBP',
				products: 100,
				secret: '1234567890987654321',
				tonnes: 3,
			},
			units: 10,
			uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d',
		},
		{
			sequence: 4,
			transaction: {
				cost: 1000,
				currency: 'GBP',
				products: 100,
				secret: '1234567890987654321',
				tonnes: 3,
			},
			units: 10,
			uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d',
		},
		{
			sequence: 5,
			transaction: {
				cost: 1000,
				currency: 'GBP',
				products: 100,
				secret: '1234567890987654321',
				tonnes: 3,
			},
			units: 10,
			uuid: '6c46ecc4-d02a-4cc2-be91-7428232a199d',
		},
	];
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/transactions/${uuid}?api_key=${api.key}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const jsonn = await response.json();
		return json;
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

export async function retrieve(uuid: string): Promise<TransactionProduct> {
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/OffsetProduct?code=${api.key}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const data = await response.json();
		console.log(data);

		const product = data.find((product) => product.productid == uuid);
		// console.log(product);
		return product;
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}
