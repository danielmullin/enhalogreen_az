import { Link } from '@remix-run/react';
import qrcodes from '../images/qrcodes.svg';

export interface AccountTransactionProps {
	contactUuid: string;
	name: string;
	uuid: string;
}

const AccountTransaction = (props: AccountTransactionProps): React.ReactElement => {
	const { contactUuid, name, uuid } = props;

	return (
		<div className=" flex h-[108px] w-full items-center justify-between">
			<Link to={`/accounts/${contactUuid}/transactions/${uuid}`}>{name}</Link>
			<img src={qrcodes} className="mb-2" />
		</div>
	);
};

export default AccountTransaction;

// EOF!
