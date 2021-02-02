import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    line-height: 17px;
    background-color: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    height: 100vh;
  }
`

export default GlobalStyle
