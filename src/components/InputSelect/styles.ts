import styled from "styled-components";
import { colors } from "../../constants/colors";

export const InputSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 25px;
`;

export const InputItem = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.lightGrey};
  padding: 1rem 0.8rem;
  border: 1px solid transparent;

  &:hover {
    border-color: ${colors.white};
    cursor: pointer;
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    &::after {
      content: ">";
    }
  }
`;
