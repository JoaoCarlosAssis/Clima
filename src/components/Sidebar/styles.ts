import styled from "styled-components";
import { colors } from "../../constants/colors";

export const SidebarContainer = styled.aside`
  width: 30%;
  min-width: 300px;
  height: 100vh;
  background: ${colors.blue};

  padding: 2rem;
`;

export const HeaderSidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentSidebar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  color: ${colors.lightGrey};
  gap: 1.5rem;
  justify-content: space-between;
`;

export const MainContentSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: ${colors.white};
    font-size: 7rem;
    font-weight: 500;

    span {
      font-size: 2rem;
      font-weight: 400;
      color: ${colors.lightGrey};
    }
  }

  p {
    font-size: 2.25rem;
    font-weight: 600;
    padding: 2rem;
  }
`;

export const FooterSidebar = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    svg {
      font-size: 1.2rem;
      margin-right: 0.3rem;
    }
  }
`;


export const ContainerSearchLocation = styled.div`
  position: relative;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  color: ${colors.white};
  font-weight: bold;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.7);
  }

  
`;

export const SearchLocationContent = styled.div`
padding: 3rem 0;
display: flex;
gap: 0.5rem;
  div {
    padding: 0 0.5rem;
    width: 80%;
    display: flex;
    align-items: center;
    height: 2.5rem;
    border: 1px solid ${colors.gray};
    svg{
      margin-right: 0.5rem;
      width: 20px;
      height: 20px;
    }
    input {
      border: none;
      width: 8.125rem;
      background: transparent;
      outline: none;
      color: ${colors.white};
      &::placeholder{
        color: ${colors.gray};
        font-weight: ;
      }
    }
  }

  button{
    background: ${colors.lightBlue};
    border: none;
    color: ${colors.white};
    padding: 0 0.5rem;
    font-weight: 600;
  }
`;


export const LatestResearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`

export const LoaderSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`