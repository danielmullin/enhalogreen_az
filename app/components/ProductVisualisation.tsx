import Block from './Block';
import BlockDetail from './BlockDetail';
import EndBlock from './EndBlock';
import FirstBlock from './FirstBlock';

export interface ProductVisualisationProps {
	blockShow: boolean;
	error: boolean;
	name: string;
	quantity: number;
	sequence: number;
	totalCarbon: number;
	units: number;
}

const ProductVisualisation = (props: ProductVisualisationProps): React.ReactElement => {
	const { blockShow, error, name, quantity, sequence, totalCarbon, units } = props;
	let blocksPerPage = Math.floor(1000 / units);
	let showingSequence = sequence;
	let tonShowing = Math.ceil((units * sequence) / 1000);
	let totalTons = Math.ceil((quantity * units) / 1000);
	if (sequence > blocksPerPage) {
		showingSequence = sequence - blocksPerPage * (tonShowing - 1);
	}
	let fullSize = units;
	//builds the blocks array

	let blocks: number[][] = [];
	let totalUnits = units * quantity;
	let remainingUnits = 0;

	while (totalUnits > 0) {
		let block: number[] = [];
		while (true) {
			if (remainingUnits > 0) {
				block.push(remainingUnits);
				totalUnits -= remainingUnits;
				remainingUnits = 0;
			}
			if (totalUnits >= units && block.reduce((a, b) => a + b, 0) + units <= 1000) {
				block.push(units);
				totalUnits -= units;
			} else {
				remainingUnits = units - (1000 - block.reduce((a, b) => a + b, 0));
				let toAdd = 1000 - block.reduce((a, b) => a + b, 0);
				if (toAdd > 0 && toAdd <= totalUnits) {
					block.push(toAdd);
					totalUnits -= toAdd;
				}
				break;
			}
		}
		blocks.push(block);
	}

	//this is all for determining the gold block, takes into accoutn split blocks not counting twice in sequence

	let sequenceUnit = sequence - 1; // adjust sequence to zero-based index
	let sequenceBlock = 0;
	let sequenceUnitInBlock = 0;
	let partialBlock = false;

	let totalUnitsSoFar = 0;

	for (let i = 0; i < blocks.length; i++) {
		for (let j = 0; j < blocks[i].length; j++) {
			totalUnitsSoFar += blocks[i][j];
			if (totalUnitsSoFar >= sequence * units) {
				sequenceBlock = i;
				sequenceUnitInBlock = j;
				partialBlock = totalUnitsSoFar > sequence * units;
				break;
			}
		}
		if (totalUnitsSoFar >= sequence * units) {
			break;
		}
	}

	let blockss = blocks.map((block, blockIndex) => {
		return block.map((units, unitIndex) => {
			let allocation = 'green';
			let isStartPartial = unitIndex === 0 && units < fullSize;
			let isEndPartial = unitIndex === block.length - 1 && units < fullSize;
			if (blockIndex === sequenceBlock && unitIndex === sequenceUnitInBlock) {
				allocation = 'gold';
			} else if (blockIndex === sequenceBlock + 1 && partialBlock && unitIndex === 0) {
				allocation = 'gold';
			} else if (blockIndex > sequenceBlock || (blockIndex === sequenceBlock && unitIndex > sequenceUnitInBlock)) {
				allocation = 'grey';
			}
			return <Block allocation={allocation} units={units} fullSize={fullSize} isStartPartial={isStartPartial} isEndPartial={isEndPartial}></Block>;
		});
	});
	console.log(blocks);

	let blocksToDisplay = blockss[tonShowing - 1]; // get the blocks for the current ton

	// FOR GRID
	// const numColumns = 3; // Replace this with your dynamic value
	// 	return (
	// 		<>
	// 			<div className='flex justify-center text-white'>
	// 				Ton {tonShowing} / {totalTons}
	// 			</div>
	// 			<div className={`grid grid-cols-1 justify-items-center gap-2`}>
	// 				{blockShow ? <BlockDetail name={name} quantity={quantity} sequence={sequence} units={units} /> : null}
	// 				{blocksToDisplay} {/* display the blocks for the current ton */}
	// 			</div>
	// 		</>
	// 	);
	// };

	//TO NOT USE GRID
	return (
		<>
			<div className='flex justify-center text-white'>
				Ton {tonShowing} / {totalTons}
			</div>
			<div className='justify-center'>
				<div className={'flex flex-wrap items-start justify-center px-8'}>
					{blockShow ? <BlockDetail name={name} quantity={quantity} sequence={sequence} units={units} /> : null}
					{blocksToDisplay} {/* display the blocks for the current ton */}
				</div>
			</div>
		</>
	);
};

export default ProductVisualisation;
//TO NOT USE GRID
// return (
// 	<>
// 		<div className='flex justify-center text-white'>
// 			Ton {tonShowing} / {totalTons}
// 		</div>
// 		<div className='justify-center'>
// 			<div className={'flex flex-wrap items-start justify-center px-8'}>
// 				{blockShow ? <BlockDetail name={name} quantity={quantity} sequence={sequence} units={units} /> : null}
// 				{blocksToDisplay} {/* display the blocks for the current ton */}
// 			</div>
// 		</div>
// 	</>
// );
// {
/* {tonShowing !== 1 && testStart > 0 ? <FirstBlock allocation={'green'} opacity={opacity} units={testStart}></FirstBlock> : null}
				{Array.from({ length: (1000 - (tonShowing !== 1 ? testStart : 0)) / units }, (_, index) =>
					index + 1 < showingSequence ? (
						<>
							<Block allocation={'green'} opacity={opacity} units={units}></Block>
						</>
					) : index + 1 == showingSequence ? (
						<>
							<Block allocation={'gold'} opacity={opacity} units={units}></Block>
						</>
					) : (	
						<>
							<Block allocation={'grey'} opacity={opacity} units={units}></Block>
						</>
					)
				)}
				{partialBlockEnd > 0 ? <EndBlock allocation={'grey'} opacity={opacity} units={partialBlockEnd}></EndBlock> : null}

				{blockShow ? <BlockDetail name={name} quantity={quantity} sequence={sequence} units={units} /> : null} */
// }
// for (let index = 0; index < 1000 / (units + partialStart + partialEnd); index++) {
// 	if (index + 1 < showingSequence) {
// 		if (partialStart > 0) {
// 			blocks.push(<Block allocation={'gold'} units={units} partialEnd={partialEnd}></Block>);
// 		}
// 		blocks.push(<Block allocation={'green'} units={units} partialEnd={partialEnd}></Block>);
// 	} else if (index + 1 === showingSequence) {
// 		blocks.push(<Block allocation={'green'} units={units} partialEnd={partialEnd}></Block>);
// 	} else if (index + 1 > showingSequence) {
// 		blocks.push(<Block allocation={'green'} units={units} partialEnd={partialEnd}></Block>);
// 	}
// }

// let blocks: number[][] = [];
// let totalUnits = units * quantity;
// let startingBlock = 0;
// while (totalUnits > 0) {
// 	let block: number[] = [];
// 	for (let index = 0; index < 1000 / units; index++) {
// 		let remainingUnits = 1000 - index * units;
// 		if (startingBlock > 0) {
// 			block.push(startingBlock);
// 			startingBlock = 0;
// 		}
// 		if (remainingUnits > units) {
// 			totalUnits -= units;
// 			block.push(units);
// 		} else {
// 			block.push(remainingUnits);
// 			totalUnits -= remainingUnits;
// 			startingBlock = units - remainingUnits;

// 			// startingBlock = remainingUnits;
// 			// console.log(startingBlock);
// 		}
// 	}
// 	blocks.push(block);
// }
// console.log(blocks);
// EOF!
