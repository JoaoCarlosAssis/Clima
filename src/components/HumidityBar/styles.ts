import styled from "styled-components";
import { colors } from "../../constants/colors";

export interface IHumidityBar {
  percentage: number;
}

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

export const BarLabels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 2px 0;
  font-weight: 700;
`;

export const Bar = styled.div<IHumidityBar>`
  width: 100%;
  height: 8px;
  background-color: ${colors.gray};
  position: relative;
  border-radius: 500px;
  overflow: hidden;

  &::after {
    content: "";
    width: ${(props) => props.percentage}%;
    height: inherit;
    background: ${colors.yellow};
    border-radius: inherit;
    position: absolute;
  }
`;
