import { Link } from '@remix-run/react';
import logo from '../images/enhalo_green_logo.png';

export interface HeaderProps {
	routeId: string;
}
export default function Header(props: HeaderProps): JSX.Element {
	const { routeId } = props;
	// console.log(routeId)
	let headerClass = 'opacity-80 w-full text-white sm:bg-transparent mb-8';
	let headerNav = (
		<div>
			<div className="sm:hidden">HMBGR</div>
			<div className="hidden text-2.5xl sm:flex">
				<Link to="/#about" className="mr-8">
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
