import React, { Component, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';

import LoginForm from './pages/login/LoginForm';
import CharacterPreview from './pages/characters/components/CharacterPreview';
import Characters from './pages/characters/pages/Characters';
import Episodes from './pages/episodes/pages/Episodes';
import EpisodesPreview from './pages/episodes/components/EpisodePreview';

import Starships from './pages/starships/pages/Starships';
import StrarshipPreview from './pages/starships/components/StarshipPreview';

import Test from './components/Test';
import NavbarComponent from './pages/navbar/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <NavbarComponent />
        <Suspense>
          <Switch>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/episodes" component={Episodes}/>
            <Route exact path="/episodes/:episodeId" component={EpisodesPreview}/>
            <Route exact path="/characters" component={Characters}/>
            <Route exact path="/characters/:characterId" component={CharacterPreview}/>
            {/* <Route exact path="/starships" component={Starships}/> */}
            <Route exact path="/starships/:starshipId" component={StrarshipPreview}/>
          </Switch>
          
          <Test></Test>
        </Suspense>
      </div>
    </>
  );
}

export default withRouter(App);
