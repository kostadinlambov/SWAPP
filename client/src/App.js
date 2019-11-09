import React, { Suspense, useState } from 'react';
import { withRouter} from 'react-router-dom';
import './App.css';

import NavbarComponent from './components/navbar/Navbar';

import { Layout } from './components/layout/Layout';

import { ThemeProvider } from 'styled-components';
import { light, dark } from './components/styledComponents/theme';
import GlobalStyle from './components/styledComponents/GlobalStyles';

import Home from './Home';

const App = props => {
  const [currentTheme, setCurrentTheme] = useState(light);

  const handleClick = () => {
    setCurrentTheme(currentTheme === light ? dark : light);
  };

  document.body.style.backgroundColor = currentTheme.backgroundColor;

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <NavbarComponent changeTheme={handleClick} />
        <Layout>
            <Home />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default withRouter(App);
