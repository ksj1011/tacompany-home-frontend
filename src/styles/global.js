import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;500&display=swap');
  }
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif; 
  }
`;

export default GlobalStyle;
