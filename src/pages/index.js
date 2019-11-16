import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Episodes from './episodes/pages/Episodes';
import EpisodesPreview from './episodes/pages/EpisodesPreview';
import Characters from './characters/pages/Characters';
import CharacterPreview from './characters/pages/CharacterPreview';
import StrarshipPreview from './starships/pages/StarshipPreview';

const Pages = () => {
  return (
    <>
      <Suspense>
        <Switch>
          <Route exact path="/episodes" component={Episodes} />
          <Route
            exact
            path="/episodes/:episodeId"
            component={EpisodesPreview}
          />
          <Route exact path="/characters" component={Characters} />
          <Route
            exact
            path="/characters/:characterId"
            component={CharacterPreview}
          />
          <Route
            exact
            path="/starships/:starshipId"
            component={StrarshipPreview}
          />
          <Route exact path="/" component={() => <Redirect to="/episodes" />} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Pages;
