import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Container, Main } from "./styles";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar/>
      <Main>
        <Header />
        {children}
      </Main>
    </Container>
  );
};
