import React from 'react';
import './Hero.css';

// Evergreen Components
import { Button } from 'evergreen-ui'

const Hero = () => (
  <section className="Hero">
    <div className="Hero-Inner">
      <h1>The Home of European Football</h1>
      <h4>Get live scores, predictions and the latest news from the continent's top 5 leagues.</h4>
      <Button>Today's Action...</Button>
    </div>
  </section>
);

export default Hero;