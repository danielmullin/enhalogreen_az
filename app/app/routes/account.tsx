import { useLoaderData } from '@remix-run/react';
import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import AccountForm from '../components/AccountForm';
import contactBg from '../images/contact_bg.jpg';
import { retrieve } from '~/models/account.model';

export const loader = async ({ params, request }) => {
	// const account = await retrieve(params.uuid);
	const account = await retrieve('b005e055-5343-ee11-be6d-000d3ad4d529', null, null);

	return {
		account,
	};
};

export default function Account() {
	const { account } = useLoaderData<typeof loader>();
	const content = require('app/content/account.json');

	return (
		<div className="px-8 sm:mx-auto sm:max-w-screen-sm">
			<h1 className="mb-8 text-3xl leading-none ">{content.h1}</h1>
			<div>
				<AccountForm account={account} />
			</div>
		</div>
	);
}
