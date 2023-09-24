import { Link } from "@remix-run/react";
import qrcode from '../images/qrcode.svg';


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
      <img src={qrcode} className='mb-2'/>
    </div>
    );
};

export default AccountTransaction;

// EOF!