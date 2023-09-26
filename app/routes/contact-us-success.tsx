import ContactForm from "../components/ContactForm";
import forest from "../images/enhalo_forest.jpg";
import { retrieve } from "~/models/account.model";

export default function ContactConfirmation() {
	const content = require("app/content/contact-us-success.json");

	return (
		<>
			<img src={forest} className='absolute h-[100vh] -z-20 top-0 object-cover sm:w-full ' />
			<div className='text-white px-8 sm:max-w-screen-sm sm:mx-auto'>
				<h1 className='mb-8 text-3xl leading-none '>{content.h1}</h1>
				<p className='mb-8 text-3xl leading-none '>{content.p}</p>
			</div>
		</>
	);
}
