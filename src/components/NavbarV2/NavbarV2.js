import React, { useEffect, useState } from 'react';
import './NavbarV2.css';

// My Components
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const NavbarV2 = () => {
  const [headerStyle, setHeaderStyle] = useState('main_h');

  useEffect(() => {
    // Sticky Header
    window.onscroll = function() {
      if (window.pageYOffset > 50) {
        setHeaderStyle(headerStyle => headerStyle + ' sticky');
      } else {
        setHeaderStyle(headerStyle => headerStyle.replace('sticky', '').trim())
      }
    };
  })

  return (
    <header className={headerStyle}>
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
        </div>
      </div> 
    </header>
  );
}

// // Sticky Header
// $(window).scroll(function() {

//   if ($(window).scrollTop() > 100) {
//       $('.main_h').addClass('sticky');
//   } else {
//       $('.main_h').removeClass('sticky');
//   }
// });

export default NavbarV2;
