import { useActionData } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { retrieve, TransactionProduct } from "~/models/transactionProduct";
import ProductVisualisation from "~/components/ProductVisualisation";
import forest from "../images/enhalo_forest.jpg";
import { retrieve as retrieveTransaction } from "~/models/transaction";

export const loader = async ({ params }: LoaderArgs) => {
  
  try{
    const data = await JSON.parse(atob(params.data));
    const product: TransactionProduct = await retrieve(data.productUuid);
    const transaction = await retrieveTransaction(data.transactionUuid);
    // console.log(transaction);
    // console.log(product);
    // console.log(data);

    let name: string = product.name;
    let quantity: number = transaction.quantity;
    let sequence: number = data.sequence;
    let units: number = data.units;
    let error = transaction.product.units == product.offsetunits ? false : true;

    return {
      error,
      name,
      quantity,
      sequence,
      units,
    };

  } 
  catch {
    const name: string = 'error';
    const quantity: number = 20;
    const sequence: number = 5
    const units: number = 9;
    const error = true;
    
    return {
      error,
      name,
      quantity,
      sequence,
      units,
    };
  };
}

export async function action({ params, request }: ActionArgs) {
  const data: FormData = await request.formData();
  const blockDetail: boolean = data.get("blockDetailShow");		

  return { blockDetail };
}

export default function Product() {
  const actionData = useActionData<typeof action>();
  const { error, name, quantity, sequence, units } = useLoaderData<typeof loader>();
  let blockShow = false;

  if (actionData !== undefined) {
    blockShow = actionData.blockDetail;
  }

  return (
    <>
      {error ? (
        <div className="absolute top-[calc(50vh-5rem)] z-30 flex justify-center items-center bg-error-red h-40 w-full text-white">
          <span className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">X</span>
          </span>
          <span>Something went wrong</span>
        </div>
      ) : null}
      <img src={forest} className={(error ? "grayscale" : null) + " absolute h-[100vh] -z-20 top-0 object-cover sm:w-full"} />
      <div className={(error ? "grayscale" : null) + " sm:max-w-screen-lg sm:mx-auto sm:h-full"}>
        <ProductVisualisation blockShow={blockShow} error={error} name={name} quantity={quantity} sequence={sequence} total={1000} units={units} />
      </div>
    </>
  );
}
