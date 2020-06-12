import React from 'react';
import './Footer.css';

// Evergreen Components
import { Pane, Heading } from 'evergreen-ui';

const Footer = () => (
  <Pane display="flex" flexFlow="column" justifyContent="center" alignItems="center" height={75} background="rgb(93, 181, 100)">
    <Heading size={300}>
      &copy; 2020 <a href='https://github.com/fmsilva1996' rel="noopener noreferrer" target="_blank">fmsilva</a> 
    </Heading>
  </Pane>
);

export default Footer;
