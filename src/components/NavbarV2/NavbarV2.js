import React from 'react';
import './NavbarV2.css';

// My Components
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const NavbarV2 = () => {
  return (
    <header className="main_h sticky">
      <div className="row">
        <Link to='/'>
          <Logo />
        </Link>
        <div className="container borderXwidth">
          <Link to='/league/524/Premier-League'>Premier League</Link>
          <Link to='/league/775/La-Liga'>La Liga</Link>
          <Link to='/league/754/Bundesliga'>Bundesliga</Link>
          <Link to='/league/891/Serie-A'>Serie A</Link>
          <Link to='/league/525/Ligue-1'>Ligue 1</Link>
          <Link to='/league/766/Primeira-Liga'>Primeira Liga</Link>
          <Link to='/league/Discussion'>Discussion Page</Link>

        </div>
      </div> 
    </header>
  );
}

export default NavbarV2;
