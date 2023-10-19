import { json, ActionsArgs, ActionArgs } from '@remix-run/node';
import { generateAccessToken } from '~/helpers/paypal';


export async function action({ params, request }: ActionArgs) {
	const accessToken = await generateAccessToken(),
		amountCurrencyCode:string  = 'GBP',
		amountValue:string = params.amountValue,
		intent = 'CAPTURE',
		payload = {
			intent: intent,
			purchase_units: [
				{
					amount: {
						currency_code: amountCurrencyCode,
						value: '100.00',
					},
	  		},
			],
		},
		url = `${process.env.PAYPAL_BASE}/v2/checkout/orders`;

console.log(payload)

	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
	      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
	      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
	      // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
	      // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
	      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
		},
	  method: "POST",
	  body: JSON.stringify(payload),
	});
	  
	const data = await response.json();
console.log(data);
	return json(data, 200);
}
