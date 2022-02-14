import { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";


const Home: NextPage = () => {
  return (
    <>
      <Layout />
      <Head>
        <title>Weather - Home</title>
      </Head>
    </>

  );
};

export default Home;
