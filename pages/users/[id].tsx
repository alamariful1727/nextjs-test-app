import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { User } from '../../types';
import { App_Title } from '../../utils';

type Props = {
  user: User;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const UserProfile = ({ user: { id, name, email, username } }: Props) => {
  const router = useRouter();

  //? If the page is not yet generated, this will be displayed
  //? initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>
          {App_Title} | {id}
        </title>
      </Head>
      <div className="border border-yellow-500 bg-gray-800 rounded-md text-white py-5 px-2 mb-5">
        <h2>
          <span className="font-bold">Name</span> : {name}
        </h2>
        <h2>
          <span className="font-bold">Email</span> : {email}
        </h2>
        <h2>
          <span className="font-bold">Username</span> : {username}
        </h2>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.params?.id}`);
  const user: User = await res.json();

  return {
    props: {
      user,
    },
    //? Re-generate the post at most once per 5 second
    //? if a request comes in
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    //? Only `/user/1` and `/user/2` are generated at build time
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    //? Enable statically generating additional pages
    //? For example: `/user/3`
    fallback: true,
  };
};

export default UserProfile;
