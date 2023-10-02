import { useLoaderData } from '@remix-run/react';
import type { V2_MetaFunction } from '@remix-run/node';
import { Contact } from '~/models/contact.model';
import { list } from '~/models/transaction';
import AccountTransaction from '~/components/AccountTransaction';

export const loader = async ({ params }) => {
	const contactUuid = params.contactUuid;
	const transactions = await list(contactUuid); // @todo poassin the user id

	return {
		contactUuid,
		transactions,
	};
};

export default function AccountTransactions() {
	const { contactUuid, transactions } = useLoaderData<typeof loader>();
	const content = require('app/content/account-transactions.json');

	return (
		<div className="min-h-70 mt-110 sm:min-h-80 px-8 pt-8 sm:mx-auto sm:max-w-screen-lg">
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
