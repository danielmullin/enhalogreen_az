import { useLoaderData } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import { Contact } from "~/models/contact.model";
import { list } from "~/models/transaction";
import AccountTransaction from "~/components/AccountTransaction";

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
  const content = require("app/content/account-transactions.json");

  return (
    <div className="px-8 sm:max-w-screen-lg sm:mx-auto">
      <h1 className="mb-8 text-3xl leading-none">{content.h1}</h1>
      <section>
        {transactions.map((transaction: any) => {
          return <AccountTransaction contactUuid={contactUuid} key={transaction.uuid} name={transaction.name} uuid={transaction.uuid} />;
        })}
      </section>
    </div>
  );
}

// EOF!
