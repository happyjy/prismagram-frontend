import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "../Styles/GlobalStyles";
import Theme from '../Styles/Theme';
import Router from "./Router";

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Router isLoggedIn={false} />
    </>
  </ThemeProvider>
);