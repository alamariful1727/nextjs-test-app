import Head from 'next/head';
import { useRouter } from 'next/router';
import { App_Title } from '../../utils';

const Home = () => {
  const { query } = useRouter();
  console.log('query.username', query.username);
  return (
    <div>
      <Head>
        <title>{App_Title} | Username</title>
      </Head>
      <h1 className="bg-gray-100">Username : {query.username}</h1>
    </div>
  );
};

export default Home;
