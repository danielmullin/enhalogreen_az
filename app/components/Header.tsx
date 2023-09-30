import { Link } from '@remix-run/react';
import logo from '../images/enhalo_green_logo.png';
import { useState } from 'react';
import { Link } from '@remix-run/react';

// export default function Index() {
// 	return (
// 		<nav className="w-full bg-white shadow">
// 			<div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
// 				<div>
// 					<div className="flex items-center justify-between py-3 md:block md:py-5">
// 						<Link to="/home">
// 							<h2 className="text-2xl font-bold">Remix</h2>
// 						</Link>
// 						<div className="md:hidden">
// 							<button
// 								className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
// 								onClick={() => setNavbar(!navbar)}
// 							>
// 								{navbar ? (
// 									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
// 										<path
// 											fillRule="evenodd"
// 											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// 											clipRule="evenodd"
// 										/>
// 									</svg>
// 								) : (
// 									<svg
// 										xmlns="http://www.w3.org/2000/svg"
// 										className="h-6 w-6"
// 										fill="none"
// 										viewBox="0 0 24 24"
// 										stroke="currentColor"
// 										strokeWidth={2}
// 									>
// 										<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
// 									</svg>
// 								)}
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 				<div>
// 					<div className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${navbar ? 'block' : 'hidden'}`}>
// 						<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
// 							<li className="font-semibold text-gray-600 hover:text-blue-600">
// 								<Link to="/home">Home</Link>
// 							</li>
// 							<li className="font-semibold text-gray-600 hover:text-blue-600">
// 								<Link to="/blog">Blog</Link>
// 							</li>
// 							<li className="font-semibold text-gray-600 hover:text-blue-600">
// 								<Link to="/about">About US</Link>
// 							</li>
// 							<li className="font-semibold text-gray-600 hover:text-blue-600">
// 								<Link to="/contact">Contact US</Link>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// }

export interface HeaderProps {
	routeId: string;
}
export default function Header(props: HeaderProps): JSX.Element {
	const [navbar, setNavbar] = useState(false);
	const { routeId } = props;
	// console.log(routeId)
	let headerClass = 'opacity-80 w-full text-white sm:bg-transparent mb-8';
	let headerNav = (
		<div>
			<button onClick={() => setNavbar(!navbar)} className="sm:hidden">
				{navbar ? (
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				) : (
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				)}{' '}
			</button>
			{navbar ? (
				<div className=" top-10vh absolute left-0 text-2.5xl sm:flex">
					<Link to="/#about" className="mr-8">
						About
					</Link>
					<Link to="/contact-us">Contact Us</Link>
				</div>
			) : null}
			<div className=" hidden sm:flex">
				<Link to="/#about" className="mr-8 ">
					About
				</Link>
				<Link to="/contact-us">Contact Us</Link>
			</div>
		</div>
	);
	if (
		[
			'routes/account',
			'routes/accounts.$contactUuid',
			'routes/accounts_.$contactUuid.transactions',
			'routes/accounts_.$contactUuid.transactions_.$transactionUuid',
			'routes/cart',
			'routes/cart.success',
			'routes/cart.$transactionUuid',
			'routes/offset-products',
			'routes/privacy-policy',
			'routes/projects',
		].includes(routeId)
	) {
		headerClass = 'bg-image mb-8';
	}
	if (['routes/qrcodes/products'].includes(routeId)) {
		headerNav = <div></div>;
	}
	return (
		<header className={`${headerClass}`}>
			<div className="flex min-h-[10vh] items-center justify-between px-8 sm:m-auto sm:max-w-screen-lg sm:justify-between">
				<div className="w-44">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				{headerNav}
			</div>
		</header>
	);
}

// EOF!
