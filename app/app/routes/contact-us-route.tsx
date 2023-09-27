import { ActionArgs, ActionFunction, redirect } from '@remix-run/node';
import { json } from '@remix-run/node';
import validateEmailAddress from '~/helpers/validateEmailAddress';
import validateString from '~/helpers/validateString';
import { create } from '~/models/contactMessage.model';
import { ContactMessage } from '~/models/contactMessage.model';
// import validateEmailAddress from '~/helpers/validateEmailAddress';
// import validateNumberOfProducts from '~/helpers/validateNumberOfProducts';
// import validateUuid from '~/helpers/validateUuid';

export async function action({ params, request }: ActionArgs) {
	//const token = await requireUserToken(request);
	//const userUuid = await getUserUuid (request);
	const data: FormData = await request.formData();
	const checked: boolean = Boolean(data.get('checked'));
	const emailAddress: string = String(data.get('emailAddress'));
	const firstName: string = String(data.get('firstName'));
	const helpMessage: string = String(data.get('helpMessage'));
	const lastName: string = String(data.get('lastName'));
	const organisation: string = String(data.get('organisation'));
	const position: string = String(data.get('position'));

	let contactMessage: ContactMessage = {
		checked: checked,
		emailAddress: emailAddress,
		firstName: firstName,
		helpMessage: helpMessage,
		lastName: lastName,
		organisation: organisation,
		position: position,
	};

	switch (request.method) {
		case 'POST': {
			try {
				if (!validateEmailAddress(emailAddress)) {
					return json({ emailError: 'Invalid Email Address', errorInput: '', status: 422 }, 422);
				}
				if (!validateString(firstName)) {
					return json({ firstNameError: 'Invalid First Name', errorInput: '', status: 422 }, 422);
				}
				if (!validateString(lastName)) {
					return json({ lastNameError: 'Invalid Last Name', errorInput: '', status: 422 }, 422);
				}
				if (!validateString(organisation)) {
					return json({ organisationError: 'Invalid Organisation', errorInput: '', status: 422 }, 422);
				}
				if (!validateString(position)) {
					return json({ positionError: 'Invalid Position', errorInput: '', status: 422 }, 422);
				}
				if (!validateString(helpMessage)) {
					return json({ helpMessageError: 'Invalid Message', errorInput: '', status: 422 }, 422);
				}
				// let contactMessageResponse = await create(contactMessage);
				// console.log(contactMessageResponse)
				return redirect(`/contact-us-success`);

				// return contactMessageResponse;
			} catch (error) {
				return json({ error: error.message, ok: false }, 500);
			}
		}
	}
	return json({ message: 'Method not allowed', ok: true }, 405);
}

// EOF!
