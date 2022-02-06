import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${colors.darkBlue};
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  flex-direction: column;
  padding: 150px 125px;
  padding-top: 45px;
`;
