import Cta from '../components/Cta';
import { useLoaderData } from '@remix-run/react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { retrieve } from '~/models/transaction';
import { retrieve as subProjectRetrieve } from '../models/subProject';

const ButtonWrapper = ({ showSpinner }) => {
	const [{ isPending }] = usePayPalScriptReducer();
	return (
		<>
			{showSpinner && isPending && <div className="spinner" />}
			<PayPalButtons
				style={style}
				disabled={false}
				forceReRender={[style]}
				fundingSource={undefined}
				createOrder={createOrder}
				onApprove={onApprove}
			/>
		</>
	);
};

const style = { layout: 'vertical' };

function createOrder() {
	// replace this url with your server
	return fetch('https://react-paypal-js-storybook.fly.dev/api/paypal/create-order', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		// use the "body" param to optionally pass additional order information
		// like product ids and quantities
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
			return order.id;
		});
}
function onApprove(data) {
	// replace this url with your server
	return fetch('https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order', {
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
export const loader = async ({ params, request }) => {
	// console.log(params);
	// console.log('lsdafjlkjdsalkjfdsflAJDLSKKDLSJAJLKFDSLFJKS;ADjk')
	const transaction = await retrieve(params.transactionUuid);
	const subProject = await subProjectRetrieve(transaction.project.id);

	// console.log(transaction)
	// console.log('here')
	// console.log(subProject)

	return {
		subProject,
		transaction,
	};
};

export default function Cart() {
	const content = require('app/content/cart.json');
	const { subProject, transaction } = useLoaderData<typeof loader>();

	// console.log(transaction)
	//So number of (ceil((products x units) / 1000)x tonne cost

	return (
		<div className="min-h-screen text-light-black">
			<div className="px-8 sm:mx-auto sm:max-w-screen-lg">
				<section className="mb-4 sm:mx-auto sm:max-w-screen-lg">
					<div className="">
						<h1 className="mb-6 text-3xl leading-none sm:mb-8">{ content.h1 }</h1>
					</div>
				</section>
				<section className="mb-8 rounded-xl bg-white bg-opacity-20 px-8 py-8 text-xl sm:mx-auto sm:max-w-screen-lg">
					<div className="mb-6 flex">
						<p className=" w-1/3">{transaction.product.name}</p>
						<p className=" w-1/3 text-center">x</p>
						<p className=" w-1/3 text-right">{transaction.quantity}</p>
					</div>
					<div className="mb-24 flex rounded-md bg-white bg-opacity-50 py-4">
						<p className=" w-full text-center">{transaction.totalCarbon} tonnes of carbon</p>
					</div>
					<div className="my-8 border-b-2 border-green-underline"></div>
					<div className="flex justify-between">
						<p>Total cost</p>
						<p>£{ Math.ceil((transaction.quantity * transaction.product.units) / 1000) * subProject.tonCost.value }</p>
					</div>
				</section>
				<section className="mx-auto mb-8 flex w-3/5 justify-center sm:mx-auto sm:max-w-screen-lg">
					<Cta linkTo="/success" text={'Pay now'} />
				</section>
				<section className="sm:mx-auto sm:max-w-screen-md">
					<PayPalScriptProvider options={{ clientId: 'test', components: 'buttons', currency: 'USD' }}>
						<ButtonWrapper showSpinner={false} />
					</PayPalScriptProvider>
				</section>
			</div>
		</div>
	);
}
