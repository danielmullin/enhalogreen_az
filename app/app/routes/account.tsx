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

  return ({
    account,

  });
};

export default function Account() {
  const { account } = useLoaderData<typeof loader>();
  const content  = require('app/content/account.json');

  return (
    <section className="text-white bg-background-teal min-h-screen">
      <div className='pt-20 px-8 mb-8'>
        <h1 className="text-3xl mb-6">{content.h1}</h1>
      </div>
      <div>
          <AccountForm account={account}/>
      </div>
    </section>
  );
}
