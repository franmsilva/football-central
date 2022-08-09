import React from 'react';
import { COPYRIGHT } from '../../constants/symbols';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <div>
      {COPYRIGHT} {new Date().getFullYear()}{' '}
      <a href="https://github.com/fmsilva1996" rel="noopener noreferrer" target="_blank">
        fmsilva
      </a>
    </div>
  </div>
);

export default Footer;
