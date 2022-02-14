import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Container, Main } from "./styles";
import { Rings } from "react-loader-spinner";
import { LoaderSpinnerContainer } from "../Sidebar/styles";
import { colors } from "../../constants/colors";
import { GetLocationContextProvider, useGetLocationContext } from "../../contexts/GetLocation";
import { SidebarContextProvider } from "../../contexts/SidebarContext";
import { SearchLocationContextProvider } from "../../contexts/SearchLocationContext";
import { FooterContainer } from "../Footer";
import { UnitContextProvider } from "../../contexts/UnitContext";
import { WeatherCardList } from "../WeatherCardList";
import { HightlightCardList } from "../HightlightList";

export const Layout: React.FC = () => {
  const { contextState } = useGetLocationContext();
  return (
    <Container>
      {contextState === "loading" ? (
        <LoaderSpinnerContainer>
          <Rings
            ariaLabel="loading-indicator"
            color={colors.lightBlue}
            width={200}
            height={200}
          />
        </LoaderSpinnerContainer>
      ) : (
        <>
          <GetLocationContextProvider>
            <UnitContextProvider>
              <SidebarContextProvider>
                <SearchLocationContextProvider>
                  <Sidebar />
                </SearchLocationContextProvider>
              </SidebarContextProvider>
              <Main>
                <Header />
                <WeatherCardList />
                <HightlightCardList />
                <FooterContainer />
              </Main>
            </UnitContextProvider>
          </GetLocationContextProvider>
        </>
      )}
    </Container>
  );
};
