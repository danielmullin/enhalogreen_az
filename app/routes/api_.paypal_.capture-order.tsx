import { json, ActionArgs } from '@remix-run/node';
import { getUserTransactionUuid, requireUserToken } from '~/session.server';
import { generateAccessToken } from '~/helpers/paypal';
import { retrieve } from '~/models/transaction';
import { retrieve as subProjectRetrieve } from '../models/subProject';

export async function action({ params }: ActionArgs) {
	
	console.log(params)
	const accessToken = await generateAccessToken(),
		url = `${process.env.PAYPAL_BASE}/v2/checkout/orders/${params.orderID}/capture`;

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	});
console.log(response)
	jsonResponse = await response.json();

	return {
		jsonResponse,
		httpStatusCode: response.status
	}
};