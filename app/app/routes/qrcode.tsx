import qrcode from "~/helpers/qrcode";
import { TransactionProduct } from "~/models/transactionProduct";
export const loader = async ({ request }) => {
  const urlParams = new URL(request.url);
  const baseUrl: string = "https://enhalogreen.fly.dev/";
  const transactionProduct: TransactionProduct = {
    sequence: await urlParams.searchParams.get("sequence"),
    transactionUuid: await urlParams.searchParams.get("transactionUuid"),
    units: await urlParams.searchParams.get("units"),
    productUuid: await urlParams.searchParams.get("productUuid"),
  };
  console.log(transactionProduct);
  const data = btoa(JSON.stringify(transactionProduct));
  const url = `${baseUrl}qrcodes/products/${data}`;
  const image = await qrcode(url);

  return new Response(image, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};

// EOF!
