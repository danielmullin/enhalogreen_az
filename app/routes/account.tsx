import { useLoaderData } from '@remix-run/react';
import AccountForm from '../components/AccountForm';
import { retrieve } from '~/models/account.model';

export const loader = async ({ params, request }) => {
	const urlParams = new URL(request.url),
		userUuid = String(urlParams.searchParams.get('accountUuid')),
		account = await retrieve(userUuid, null, null);

	return {
		account,
	};
};

export default function Account() {
	const { account } = useLoaderData<typeof loader>();
	const content = require('app/content/account.json');

	return (
		<div className="mt-110 min-h-70 px-8 pt-8 sm:mx-auto sm:min-h-80 sm:max-w-screen-lg">
			<h1 className="mb-8 text-3xl leading-none ">{content.h1}</h1>
			<div>
				<AccountForm account={account} />
			</div>
		</div>
	);
}
