import { api } from '~/helpers/api';
import { Contact } from './contact.model';
import { json } from '@remix-run/node';
import { list as offsetProductList } from './offsetProduct';
import validateEmailAddress from '~/helpers/validateEmailAddress';
import validateNumberOfProducts from '~/helpers/validateNumberOfProducts';
import validateUuid from '~/helpers/validateUuid';

export interface Transaction {
	contact: Contact;
	products: number;
	productUuid: string;
	productId?: {
		id: string;
	};
	uuid?: string;
}

export async function create(contact: Contact, products: number, productUuid: string) {
	let transaction: Transaction = {
		contact,
		products,
		productUuid,
	};

	if (!validateEmailAddress(contact.emailAddress)) {
		return json({ error: 'Invalid Email Address', errorInput: '', status: 422 }, 422);
	}
	if (!validateNumberOfProducts(products)) {
		return json(
			{
				error: 'Number of products must be greater than 0',
				errorInput: '',
				status: 422,
			},
			422
		);
	}
	if (!validateUuid(productUuid)) {
		return json({ error: 'Please select a product', errorInput: '', status: 422 }, 422);
	}

	try {
		// console.log(transaction)
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/Transaction/?api_key=${api.key}`, {
			// NEEDS TO BE METHOD POST HERE, BUT THE $ACTION IN FAKE API ISN'T WORKING
			method: 'GET',
			// body: JSON.stringify(transaction),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		const data = await response.json();
		const responseTransaction = data.find((Itransaction: Transaction) => Itransaction.productId.id == transaction.productUuid);
		// console.log(responseTransaction)
		return responseTransaction;
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

export async function list(accountUuid: string) {
	try {
		const response = await fetch(
			`${api.protocol}://${api.base}${api.port}/${api.path}/Transaction?code=qkdb8rPAQglW6bOt56DJ1sDs0Q-zWfbeN-bvK4Py0Ia1AzFucAaJIw==`,
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}
		);
		const data = await response.json();
		return data.map((item) => ({
			name: `${item.quantity} x ${item.productId.name}`,
			product: {
				name: item.productId.name,
			},
			quantity: item.quantity,
			uuid: String(item.transactionId),
		}));
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

export async function retrieve(uuid: string) {
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/Transaction?code=${api.key}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		// console.log(response);
		const data = await response.json();
		// console.log(uuid)
		// console.log(data);
		const transaction = data.find((transaction) => transaction.transactionId == uuid);
		// console.log(transaction)

		const offsetProducts = await offsetProductList();
		// console.log(offsetProducts);
		transaction.product = offsetProducts.find((product) => product.uuid === transaction.productId.id);
		return transaction;
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

// EOF!
