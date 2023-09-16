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
		}
		h1: string;
		p: string;
	};
	subProject: SubProject;
	offsetProducts: OffsetProduct[];
}

export default function OffsetProducts(props: OffsetProductsProps): JSX.Element
{
	const fetcher:FetcherWithComponents<any> = useFetcher();
	const { contact, content, offsetProducts, subProject } = props;
	let errors:{ 
		emailAddress: boolean; 
		numberOfProucts: boolean;
		productUuid: boolean;
	} = {
		emailAddress: false,
		numberOfProucts: false,
		productUuid: false
		
	}
	let optimisticEmailAddress: string = '';
	let optimisticNumberOfProducts: number = 0;
	let optimisticOffsetProductUuid: string = '';

	if(fetcher.formData) {
		optimisticEmailAddress = String(fetcher.formData.get('emailAddress'));
		optimisticNumberOfProducts = Number(fetcher.formData.get('numberOfProducts'));
		optimisticOffsetProductUuid = String(fetcher.formData.get('offSetProductUuid'));
		errors.emailAddress = validateEmailAddress(optimisticEmailAddress);
		errors.numberOfProucts = validateNumberOfProducts(optimisticNumberOfProducts);
	}

	console.log(subProject)
	return (
		<>
			<fetcher.Form 
				action="/offset-products-transaction"
				className="w-full flex flex-wrap sm:max-w-screen-lg sm:mx-auto sm:items-end" 
				method="post"
			>
				<input name="accountUuid" type="hidden" defaultValue={contact.uuid} />
				<input name="accountUuid" type="hidden" defaultValue={contact.emailAddress} />
	
					<div className="flex sm:w-5/12">
						<div className="w-full">
							<div className="mb-8 pl-1 sm:mb-0 sm:mr-4">
								<label className="{ errors.emailAddress ? 'text-red' }">Email Address</label>
								<input 
									className="inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none" 
									defaultValue={optimisticEmailAddress} 
									id="labelValue" 
									name="emailAddress"
									type="text"
								/>
							</div>
						</div>
					</div>
					<div>
					<div className="w-full">
						<p className="text-2xl leading-tight font-light mb-4 sm:w-1/2 sm:mr-2">{content.p[1]}</p>
					</div>
					</div>
					<div className="flex mb-8 sm:w-5/12 sm:mb-0">
						<div className="w-8/12 mr-2 sm:mr-0">
							<div className="pl-1 sm:mr-4">
								<label>Offset Product</label>
								<select 
									className="inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none"
									defaultValue={optimisticOffsetProductUuid}
									id="productUuid" 
									name="productUuid"
									placeholder='Product' >
									{
										offsetProducts.map((product: OffsetProduct) => {
											let productCost = (subProject.tonCost.value / 1000) * product.units;
											return (
												
												<option key={product.uuid} value={product.uuid}>{`${product.name} (GBP ${productCost.toFixed(2)})`}</option>
											)
										})
									}
								</select>
							</div>
						</div>
						<div className="w-4/12 ml-2 sm:ml-0">
								<div className="pl-1 sm:mr-4">
									<label>Quantity</label>
									<input
										className={ (fetcher.state === 'submitting' ) ?
										"inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none":
										"inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none" }
										defaultValue={optimisticNumberOfProducts} 
										id="labelValue" 
										name="numberOfProducts" type="text" 
									/>
							</div>
						</div>
					</div>
					<div className="w-full text-center sm:hidden">
						<Button text={content.cta.next} type="submit"/>
					</div>
					<div className="hidden sm:flex sm:w-2/12 sm:h-14">
						<Button text={content.cta.next} type="submit"/>
					</div>
			</fetcher.Form>
		</>
	);
}