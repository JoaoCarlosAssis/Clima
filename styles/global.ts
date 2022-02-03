import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    
:root{
  --white: #F2F2F2;
  
  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-700: #202024;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #121214;
  --cyan-500: #61dafb;
  --cyan-200: #04D9D9; 
  --yellow-200: #f2aa52;
  --yellow-500: #eba417;
  --orange-500: #F26849;
  --red-200: #f2507b;
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--gray-900);
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
  font: 400 1rem 'Roboto', sans-serif;
}

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
