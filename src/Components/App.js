import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "../Styles/GlobalStyles";
import Theme from '../Styles/Theme'

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle/>
    hello this is App.js 
  </ThemeProvider>
);
