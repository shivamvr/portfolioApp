import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 } 
 html{
   @media (max-width: 1070px){
     font-size: 90%;
   }
 }
body {
    font-family: Helvetica, Sans-Serif;
    background: #1a1a1a;
    overflow-x: hidden;
  }
`

export default GlobalStyle
