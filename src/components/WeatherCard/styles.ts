import styled from "styled-components";
import { colors } from "../../constants/colors";

export const WeatherCardTemp = styled.div`
  display: inline-flex;
  gap: 50px;
  width: 100%;
  justify-content: center;
  font-size: 1.25rem;
  margin-top: 25px;
  padding: 0 20px;
  font-weight: 700;
  p:last-of-type {
    font-weight: 500;
    color: ${colors.gray};
  }
`;
