import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

import { ThemeProvider } from 'styled-components';
import { light, dark } from './components/styledComponents/theme';
import GlobalStyle from './components/styledComponents/GlobalStyles';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Pages from './pages';
import Login from './pages/login/pages/Login';
import NavbarComponent from './components/Navbar';
import { Layout } from './components/Layout';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const App = () => {
  const localStorageTheme = JSON.parse(localStorage.getItem('theme')) || light;

  const [currentTheme, setCurrentTheme] = useState(localStorageTheme);
  const { data } = useQuery(IS_LOGGED_IN);

  let isLoggedIn = data.isLoggedIn;
  localStorage.setItem('theme', JSON.stringify(currentTheme));

  const handleClick = () => {
    setCurrentTheme(currentTheme === light ? dark : light);
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  };

  document.body.style.backgroundColor = currentTheme.backgroundColor;

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        {isLoggedIn && <NavbarComponent changeTheme={handleClick} />}
        <Layout>{isLoggedIn ? <Pages /> : <Login />}</Layout>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default withRouter(App);
