import { NextPage } from "next";
import Head from "next/head";
import { HightlightCardList } from "../components/HightlightList";
import { Layout } from "../components/Layout";
import { WeatherCardList } from "../components/WeatherCardList";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Weather - Home</title>
      </Head>
      <WeatherCardList />
      <HightlightCardList />
    </Layout>
  );
};

export default Home;
