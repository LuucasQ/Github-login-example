import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  #root {
  max-width: 375px;
  max-height: 812px;
  margin: 0 auto;
  }

  input, button {
    outline:none;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }
`;