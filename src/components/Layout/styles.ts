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
  height: 100%;
  @media (min-width: 920px) {
    overflow-y: scroll;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 50px 125px;
    padding-top: 45px;
  }
  padding: 28px;
`;
