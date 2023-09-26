import { Link } from "@remix-run/react";
import qrcodes from '../images/qrcodes.svg';


export interface AccountTransactionProps {
	contactUuid: string;
  name: string;
  uuid: string;
}

const AccountTransaction = (props: AccountTransactionProps): React.ReactElement => {
  const { contactUuid, name, uuid} = props;

  return (
    <div className=" flex items-center justify-between h-[108px] w-full">
      <Link to={`/accounts/${contactUuid}/transactions/${uuid}`}>{name}</Link>
      <img src={qrcodes} className='mb-2'/>
    </div>
    );
};

export default AccountTransaction;

// EOF!