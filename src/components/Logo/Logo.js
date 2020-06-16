import React from 'react';
import './Logo.css';

// Assets 
import icon from '../../assets/logo.svg'

const Logo = () => (
  <div className="Logo">
    <div className="Text">
      <span id="football">FOOTBALL</span>
      <img alt='icon' src={icon} /> 
      <span id="central">CENTRAL</span>
    </div> 
    <div className="Line"></div>
  </div>
);

export default Logo;
