import React from 'react';
import './FixtureBody.css';

// Routing
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

// My Components
import FixtureStats from '../FixtureStats/FixtureStats';
import LineUps from '../LineUps/LineUps';
import FixtureCountdown from '../FixtureCountdown/FixtureCountdown';
import Predictions from '../Predictions/Predictions';

const FixtureBody = ({fixtureData, predictions}) => {
  const {url, path} = useRouteMatch();

  return (
    <React.Fragment>
      <div className="fixture__views greenUnderline">
        <Link to={`${url}/overview`} disabled>Overview</Link>
        <Link to={`${url}/lineups`}>Line-Ups</Link>
        <Link to={`${url}/predictions`}>Predictions</Link>
      </div>
      <div>
        <Switch>
          <Route exact path={path}>
            {fixtureData.statistics 
              ? <FixtureStats statistics={fixtureData.statistics}/> 
              : <FixtureCountdown startTime={fixtureData.event_date}/>
            }
          </Route>
          <Route path={`${path}/overview`}>
            {fixtureData.statistics 
              ? <FixtureStats statistics={fixtureData.statistics}/> 
              : <FixtureCountdown startTime={fixtureData.event_date}/>
            }
          </Route>
          <Route path={`${path}/lineups`}>
            <div className='lineups__container'> 
              {fixtureData.lineups 
                ? <React.Fragment>
                    <LineUps team={fixtureData.lineups[fixtureData.homeTeam.team_name]} />
                    <LineUps team={fixtureData.lineups[fixtureData.awayTeam.team_name]} />
                  </React.Fragment> 
                : <FixtureCountdown startTime={fixtureData.event_date}/>
              }
            </div>
          </Route>
          <Route path={`${path}/predictions`}>
            <Predictions predictions={predictions} />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default FixtureBody;
