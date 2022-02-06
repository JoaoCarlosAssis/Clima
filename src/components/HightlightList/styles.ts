import styled from "styled-components";

export const HightlightListContainer = styled.div`
  height: 100%;
  & > h1 {
    font-size: 2rem;
    margin-bottom: 25px;
  }
`;

export const HightlightList = styled.section`
  display: grid;
  grid-template: 1.25fr 1fr / 1fr 1fr;
  height: 90%;
  width: 100%;
  gap: 48px;
`;
