import { FetcherWithComponents, useFetcher } from '@remix-run/react';
import Button from './Button';
import { Account } from '~/models/account.model';

export interface ContactFormProps {
	// contact: Contact;
	account: Account;
	content: {
		cta: {
			submit: string;
		};
	};
	// subProject: SubProject;
	// offsetProducts: OffsetProduct[];
}

export default function ContactForm(props: ContactFormProps): JSX.Element {
	const fetcher: FetcherWithComponents<any> = useFetcher();
	const { account, content } = props;

	let optimisticEmailAddress: string = account.contact.emailAddress;
	let optimisticFirstName: string = account.contact.firstName;
	let optimisticHelpMessage: string = '';
	let optimisticLastName: string = account.contact.lastName;
	let optimisticOrganisation: string = '';
	let optimisticPosition: string = '';

	if (fetcher.formData) {
		optimisticEmailAddress = String(fetcher.formData.get('emailAddress'));
		optimisticFirstName = String(fetcher.formData.get('firstName'));
		optimisticHelpMessage = String(fetcher.formData.get('helpMessage'));
		optimisticLastName = String(fetcher.formData.get('lastName'));
		optimisticOrganisation = String(fetcher.formData.get('organisation'));
		optimisticPosition = String(fetcher.formData.get('position'));

		// errors.emailAddress = validateEmailAddress(optimisticEmailAddress);
		// errors.numberOfProucts = validateNumberOfProducts(optimisticNumberOfProducts);
	}
	return (
		<>
			<fetcher.Form action="/contact-us-route" className="flex w-full flex-wrap sm:mx-auto sm:items-end" method="post">
				{/* <input name="accountUuid" type="hidden" defaultValue={contact.uuid} />
				<input name="accountUuid" type="hidden" defaultValue={contact.emailAddress} /> */}
			<div className='mb-8 w-full'>
				{fetcher.data && fetcher.data.emailError ? 
					<label className='text-red-500'>Please enter a valid email address</label>
					:
					<label>Email Address</label>
				}
					<input
						className={ (fetcher.state === 'submitting' ) ?
						"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":
						"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none text-black" }							
						name="emailAddress" type="text" defaultValue={optimisticEmailAddress} />
			</div>
				<div className='mb-8 w-47.5 mr-[5%]'>
				{fetcher.data && fetcher.data.firstNameError ? 
					<label className='text-red-500'>Please enter a valid first name</label>
					:
					<label>First Name</label>
				}
				<input
						className={ (fetcher.state === 'submitting' ) ?
						"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":
						"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none text-black" }							
						name="firstName" type="text" defaultValue={optimisticFirstName} />
				</div>
				<div className='mb-8 w-47.5 '>
				{fetcher.data && fetcher.data.lastNameError ? 
					<label className='text-red-500'>Please enter a valid last name</label>
					:
					<label>Last Name</label>
				}
				<input
						className={ (fetcher.state === 'submitting' ) ?
						"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":
						"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none text-black" }							
						name="lastName" type="text" defaultValue={optimisticLastName} />
				</div>
				<div className='mb-8 w-47.5 mr-[5%]'>
				{fetcher.data && fetcher.data.organisationError ? 
					<label className='text-red-500'>Please enter a valid organisation</label>
					:
					<label>Organisation</label>
				}
				<input
						className={ (fetcher.state === 'submitting' ) ?
						"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":
						"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none text-black" }							
						name="organisation" type="text" defaultValue={optimisticOrganisation} />
				</div>
				<div className='mb-8 w-47.5'>
				{fetcher.data && fetcher.data.positionError ? 
					<label className='text-red-500'>Please enter a valid position</label>
					:
					<label>Position</label>
				}
				<input
						className={ (fetcher.state === 'submitting' ) ?
						"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":
						"bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none text-black" }							
						name="position" type="text" defaultValue={optimisticPosition} />
				</div>
				<div className='mb-8 w-full'>
				{fetcher.data && fetcher.data.helpMessageError ? 
					<label className='text-red-500'>Please enter a valid message</label>
					:
					<label>How can we help you?</label>
				}
				<textarea
						className={ (fetcher.state === 'submitting' ) ?
						"bg-gray-50/50 h-20 inline-flex items-center justify-center text-md pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":
						"bg-gray-50/50 h-20 inline-flex items-center justify-center text-md pl-2 mt-2 box-border rounded-xl w-full focus:outline-none text-black" }							
						name="helpMessage"	defaultValue={optimisticHelpMessage} />
				</div>
					<div className='flex items-center mb-4'>
					<input type='checkbox' 
						className={ (fetcher.state === 'submitting' ) ?
						"mr-4":
						"mr-4" }							
						value='true' defaultValue={'false'} name='checked' />

					<p className='text-[14px]'>Keep me up to date with developments at EnhaloGreen</p>
				</div>
				<div className='w-full flex justify-center sm:h-14'>
					<div className='w-1/2'>
						<Button text={content.cta.submit} type="submit"/>
					</div>
				</div>
			</fetcher.Form>
		</>
	);
}
