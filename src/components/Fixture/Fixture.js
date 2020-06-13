import React, { useState, useEffect } from 'react';
import './Fixture.css';

// Routing
import { useParams, Link } from 'react-router-dom';

// Utils 
// import moment from 'moment'

//Services
import footballAPI from '../../services/footballAPI';

// Evergreen Components
import { Heading } from 'evergreen-ui';

// My Components

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
    <div className="Fixture">
      {fixtureData.fixture_id ?
        <React.Fragment>
          <div className='Fixture__header'>
            <div className='hometeam'>
              <Link to={`/team/${fixtureData.homeTeam.team_id}/${fixtureData.league_id}/${fixtureData.homeTeam.team_name}/${getLeagueName(fixtureData.league_id)}`}>
                <div className='hometeam__details'>
                  <img alt="Home Team Logo" src={fixtureData.homeTeam.logo} />
                  <div>{fixtureData.homeTeam.team_name}</div>
                </div>
              </Link>
              <div className='hometeam__score'>
                {fixtureData.goalsHomeTeam}
              </div>
            </div>
            <div>
              <Link to={`/league/${fixtureData.league_id}/${fixtureData.league.name}`}>
                <img alt="League Logo" src={fixtureData.league.logo} />
              </Link>
              <div>Matchday {fixtureData.round.split(' - ')[1]}</div>
              <div>
                {/* {fixtureData.status === "Not Started" 
                  ? moment(fixtureData.event_date).format('LL')
                  fixtureData.status === "Not Started" 
                  ? moment(fixtureData.event_date).format('LL')
                  : fixtureData.status === "Not Started"  */
                }
                MATCH STATUS
              </div>
              <div>{fixtureData.referee}</div>
              <div>{fixtureData.venue}</div>
            </div>
            <div>
              <div>{fixtureData.goalsAwayTeam}</div>
              <Link to={`/team/${fixtureData.awayTeam.team_id}/${fixtureData.league_id}/${fixtureData.awayTeam.team_name}/${getLeagueName(fixtureData.league_id)}`}>
                <div>
                  <img alt="Away Team Logo" src={fixtureData.awayTeam.logo} />
                  <div>{fixtureData.awayTeam.team_name}</div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <Heading size={700}>Fixture Data</Heading>
            <pre>{JSON.stringify(fixtureData, undefined, 4)}</pre>
            <Heading size={700}>Match Predictions</Heading>
            <h4>{predictions.advice}</h4>
          </div>
        </React.Fragment>
        : <h1>Loading</h1>
      }
    </div>
      
  );
}


export default Fixture;
