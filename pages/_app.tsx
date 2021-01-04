import './../styles/tailwind.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Head from 'next/head';
import paths from '../paths';
import { App_Title } from '../utils';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>{App_Title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={paths.about}>
        <button className="border-2 px-3 py-2 my-2">Click to go About page!!</button>
      </Link>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
