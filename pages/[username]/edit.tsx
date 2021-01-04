import Head from 'next/head';
import { useRouter } from 'next/router';
import { App_Title } from '../../utils';

const Home = () => {
  const { query } = useRouter();
  console.log('query', query);
  return (
    <div>
      <Head>
        <title>{App_Title} | Profile Edit</title>
      </Head>
      <h1 className="bg-gray-100">User : Edit</h1>
    </div>
  );
};

export default Home;
