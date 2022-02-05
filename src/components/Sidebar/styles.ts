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
  
  svg {
    width: 35px;
    height: 35px;
    color: ${colors.white};

    background: ${colors.gray};
    border-radius: 50%;
    padding: 0.5rem;
  }
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
  `

export const FooterSidebar = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 1rem;
    align-items: center;
    svg {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }
  }
`;
