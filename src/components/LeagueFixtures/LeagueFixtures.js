import React, { useState } from 'react';
import './LeagueFixtures.css';

// My Components 
import FixtureList from '../FixtureList/FixtureList';

const LeagueFixtures = ({fixtures, currentRound}) => {
  const [selectedMatchday, setSelectedMatchday] = useState(currentRound);

  const handleClick = (e) => {
    e.target.name === 'prev' 
      ? setSelectedMatchday((Number(selectedMatchday) - 1).toString()) 
      : setSelectedMatchday((Number(selectedMatchday) + 1).toString())
  }

  return (
    <div className="LeagueFixtures">
      <button name='prev' className="previous round" onClick={handleClick}>&#8249;</button>
      <div>Matchday {selectedMatchday}</div>
      <button name='next' className="next round" onClick={handleClick}>&#8250;</button>
      <FixtureList fixtures={fixtures.filter(fixture => fixture.round.split(' - ')[1] === selectedMatchday)} />
    </div>
  );
}


export default LeagueFixtures;
