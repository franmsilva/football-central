import React from 'react';
import './FixtureCard.css';

// Utils
import moment from 'moment'

// Evergreen Components
import {Pane, Heading } from 'evergreen-ui'

const FixtureCard = ({ fixture }) => (
  <Pane width="33.3%" border>  
    <Pane display="flex" justifyContent="space-between" alignItems="center" padding={10}>
        <Pane display="flex" alignItems="center"> 
          <img alt='' src={fixture.league.logo} width={30} />
          <Heading size={600} marginLeft={10}>{fixture.league.name}</Heading>
        </Pane>
        <img alt='' src={fixture.league.flag} width={20} />
    </Pane>
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
      <Pane>
        {moment(fixture.event_date).format('LL')}
      </Pane>
    </Pane>
  </Pane>
);

export default FixtureCard;
