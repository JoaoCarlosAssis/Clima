import styled from "styled-components";
import { colors } from "../../constants/colors";

export const SidebarContainer = styled.aside`
  width: 25%;
  height: 100vh;
  background: ${colors.blue};

  padding: 2rem;
`

export const HeaderSidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg{
    width: 35px;
    height: 35px;
    color: ${colors.white};

    background: ${colors.gray};
    border-radius: 50%;
    padding: 0.5rem;
  }
`

export const ContentSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  color: ${colors.lightGrey};

  strong{
    color: ${colors.white};
    font-size: 7rem;
    font-weight: 500;

    span{
      font-size:2rem;
      font-weight: 400;
      color: ${colors.lightGrey};
    }
  }

  p{
    font-size: 2.25rem;
    font-weight: 600;
    padding: 2rem;
  }

  span{
    font-size: 1.125rem;
    font-weight: 500;

  }

`

export const FooterSidebar = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  svg{
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`