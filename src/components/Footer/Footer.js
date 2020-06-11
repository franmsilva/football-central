import React from 'react';
import './Footer.css';

// Evergreen Components
import { Pane, Heading } from 'evergreen-ui';

const Footer = () => (
  <Pane display="flex" flexFlow="column" justifyContent="center" alignItems="center" height={150}>
    <Heading size={700}>
      LOGO HERE
    </Heading>
    <Heading size={300}>
      &copy; <a href='https://github.com/fmsilva1996' rel="noopener noreferrer" target="_blank">fmsilva</a> 2020
    </Heading>
  </Pane>
);

export default Footer;
