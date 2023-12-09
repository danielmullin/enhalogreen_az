import { FetcherWithComponents, Form, useFetcher } from '@remix-run/react';

export interface FirstBlockProps {
	allocation: string;
	opacity: number;
	units: number;
}

const FirstBlock = (props: FirstBlockProps) => {
	const { allocation, opacity, units } = props;
	const opacityClass = opacity;
	let unitSize;
	if (units >= 1 && units <= 10) {
		unitSize = units;
	} else if (units > 10 && units <= 100) {
		unitSize = Math.round(10 + units * 0.25);
	} else if (units > 100 && units <= 500) {
		unitSize = Math.round(30 + units * 0.125);
	} else {
		unitSize = Math.round(50 + units * 0.05);
	}
	return (
		<>
			{'green' == allocation ? (
				<div className={`bg-block-green w-${unitSize}u h-${unitSize}u m-2 opacity-${opacityClass}`}></div>
			) : 'gold' == allocation ? (
				<Form method='post'>
					<button type='submit' className={`bg-block-gold w-${unitSize}u h-${unitSize}u m-2 opacity-${opacityClass} flex`}></button>
					<input id='blockDetailShow' name='blockDetailShow' type='hidden' value='true' />
				</Form>
			) : (
				<div className={`bg-block-grey w-${unitSize}u h-${unitSize}u m-2 opacity-${opacityClass}`}></div>
			)}
		</>
	);
};

export default FirstBlock;
