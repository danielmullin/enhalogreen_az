import { api } from '~/helpers/api';
import { Contact } from './contact.model';

export interface Transaction {
	contact: Contact;
	products: number;
	productUuid: string;
	uuid?: string
}

export async function create(contact: Contact, products: number, productUuid: string) {
	let transaction: Transaction = {
		contact,
		products,
		productUuid
	}

	// early returning
	return {
		contact: {
			emailAddress: 'email@danielmullin.com',
			contactId: '82f853b8-69d6-402f-98d4-e5219e75fd0a'
		},
		// amount: 1000, // new_amount this was cost
		// hard codedcurrency: 'GBP',
		// projectId: '82f853b8-69d6-402f-98d4-e5219e75fd0a' // tbc
		products: 100,
		productId: '82f853b8-69d6-402f-98d4-e5219e75fd0a',
		secret: '1234567890987654321',
		transactionId: '82f853b8-69d6-402f-98d4-e5219e75fd0a'
	}

	const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/transactions/?api_key=${api.key}`, {
		method: 'POST',
		body: JSON.stringify(transaction),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		}
	})
	const data = await response.json();
	return data.map(item => ({
		name: String(item.productid.name),
		product: {
			name: item.productid.name,
		},
		quantity: item.quantity,
		uuid: String(item.transactionid)
	 }));
}

export async function list(accountUuid:string) {
	console.log(`${api.protocol}://${api.base}${api.port}/${api.path}/Transaction?code=qkdb8rPAQglW6bOt56DJ1sDs0Q-zWfbeN-bvK4Py0Ia1AzFucAaJIw==`)
	const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/Transaction?code=qkdb8rPAQglW6bOt56DJ1sDs0Q-zWfbeN-bvK4Py0Ia1AzFucAaJIw==`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		}
	})
	const data = await response.json();
	return data.map(item => ({
		name: `${item.quantity} x ${item.productId.name}`,
		product: {
			name: item.productId.name,
		},
		quantity: item.quantity,
		uuid: String(item.transactionId)
	 }));
}

export async function retrieve(uuid: string) {
	const data = {
			CreatedOn: null,
			new_Name: 'Transaction 1',
			new_Numberofproducts: 100,
			new_OffsetProduct: 1,
			new_TransactionId: '82f853b8-69d6-402f-98d4-e5219e75fd0a',
	};

	const product = {
		name: 'Coffee',	 
		units: 3,
		uuid: '7b434493-fe3f-ee11-bdf3-000d3ad4d529'
	};

	return {
		cost: 1000,
		name: data.new_Name,
		offsetProduct: data.new_OffsetProduct,
		product,
		products: data.new_Numberofproducts,
		uuid: data.new_TransactionId,
	}
	
	const response = await fetch(`${api.protocol}://${api.base}${api.port}/transactions/${uuid}?api_key=${api.key}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		}
	})
	const json = await response.json();
	return json;
}


// EOF!
