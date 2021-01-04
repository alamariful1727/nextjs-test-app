import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Test Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-gray-100">Home</h1>
    </div>
  );
};

export default Home;
