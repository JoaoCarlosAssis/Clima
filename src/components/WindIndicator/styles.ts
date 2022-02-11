import styled from "styled-components";
import { IWindIndicator } from ".";
import { colors } from "../../constants/colors";

export const WindIndicatorContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  p {
    font-size: 1.15rem;
    font-weight: 500;
  }
`;

export const WindIndicatorCompass = styled.div<IWindIndicator>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.gray};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  svg {
    path {
      transform: rotate(-45deg);
      transform-origin: 70% 55%;
    }
    transform: rotate(${(props) => props.windDirectionDeg}deg);
  }
`;
