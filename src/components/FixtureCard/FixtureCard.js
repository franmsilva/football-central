import React from 'react';
import './FixtureCard.css';

const FixtureCard = ({ fixture }) => (
  <div className="FixtureCard">
    <h1>{fixture.homeTeam.team_name} vs {fixture.awayTeam.team_name}</h1>
  </div>
);

export default FixtureCard;
