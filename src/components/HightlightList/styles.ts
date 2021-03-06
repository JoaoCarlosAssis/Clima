import styled from "styled-components";

export const HightlightListContainer = styled.div`
  & > h1 {
    font-size: 2rem;
    margin-bottom: 25px;
  }
`;

export const HightlightList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-template-rows: 1fr 0.75fr;
  width: 100%;
  gap: 48px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
