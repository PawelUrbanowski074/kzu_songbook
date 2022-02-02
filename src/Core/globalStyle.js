import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.color.silver};
    margin: 0;
    overflow-wrap: anywhere;
    padding-bottom: 100px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        padding-bottom: 32px;
    }
  }
`; 
