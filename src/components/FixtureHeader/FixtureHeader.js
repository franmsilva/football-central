import React from 'react';
import './FixtureHeader.css';

// Utils
import moment from 'moment';

// Routing
import { Link } from 'react-router-dom';

const FixtureHeader = ({fixtureStatus, fixtureData}) => {
  //Dealing with naming variation in API
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

  const displayFixtureStatus = () => {
    switch(fixtureStatus) {
      case 'Not Started':
        return (
          <React.Fragment>
            <div><span>Start Time:</span> {moment(fixtureData.event_date).format('HH:mm')}</div>
          </React.Fragment>
        )
      case 'Halftime':
        return (
          <React.Fragment>
            <div className='fixturestatus halftime'>HALFTIME</div>
            <div className='elapsedtime'>{fixtureData.elapsed}'</div>
          </React.Fragment>
        )
      case 'Match Finished':
          return (
            <React.Fragment>
            <div className='fixturestatus fulltime'>FULLTIME</div>
            <div className='elapsedtime'>{fixtureData.elapsed}'</div>
          </React.Fragment>
          )
      default: 
        return (
          <React.Fragment>
            <div className='fixturestatus live'>LIVE</div>
            <div className='elapsedtime'>{fixtureData.elapsed}'</div>
          </React.Fragment>
        )
    }
  }

  return (
    <div className='fixture__header'>
      <div className='fixture__team'>
        <Link to={`/team/${fixtureData.homeTeam.team_id}/${fixtureData.league_id}/${fixtureData.homeTeam.team_name}/${getLeagueName(fixtureData.league_id)}`}>
          <div className='fixture__team__details'>
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
        <div className='fixture__status'>{displayFixtureStatus()}</div>
        <div><span>Date:</span> {moment(fixtureData.event_date).format('DD.MM.YY')}</div>
        <div><span>Referee:</span> {fixtureData.referee}</div>
        <div><span>Venue:</span> {fixtureData.venue}</div>
      </div>
      <div className='fixture__team'>
        <div className='team__score'>{fixtureData.goalsAwayTeam}</div>
        <Link to={`/team/${fixtureData.awayTeam.team_id}/${fixtureData.league_id}/${fixtureData.awayTeam.team_name}/${getLeagueName(fixtureData.league_id)}`}>
          <div className='fixture__team__details'>
            <img alt="" src={fixtureData.awayTeam.logo} width={125}/>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FixtureHeader;
