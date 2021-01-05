import Head from 'next/head';
import { useRouter } from 'next/router';
import { App_Title } from '../../utils';

const SingleMovie = () => {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>
          {App_Title} | {query.id} Movie
        </title>
      </Head>
      <h1>MovieId : {query.id}</h1>
    </div>
  );
};

export default SingleMovie;
