import { Link } from "@remix-run/react";

export interface AccountTransactionProps {
	contactUuid: string;
  name: string;
  uuid: string;
}

const AccountTransaction = (props: AccountTransactionProps): React.ReactElement => {
  const { contactUuid, name, uuid} = props;

  return (
    <div>
      <Link to={`/accounts/${contactUuid}/transactions/${uuid}`}>{name}</Link>
    </div>
    );
};

export default AccountTransaction;

// EOF!