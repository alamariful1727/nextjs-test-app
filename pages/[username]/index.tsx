import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import paths from '../../paths';
import { App_Title } from '../../utils';

const UserProfile = () => {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>
          {App_Title} | {query.username}
        </title>
      </Head>
      <h1>Username : {query.username}</h1>
      <Link href={paths.userProfileEdit(query.username as string)}>
        <button className="border-2 border-gray-700 px-5 py-2 mt-5 text-yellow-500 capitalize underline">edit</button>
      </Link>
    </div>
  );
};

export default UserProfile;
