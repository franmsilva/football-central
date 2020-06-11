import React from 'react';
import './App.css';

// Routing 
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components 
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Fixture from '../Fixture/Fixture';
import League from '../League/League';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/league/:leagueID/:leagueName' component={League} /> 
          <Route path='/fixture/:fixtureID' component={Fixture} />
          <Route path='/team/:teamID/:leagueID/:teamName' component={Team} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
