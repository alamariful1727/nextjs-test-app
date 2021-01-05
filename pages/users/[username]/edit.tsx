import Head from 'next/head';
import { useRouter } from 'next/router';
import { App_Title } from '../../../utils';

const UserEdit = () => {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>{App_Title} | Profile Edit</title>
      </Head>
      <h1>{query.username} : Edit</h1>
    </div>
  );
};

export default UserEdit;
