import React, { Suspense, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { ThemeProvider} from 'styled-components';
import { light, dark } from './components/styledComponents/theme';
import GlobalStyle from './components/styledComponents/GlobalStyles'

import NavbarComponent from './components/navbar/Navbar';
import LoginForm from './pages/login/LoginForm';
import CharacterPreview from './pages/characters/components/CharacterPreview';
import Characters from './pages/characters/pages/Characters';
import Episodes from './pages/episodes/pages/Episodes';
import EpisodesPreview from './pages/episodes/components/EpisodePreview';
import StrarshipPreview from './pages/starships/components/StarshipPreview';

import Test from './components/styledComponents/Test';
import { Layout } from './components/layout/Layout';

const App = (props) =>  {
  const [currentTheme, setCurrentTheme] = useState(light);

  const handleClick = () => {
    setCurrentTheme(
      currentTheme === light ? dark : light
    )
  }
  return (
    <>
      <ThemeProvider theme={currentTheme} >
        <NavbarComponent changeTheme={handleClick}/>
        <Layout>
          <Suspense>
            <Switch>
              <Route exact path="/login" component={LoginForm}/>
              <Route exact path="/episodes" component={Episodes}/>
              <Route exact path="/episodes/:episodeId" component={EpisodesPreview}/>
              <Route exact path="/characters" component={Characters}/>
              <Route exact path="/characters/:characterId" component={CharacterPreview}/>
              <Route exact path="/starships/:starshipId" component={StrarshipPreview}/>
            </Switch>
            
            <Test></Test>
          </Suspense>
        </Layout>
        <GlobalStyle />
        </ThemeProvider>
    </>
  );
}

export default withRouter(App);
