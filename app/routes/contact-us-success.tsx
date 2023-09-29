import ContactForm from '../components/ContactForm';
import forest from '../images/enhalo_forest.jpg';
import { retrieve } from '~/models/account.model';

export default function ContactConfirmation() {
	const content = require('app/content/contact-us-success.json');

	return (
		<>
			<img src={forest} className="absolute top-0 -z-20 h-[100vh] object-cover sm:w-full " />
			<div className="px-8 text-white sm:mx-auto sm:max-w-screen-sm">
				<h1 className="mb-8 text-3xl leading-none ">{content.h1}</h1>
				<p className="mb-8 text-3xl leading-none ">{content.p}</p>
			</div>
		</>
	);
}
