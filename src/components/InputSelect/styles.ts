import styled from "styled-components";
import { colors } from "../../constants/colors";

export const InputSelectContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  border: 1px solid ${colors.gray};
  display: flex;
  align-items: center;
  position: relative;
`;
export const InputBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  color: ${colors.white};
  cursor: pointer;

  span {
    padding-top: 0.1rem;
  }
`;

export const InputContent = styled.div`
  position: absolute;
  top: 110%;
  padding: 2rem 0.5rem;
  background: transparent;
  width: 100%;
  color: ${colors.gray};
`;
export const InputItem = styled.div`
  transition: color 0.2s;
  
  + div {
    padding-top: 1.5rem;
  }

  &:hover {
    color: ${colors.white};
    cursor: pointer;
  }
`;
