import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Logout from '../Logout/Logout';

const Dashboard = ({ setIsAuthenticated }) => {
  return (
    <div className="dashboard">
      <Switch>
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route path="/profile" component={Profile} />
        <Route
          path="/logout"
          render={(props) => (
            <Logout {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
      </Switch>
    </div>
  );
};

export default Dashboard;
