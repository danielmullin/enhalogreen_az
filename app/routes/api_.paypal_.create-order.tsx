import { json, ActionArgs } from '@remix-run/node';
import { getUserTransactionUuid, requireUserToken } from '~/session.server';
import { generateAccessToken } from '~/helpers/paypal';
import { retrieve } from '~/models/transaction';
import { retrieve as subProjectRetrieve } from '../models/subProject';

export async function action({ request }: ActionArgs) {

	const token = await requireUserToken(request),
		transactionUuid = await getUserTransactionUuid(request),
		transaction = await retrieve(transactionUuid);
		const subProject = await subProjectRetrieve(transaction.project.id);
console.log('here')
	const accessToken = await generateAccessToken(),
		amountCurrencyCode:string  = 'GBP',
		amountValue: number = Math.ceil((transaction.quantity * transaction.product.units) / 1000) * subProject.tonCost.value,
		intent = 'CAPTURE',
		payload = {
			intent: intent,
			purchase_units: [
				{
					amount: {
						currency_code: amountCurrencyCode,
						value: amountValue,
					},
					custom_id: `${transaction.contact.id}_${transactionUuid}`,
					description: `${transaction.totalCarbon} x tonne(s) carbon @ ${subProject.tonCost.value} GBP per tonne to offset ${transaction.quantity} ${transaction.productId.name}(s)`,
					invoice_id: transactionUuid,
					soft_descriptor: 'Cabon Offset',
					reference_id: transactionUuid,
	  		},
			],
		},
		url = `${process.env.PAYPAL_BASE}/v2/checkout/orders`;

	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${accessToken}`,
		},
		method: "POST",
		body: JSON.stringify(payload),
	});

	const data = await response.json();
	return json(data, 200);
}
