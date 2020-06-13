import React, { useState, useEffect } from 'react';
import './Fixture.css';

// Routing
import { useParams, Link } from 'react-router-dom';

//Services
import footballAPI from '../../services/footballAPI';

// My Components
import FixtureStats from '../FixtureStats/FixtureStats';
import LineUps from '../LineUps/LineUps';
import Predictions from '../Predictions/Predictions';
import MainSpinner from '../MainSpinner/MainSpinner';


const Fixture = () => {
  const { fixtureID } = useParams();
  const [fixtureData, setFixtureData] = useState({})
  const [predictions, setPredictions] = useState({})

  useEffect(() => {
    footballAPI.getFixtureData(fixtureID)
      .then(fixture => setFixtureData(fixture))
    footballAPI.getPredictions(fixtureID) 
      .then(predictions => setPredictions(predictions))
  }, [fixtureID]);

  const getLeagueName = (leagueID) => {
    switch(leagueID) {
      case 775:
        return 'La-Liga'
      case 524:
        return 'Premier-League'
      case 754:
        return 'Bundesliga'
      case 525:
        return 'Ligue-1'
      case 891:
        return 'Serie-A'
      default:
        return 'Primeira-Liga'
    }
  }

  return (
    <div className="fixture">
      {fixtureData.fixture_id ?
        <React.Fragment>
          <div className='fixture__header'>
            <div className='fixture__team'>
              <Link to={`/team/${fixtureData.homeTeam.team_id}/${fixtureData.league_id}/${fixtureData.homeTeam.team_name}/${getLeagueName(fixtureData.league_id)}`}>
                <div className='team__details'>
                  <img alt="" src={fixtureData.homeTeam.logo} width={125}/>
                </div>
              </Link>
              <div className='team__score'>
                {fixtureData.goalsHomeTeam}
              </div>
            </div>
            <div className='fixture__details'>
              <Link to={`/league/${fixtureData.league_id}/${fixtureData.league.name}`}>
                <img alt="" src={fixtureData.league.logo} width={100}/>
              </Link>
              <div className='matchday'>Matchday {fixtureData.round.split(' - ')[1]}</div>
              <div className='fixture__status'>MATCH STATUS</div>
              <div><span>Referee:</span> {fixtureData.referee}</div>
              <div><span>Venue:</span> {fixtureData.venue}</div>
            </div>
            <div className='fixture__team'>
              <div className='team__score'>{fixtureData.goalsAwayTeam}</div>
              <Link to={`/team/${fixtureData.awayTeam.team_id}/${fixtureData.league_id}/${fixtureData.awayTeam.team_name}/${getLeagueName(fixtureData.league_id)}`}>
                <div className='team__details'>
                  <img alt="" src={fixtureData.awayTeam.logo} width={125}/>
                </div>
              </Link>
            </div>
          </div>
          <div className="league__views borderXwidth">
              <button name='overview'>Overview</button>
              <button name='lineups'>Line-Ups</button>
              <button name='predictions'>Predictions</button>
            </div>
          <div>
            <FixtureStats statistics={fixtureData.statistics}/>
            <LineUps homeTeam={fixtureData.lineups[fixtureData.homeTeam.team_name]} awayTeam={fixtureData.lineups[fixtureData.awayTeam.team_name]} />
            <Predictions predictions={predictions} />

          </div>
        </React.Fragment>
        : <MainSpinner />
      }
    </div>
  );
}


export default Fixture;
