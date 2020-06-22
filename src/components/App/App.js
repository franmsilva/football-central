import React, { useState } from 'react';
import auth from '../../utils/auth';

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
import Userbar from "../Userbar/Userbar"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Logout from "../Logout/Logout"

function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarV2 />
        <Userbar isAuthenticated={isAuthenticated}/>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/league/:leagueID/:leagueName' component={League} /> 
          <Route path='/fixture/:fixtureID' component={Fixture} />
          <Route path='/team/:teamID/:leagueID/:teamName/:leagueName' component={Team} />
          <Route path='/league/Discussion' component={Discussion}/>
          <Route path='/league/NewPost' component={Newpost}/>
          <Route
          path="/login"
          render={(props) => (
            <Login {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />          <Route
          path="/register"
          render={(props) => (
            <Register {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
                <Route
          path="/logout"
          render={(props) => (
            <Logout {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
