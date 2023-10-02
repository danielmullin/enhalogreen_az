import Block from './Block';
import BlockDetail from './BlockDetail';

export interface ProductVisualisationProps {
	blockShow: boolean;
	error: boolean;
	name: string;
	quantity: number;
	sequence: number;
	total: number;
	units: number;
}

const ProductVisualisation = (props: ProductVisualisationProps): React.ReactElement => {
	const { blockShow, error, name, quantity, sequence, units } = props;
	let opacity = 100;

	// (opacity = 2 * (units / 5)), (opacity = 3 * (units / 5)), (opacity = 4 * (units / 5)), (opacity = 5 * (units / 5));

	return (
		<>
			<div className={'flex flex-wrap justify-center px-8'}>
				{Array.from({ length: 1000 / units }, (_, index) =>
					// index + 1 < sequence && index < 5 ? (
					//   //less than begin, green
					//   <>
					//     <Block allocation={"green"} opacity={30} units={units}></Block>
					//   </>
					// ) :
					index + 1 < sequence ? (
						//less than begin, green
						<>
							<Block allocation={'green'} opacity={opacity} units={units}></Block>
						</>
					) : //in between begin + units, gold
					index + 1 == sequence ? (
						<>
							<Block allocation={'gold'} opacity={opacity} units={units}></Block>
						</>
					) : (
						//above begin+units
						<>
							<Block allocation={'grey'} opacity={opacity} units={units}></Block>
						</>
					)
				)}
				{blockShow ? <BlockDetail name={name} quantity={quantity} sequence={sequence} units={units} /> : null}
			</div>
		</>
	);
};

export default ProductVisualisation;

// EOF!
