import React from 'react';

import { APOSTROPHE } from '../../constants/symbols';

import styles from './Hero.module.css';

const Hero = () => (
  <div className={styles.hero}>
    <h1>
      <span>HOME OF EUROPEAN FOOTBALL</span>
      <br />
      Get live scores, predictions and the latest news from the continent{APOSTROPHE}s top domestic
      leagues
    </h1>

    <div className={styles.mouse}>
      <span></span>
    </div>
  </div>
);

export default Hero;
