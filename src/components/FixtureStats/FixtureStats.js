import React from 'react';
import './FixtureStats.css';
import StatsBar from '../StatsBar/StatsBar';
import StatsBarNum from '../StatsBarNum/StatsBarNum';

const FixtureStats = ({statistics}) => (
  <React.Fragment> 
    {statistics 
      ? <React.Fragment>
          <StatsBar statHome={statistics['Ball Possession'].home} statAway={statistics['Ball Possession'].away} statName='Possession'/>
          <StatsBarNum statHome={statistics['Total passes'].home} statAway={statistics['Total passes'].away} statName='Passes' />
          <StatsBar statHome={statistics['Passes %'].home} statAway={statistics['Passes %'].away} statName='Passes %' />
          <StatsBarNum statHome={statistics['Total Shots'].home} statAway={statistics['Total Shots'].away} statName='Total Shots' />
          <StatsBarNum statHome={statistics['Shots on Goal'].home} statAway={statistics['Shots on Goal'].away} statName='Shots on Target' />
          <StatsBarNum statHome={statistics['Fouls'].home} statAway={statistics['Fouls'].away} statName='Fouls' />
          <StatsBarNum statHome={statistics['Corner Kicks'].home} statAway={statistics['Corner Kicks'].away} statName='Corners' />
          <StatsBarNum statHome={statistics['Offsides'].home} statAway={statistics['Offsides'].away} statName='Offsides' />
          <StatsBarNum statHome={statistics['Yellow Cards'].home} statAway={statistics['Yellow Cards'].away} statName='Yellow Cards' />
          <StatsBarNum statHome={statistics['Red Cards'].home} statAway={statistics['Red Cards'].away} statName='Red Cards' />
        </React.Fragment>
    : <div>No Available Stats</div>
    }
  </React.Fragment>
);  

export default FixtureStats;
