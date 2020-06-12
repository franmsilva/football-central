import React, { useState, useEffect } from 'react';
import './Fixture.css';

// Routing
import { useParams, Link } from 'react-router-dom';

// Utils 
// import moment from 'moment'

//Services
import footballAPI from '../../services/footballAPI';

// Evergreen Components
import { Pane, Heading } from 'evergreen-ui';

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

  return (
    <div className="Fixture">
      {fixtureData.fixture_id ?
        <>
          <Pane display="flex" justifyContent="space-around" textAlign="center" marginTop={20}>
            <Pane>
              <Link to={`/team/${fixtureData.homeTeam.team_id}/${fixtureData.league_id}/${fixtureData.homeTeam.team_name}`}>
                <Pane>
                  <img alt="Home Team Logo" src={fixtureData.homeTeam.logo} />
                  <Pane>{fixtureData.homeTeam.team_name}</Pane>
                </Pane>
              </Link>
              <Pane>{fixtureData.goalsHomeTeam}</Pane>
            </Pane>
            <Pane>
              <Link to={`/league/${fixtureData.league_id}/${fixtureData.league.name}`}>
                <img alt="League Logo" src={fixtureData.league.logo} />
              </Link>
              <Pane>Matchday {fixtureData.round.split(' - ')[1]}</Pane>
              <Pane>
                {/* {fixtureData.status === "Not Started" 
                  ? moment(fixtureData.event_date).format('LL')
                  fixtureData.status === "Not Started" 
                  ? moment(fixtureData.event_date).format('LL')
                  : fixtureData.status === "Not Started"  */
                }
                MATCH STATUS
              </Pane>
              <Pane>{fixtureData.referee}</Pane>
              <Pane>{fixtureData.venue}</Pane>
            </Pane>
            <Pane>
              <Pane>{fixtureData.goalsAwayTeam}</Pane>
              <Link to={`/team/${fixtureData.awayTeam.team_id}/${fixtureData.league_id}/${fixtureData.awayTeam.team_name}`}>
                <Pane>
                  <img alt="Away Team Logo" src={fixtureData.awayTeam.logo} />
                  <Pane>{fixtureData.awayTeam.team_name}</Pane>
                </Pane>
              </Link>
            </Pane>
          </Pane>
          <Pane>
            <Heading size={700}>Fixture Data</Heading>
            <pre>{JSON.stringify(fixtureData, undefined, 4)}</pre>
            <Heading size={700}>Match Predictions</Heading>
            <h4>{predictions.advice}</h4>
          </Pane>
        </>
        : <h1>Loading</h1>
      }
    </div>
      
  );
}


export default Fixture;
