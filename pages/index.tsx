import Head from 'next/head';
import { App_Title } from '../utils';

const Home = () => {
  return (
    <div>
      <Head>
        <title>{App_Title} | Home</title>
      </Head>
      <h1 className="bg-gray-100">Home</h1>
    </div>
  );
};

export default Home;
