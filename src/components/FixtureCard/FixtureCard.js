import React from 'react';
import './FixtureCard.css';

// Routing
import { Link } from 'react-router-dom';

// Utils
import moment from 'moment'

// Evergreen Components
import {Pane, Heading } from 'evergreen-ui'

const FixtureCard = ({ fixture }) => (
  <Pane width="33.3%" border> 
    <Link to={`/league/${fixture.league_id}`}>
      <Pane display="flex" justifyContent="space-between" alignItems="center" padding={10}>
          <Pane display="flex" alignItems="center"> 
            <img alt='' src={fixture.league.logo} width={30} />
            <Heading size={600} marginLeft={10}>{fixture.league.name}</Heading>
          </Pane>
          <Pane display="flex" alignItems="center">
            <Heading size={300} marginRight={10}>Matchday {fixture.round.split(' - ')[1]}</Heading>
            <img alt='' src={fixture.league.flag} width={20} />
          </Pane>
      </Pane>
    </Link>
    <Link to={`/fixture/${fixture.fixture_id}`}>
      <Pane elevation={4} display="flex" justifyContent="space-between" alignItems="center" padding={10}>
        <Pane> 
          <Pane display="flex" justifyContent="space-between" alignItems="center" padding={5} borderRight>
            <Pane display="flex" alignItems="center"> 
              <img alt='' src={fixture.homeTeam.logo} width={30}/>
              <Heading marginLeft={10}>{fixture.homeTeam.team_name}</Heading>
            </Pane>
            <Heading marginLeft={10}>{fixture.goalsHomeTeam}</Heading>
          </Pane>
          <Pane display="flex" justifyContent="space-between" alignItems="center" padding={5} borderRight> 
            <Pane display="flex" alignItems="center"> 
              <img alt='' src={fixture.awayTeam.logo} width={30}/>
              <Heading marginLeft={10}>{fixture.awayTeam.team_name}</Heading>
            </Pane>
            <Heading marginLeft={10}>{fixture.goalsAwayTeam}</Heading>
          </Pane>
        </Pane>
        <Pane display="flex" flexDirection="column" alignItems="center">
          <Pane>{moment(fixture.event_date).format('LL')}</Pane>
          <Pane>{moment(fixture.event_date).format('HH:mm A')}</Pane>
        </Pane>
      </Pane>
    </Link>
  </Pane>
);

export default FixtureCard;
