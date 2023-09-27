import { FetcherWithComponents, Form, useFetcher } from '@remix-run/react';
import { Contact } from '~/models/contact.model';
import Button from './Button';
import { OffsetProduct } from '~/models/offsetProduct';
import { SubProject } from '~/models/subProject';
import validateEmailAddress from '~/helpers/validateEmailAddress';
import validateNumberOfProducts from '~/helpers/validateNumberOfProducts';

export interface OffsetProductsProps {
	contact: Contact;
	content: {
		cta: {
			next: string;
		};
		h1: string;
		p: string;
	};
	subProject: SubProject;
	offsetProducts: OffsetProduct[];
}

export default function OffsetProducts(props: OffsetProductsProps): JSX.Element {
	const fetcher: FetcherWithComponents<any> = useFetcher();
	const { contact, content, offsetProducts, subProject } = props;
	let errors: {
		emailAddress: boolean;
		numberOfProucts: boolean;
		productUuid: boolean;
	} = {
		emailAddress: false,
		numberOfProucts: false,
		productUuid: false,
	};
	let optimisticEmailAddress: string = '';
	let optimisticNumberOfProducts: number = 0;
	let optimisticOffsetProductUuid: string = '';

	if (fetcher.formData) {
		optimisticEmailAddress = String(fetcher.formData.get('emailAddress'));
		optimisticNumberOfProducts = Number(fetcher.formData.get('numberOfProducts'));
		optimisticOffsetProductUuid = String(fetcher.formData.get('offSetProductUuid'));
		errors.emailAddress = validateEmailAddress(optimisticEmailAddress);
		errors.numberOfProucts = validateNumberOfProducts(optimisticNumberOfProducts);
	}

	console.log(subProject);
	return (
		<>
			<fetcher.Form
				action="/offset-products-transaction"
				className="flex w-full flex-wrap sm:mx-auto sm:max-w-screen-lg sm:items-end"
				method="post"
			>
				<input name="accountUuid" type="hidden" defaultValue={contact.uuid} />
				<input name="accountUuid" type="hidden" defaultValue={contact.emailAddress} />

				<div className="mb-8 w-full pl-1 sm:w-5/12">
					{fetcher.data && fetcher.data.emailError ? (
						<label className="text-red-500">Please enter a valid email address</label>
					) : (
						<label>Email Address</label>
					)}
					<input
						className={
							fetcher.state === 'submitting'
								? 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl pl-2 focus:outline-none sm:h-14'
								: 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl pl-2 focus:outline-none sm:h-14'
						}
						defaultValue={optimisticEmailAddress}
						id="labelValue"
						name="emailAddress"
						type="text"
					/>
				</div>
				<div>
					<div className="w-full">
						<p className="mb-4 text-2xl font-light leading-tight sm:mr-2 sm:w-1/2">{content.p[1]}</p>
					</div>
				</div>
				<div className="mb-8 flex sm:mb-0 sm:w-5/12">
					<div className="mr-2 w-8/12 sm:mr-0">
						<div className="pl-1 sm:mr-4">
							{fetcher.data && fetcher.data.productUuidError ? (
								<label className="text-red-500">Please choose a product</label>
							) : (
								<label>Offset Product</label>
							)}
							<select
								className="text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl pl-2 focus:outline-none sm:h-14"
								defaultValue={optimisticOffsetProductUuid}
								id="productUuid"
								name="productUuid"
								placeholder="Product"
							>
								{offsetProducts.map((product: OffsetProduct) => {
									let productCost = (subProject.tonCost.value / 1000) * product.units;
									return (
										<option key={product.uuid} value={product.uuid}>{`${product.name} (GBP ${productCost.toFixed(2)})`}</option>
									);
								})}
							</select>
						</div>
					</div>
					<div className="ml-2 w-4/12 sm:ml-0">
						<div className="pl-1">
							{fetcher.data && fetcher.data.numberOfProductsError ? (
								<label className="text-red-500">Quantity</label>
							) : (
								<label>Quantity</label>
							)}
							<input
								className={
									fetcher.state === 'submitting'
										? 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl pl-2 focus:outline-none sm:h-14'
										: 'text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl pl-2 focus:outline-none sm:h-14'
								}
								defaultValue={optimisticNumberOfProducts}
								id="labelValue"
								name="numberOfProducts"
								type="text"
							/>
						</div>
					</div>
				</div>
				<div className="w-full text-center sm:ml-4 sm:hidden">
					<Button text={content.cta.next} type="submit" />
				</div>
				<div className="hidden sm:ml-4 sm:flex sm:h-14 sm:w-2/12">
					<Button text={content.cta.next} type="submit" />
				</div>
			</fetcher.Form>
		</>
	);
}
