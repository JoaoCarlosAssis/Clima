import { Header } from "../Header";
import { Container, Main } from "./styles";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Main>
        <Header />
        {children}
      </Main>
    </Container>
  );
};
