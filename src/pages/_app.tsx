import { AppProps } from "next/app";
import { GetLocationContextProvider } from "../contexts/GetLocation";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GetLocationContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </GetLocationContextProvider>
  );
}

export default MyApp;
