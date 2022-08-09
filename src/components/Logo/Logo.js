import Image from 'next/image';
import React from 'react';
import styles from './Logo.module.css';

const Logo = () => (
  <div className={styles.logo}>
    <div className={styles.text}>
      <span className={styles.footballText}>FOOTBALL</span>
      <Image className={styles.icon} alt="icon" src="/logo.svg" layout="fill" />
      <span className={styles.centralText}>CENTRAL</span>
    </div>
    <div className={styles.line}></div>
  </div>
);

export default Logo;
