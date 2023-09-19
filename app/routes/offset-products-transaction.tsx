import { ActionArgs, ActionFunction, redirect } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getUserUuid, requireUserToken } from '~/session.server';
import { Contact } from '~/models/contact.model';
import { create } from '~/models/transaction';
import validateEmailAddress from '~/helpers/validateEmailAddress';
import validateNumberOfProducts from '~/helpers/validateNumberOfProducts';
import validateUuid from '~/helpers/validateUuid';




export async function action({ params, request }: ActionArgs) {
  //const token = await requireUserToken(request);
  //const userUuid = await getUserUuid (request);
  const data: FormData = await request.formData();
  const contactUuid: string = String(data.get('contactUuid'));
  const emailAddress: string = String(data.get('emailAddress'));
  const numberOfProducts: number = Number(data.get('numberOfProducts'));
  const productUuid: string = String(data.get('productUuid'));

  const contact: Contact ={
    emailAddress,
    uuid: contactUuid
  };

  switch (request.method) {
    case 'POST': {
      try {
        if(!validateEmailAddress(emailAddress)) {
          return json({ error: 'Invalid Email Address', errorInput: '', status: 422 }, 422);
        }
        if(!validateNumberOfProducts(numberOfProducts)) {
          return json({ error: 'Number of products must be greater than 0', errorInput: '', status: 422 }, 422);
        }
        if(!validateUuid(productUuid)) {
          return json({ error: 'Please select a product', errorInput: '', status: 422 }, 422);
        }
        let transaction = await create(contact, numberOfProducts, productUuid);
        // console.log(transaction.transactionId)
          return redirect(`/cart/${transaction.transactionId}`)
        } 
      catch (error) {
        return json({ error: error.message, ok: false }, 500);
      }
    }
  }
  return json({ message: 'Method not allowed', ok: true }, 405);
}

// EOF!