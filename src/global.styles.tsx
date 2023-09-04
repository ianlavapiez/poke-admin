import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
 } 
`;

export const theme = {
  desktopSize: "1280px",
  tabletSize: "768px",
};

export default GlobalStyle;
