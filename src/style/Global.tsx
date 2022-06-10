import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@my/ui/dist/theme';
declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'PanamaBold';
  src: url('/fonts/PanamaBold.otf');
}
@font-face {
  font-family: 'ParableLF';
  src: url('/fonts/ParableLF-ExtraBold.otf');
}
body, html{
  overflow-x: hidden;
    background-color: #DCFFEE;
}
ul, li{
  list-style:none
}
img {
  height: auto;
  max-width: 100%;
}
#root {
  display: flex;
  flex-direction: column;
}
h1,h2,h3,h4{
  font-family: 'ParableLF';
  font-weight: 400;
}
a, button, p, ul, li,i {
  font-family: 'PanamaBold';
}
`;

export default GlobalStyle;
