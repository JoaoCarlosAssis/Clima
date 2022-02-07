import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ButtonCurrentLocation = styled.button`
  background: transparent;
  border: none;
  transition: all 0.2s;
  svg {
    width: 35px;
    height: 35px;
    color: ${colors.white};

    background: ${colors.gray};
    border-radius: 50%;
    padding: 0.5rem;
  }
  &:hover {
    filter: brightness(0.9)
  }
`