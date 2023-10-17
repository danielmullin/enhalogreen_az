import { useLoaderData } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import { list, Transaction } from '~/models/transaction';
import AccountTransaction from '~/components/AccountTransaction';
import { getUserUuid, requireUserToken } from '~/session.server';

interface LoaderData {
	contactUuid: any;
	transactions: Transaction[];
}

export const loader = async ({ params, request }) => {
	const token = await requireUserToken(request),
		contactUuid = String(params.contactUuid),
		userUuid = await getUserUuid(request);

	if (userUuid !== contactUuid) {
		return redirect('/');
	}

	const transactions = await list(contactUuid);

	return {
		contactUuid,
		transactions,
	};
};

export default function AccountTransactions() {
	const { contactUuid, transactions } = useLoaderData<LoaderData>();
	const content = require('app/content/account-transactions.json');

	return (
		<div className="mt-110 min-h-70 px-8 pt-8 sm:mx-auto sm:min-h-80 sm:max-w-screen-lg">
			<h1 className="text-3xl leading-none">{content.h1}</h1>
			<div className="h-[108px]">
				<p>{content.pLorem[0]}</p>
				<p>{content.pLorem[1]}</p>
			</div>
			<section>
				{transactions.map((transaction: any) => {
					return (
						<div className="flex items-center justify-between sm:text-2xl">
							<AccountTransaction contactUuid={contactUuid} key={transaction.uuid} name={transaction.name} uuid={transaction.uuid} />
						</div>
					);
				})}
			</section>
		</div>
	);
}

// EOF!
