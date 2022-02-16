import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  justify-content: end;

  @media (max-width: 920px) {
    padding: 2rem;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;
