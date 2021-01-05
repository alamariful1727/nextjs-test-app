import Head from 'next/head';
import { App_Title } from '../utils';

const Home = () => {
  return (
    <div>
      <Head>
        <title>{App_Title}</title>
      </Head>
      <h1>Welcome to Next World!!</h1>
    </div>
  );
};

export default Home;
