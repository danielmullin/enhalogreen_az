import forest from '../images/enhalo_forest.jpg';

export default function CartSuccess() {
	const content = require('app/content/cart-success.json');

	return (
		<>
			{/* <img src={forest} className="absolute top-0 -z-20 h-[100vh] object-cover sm:w-full " /> */}
			<div className="px-8 text-light-black sm:mx-auto sm:max-w-screen-lg">
				<h1 className="mb-8 text-3xl">{content.h1}</h1>
				<p className="mb-8 text-xl">{content.p[0]}</p>
				<p className="mb-8 text-xl">{content.p[1]}</p>
				<p className="mb-8 text-xl">
					{content.p[2]}{' '}
					<a className="text-xl hover:text-blue-800" href="mailto:someone@example.com">
						{content.a}
					</a>
				</p>
			</div>
		</>
	);
}
