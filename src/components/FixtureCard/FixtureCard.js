import React from 'react';
import './FixtureCard.css';

// Routing
import { Link } from 'react-router-dom';

// Utils
import moment from 'moment'

const FixtureCard = ({ fixture }) => (
  <div className='card'> 
    <Link to={`/league/${fixture.league_id}/${fixture.league.name}`}>
      <div className='card__header'>
          <div className='card__header__left'> 
            <img alt='' src={fixture.league.logo} width={25} />
            <h3>{fixture.league.name}</h3>
          </div>
          <p>Matchday {fixture.round.split(' - ')[1]}</p>
      </div>
    </Link>
    <Link to={`/fixture/${fixture.fixture_id}`}>
      <div className='card__body'>
        <div className='card__body__teams'> 
          <div className='team'>
            <div className='team__info'> 
              <img alt='' src={fixture.homeTeam.logo} width={30}/>
              <p>{fixture.homeTeam.team_name}</p>
            </div>
            <p>{fixture.goalsHomeTeam}</p>
          </div>
          <div className='team'> 
            <div className='team__info'> 
              <img alt='' src={fixture.awayTeam.logo} width={30}/>
              <p>{fixture.awayTeam.team_name}</p>
            </div>
            <p>{fixture.goalsAwayTeam}</p>
          </div>
        </div>
        <div className='separator' />
        <div className='card__body__time'>
          <p>{moment(fixture.event_date).format('LL')}</p>
          <p>{moment(fixture.event_date).format('HH:mm')}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default FixtureCard;
