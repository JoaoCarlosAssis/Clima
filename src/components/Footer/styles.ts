import styled from "styled-components";
import { colors } from "../../constants/colors";

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #ffffff;
  background: ${colors.blue};
  width: 100%;
  margin-top: 3rem;
  @media (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  span {
    color: ${colors.lightGrey};
    a {
      margin-left: 0.5rem;
      transition: 0.2s linear;
      &:hover {
        color: ${colors.white};
      }
    }
  }
  div + div {
    display: flex;
    gap: 1rem;
    @media (max-width: 350px) {
      flex-direction: column;
    }

    a {
      display: flex;
      align-items: center;
      color: ${colors.lightGrey};
      border: 1px solid ${colors.lightGrey};
      padding: 0.5rem;
      transition: 0.2s linear;
      svg {
        font-size: 1.275rem;
        margin-right: 0.5rem;
      }
      &:hover {
        color: ${colors.white};
        border-color: ${colors.yellow};
      }
    }
  }
`;
