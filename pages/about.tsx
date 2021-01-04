import Head from 'next/head';
import { App_Title } from '../utils';

const About = () => {
  return (
    <div>
      <Head>
        <title>{App_Title} | About</title>
      </Head>
      <h1 className="bg-gray-100">About</h1>
    </div>
  );
};

export default About;
