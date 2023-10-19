
export async function createOrder ({transaction}) {
		console.log('here')
		console.log(transaction);
		alert()
	// replace this url with your server
	//return fetch('https://react-paypal-js-storybook.fly.dev/api/paypal/create-order', {
	return fetch(`${process.env.PAYPAL_BASE}api/paypal/create-order`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			cart: [
				{
					sku: '1blwyeo8',
					quantity: 2,
				},
			],
		}),
	})
		.then((response) => response.json())
		.then((order) => {
			// Your code here after create the order
			console.log('order')
			return order.id;
		});
	}

export async function  generateAccessToken(){
	try {
		if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_APP_SECRET) {
			throw new Error('MISSING_API_CREDENTIALS');
		
		}
	const auth = Buffer.from(process.env.PAYPAL_CLIENT_ID + ':' + process.env.PAYPAL_APP_SECRET).toString("base64"),
		response = await fetch(`${process.env.PAYPAL_BASE}/v1/oauth2/token`, {
			method: "POST",
			body: "grant_type=client_credentials",
			headers: {
				Authorization: `Basic ${auth}`,
			},
		});
		const data = await response.json();
//console.log(data)
	return data.access_token;
	} catch (error) {
		console.error("Failed to generate Access Token:", error);
	}
};


export async function onApprove(data) {
	// replace this url with your server
	return fetch(`${process.env.BASE_URL}/api/paypal/capture-order`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			orderID: data.orderID,
		}),
	})
		.then((response) => response.json())
		.then((orderData) => {
			// Your code here after capture the order
		});
}