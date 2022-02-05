import styled from "styled-components";
import { colors } from "../../constants/colors";

export const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  background: ${colors.blue};
  padding: 20px 25px;

  h2 {
    font-size: 1.5vw;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const CardImage = styled.div`
  height: 100%;
  width: 60%;
  max-width: 12.5vmin;
`;
