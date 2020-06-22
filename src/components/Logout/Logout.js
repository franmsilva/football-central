import React from 'react';
import auth from '../../utils/auth';
import apiService from '../../services/ApiService';
import { Link } from 'react-router-dom';

const Logout = (props) => {
  const handleClick = () => {
    apiService.logout();
    handleAuth();
  };

  const handleAuth = () => {
    props.setIsAuthenticated(false);
    auth.logout(() => props.history.push('/'));
  };

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <Link to="/">
        <button className="confirm-btn">No</button>
      </Link>
      <button className="confirm-btn" onClick={() => handleClick()}>
        Yes
      </button>
    </div>
  );
};

export default Logout;
