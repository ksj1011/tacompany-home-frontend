import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

  body {
    background-color: #0f0f0f;
    color: #e0e0e0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
