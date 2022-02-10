import styled from "styled-components";
import { colors } from "../../constants/colors";

export const WeatherCardTemp = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 1.1rem;
  margin-top: 2px;
  padding: 0 20px;
  p:last-of-type {
    color: ${colors.gray};
  }
`;
