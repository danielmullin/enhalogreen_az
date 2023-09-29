import { ActionArgs, ActionFunction, redirect } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getUserUuid, requireUserToken } from '~/session.server';
import { create } from '~/models/transaction';
import { update } from '~/models/account.model';

import validateEmail from '~/helpers/validateEmail';

export async function action({ params, request }: ActionArgs) {
	//const token = await requireUserToken(request);
	//const userUuid = await getUserUuid (request);
	//const cvUuid: string = params.cvUuid;

	const data: FormData = await request.formData();
	const emailAddress: string = data.get('emailAddress');
	const edit: FormDataEntryValue | null = data.get('edit');
	const firstName: FormDataEntryValue | null = data.get('firstName');
	const lastName: FormDataEntryValue | null = data.get('lastName');
	const uuid: FormDataEntryValue | null = data.get('uuid');

	switch (request.method) {
		case 'POST': {
			try {
				// if(!validateEmail(emailAddress)) {
				//   return json({ error: 'Invalid Email Address', errorInput: '', status: 422 }, 422);
				// }
				// if(tonnes < 1) {
				//   return json({ error: 'Tonnes must be greater than 0', errorInput: '', status: 422 }, 422);
				// }
				// if(!products) {
				//   return json({ error: 'Please select a product', errorInput: '', status: 422 }, 422);
				// }
				let patch = await update(emailAddress, uuid);
				return { message: 'OK', ok: true }, 200;
				//  }
				//  else {
				//    return json({ message: 'Unprocessable', ok: true }, 422);
				//   }s
			} catch (error) {
				console.log('error');
				return json({ message: error.message, ok: false }, 500);
			}
		}
	}
	return json({ message: 'Method not allowed', ok: true }, 405);
}
