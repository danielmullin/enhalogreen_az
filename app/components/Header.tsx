import { Link } from "@remix-run/react";
import logo from "../images/enhalo_green_logo.png";

export interface HeaderProps {
  routeId: string;
}
export default function Header(props: HeaderProps): JSX.Element {
  const { routeId } = props;
  // console.log(routeId)
  let headerClass = "opacity-80 w-full text-white sm:bg-transparent";
  let headerNav = (
    <div>
      <div className="sm:hidden">HMBGR</div>
      <div className="hidden text-2.5xl sm:flex">
        <Link to="/#about" className="mr-8">
          About
        </Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
  if (["routes/projects", "routes/account", "routes/cart", "routes/offset-products", "routes/accounts.$contactId", "routes/accounts_.$contactId.transactions", "routes/accounts_.$contactId.transactions_.$transactionId"].includes(routeId)) {
    headerClass = "bg-image";
  }
  if (["routes/qrcodes/products"].includes(routeId)) {
    headerNav = <div></div>;
  }
  return (
    <header className={`mb-8 ${headerClass}`}>
      <div className="min-h-[10vh] px-8 flex items-center justify-between sm:justify-between sm:max-w-screen-lg sm:m-auto">
        <div className="w-44">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        {headerNav}
      </div>
    </header>
  );
}

// EOF!
