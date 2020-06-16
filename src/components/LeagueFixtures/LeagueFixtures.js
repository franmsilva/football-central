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
    <React.Fragment>
      <div className='matchday__selector'>
        <button name='prev' className="previous round" onClick={handleClick}>&#8249;</button>
        <div className='current__matchday'>Matchday {selectedMatchday}</div>
        <button name='next' className="next round" onClick={handleClick}>&#8250;</button>
      </div>
      <FixtureList fixtures={fixtures.filter(fixture => fixture.round.split(' - ')[1] === selectedMatchday)} />
    </React.Fragment>
  );
}


export default LeagueFixtures;
