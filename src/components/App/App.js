import React from 'react';
import './App.css';

// Routing 
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components 
import NavbarV2 from '../NavbarV2/NavbarV2';
import Main from '../Main/Main';
import Fixture from '../Fixture/Fixture';
import League from '../League/League';
import Team from '../Team/Team';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarV2 />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/league/:leagueID/:leagueName' component={League} /> 
          <Route path='/fixture/:fixtureID' component={Fixture} />
          <Route path='/team/:teamID/:leagueID/:teamName' component={Team} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
