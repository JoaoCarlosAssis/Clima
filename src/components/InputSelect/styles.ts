import styled from "styled-components";
import { colors } from "../../constants/colors";


export const InputSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputItem = styled.div`
  color: ${colors.lightGrey};
  padding: 1rem 0.8rem;
  
  &:hover {
    border: 1px solid ${colors.white};
    cursor: pointer;
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    &::after {
      content: '>';
    }
    
  }
`;
