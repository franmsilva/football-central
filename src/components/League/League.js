import React, { useState, useEffect } from 'react';
import './League.css';

// Routing
import { useParams } from 'react-router-dom';

// Services 
import footballAPI from '../../services/footballAPI';

// Evergreen Components
import { Pane, Heading, Button } from 'evergreen-ui';
import newsAPI from '../../services/newsAPI';

// My Components
import NewsList from '../NewsList/NewsList';
import FixtureList from '../FixtureList/FixtureList';

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
    footballAPI.getTopScorers(leagueID)
      .then(topScorers => setTopScorers(topScorers))
    newsAPI.getLeagueNews(leagueName)
      .then(news => setLeagueNews(news))
  }, [leagueID, leagueName])

  const handleClick = (e) => {
    switch (e.target.name) {
      case 'topscorers': 
        setSelected(<p>{JSON.stringify(topScorers)}</p>) // Team Stats Component
        break;
      case 'fixtures':
        setSelected(<FixtureList fixtures={leagueFixtures} />)
        break;
      case 'standings':
        setSelected(<p>{JSON.stringify(leagueStandings)}</p>)
        break;
      default: 
        setSelected(<NewsList news={leagueNews} />)
        break;
    }
  }

  return (
    <div className="League">
      {leagueInfo.league_id ?
          <>
            <Pane  marginTop={20}>
              <Pane display="flex" alignItems="center">
                <img alt="Home Team Logo" src={leagueInfo.logo} />
                <Pane marginRight={50}>
                  <Heading size={600}>TEAM</Heading>
                  <Pane>{leagueInfo.name}</Pane>
                </Pane>  
                <Pane>
                  <Pane>Country: {leagueInfo.country}</Pane>
                  <Pane>Season Start: {leagueInfo.season_start}</Pane>
                  <Pane>Season End: {leagueInfo.season_end}</Pane>
                </Pane>
              </Pane>
            </Pane>
            <Pane>
              <Button name='news' marginRight={16} onClick={handleClick}>News</Button>
              <Button name='standings' marginRight={16} onClick={handleClick}>Standings</Button>
              <Button name='topscorers' marginRight={16} onClick={handleClick}>Top Scorers</Button>
              <Button name='fixtures' marginRight={16} onClick={handleClick}>Fixtures</Button>
            </Pane>
            <Pane >
              {selected ?
                selected
                : <NewsList news={leagueNews} />
              }
            </Pane>
          </>
          : <h1>Loading...</h1>
      }
    </div>
  );
}  

export default League;
