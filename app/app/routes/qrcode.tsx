import qrcode from '~/helpers/qrcode';
import { TransactionProduct } from '~/models/transactionProduct';

// @todo this needs to be placed in a try and catch so if fails then return an error has occured response.
export const loader = async ({ request }) => {
	const baseUrl: string = String(process.env.BASE_URL),
		urlParams = new URL(request.url);
	const transactionProduct: TransactionProduct = {
		sequence: Number(urlParams.searchParams.get('sequence')),
		transactionUuid: String(urlParams.searchParams.get('transactionUuid')),
		units: Number(urlParams.searchParams.get('units')),
		productUuid: String(urlParams.searchParams.get('productUuid')),
	};
	const data = btoa(JSON.stringify(transactionProduct));
	const url = `${baseUrl}qrcodes/products/${data}`;
	console.log(url)
	const image = await qrcode(url);

	return new Response(image, {
		status: 200,
		headers: {
			"Content-Type": "image/png",
		},
	});
};

// EOF!
