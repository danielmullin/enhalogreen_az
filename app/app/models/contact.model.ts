import { api } from '~/helpers/api';
import { json } from '@remix-run/node';
import validateEmailAddress from '~/helpers/validateEmailAddress';
import validateString from '~/helpers/validateString';

export interface Contact {
	emailAddress: string;
	firstName?: string;
	lastName?: string;
	phoneNumber?: number;
	uuid?: string;
}

export async function create(emailAddress: string) {
	let contact = {
		EmailAddress1: emailAddress,
	};
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/accounts/?api_key=${api.key}`, {
			method: 'POST',
			body: JSON.stringify(contact),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const data = await response.json();

		return data.map((item) => ({
			emailAddress: item.EmailAddress1,
			firstName: item.FirstName,
			lastName: item.LastName,
			uuid: item.new_OffsetProductId || item.uuid,
		}));
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

export async function retrieve(uuid: null | string, username: null | string, password: null | string) {
	if (null !== uuid) {
		return {
			accountid: 1,
			contact: {
				emailAddress: 'email@danielmullin.com',
				firstName: 'Daniel',
				lastName: 'Mullin',
				phoneNumber: '447789747079',
			},
			username: 'enhalogreen',
			uuid: '9f7bde77-4bce-4694-960c-60aed6b33000',
		};
		try {
			const response = await fetch(
				`${api.protocol}://${api.base}${api.port}//Profile?contactid=${uuid}&code=9YxzScfTaVSBHpgTBtGOAUeJJLbVz0gGwoK9HKI1KzIHAzFuXX-u4Q==`,
				{
					method: 'GET',
					body: JSON.stringify(account),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				}
			);
			const json = await response.json();

			return json;
		} catch (error) {
			console.error(`Error occured: ${String(error)}`);
			return { error };
		}
	}
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/accounts/?username=${username}&password=${password}`, {
			method: 'GET',
			body: JSON.stringify(account),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		const json = await response.json();
		return json;
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

export async function update(emailAddress: string, uuid: string) {
	return {
		accountid: 1,
		contact: {
			emailAddress: 'email@danielmullins.com',
			firstName: 'Daniels',
			lastName: 'Mullins',
			phoneNumber: '447789747079',
		},
		username: 'enhalogreen',
		uuid: '9f7bde77-4bce-4694-960c-60aed6b33000',
	};

	let account: Account = {
		emailAddress,
		uuid,
	};
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/accounts/${uuid}?api_key=${api.key}`, {
			method: 'PATCH',
			body: JSON.stringify(account),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const json = await response.json();

		return json;
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

// EOF!
