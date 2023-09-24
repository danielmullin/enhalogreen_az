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
      <h1 className="text-3xl leading-none">{content.h1}</h1>
      <div className="h-[108px]">
        <p>{content.pLorem[0]}</p>
          <p>{content.pLorem[1]}</p>

        </div>
      <section>
        {transactions.map((transaction: any) => {

          return (
          <div className="flex justify-between items-center sm:text-2xl">
          <AccountTransaction contactUuid={contactUuid} key={transaction.uuid} name={transaction.name} uuid={transaction.uuid} /> 
          </div>
        )})}
      </section>
    </div>
  );
}

// EOF!
