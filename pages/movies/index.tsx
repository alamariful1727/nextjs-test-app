import Head from 'next/head';
import { App_Title } from '../../utils';

const Movies = () => {
  return (
    <div>
      <Head>
        <title>{App_Title} | Movies</title>
      </Head>
      <h1>Movies</h1>
    </div>
  );
};

export default Movies;
