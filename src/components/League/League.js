import React, { useState, useEffect } from 'react';
import './League.css';

// Routing
import { useParams, Link, Switch, Route, useRouteMatch  } from 'react-router-dom';

// Services 
import footballAPI from '../../services/footballAPI';
import newsAPI from '../../services/newsAPI';

// My Components
import NewsList from '../NewsList/NewsList';
import MainSpinner from '../MainSpinner/MainSpinner';
import Table from '../Table/Table';
import TopScorers from '../TopScorers/TopScorers';
import LeagueFixtures from '../LeagueFixtures/LeagueFixtures';

const League = () => {
  let { path, url } = useRouteMatch();
  
  const { leagueID, leagueName } = useParams();
  const [ready, setReady] = useState(false);
  const [leagueStandings, setLeagueStandings] = useState([]);
  const [topScorers, setTopScorers] = useState([]);
  const [leagueNews, setLeagueNews] = useState([]);
  const [currentRound, setCurrentRound] = useState('');
  const [leagueFixtures, setLeagueFixtures] = useState([]);

  useEffect(() => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
    footballAPI.getLeagueStandings(leagueID)
      .then(standings => setLeagueStandings(standings))
    footballAPI.getTopScorers(leagueID)
      .then(topScorers => setTopScorers(topScorers.slice(0, 10)))
    newsAPI.getLeagueNews(leagueName)
      .then(news => setLeagueNews(news))
    footballAPI.getCurrentRound(leagueID)
      .then(round => setCurrentRound(round))
    footballAPI.getLeagueFixtures(leagueID)
      .then(fixtures => setLeagueFixtures(fixtures))
      .then(() => setReady(true))
  }, [leagueID, leagueName])

  const getLeagueTeams = () => {
    let teams = {}
    for (let i = 0; i < leagueStandings.length; i++) {
      teams[leagueStandings[i].teamName] = leagueStandings[i].logo 
    }
    return teams;
  } 

  return (
    <div className="League">
      {ready ?
          <React.Fragment>
            <div className='league__header'>
              <div className='league__logo'>
                <img alt="" src={leagueFixtures[0].league.logo} width={80}/>
              </div>
              <div className='league__details'>
                <p>COMPETITION</p>
                <h2>{leagueFixtures[0].league.name}</h2>
              </div>  
            </div>
            <div className="league__views greenUnderline">
              <Link to={`${url}/news`}>News</Link>
              <Link to={`${url}/standings`}>Standings</Link>
              <Link to={`${url}/topscorers`}>Top Scorers</Link>
              <Link to={`${url}/fixtures`}>Fixtures</Link>
            </div>
            <div >
              <Switch>
                <Route exact path={path}>
                  <NewsList news={leagueNews} />
                </Route>
                <Route path={`${path}/news`}>
                  <NewsList news={leagueNews} />
                </Route>
                <Route path={`${path}/standings`}>
                  <Table standings={leagueStandings} leagueID={leagueID} leagueName={leagueName}/>
                </Route>
                <Route path={`${path}/topscorers`}>
                  <TopScorers topscorers={topScorers} teams={getLeagueTeams()}/>
                </Route>
                <Route path={`${path}/fixtures`}>
                  <LeagueFixtures fixtures={leagueFixtures} currentRound={currentRound}/>
                </Route>
              </Switch>
            </div>
          </React.Fragment>
          : <MainSpinner />
      }
    </div>
  );
}  

export default League;
