import { useLoaderData } from '@remix-run/react';
import { retrieve } from '~/models/transaction';
import { redirect } from '@remix-run/node';
import { LoaderArgs } from '@remix-run/node';

import qrcode from '../images/qrcode.svg';
import qrcodes from '../images/qrcodes.svg';
import { getUserUuid, requireUserToken } from '~/session.server';

interface TransactionProduct {
	name: string;
	productUuid: string;
	sequence: number;
	transactionUuid: string;
	units: number;
}

interface LoaderData {
	transaction: any;
	transactionProducts: TransactionProduct[];
}

export const loader = async ({ params, request }: LoaderArgs) => {
	const transaction = await retrieve(params.transactionUuid),
		contactUuid = String(params.contactUuid),
		userUuid = await getUserUuid(request),
		token = await requireUserToken(request);

	let transactionProducts: Array<TransactionProduct> = [];
	for (let i = 1; i < transaction.quantity + 1; i++) {
		transactionProducts.push({
			name: transaction.product.name,
			productUuid: transaction.productId.id,
			sequence: i,
			transactionUuid: transaction.transactionId,
			units: transaction.product.units,
		});
	}

	if (userUuid !== contactUuid) {
		return redirect('/');
	}

	return {
		transaction,
		transactionProducts,
	};
};

export default function AccountTransaction() {
	const { transaction, transactionProducts } = useLoaderData<LoaderData>();
	return (
		<div className="mt-110 min-h-70 px-8 pt-8 sm:mx-auto sm:min-h-80 sm:max-w-screen-lg">
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
				{transactionProducts.map((transactionProduct: TransactionProduct) => {
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
