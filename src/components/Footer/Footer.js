import React from 'react';
import './Footer.css';

// Assets 
import logo from '../../assets/logo.png';

// Evergreen Components
import { Pane, Heading } from 'evergreen-ui';

const Footer = () => (
  <Pane display="flex" flexFlow="column" justifyContent="center" alignItems="center" height={150} background="rgb(93, 183, 99)">
    <img alt="Logo" src={logo} height={40}/>
    <Heading size={300} marginTop={25}>
      &copy; <a href='https://github.com/fmsilva1996' rel="noopener noreferrer" target="_blank">fmsilva</a> 2020
    </Heading>
  </Pane>
);

export default Footer;
