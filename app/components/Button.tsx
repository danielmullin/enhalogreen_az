export interface ButtonProps {
	text: string;
	type?: 'submit' | 'reset' | 'button' | undefined;
}

const Button = (props: ButtonProps): React.ReactElement => {
	const { text, type } = props;

	return (
		<button type={type} className='w-full rounded-half bg-white px-3 py-2 text-xl text-button-green'>
			{text}
		</button>
	);
};

export default Button;

// EOF!
