import { createGlobalStyle, css } from 'styled-components';
// import { color, typography } from './styles';

export const cssColourVars = css`
  --navy: #24195a;
  --purple: #5952A2;
  --royal: #3a55a4;
  --aqua: #3fc6f3;
  --aqua-light: #51D1F5;
  --aqua-dark: #32A2CC;
  --pink: #cf4e9c;
  --yellow: #fde006;
  --text: #212b36;
  --text-inverted: #ffffff;
  --neutral-100: #ffffff;
  --neutral-200: #f5f6f8;
  --neutral-300: #dfe3e8;
  --neutral-400: #b6b9bd;
  --neutral-500: #6d737b;
  --neutral-600: #212b36;
  --success-100: #3eba81;
  --success-200: #26a96c;
  --success-300: #276738;
  --error-100: #fc5130;
  --error-200: #d94126;
  --error-300: #b6311d;
  --warning-100: #fdca40;
  --warning-200: #e8b63a;
  --warning-300: #d4a233;
`;

export const cssFontWeightVars = css`
  --fw-thin: 100;
  --fw-extra-light: 200;
  --fw-light: 300;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semi-bold: 600;
  --fw-bold: 700;
  --fw-extra-bold: 800;
  --fw-black: 900;
`;

export const htmlStyles = css`
  font-size: 62.5%; /* Means 1rem = 10px */
  box-sizing: border-box;
`;

export const globalElementStyles = css`
  box-sizing: inherit;
`;

export const bodyStyles = css`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
`;

export const GlobalStyle = createGlobalStyle`
  :root{
    ${cssColourVars}
    ${cssFontWeightVars}
  }

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