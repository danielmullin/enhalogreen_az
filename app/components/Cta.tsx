import { Link } from "@remix-run/react";

export interface CtaProps {
  linkTo: string;
  text: string;
}

const Cta = (props: CtaProps): React.ReactElement => {
  const { linkTo, text } = props;

  return (
    <Link to={linkTo} className='w-full text-center'>
      <button className='bg-white text-button-green z-10 relative text-xl px-3 py-2 max-w-430 rounded-half w-full sm:py-4'>{text}</button>
    </Link>
    );
};

export default Cta;

// EOF!
