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
import Discussion from "../Discussion/home"
import Newpost from "../Discussion/addFeed"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarV2 />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/league/:leagueID/:leagueName' component={League} /> 
          <Route path='/fixture/:fixtureID' component={Fixture} />
          <Route path='/team/:teamID/:leagueID/:teamName/:leagueName' component={Team} />
          <Route path='/league/Discussion'component={Discussion}/>
          <Route path='/league/NewPost'component={Newpost}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
