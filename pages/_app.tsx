import './../styles/tailwind.css';
import type { AppProps } from 'next/app';
import { CustomLink } from '../components/CustomLink';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <CustomLink href="/about">{(isActive) => (isActive ? 'Active About' : 'In-Active About')}</CustomLink>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
