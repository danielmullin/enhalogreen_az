import forest from '../images/enhalo_forest.jpg';
import Cta from '~/components/Cta';

export default function ContactConfirmation() {
	const content = require('app/content/contact-us-success.json');

	return (
		<>
			<img src={forest} className="absolute top-0 -z-20 h-[100vh] object-cover sm:w-full " />
			<div className="mt-110 min-h-70 px-8 pt-8 text-white sm:mx-auto sm:min-h-80 sm:max-w-screen-lg">
				<h1 className="mb-8 text-3xl leading-none ">{content.h1}</h1>
				<section className="mb-4">
					<p className="mb-4 text-2xl font-light leading-tight sm:mr-2 sm:w-1/2">{content.p}</p>
				</section>
				<div className="mt-40 flex justify-center">
					<Cta linkTo="/" text={'Home'} type={'primary'} />
				</div>
			</div>
		</>
	);
}
