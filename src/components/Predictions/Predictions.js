import React from 'react';
import './Predictions.css';

import FixtureList from '../FixtureList/FixtureList';
import Last5Stats from '../Last5Stats/Last5Stats';
import MainSpinner from '../MainSpinner/MainSpinner';

const Predictions = ({predictions}) => {
  const getMatchWinner = (matchWinner) => {
    switch (matchWinner) {
      case '1':
        return predictions.teams.home.team_name
      case '1 N':
        return `${predictions.teams.home.team_name} or Draw`
      case 'N':
        return 'Draw'
      case 'N 2':
        return `Draw or ${predictions.teams.away.team_name}`
      case '2':
        return predictions.teams.away.team_name
      default: 
        return 'No Prediction Available'
    }
  }
  return (
    <React.Fragment>
      {predictions ?
        (<div className="predictions">
          <h1>Our Predictions</h1>
          <div className='predictions__container'>
            <div className='predictions__container__4'>
              <div className='predictions__container__2'> 
                <p><span>Match Winner:</span> {getMatchWinner(predictions['match_winner'])}</p>
                <p><span>Under/Over:</span> {predictions['under_over'] ? predictions['under_over'] : 'No Prediction Available'}</p>
              </div>
              <div className='predictions__container__2'> 
                <p><span>Goals Home:</span> {predictions['goals_home'] ? predictions['goals_home'] : 'No Prediction Available'}</p>
                <p><span>Goals Away:</span> {predictions['goals_away'] ? predictions['goals_away'] : 'No Prediction Available'}</p>
              </div> 
            </div>
            <p className='advice'><span>Advice:</span> {predictions['advice'] ? predictions['advice'] : 'No Prediction Available'}</p>
          </div>
          <h1>Last 5 Matches</h1>
          <Last5Stats homeTeam={predictions.teams.home["last_5_matches"]} awayTeam={predictions.teams.away["last_5_matches"]}/>
          <h1>H2H Record</h1>
          <div className="h2hstats">
              <div className='h2hstats__container'> 
                <div 
                  className='h2hstats__homewin'
                  style={{width: `${predictions.teams.home["last_h2h"].wins.total/predictions.teams.home["last_h2h"].played.total*100}%`}}
                >
                  {predictions.teams.home["last_h2h"].wins.total}
                </div>
                <div 
                  className='h2hstats__draw' 
                  style={{width: `${predictions.teams.home["last_h2h"].draws.total/predictions.teams.home["last_h2h"].played.total*100}%`}}
                >
                  {predictions.teams.home["last_h2h"].draws.total}
                </div>
                <div 
                  className='h2hstats__awaywin' 
                  style={{width: `${predictions.teams.home["last_h2h"].loses.total/predictions.teams.home["last_h2h"].played.total*100}%`}}
                >
                  {predictions.teams.home["last_h2h"].loses.total}
                </div>
              </div>
            </div>
          <FixtureList fixtures={predictions['h2h']} />
        </div>)
        : <MainSpinner />
      }
    </React.Fragment>
  )
}

export default Predictions;
