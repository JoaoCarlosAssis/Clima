import styled from "styled-components";
import { colors } from "../../constants/colors";

interface ISelectorItem {
  isSelected: boolean;
}

export const Selector = styled.div`
  display: flex;
`;

export const SelectorItem = styled.div<ISelectorItem>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.8rem;
  margin-left: 15px;
  padding: 20px;
  border-radius: 5px;
  background: ${({ isSelected }) => (isSelected ? colors.white : colors.blue)};
  color: ${({ isSelected }) => (isSelected ? colors.black : colors.white)};
  font-weight: bold;
  cursor: pointer;
  transition: background 0.15s ease-in;
  user-select: none;

  &:hover {
    filter: opacity(0.8);
  }
`;
