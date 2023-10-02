import { Link } from '@remix-run/react';
import logo from '../images/enhalo_green_logo.png';
import { useState } from 'react';
import { Link } from '@remix-run/react';

export interface HeaderProps {
	routeId: string;
}
export default function Header(props: HeaderProps): JSX.Element {
	const [navbar, setNavbar] = useState(false);
	const { routeId } = props;
	// console.log(routeId)
	let headerClass = 'opacity-80 fixed w-full text-white sm:bg-transparent';
	let headerNav = (
		<div>
			<button onClick={() => setNavbar(!navbar)} className="sm:hidden">
				{navbar ? (
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				) : (
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				)}{' '}
			</button>
			{navbar ? (
				<div className="top-10vh absolute left-0 flex w-full flex-col bg-black bg-opacity-80 px-8 py-4 text-lg">
					<Link to="/#about" className="mr-8">
						About
					</Link>
					<Link to="/contact-us" className="mr-8">
						Contact Us
					</Link>
					<Link to="/account">Account</Link>
				</div>
			) : null}
			<div className=" hidden text-xl sm:flex">
				<Link to="/#about" className="mr-8 ">
					About
				</Link>
				<Link to="/contact-us" className="mr-8">
					Contact Us
				</Link>
				<Link to="/account">Account</Link>
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
		headerClass = 'bg-image bg-cover bg-no-repeat fixed w-full bg-opacity-80';
	}
	if (['routes/qrcodes/products'].includes(routeId)) {
		headerNav = <div></div>;
	}
	return (
		<header className={`${headerClass}`}>
			<div
				className={
					navbar
						? 'flex min-h-[10vh] items-center justify-between bg-black bg-opacity-80 px-8 sm:m-auto sm:max-w-screen-lg sm:justify-between'
						: 'flex min-h-[10vh] items-center justify-between px-8 sm:m-auto sm:max-w-screen-lg sm:justify-between'
				}
			>
				<div className=" w-48 sm:w-64">
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
