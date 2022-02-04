import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  
  body::-webkit-scrollbar {
    width: 0.3rem;
  }

  body::-webkit-scrollbar-track {
    background: var(--background);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--yellow-500);
    border-radius: 2rem;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    scroll-behavior: smooth;
  }

  body, input, textarea, select, button{
  font: 400 1rem 'Raleway', sans-serif;
 } 

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
