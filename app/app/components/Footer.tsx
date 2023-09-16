import { Link, useMatches } from '@remix-run/react';

export default function Footer(): JSX.Element
{
  return <footer className="bg-black text-base text-white fixed bottom-0 w-full">
    <div className='max-w-960 m-auto flex-wrap justify-between sm:flex'>
        <div className="py-8">
            <ul id="id" className="flex px-4">
                <li id="id" className="mr-2">
                    <Link to="https://twitter.com/" className="nav-link">Twitter</Link>
                </li>
                <li id="menu-item-91" className="">
                    <Link to="https://www.linkedin.com/" className="nav-link">Linkedin</Link>
                </li>
            </ul>
        </div>
        <div className="pb-8 sm:py-8">
            <ul id="menu-terms-links" className="px-4">
                <li id="menu-item-179" className="class">
                    <Link to="https://enhalogreen.com/privacy-policy/" aria-current="page">Privacy Policy &amp; Terms of Use</Link>
                </li>
            </ul>
        </div>
    </div>
  </footer>;
}
