import React from 'react';
import './FixtureList.css';

// My Components 
import FixtureCard from '../FixtureCard/FixtureCard'

const FixtureList = ({ fixtures }) => (
  <div className="TodaysAction">
    <h2>Today's Action</h2>
    <div className="fixturecontainer" style={{display: "flex"}}>
      {fixtures.length ? 
        fixtures.map(fixture => {
          return <FixtureCard key={fixture.fixture_id} fixture={fixture}/>
        })
        : null 
      }
    </div>
  </div>
);

export default FixtureList;
