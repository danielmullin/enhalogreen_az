export async function  generateAccessToken(){
	try {
		if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_APP_SECRET) {
			throw new Error('MISSING_API_CREDENTIALS');
		
		}
	//const auth = Buffer.from(process.env.PAYPAL_CLIENT_ID + ':' + process.env.PAYPAL_APP_SECRET).toString("base64"),
	const auth = 'QVh5UmpiVklEX3RySnAzc291MjZQN3NTTGI4U2drZVNmWHpGa1RpbmFoLWJtZzhKLVo3WFkyX21NU1NtNXlQbmpUQWRETFZPcWFOaU16Rk46RUdwY00xYWlPc182b3ZEYjJCYVd1MHJHdFM1eTg4NE5ZMTJ1UDJ6NENRZFU0NWVja1ZXN1ZwWU82Nk5VUENTRS1hb2ljWmx0ZkRYTV81SDU=',
		response = await fetch(`${process.env.PAYPAL_BASE}/v1/oauth2/token`, {
			method: "POST",
			body: "grant_type=client_credentials",
			headers: {
				Authorization: `Basic ${auth}`,
			},
		});
		const data = await response.json();
console.log(data)
console.log(auth)
	return data.access_token;
	} catch (error) {
		console.error("Failed to generate Access Token:", error);
	}
};