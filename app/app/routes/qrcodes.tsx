import qrcode from '~/helpers/qrcode';
import { TransactionProduct } from '~/models/transactionProduct';
import JSZip from 'jszip'; 

export const loader = async ({ request }) => {
	const baseUrl: string = String(process.env.BASE_URL),
		//fsPromises= fsWithCallbacks.promises,
		urlParams = new URL(request.url),
		zip = new JSZip();
	const quantity = Number(urlParams.searchParams.get('quantity')),
		productUuid = String(urlParams.searchParams.get('productUuid')),
		transactionUuid = String(urlParams.searchParams.get('transactionUuid')),
		units = String(urlParams.searchParams.get('units'));

		zip.file('', transactionUuid)

	for (let i = 1; i < quantity + 1; i++) {
		let transactionProduct: TransactionProduct = {
			sequence: i,
			transactionUuid,
			units,
			productUuid,
		};
		let data = btoa(JSON.stringify(transactionProduct)),
			url = `${baseUrl}qrcodes/products/${data}`;
		let image =  await qrcode(url);
			zip.file(`${transactionUuid}_${i}_${quantity}.png`, image)
	}

	return new Response(await zip.generateAsync({type : "uint8array"}), {
		status: 200,
		headers: {
			'Content-Type': 'application/zip'
		},
	});
};

// EOF!
