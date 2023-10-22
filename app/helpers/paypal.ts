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
				"Authorization": `Basic ${auth}`,
			},
		});
		const data = await response.json();
		console.log(data)
	return data.access_token;
	} catch (error) {
		console.error("Failed to generate Access Token:", error);
	}
};