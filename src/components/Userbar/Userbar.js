import React from 'react';
import { Link } from 'react-router-dom';
import './Userbar.css';

const Navbar = ({ isAuthenticated }) => {
  return (
    <div className="stg">
    <div className="container borderXwidth">
      <ul>

        {isAuthenticated ? (
          <React.Fragment>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
