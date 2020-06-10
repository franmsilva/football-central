import React from 'react';
import './TodaysAction.css';

// My Component 
import FixtureCard from '../FixtureCard/FixtureCard'

const TodaysAction = ({ fixtures }) => (
  <div className="TodaysAction">
    <h2>Today's Action</h2>
    {fixtures.length ? 
      fixtures.map(fixture => {
        return <FixtureCard key={fixture.fixture_id} fixture={fixture}/>
      })
      : null 
    }
  </div>
);

export default TodaysAction;
