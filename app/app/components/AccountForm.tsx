import { FetcherWithComponents, Form, useFetcher } from '@remix-run/react';
import { Account } from '~/models/account.model';
import Button from './Button';

export interface AccountFormProps {
	account: Account;
}

export default function AccountForm(props: AccountFormProps): JSX.Element {
	const { account } = props;
	const fetcher: FetcherWithComponents<any> = useFetcher();
	let optimisticEmailAddress: string = account.contact.emailAddress;
	let optimisticFirstName: string = account.contact.firstName;
	let optimisticLastName: string = account.contact.lastName;
	let optimisticPhoneNumber: string = account.contact.phoneNumber;
	let optimisticEdit = true;

	if (fetcher.formData) {
		optimisticEmailAddress = String(fetcher.formData.get('emailAddress'));
		optimisticFirstName = String(fetcher.formData.get('firstName'));
		optimisticLastName = String(fetcher.formData.get('lastName'));
		optimisticPhoneNumber = String(fetcher.formData.get('phoneNumber'));
		optimisticEdit = Boolean(fetcher.formData.get('edit') == 'true' ? 'false' : 'true');
	}

	return (
		<>
			<fetcher.Form
				action="/account-update"
				className="flex w-full flex-wrap text-light-black sm:mx-auto sm:items-end "
				method="post"
				onSubmit={(e) => {
					if (optimisticEdit == true) fetcher.submit(e.currentTarget, { replace: true });
				}}
			>
				<input name="accountUuid" type="hidden" defaultValue={account.uuid} />
				<div className="mb-8 w-full">
					<label>Email Address</label>
					{optimisticEdit ? (
						<input
							className={
								fetcher.state === 'submitting'
									? 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl bg-gray-50/50 pl-2 focus:outline-none'
									: 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl bg-gray-50/50 pl-2 text-black focus:outline-none'
							}
							name="emailAddress"
							type="text"
							defaultValue={optimisticEmailAddress}
						/>
					) : (
						<div className="mb-2 pl-2 pt-4">{optimisticEmailAddress}</div>
					)}
				</div>
				<div className="mb-8 mr-[5%] w-47.5">
					<label>First name</label>
					{optimisticEdit ? (
						<input
							className={
								fetcher.state === 'submitting'
									? 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl bg-gray-50/50 pl-2 focus:outline-none'
									: 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl bg-gray-50/50 pl-2 focus:outline-none'
							}
							name="firstName"
							type="text"
							defaultValue={optimisticFirstName}
						/>
					) : (
						<div className="mb-2 pl-2 pt-4">{optimisticFirstName}</div>
					)}
				</div>
				<div className="mb-8 w-47.5">
					<label>Last name</label>
					{optimisticEdit ? (
						<input
							className={
								fetcher.state === 'submitting'
									? 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl bg-gray-50/50 pl-2 focus:outline-none'
									: 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl bg-gray-50/50 pl-2 focus:outline-none'
							}
							name="lastName"
							type="text"
							defaultValue={optimisticLastName}
						/>
					) : (
						<div className="mb-2 pl-2 pt-4">{optimisticLastName}</div>
					)}
				</div>
				<div className="mb-8 w-full">
					<label>Phone number</label>
					{optimisticEdit ? (
						<input
							className={
								fetcher.state === 'submitting'
									? 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl bg-gray-50/50 pl-2 focus:outline-none'
									: 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl bg-gray-50/50 pl-2 focus:outline-none'
							}
							name="phoneNumber"
							type="text"
							defaultValue={optimisticPhoneNumber}
						/>
					) : (
						<div className="mb-2 pl-2 pt-4">{optimisticPhoneNumber}</div>
					)}
				</div>
				<div className="w-full"></div>
				<div className="flex w-full justify-center sm:h-14">
					{optimisticEdit ? (
						<div className="w-1/2">
							<Button text="Submit" type="submit" />
							<input name="edit" title="edit" type="hidden" value="false" />
						</div>
					) : (
						<div className="w-1/2">
							<Button text="Edit" type="submit" />
						</div>
					)}
				</div>
			</fetcher.Form>
		</>
	);
}
