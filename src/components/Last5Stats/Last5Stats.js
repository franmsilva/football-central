import React from 'react';
import './Last5Stats.css';

// My Components
import MainSpinner from '../MainSpinner/MainSpinner';
import StatsBar from '../StatsBar/StatsBar';
import StatsBarNum from '../StatsBarNum/StatsBarNum';

const Last5Stats = ({homeTeam, awayTeam}) => (
  <React.Fragment> 
    {homeTeam && awayTeam
      ? <React.Fragment>
          <StatsBar statHome={homeTeam['forme']} statAway={awayTeam['forme']} statName='Overall Form' />
          <StatsBar statHome={homeTeam['att']} statAway={awayTeam['att']} statName='Attacking Potential' />
          <StatsBar statHome={homeTeam['def']} statAway={awayTeam['def']} statName='Defensive Potential' />
          <StatsBarNum statHome={homeTeam['goals_avg']} statAway={awayTeam['goals_avg']} statName='Goals Average' />
          <StatsBarNum statHome={homeTeam['goals_against_avg']} statAway={awayTeam['goals_against_avg']} statName='Goals Against Average' />
        </React.Fragment>
      : <MainSpinner />
    }
  </React.Fragment>
);

export default Last5Stats;
