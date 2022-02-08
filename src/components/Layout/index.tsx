import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Container, Main } from "./styles";
import {Rings} from 'react-loader-spinner'
import { LoaderSpinnerContainer } from "../Sidebar/styles";
import { colors } from "../../constants/colors";
import { useGetLocationContext } from "../../contexts/GetLocation";


export const Layout: React.FC = ({ children }) => {
  const {contextState} = useGetLocationContext()
  return (
    <Container>
      {contextState === 'loading' ? (
        <LoaderSpinnerContainer>
          <Rings ariaLabel="loading-indicator" color={colors.lightBlue} width={200} height={200} />
        </LoaderSpinnerContainer>
      ) : (
        <>
          <Sidebar />
          <Main>
            <Header />
            {children}
          </Main>
        </>
      )}
    </Container>
  );
};
