import React from 'react';
import './FixtureCard.css';

// Routing
import { Link } from 'react-router-dom';

// Utils
import moment from 'moment'

const FixtureCard = ({ fixture }) => {
  const displayFixtureStatus = () => {
    switch(fixture.status) {
      case 'Not Started':
        return (
          <React.Fragment> 
            <p>{moment(fixture.event_date).format('DD.MM.yyyy')}</p>
            <p>{moment(fixture.event_date).format('HH:mm')}</p>
          </React.Fragment>
        )
        case 'Halftime':
          return (
            <React.Fragment>
              <div className='fixture__card__status halftime'>Halftime</div>
              <div className='elapsedtime'>{fixture.elapsed}'</div>
            </React.Fragment>
          )
        case 'Match Finished':
            return (
              <React.Fragment>
              <div className='fixture__card__status fulltime'>Fulltime</div>
              <div className='elapsedtime'>{fixture.elapsed}'</div>
            </React.Fragment>
            )
        default: 
          return (
            <React.Fragment>
              <div className='fixture__card__status live'>Live</div>
              <div className='elapsedtime'>{fixture.elapsed}'</div>
            </React.Fragment>
          )
    }
  }

  return (
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
            {displayFixtureStatus()}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FixtureCard;
