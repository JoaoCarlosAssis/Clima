import styled from "styled-components";
import { colors } from "../../constants/colors";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background: ${colors.blue};
  padding: 20px 0;
`;

export const CardTitle = styled.h1`
  font-size: 1.8vw;
  font-weight: 500;
  margin-bottom: 10px;
  white-space: nowrap;
`;

export const CardImage = styled.div`
  height: 100%;
  width: 50%;
  max-width: 12.5vmin;
`;
