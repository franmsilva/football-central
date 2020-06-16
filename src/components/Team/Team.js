import React, { useState, useEffect } from 'react';
import './Team.css';

// Routing
import { useParams, Link, Switch, Route, useRouteMatch } from 'react-router-dom';

// Services
import footballAPI from '../../services/footballAPI';
import newsAPI from '../../services/newsAPI';

// My Components
import NewsList from '../NewsList/NewsList';
import FixtureList from '../FixtureList/FixtureList';
import MainSpinner from '../MainSpinner/MainSpinner';
import Squad from '../Squad/Squad';

const Team = () => {
  let { path, url } = useRouteMatch();
  const { teamID, leagueID, teamName, leagueName } = useParams();

  const [ready, setReady] = useState(false);
  const [teamInfo, setTeamInfo] = useState({});
  const [teamFixtures, setTeamFixtures] = useState([]);
  const [playerStats, setPlayerStats] = useState([])
  const [teamNews, setTeamNews] = useState([]);
      
  useEffect(() => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
    footballAPI.getTeamInfo(teamID)
      .then(team => setTeamInfo(team))
    newsAPI.getTeamNews(teamName)
      .then(news => setTeamNews(news))
    footballAPI.getTeamFixtures(teamID, leagueID)
      .then(fixtures => setTeamFixtures(fixtures))
    footballAPI.getPlayerStatistics(teamID, '2019-2020', leagueName.replace('-', ' '))
      .then(stats => setPlayerStats(stats))
      .then(() => setReady(true))
  }, [teamID, leagueID, teamName, leagueName])

  return (
    <div className="Team">
      {ready ?
          <React.Fragment>
            <div className='team__header'>
              <div className='team__logo'>
                <img alt="Home Team Logo" src={teamInfo.logo} width={100}/>
              </div>
              <div className='team__details'>
                <p>TEAM</p>
                <h2>{teamInfo.name}</h2> 
              </div>
            </div>
            <div className="team__views greenUnderline">
              <Link to={`${url}/news`}>News</Link>
              <Link to={`${url}/squad`}>Squad</Link>
              <Link to={`${url}/fixtures`}>Fixtures</Link>
            </div>
            <div>
              <Switch>
                <Route exact path={path}>
                  <NewsList news={teamNews} />
                </Route>
                <Route path={`${path}/news`}>
                  <NewsList news={teamNews} />
                </Route>
                <Route path={`${path}/squad`}>
                  <Squad playerStats={playerStats} />
                </Route>
                <Route path={`${path}/fixtures`}>
                  <FixtureList fixtures={teamFixtures} />
                </Route>
              </Switch>
            </div>
          </React.Fragment>
          : <MainSpinner />
      }
    </div>
  );
}

export default Team;
