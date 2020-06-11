import React from 'react';
import './Navbar.css';

//Routing
import { Link } from 'react-router-dom';

// Assets 
import logo from '../../assets/logo.png'

// Evergreen Components
import { Pane, Button } from 'evergreen-ui';

const Navbar = () => (
  <Pane display="flex" alignItems="center" padding={16} background="rgb(93, 181, 100)" borderRadius={3}>
    <Pane flex={1} alignItems="center" display="flex">
      <Link to='/' >
        <img alt='Logo' src={logo} height={50}/>
      </Link>
    </Pane>
    <Pane>
      <Button marginRight={16}>
        <Link to='/league/524/Premier-League'>Premier League</Link>
      </Button>
      <Button marginRight={16}>
        <Link to='/league/775/La-Liga'>La Liga</Link>
      </Button>
      <Button marginRight={16}>
        <Link to='/league/891/Serie-A'>Serie A</Link>
      </Button>
      <Button marginRight={16}>
        <Link to='/league/754/Bundesliga'>Bundesliga</Link>
      </Button>
      <Button marginRight={16}>
        <Link to='/league/525/Ligue-1'>Ligue 1</Link>
      </Button>
      <Button marginRight={48}>
        <Link to='/league/766/Primeira-Liga'>Primeira Liga</Link>
      </Button>
      <Button>Login</Button>
    </Pane>
  </Pane>
);

export default Navbar;
