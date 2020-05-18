import { createGlobalStyle, css } from 'styled-components';
// import { color, typography } from './styles';


export const htmlStyles = css`
  font-size: 62.5%; /* Means 1rem = 10px */
  box-sizing: border-box;
`;

export const globalElementStyles = css`
  box-sizing: inherit;
`;

export const bodyStyles = css`
  font-family: 'Montserrat', sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
  html{
    ${htmlStyles}
  }
  *, *:before, *:after {  
    ${globalElementStyles}
  }
  body {
    ${bodyStyles}
  }
`;