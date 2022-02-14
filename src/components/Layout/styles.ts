import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${colors.darkBlue};
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  @media (min-width: 920px) {
    overflow-y: scroll;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 50px 125px;
    padding-top: 45px;
  }
  @media (max-width: 280px){
    width: 107%;
  }
`;
