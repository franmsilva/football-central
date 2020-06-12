import React from 'react';
import './FixtureList.css';

// My Components 
import FixtureCard from '../FixtureCard/FixtureCard'

const FixtureList = ({ fixtures }) => (
  <div className="FixtureList">
    {fixtures.length ? 
      fixtures.map(fixture => {
        return <FixtureCard key={fixture.fixture_id} fixture={fixture}/>
      })
      : null 
    }
  </div>
);

export default FixtureList;
