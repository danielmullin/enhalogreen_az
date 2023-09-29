import { Link } from '@remix-run/react';

export interface CtaProps {
	linkTo: string;
	text: string;
	type: 'primary' | 'secondary';
}

const Cta = (props: CtaProps): React.ReactElement => {
	const { linkTo, text, type } = props;

	return (
		<Link to={linkTo} className="w-full text-center">
			<button
				className={
					type === 'primary'
						? 'relative z-10 w-full max-w-430 rounded-half bg-white px-3 py-2 text-xl text-button-green sm:py-4'
						: 'inner-border-2 inner-border-white relative z-10 w-full max-w-430 rounded-half px-3 py-2 text-xl sm:py-4'
				}
			>
				{text}
			</button>
		</Link>
	);
};

export default Cta;

// EOF!
