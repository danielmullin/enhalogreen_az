import { useLoaderData } from '@remix-run/react';
// import type { V2_MetaFunction } from '@remix-run/node';
// import { Contact } from '~/models/contact.model';
import { retrieve } from '~/models/transaction';
import qrcode from '../images/qrcode.svg';
import qrcodes from '../images/qrcodes.svg';

interface TransactionProduct {
	name: string;
	productUuid: string;
	sequence: number;
	transactionUuid: string;
	units: number;
}

export const loader = async ({ params }) => {
	const transaction = await retrieve(params.transactionUuid);
	let transactionProducts: Array<TransactionProduct> = [];
	//for (let i = 1; i < transaction.quantity + 1; i++) {
	//	transactionProducts.push({
	//		name: transaction.product.name,
	//		productUuid: transaction.productId.id,
	//		sequence: i,
	//	transactionUuid: transaction.transactionId,
	//	units: transaction.product.units,
	//});
	// }

	return {
		transaction,
		transactionProducts,
	};
};

export default function AccountTransaction() {
	const { transaction, transactionProducts } = useLoaderData<typeof loader>();
	return (
		<div className="px-8 sm:mx-auto sm:max-w-screen-lg">
			<h1 className="text-3xl leading-none">
				{transaction.project.name} {transaction.quantity} {transaction.product.name}
			</h1>
			<div className="flex justify-between">
				<div>
					<p>{transaction.project.name}</p>
					<p>
						{transaction.product.name} {transaction.quantity}
					</p>
				</div>
				<div>
					<a
						href={`/qrcodes?productName=${transaction.productId.name}&productUuid=${transaction.productId.id}&quantity=${transaction.quantity}&transactionUuid=${transaction.transactionId}&units=${transaction.product.units}`}
						download={`/qrcodes?productName=${transaction.productId.name}&productUuid=${transaction.productId.id}&quantity=${transaction.quantity}&transactionUuid=${transaction.transactionId}&units=${transaction.product.units}`}
					>
						<img src={qrcodes} className="mb-2" />
					</a>
				</div>
			</div>
			<section>
				{transactionProducts.map((transactionProduct) => {
					return (
						<div className="flex items-center justify-between sm:text-2xl">
							<div>{transactionProduct.name}</div>
							<div>
								{transactionProduct.sequence} of {transaction.quantity}
							</div>
							<div>
								<a
									href={`/qrcode?sequence=${transactionProduct.sequence}&transactionUuid=${transactionProduct.transactionUuid}&units=${transactionProduct.units}&productUuid=${transactionProduct.productUuid}`}
									download={`/qrcode?sequence=${transactionProduct.sequence}&transactionUuid=${transactionProduct.transactionUuid}&units=${transactionProduct.units}&uuid=${transactionProduct.productUuid}`}
								>
									<img src={qrcode} className="mb-2"></img>
								</a>
							</div>
						</div>
					);
				})}
			</section>
		</div>
	);
}
