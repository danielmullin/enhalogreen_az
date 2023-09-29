import { useActionData } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { retrieve, TransactionProduct } from '~/models/transactionProduct';
import TransactionVisualisation from '~/components/TransactionVisualisation';
import forest from '../images/enhalo_forest.jpg';
import { retrieve as retrieveTransaction } from '~/models/transaction';

export const loader = async ({ params }: LoaderArgs) => {
	try {
		const data = await JSON.parse(atob(params.data));
		const product: TransactionProduct = await retrieve(data.productUuid);
		const transaction = await retrieveTransaction(data.transactionUuid);

		let name: string = product.name;
		let quantity: number = transaction.quantity;
		let units: number = data.units;
		let error = transaction.product.units == product.offsetunits ? false : true;

		return {
			error,
			name,
			quantity,
			units,
		};
	} catch {
		const name: string = 'error';
		const quantity: number = 20;
		const sequence: number = 5;
		const units: number = 9;
		const error = true;

		return {
			error,
			name,
			quantity,
			sequence,
			units,
		};
	}
};

export async function action({ params, request }: ActionArgs) {
	const data: FormData = await request.formData();
	const blockDetail: boolean = data.get('blockDetailShow');

	return { blockDetail };
}

export default function Product() {
	const actionData = useActionData<typeof action>();
	const { error, name, quantity, units } = useLoaderData<typeof loader>();
	let blockShow = false;

	if (actionData !== undefined) {
		blockShow = actionData.blockDetail;
	}

	return (
		<>
			{error ? (
				<div className="absolute top-[calc(50vh-5rem)] z-30 flex h-40 w-full items-center justify-center bg-error-red text-white">
					<span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
						<span className="text-lg font-bold text-white">X</span>
					</span>
					<span>Something went wrong</span>
				</div>
			) : null}
			<img src={forest} className={(error ? 'grayscale' : null) + ' absolute top-0 -z-20 h-[100vh] object-cover sm:w-full'} />
			<div className={(error ? 'grayscale' : null) + ' sm:mx-auto sm:h-full sm:max-w-screen-lg'}>
				<TransactionVisualisation blockShow={blockShow} error={error} name={name} quantity={quantity} total={1000} units={units} />
			</div>
		</>
	);
}
