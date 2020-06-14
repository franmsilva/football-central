import React from 'react';
import './Last5Stats.css';
import MainSpinner from '../MainSpinner/MainSpinner';

const Last5Stats = ({homeTeam, awayTeam}) => (
  <React.Fragment> 
    {homeTeam && awayTeam
      ? (<React.Fragment>
        <div className="Last5Stats">
          <div className='stats__container home'> 
            <div 
              className='stats__hometeam'
              style={{width: `${homeTeam['forme']}`}}
            >
              {homeTeam['forme']}
            </div>
          </div>
          <p className='stats__name'>Overall Form</p>
          <div className='stats__container'>
            <div 
              className='stats__awayteam away' 
              style={{width: `${awayTeam['forme']}`}}
            >
              {awayTeam['forme']}
            </div>
          </div>
        </div>
        <div className="Last5Stats">
          <div className='stats__container home'> 
            <div 
              className='stats__hometeam'
              style={{width: `${homeTeam['att']}`}}
            >
              {homeTeam['att']}
            </div>
          </div>
          <p className='stats__name'>Attacking Potential</p>
          <div className='stats__container'>
            <div 
              className='stats__awayteam away' 
              style={{width: `${awayTeam['att']}`}}
            >
              {awayTeam['att']}
              </div>
          </div>
        </div>
        <div className="Last5Stats">
          <div className='stats__container home'> 
            <div 
              className='stats__hometeam'
              style={{width: `${homeTeam['def']}`}}
            >
              {homeTeam['def']}
            </div>
          </div>
          <p className='stats__name'>Defensive Potential</p>
          <div className='stats__container'>
            <div 
              className='stats__awayteam away' 
              style={{width: `${awayTeam['def']}`}}
            >
              {awayTeam['def']}
              </div>
          </div>
        </div>
        <div className="Last5Stats">
          <div className='stats__container home'> 
            <div 
              className='stats__hometeam'
              style={{width: `${homeTeam['goals_avg']/(homeTeam['goals_avg'] + awayTeam['goals_avg'])*100}%`}}
            >
              {homeTeam['goals_avg']}
            </div>
          </div>
          <p className='stats__name'>Goals Average</p>
          <div className='stats__container'>
            <div 
              className='stats__awayteam away' 
              style={{width: `${awayTeam['goals_avg']/(homeTeam['goals_avg'] + awayTeam['goals_avg'])*100}%`}}
            >
              {awayTeam['goals_avg']}
            </div>
          </div>
        </div>
        <div className="Last5Stats">
          <div className='stats__container home'> 
            <div 
              className='stats__hometeam'
              style={{width: `${homeTeam['goals_against_avg']/(homeTeam['goals_against_avg'] + awayTeam['goals_against_avg'])*100}%`}}
            >
              {homeTeam['goals_against_avg']}
            </div>
          </div>
          <p className='stats__name'>Goals Against Average</p>
          <div className='stats__container'>
            <div 
              className='stats__awayteam away' 
              style={{width: `${awayTeam['goals_against_avg']/(homeTeam['goals_against_avg'] + awayTeam['goals_against_avg'])*100}%`}}
            >
              {awayTeam['goals_against_avg']}
            </div>
          </div>
        </div>
      </React.Fragment>)
      : <MainSpinner />
    }
  </React.Fragment>
);

export default Last5Stats;
