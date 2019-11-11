import React from 'react';
import { gql } from "apollo-boost";
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from '../Styles/Theme';
import Router from "./Router";
import Footer from "./Footer";
import { useQuery } from "react-apollo-hooks";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = Styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles/>
        <Router isLoggedIn={isLoggedIn} />
        <Footer/>
      </Wrapper>
    </ThemeProvider>
  );
};