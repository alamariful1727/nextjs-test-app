import Link from 'next/link';
import Head from 'next/head';
import paths from '../paths';
import { App_Title } from '../utils';

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <div>
      <Head>
        <title>{App_Title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <header className="h-16 flex justify-between items-center px-6 bg-gray-800 text-white font-medium">
          <Link href={paths.home}>
            <a className="font-bold text-xl">Logo</a>
          </Link>
          <div className="flex space-x-3">
            <Link href={paths.contact}>
              <a className="text-yellow-500 capitalize underline">contact us</a>
            </Link>
            <Link href={paths.users}>
              <a className="text-yellow-500 capitalize underline">users</a>
            </Link>
            <Link href={paths.userProfile('3')}>
              <a className="text-yellow-500 capitalize underline">Profile</a>
            </Link>
          </div>
        </header>
        <div className="flex-1 px-6 my-16 sm:px-0 container mx-auto">{children}</div>
        <footer className="h-12 flex justify-center items-center border-t border-gray-300">
          <p className="text-gray-900 font-medium">© 2021 {App_Title}</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
