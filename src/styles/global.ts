import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    line-height: 17px;
    background-color: ${({ theme }) => theme.colors.bodyBg};
    color: ${({ theme }) => theme.colors.textColor};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle
