import { FetcherWithComponents, Form, useFetcher } from '@remix-run/react';

export interface BlockProps {
	allocation: string;
	fullSize: number;
	isEndPartial: boolean;
	isStartPartial: boolean;
	units: number;
}

// const Block = (props: BlockProps) => {
// 	const { allocation, fullSize, units } = props;
// 	let unitSize;
// 	if (fullSize >= 1 && fullSize <= 10) {
// 		unitSize = fullSize;
// 	} else if (fullSize > 10 && fullSize <= 100) {
// 		unitSize = Math.round(10 + fullSize * 0.25);
// 	} else if (fullSize > 100 && fullSize <= 500) {
// 		unitSize = Math.round(30 + fullSize * 0.125);
// 	} else {
// 		unitSize = Math.round(50 + fullSize * 0.05);
// 	}
// 	return (
// 		<>
// 			{/* {'green' == allocation ? (
// 				<div className={`bg-block-green w-${unitSize}u h-${unitSize}u m-2`}></div>
// 			) : 'gold' == allocation ? (
// 				<Form method='post'>
// 					<button type='submit' className={`bg-block-gold w-${unitSize}u h-${unitSize}u m-2 flex`}></button>
// 					<input id='blockDetailShow' name='blockDetailShow' type='hidden' value='true' />
// 				</Form>
// 			) : (
// 				<div className={`bg-block-grey w-${unitSize}u h-${unitSize}u m-2`}></div>
// 			)} */}
// 			<div className='m-2 flex'>
// 				<div className={`bg-block-green w-${unitSize}u h-${unitSize}u`}></div>
// 				<div className={`opacity-0 w-${fullSize - unitSize}u h-${unitSize}u`}></div>
// 			</div>
// 		</>
// 	);
// };
const Block = (props: BlockProps) => {
	const { allocation, fullSize, isEndPartial, isStartPartial, units } = props;
	let unitSize;
	if (fullSize >= 1 && fullSize <= 10) {
		unitSize = fullSize;
	} else if (fullSize > 10 && fullSize <= 100) {
		unitSize = Math.round(10 + fullSize * 0.25);
	} else if (fullSize > 100 && fullSize <= 500) {
		unitSize = Math.round(30 + fullSize * 0.125);
	} else {
		unitSize = Math.round(50 + fullSize * 0.05);
	}

	const unitRatio = units / fullSize;
	const unitWidth = Math.round(unitSize * unitRatio);
	const remainderWidth = unitSize - unitWidth;

	const blockColor = allocation === 'gold' ? 'bg-block-gold' : allocation === 'grey' ? 'bg-block-grey' : 'bg-block-green';

	return (
		<>
			<div className='m-2 flex'>
				{isStartPartial && <div className={`w-${remainderWidth}u h-${unitSize}u`}></div>}
				{blockColor === 'bg-block-gold' ? (
					<Form method='post'>
						<button type='submit' className={`bg-block-gold w-${unitSize}u h-${unitSize}u flex`}></button>
						<input id='blockDetailShow' name='blockDetailShow' type='hidden' value='true' />
					</Form>
				) : (
					<div className={`${blockColor} w-${unitWidth}u h-${unitSize}u`}></div>
				)}
				{isEndPartial && <div className={`w-${remainderWidth}u h-${unitSize}u`}></div>}
			</div>
		</>
	);
};

export default Block;
