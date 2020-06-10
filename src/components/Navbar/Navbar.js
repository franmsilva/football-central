import React from 'react';
import './Navbar.css';

// Evergreen Components
import { Pane, Button, Heading } from 'evergreen-ui'

const Navbar = () => (
  <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
    <Pane flex={1} alignItems="center" display="flex">
      <Heading size={600}>LOGO HERE</Heading>
    </Pane>
    <Pane>
      <Button marginRight={16}>Premier League</Button>
      <Button marginRight={16}>La Liga</Button>
      <Button marginRight={16}>Serie A</Button>
      <Button marginRight={16}>Bundesliga</Button>
      <Button marginRight={16}>Ligue 1</Button>
      <Button marginRight={48}>Primeira Liga</Button>
      <Button>Login</Button>
    </Pane>
  </Pane>
);

export default Navbar;
