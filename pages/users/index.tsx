import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import paths from '../../paths';
import { App_Title } from '../../utils';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

interface IProps extends InferGetStaticPropsType<typeof getStaticProps> {}

const Users = ({ users }: IProps) => {
  return (
    <div>
      <Head>
        <title>{App_Title} | Users</title>
      </Head>
      <h1 className="text-2xl font-medium">Users</h1>
      <div className="mt-8">
        {users.map(({ id, name, email, username }) => (
          <Link href={paths.userProfile(username)} key={id}>
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

export default Users;
