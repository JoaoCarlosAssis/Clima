import { NextPage } from "next";
import Head from "next/head";
import { HightlightCardList } from "../components/HightlightList";
import { Layout } from "../components/Layout";
import { WeatherCardList } from "../components/WeatherCardList";
import { GetLocationContextProvider } from "../contexts/GetLocation";
import { UnitContextProvider } from "../contexts/UnitContext";

const Home: NextPage = () => {
  return (
    <GetLocationContextProvider>
      <UnitContextProvider>
        <Layout>
          <Head>
            <title>Weather - Home</title>
          </Head>
          <WeatherCardList />
          <HightlightCardList />
        </Layout>
      </UnitContextProvider>
    </GetLocationContextProvider>
  );
};

export default Home;
