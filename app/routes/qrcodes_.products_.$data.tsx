import { useActionData } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { retrieve, TransactionProduct } from '~/models/transactionProduct';
import ProductVisualisation from '~/components/ProductVisualisation';
import forest from '../images/enhalo_forest.jpg';
import { retrieve as retrieveTransaction } from '~/models/transaction';

export const loader = async ({ params }: LoaderArgs) => {
	try {
		const data = await JSON.parse(atob(params.data));
		const product: TransactionProduct = await retrieve(data.productUuid);
		const transaction = await retrieveTransaction(data.transactionUuid);
		console.log(transaction);
		console.log('transaction above');
		console.log(product);
		console.log('product above');

		console.log(data);
		console.log('data above');

		let name: string = product.name;
		let quantity: number = transaction.quantity;
		let sequence: number = data.sequence;
		let totalCarbon: number = transaction.totalCarbon;
		let units: number = data.units;
		let error = transaction.product.units == product.offsetunits ? false : true;

		return {
			error,
			name,
			quantity,
			sequence,
			totalCarbon,
			units,
		};
	} catch {
		const name: string = 'error';
		const quantity: number = 20;
		const sequence: number = 5;
		const totalCarbon: number = 1;
		const units: number = 9;
		const error = true;

		return {
			error,
			name,
			quantity,
			sequence,
			totalCarbon,
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
	const { error, name, quantity, sequence, totalCarbon, units } = useLoaderData<typeof loader>();
	let blockShow = false;

	if (actionData !== undefined) {
		blockShow = actionData.blockDetail;
	}

	return (
		<>
			<div className='mt-110 min-h-70 pt-8 sm:min-h-80'>
				{error ? (
					<div className='absolute top-[calc(50vh-5rem)] z-30 flex h-40 w-full items-center justify-center bg-error-red text-white'>
						<span className='flex h-10 w-10 items-center justify-center rounded-full bg-red-500'>
							<span className='text-lg font-bold text-white'>X</span>
						</span>
						<span>Something went wrong</span>
					</div>
				) : null}
				<img src={forest} className={(error ? 'grayscale' : null) + ' absolute top-0 -z-20 h-full object-cover sm:w-full'} />
				<div className={(error ? 'grayscale' : null) + ' sm:mx-auto sm:h-full sm:max-w-screen-lg'}>
					<ProductVisualisation blockShow={blockShow} error={error} name={name} quantity={22} sequence={15} totalCarbon={totalCarbon} units={79} />
				</div>
			</div>
		</>
	);
}
