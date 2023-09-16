export interface ButtonProps {
	text: string;
	type?: 'submit' | 'reset' | 'button' | undefined;
}

const Button = (props: ButtonProps): React.ReactElement => {
	const { text, type } = props;

	return (
		<button type={type} className='bg-white text-button-green text-xl px-3 py-2 rounded-half w-full'>{text}</button>
		);
};

export default Button;

// EOF!
