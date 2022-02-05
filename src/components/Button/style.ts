import styled from "styled-components";
import { colors } from "../../constants/colors";
import {ButtonProps} from './index'


export const ButtonContainer = styled.button<ButtonProps>`
  background: ${(props)=> props.ButtonColor};
  color: ${colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-weight: 500;
  font-size: 1rem;
  height: 40px;
  padding: 0 2rem;

  border: none;
  transition: 0.2s;
  &:hover{
    filter: brightness(0.9)
  }
`;
