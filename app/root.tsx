
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches
} from "@remix-run/react";
import Footer from './components/Footer';
import Header from './components/Header';
import infinityImage from './images/infinity_green.png';
import tailwindStylesheetUrl from '~/styles/tailwind.css';
import customStylesheetUrl from '~/styles/styles.css';

export const links: LinksFunction = () => {
  return [
    // { rel: 'icon', href: '/_static/favicon.ico' },
    { rel: 'stylesheet', href: tailwindStylesheetUrl },
    { rel: 'stylesheet', href: customStylesheetUrl },
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])
  ];
}

export const loader: LoaderFunction = async ({ request }) => {
    return [];
};

export default function App() {
	const matches = useMatches();
	const { id } = matches[matches.length - 1];
  const isIndex = (['routes/_index, routes/contact-us']).includes(id)
  return (
    <html lang="en" className="relative overflow-x-hidden">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        {/* <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <Links />
      </head>
      <body className={isIndex ? 'text-light-black font-Noto Sans overflow-x-hidden relative min-h-screen w-full bg-background-white' : 'text-light-black font-Noto Sans overflow-x-hidden relative min-h-screen w-full bg-background-teal'}>
        <img src={infinityImage} alt="" className="absolute  opacity-50 max-w-[700%] top-[-60px] left-[-275px] overflow-x-hidden -z-10 sm:max-w-[2000px] sm:top-0 sm:left-[100px] max-h-[130vh] sm:max-h-full" />
        <Header routeId={id} />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
