import { useLoaderData } from '@remix-run/react';
import ContactForm from '../components/ContactForm';
import forest from '../images/enhalo_forest.jpg';
import { retrieve } from '~/models/account.model';

export const loader = async ({}) => {
	const account = await retrieve('b005e055-5343-ee11-be6d-000d3ad4d529', null, null);

	return {
		account,
	};
};

export default function Contact() {
	const { account } = useLoaderData<typeof loader>();
	const content = require('app/content/contact-us.json');

	return (
		<>
			<img src={forest} className="absolute top-0 -z-20 h-[100vh] object-cover sm:w-full " />
			<div className="min-h-70 mt-110 sm:min-h-80 px-8 pt-8 text-white sm:mx-auto sm:max-w-screen-lg">
				<h1 className="mb-8 text-3xl leading-none ">{content.h1}</h1>
				<section className="sm:flex">
					<div className="sm:w-1/2 sm:pr-8">
						<p className="mb-4 text-2xl font-light leading-tight">{content.p}</p>
					</div>
					<div className="sm:w-1/2 sm:pl-8">
						<ContactForm account={account} content={content} />
					</div>
				</section>
			</div>
		</>
	);
}
