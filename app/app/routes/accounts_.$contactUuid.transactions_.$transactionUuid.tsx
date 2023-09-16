import { Link, useLoaderData } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import { Contact } from "~/models/contact.model";
import { retrieve } from "~/models/transaction";
import qrcode from "../images/qrcode.svg";

interface TransactionProduct {
  name: string;
  sequence: number;
  units: number;
  uuid: string;
}

export const loader = async ({ params }) => {
  const transaction = await retrieve(params.transactionUuid);

  let transactionProducts: Array<TransactionProduct> = [];
  for (let i = 1; i < transaction.quantity + 1; i++) {
    transactionProducts.push({
      name: transaction.product.name,
      sequence: i,
      units: transaction.product.units,
      productUuid: transaction.productId.id,
      transactionUuid: transaction.transactionId,
    });
  }

  return {
    transaction,
    transactionProducts,
  };
};

export default function AccountTransaction() {
  const { transaction, transactionProducts } = useLoaderData<typeof loader>();

  return (
    <div className="px-8 sm:max-w-screen-lg sm:mx-auto">
      <h1 className="text-3xl leading-none">{transaction.name}</h1>
      <section>
        {transactionProducts.map((transactionProduct) => {
          return (
            <div className="flex justify-between items-center sm:text-2xl">
              <div>{transactionProduct.name}</div>
              <div>
                {transactionProduct.sequence} of {transaction.quantity}
              </div>
              <div>
                <a href={`/qrcode?sequence=${transactionProduct.sequence}&transactionUuid=${transactionProduct.transactionUuid}&units=${transactionProduct.units}&productUuid=${transactionProduct.productUuid}`} download={`/qrcode?sequence=${transactionProduct.sequence}&transactionUuid=${transactionProduct.uuid}&units=${transactionProduct.units}&uuid=${transactionProduct.uuid}`}>
                  <img src={qrcode} className="mb-2"></img>
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
