import React, { useState, useEffect } from 'react';
import './League.css';

// Routing
import { useParams } from 'react-router-dom';

// Services 
import footballAPI from '../../services/footballAPI';
import newsAPI from '../../services/newsAPI';

// My Components
import NewsList from '../NewsList/NewsList';
import FixtureList from '../FixtureList/FixtureList';
import MainSpinner from '../MainSpinner/MainSpinner';
import Table from '../Table/Table';

const League = () => {
  const { leagueID, leagueName } = useParams();

  const [selected, setSelected] = useState('')
  const [leagueInfo, setLeagueInfo] = useState({});
  const [leagueStandings, setLeagueStandings] = useState([])
  const [leagueFixtures, setLeagueFixtures] = useState([])
  const [topScorers, setTopScorers] = useState([])
  const [leagueNews, setLeagueNews] = useState([])

  useEffect(() => {
    footballAPI.getLeagueInfo(leagueID)
      .then(league => setLeagueInfo(league))
    footballAPI.getLeagueStandings(leagueID)
      .then(standings => setLeagueStandings(standings))
    footballAPI.getLeagueFixtures(leagueID)
      .then(fixtures => setLeagueFixtures(fixtures))
    footballAPI.getTopScorers(leagueID)
      .then(topScorers => setTopScorers(topScorers))
    newsAPI.getLeagueNews(leagueName)
      .then(news => setLeagueNews(news))
  }, [leagueID, leagueName])

  const handleClick = (e) => {
    switch (e.target.name) {
      case 'topscorers': 
        setSelected(<pre>{JSON.stringify(topScorers, undefined, 4)}</pre>) // Top Scorers Component
        break;
      case 'fixtures':
        setSelected(<FixtureList fixtures={leagueFixtures} />) // Organise fixtures by rounds
        break;
      case 'standings':
        setSelected(<Table standings={leagueStandings} leagueID={leagueID}/>)
        break;
      default: 
        setSelected(<NewsList news={leagueNews} />) // Also render latest results??
        break;
    }
  }

  return (
    <div className="League">
      {leagueInfo.league_id ?
          <>
            <div className='league__header'>
              <div className='league__logo'>
                <img alt="Home Team Logo" src={leagueInfo.logo} width={80}/>
              </div>
              <div className='league__details'>
                <p>COMPETITION</p>
                <h2>{leagueInfo.name}</h2>
              </div>  
            </div>
            <div className="league__views borderXwidth">
              <button name='news' onClick={handleClick}>News</button>
              <button name='standings' onClick={handleClick}>Standings</button>
              <button name='topscorers' onClick={handleClick}>Top Scorers</button>
              <button name='fixtures' onClick={handleClick}>Fixtures</button>
            </div>
            <div className='league__view'>
              {selected ?
                selected
                : <NewsList news={leagueNews} />
              }
            </div>
          </>
          : <MainSpinner />
      }
    </div>
  );
}  

export default League;
