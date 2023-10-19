import { api } from '~/helpers/api';
import { Contact } from './contact.model';
import { json } from '@remix-run/node';
import { list as offsetProductList } from './offsetProduct';
import validateEmailAddress from '~/helpers/validateEmailAddress';
import validateNumberOfProducts from '~/helpers/validateNumberOfProducts';
import validateUuid from '~/helpers/validateUuid';
import { retrieve as retrieveOffsetProduct } from './offsetProduct';
import { retrieve as retrieveSubProject } from './subProject';

export interface Transaction {
	contact: Contact;
	products: number;
	productUuid: string;
	productId?: {
		id: string;
	};
	uuid?: string;
}

export async function create(contact: Contact, quantity: number, productUuid: string, projectUuid: string) {
	if (!validateEmailAddress(contact.emailAddress)) {
		return json({ error: 'Invalid Email Address', errorInput: '', status: 422 }, 422);
	}
	if (!validateNumberOfProducts(quantity)) {
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

	const subproject = await retrieveSubProject(projectUuid);
	const offsetProduct = await retrieveOffsetProduct(productUuid);

	let createTransaction = {
		contactId: '',
		email: contact.emailAddress,
		offsetproduct: {
			productId: productUuid,
			name: offsetProduct.name,
			offsetUnits: offsetProduct.offsetunits,
		},
		project: {
			subprojectid: projectUuid,
			name: subproject.name,
			carbonavailable: subproject.carbonAvailable,
			toncost: {
				value: subproject.tonCost.value,
			},
		},
		tonnes: Math.ceil((offsetProduct.offsetunits * quantity) / 1000),
		quantity: quantity,
		amount: subproject.tonCost.value * Math.ceil((offsetProduct.offsetunits * quantity) / 1000),
	};
	// console.log('transaction here');
	// console.log(createTransaction);
	try {
		// console.log(`${api.protocol}://${api.base}${api.port}/${api.path}/CreateTransaction/?code=${api.key}`);
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/CreateTransaction/?code=${api.key}`, {
			method: 'POST',
			body: JSON.stringify(createTransaction),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		//comment this out when need to deploy
		// return 'a9ace233-0149-ee11-be6f-000d3ad4d529';

		//{
		//    "contactId": "b005e055-5343-ee11-be6d-000d3ad4d529",
		//   "transactionid": "34c8449a-b65e-ee11-8def-000d3ad4d529"
		//}

		const data = await response.json();
		// console.log(data);
		return data.transactionid;
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

export async function list(accountUuid: string) {
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/Transaction?code=${api.key}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const data = await response.json();
		// console.log(data);
		return data.filter((item) => item.contact.id === accountUuid).map((item) => ({
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
		const data = await response.json();
		const transaction = data.find((item) => item.transactionId == uuid);
		const offsetProducts = await offsetProductList();
		transaction.product = offsetProducts.find((product) => product.uuid === transaction.productId.id);
		return transaction;
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

// EOF!
