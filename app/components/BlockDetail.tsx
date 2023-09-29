import { Form } from '@remix-run/react';
import Button from './Button';

export interface BlockDetailProps {
	name: string;
	quantity: number;
	sequence?: number;
	units: number;
}

const BlockDetail = (props: BlockDetailProps) => {
	const { name, quantity, sequence, units } = props;

	return (
		<Form>
			<div className="absolute left-[calc(50vw-5rem)] top-[calc(10vh+2.5rem)] flex h-40 w-40 flex-col justify-between bg-white bg-opacity-70 p-4 text-center sm:w-80">
				<div className="flex justify-between">
					<p>{name}</p>
					<p>
						{sequence}/{quantity}
					</p>
				</div>
				<div className="flex justify-between">
					<p>Units</p>
					<p>{units}</p>
				</div>
				<div>
					<Button type={'submit'} text={'Close'} />
					<input id="blockDetailShow" name="blockDetailShow" type="hidden" value="false" />
				</div>
			</div>
		</Form>
	);
};

export default BlockDetail;
