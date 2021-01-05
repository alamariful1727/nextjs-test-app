import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import paths from '../../paths';
import { User } from '../../types';
import { App_Title } from '../../utils';

type Props = {
  users: User[];
};

const Users = ({ users }: Props) => {
  return (
    <div>
      <Head>
        <title>{App_Title} | Users</title>
      </Head>
      <h1 className="text-2xl font-semibold">User List</h1>
      <div className="mt-8">
        {users.map(({ id, name, email, username }) => (
          <Link href={paths.userProfile(id)} key={id}>
            <a className="block border border-yellow-500 bg-gray-800 rounded-md text-white py-5 px-2 mb-5">
              <h2>
                <span className="font-bold">Name</span> : {name}
              </h2>
              <h2>
                <span className="font-bold">Email</span> : {email}
              </h2>
              <h2>
                <span className="font-bold">Username</span> : {username}
              </h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users: User[] = await res.json();

    return {
      props: {
        users,
      },
      //? Next.js will attempt to re-generate the page:
      //? - When a request comes in
      //? - At most once every second
      revalidate: 1, //? In seconds
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Users;
