import Cta from '../components/Cta';
import { useLoaderData } from '@remix-run/react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { createOrder, onApprove } from '~/helpers/paypal';    
import { retrieve } from '~/models/transaction';
import { retrieve as subProjectRetrieve } from '../models/subProject';

const ButtonWrapper = ({ showSpinner }) => {
	const [{ isPending }] = usePayPalScriptReducer();
	return (
		<>
			{showSpinner && isPending && <div className="spinner" />}
			<PayPalButtons style={style} disabled={false} forceReRender={[style]} fundingSource={undefined} createOrder={createOrder} onApprove={onApprove} />
		</>
	);
};

export const loader = async ({ params, request }) => {

	const paypalClientId = process.env.PAYPAL_CLIENT_ID,
		transaction = await retrieve(params.transactionUuid),
		subProject = await subProjectRetrieve(transaction.project.id);

	return {
		paypalClientId,
		subProject,
		transaction,
	};
};

export default function Cart() {
	
	const content = require('app/content/cart.json');
	const { paypalClientId, subProject, transaction } = useLoaderData<typeof loader>();
	const style = { layout: 'vertical' };

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

	return (
		<div className="mt-110 min-h-70 pt-8 sm:mx-auto sm:min-h-80 sm:max-w-screen-lg">
			<div className="px-8 sm:mx-auto sm:max-w-screen-lg">
				<section className="mb-4 sm:mx-auto sm:max-w-screen-lg">
					<div className="">
						<h1 className="mb-6 text-3xl leading-none sm:mb-8">{content.h1}</h1>
					</div>
				</section>
				<div className="mb-4 flex flex-col-reverse justify-between text-xl sm:flex-row">
					<div>
						<p>
							Offset Details: {transaction.quantity} {transaction.product.name}'s at {transaction.product.units} units per {transaction.product.name}
						</p>
						<p>Total carbon offset {transaction.totalCarbon} Tonnes</p>
					</div>
					{/* <div className="mb-4 w-1/2 sm:w-1/5">
						<Cta linkTo={`/offset-products?subProjectId=${subProject.subprojectid}`} text={'Back'} />
					</div> */}
					{/* <a href={`/offset-products?subProjectId=${subProject.subprojectid}`} */}
				</div>
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
						<p>£{Math.ceil((transaction.quantity * transaction.product.units) / 1000) * subProject.tonCost.value}</p>
					</div>
				</section>
				<section className="mx-auto mb-8 flex w-full justify-around sm:mx-auto sm:w-full sm:max-w-screen-lg sm:flex-row">
					<div className="mb-4 w-2/5">
						<Cta linkTo={`/offset-products?subProjectId=${subProject.subprojectid}`} text={'Edit'} type={'secondary'} />
					</div>
					<div className="mb-4 w-2/5">
						<Cta linkTo="/cart/success" text={'Pay now'} type={'primary'} />
					</div>
				</section>
				<section className="sm:mx-auto sm:max-w-screen-md">
					<PayPalScriptProvider options={{ 
						clientId: paypalClientId,
						components: 'buttons', 
						currency: 'GBP',
						transaction: transaction
					}}>
						<ButtonWrapper showSpinner={false} />
					</PayPalScriptProvider>
				</section>
			</div>
		</div>
	);
}
