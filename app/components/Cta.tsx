import { Link } from '@remix-run/react';
import { useState } from 'react';

export interface CtaProps {
	linkTo: string;
	text: string;
	type: 'primary' | 'secondary';
}

const Cta = (props: CtaProps): React.ReactElement => {
	const { linkTo, text, type } = props;
	const [ctaState, setCtaState] = useState({ disabled: false, opacity: '' });

	const handleCtaClick = () => {
		setCtaState({ disabled: true, opacity: 'opacity-50' });
	};

	return (
		<Link to={linkTo} className='w-full text-center'>
			<button
				disabled={ctaState.disabled}
				onClick={handleCtaClick}
				className={
					type === 'primary'
						? `relative z-10 w-full max-w-430 rounded-half bg-white px-3 py-2 text-xl text-button-green sm:py-4 ${ctaState.opacity}`
						: `relative z-10 w-full max-w-430 rounded-half px-3 py-2 text-xl inner-border-2 inner-border-white sm:py-4 ${ctaState.opacity}`
				}
			>
				{text}
			</button>
		</Link>
	);
};

export default Cta;

// EOF!
