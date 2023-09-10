import { useLoaderData } from '@remix-run/react';
import type { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from '@remix-run/node';
import { retrieve, TransactionProduct } from '~/models/transactionProduct';
import ProductVisualisation from '~/components/ProductVisualisation';
import forest from '../images/enhalo_forest.jpg';


export const loader = async ({ params }: LoaderArgs) => {
  const data = await JSON.parse(atob(params.data));
  const product:TransactionProduct = retrieve(data.uuid);
  const sequence:number = data.sequence;
  const units:number = data.units;
  let error = false;

  return ({
    error,
    product,
    sequence,
    units
  });
};

export default function Product() {
  const { error, product, sequence, units } = useLoaderData<typeof loader>();

  return (
    <>
          <img src={forest} className="absolute h-[100vh] -z-20 top-0 object-cover sm:w-full "/>
          <div className='sm:max-w-screen-lg sm:mx-auto sm:h-full'>
      <ProductVisualisation error={error} sequence={sequence} units={units} total={1000} />
      </div>
    </>
  )
}