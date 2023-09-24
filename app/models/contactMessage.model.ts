import { api } from '~/helpers/api';
import { json } from '@remix-run/node';
import validateEmailAddress from '~/helpers/validateEmailAddress';
import validateString from '~/helpers/validateString';
import Contact from '~/routes/contact-us';

export interface ContactMessage {
	checked: boolean;
	emailAddress: string;
	firstName: string;
	helpMessage: string;
	lastName: string;
	organisation: string;
	position: string;
}
export async function create(contactMessage: ContactMessage) {
	console.log(contactMessage);
	console.log('here');
	if (!validateEmailAddress(contactMessage.emailAddress)) {
		return json({ error: 'Invalid Email Address', errorInput: '', status: 422 }, 422);
	}
	if (!validateString(contactMessage.firstName)) {
		return json({ error: 'Invalid First Name', errorInput: '', status: 422 }, 422);
	}
	if (!validateString(contactMessage.lastName)) {
		return json({ error: 'Invalid Last Name', errorInput: '', status: 422 }, 422);
	}
	if (!validateString(contactMessage.organisation)) {
		return json({ error: 'Invalid Organisation', errorInput: '', status: 422 }, 422);
	}
	if (!validateString(contactMessage.position)) {
		return json({ error: 'Invalid Position', errorInput: '', status: 422 }, 422);
	}
	if (!validateString(contactMessage.helpMessage)) {
		return json({ error: 'Invalid Message', errorInput: '', status: 422 }, 422);
	}

	const response = await fetch(`${api.protocol}://${api.base}${api.port}/accounts/?api_key=${api.key}`, {
		method: 'POST',
		body: JSON.stringify(contactMessage),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	const data = await response.json();
	console.log(data);

	return data;
}
