import type { AppProps } from 'next/app';
import Layout from './../components/Layout';
import './../styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
