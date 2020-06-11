import React, { useState, useEffect } from 'react';
import './Team.css';

// Routing
import { useParams } from 'react-router-dom';

// Services
import footballAPI from '../../services/footballAPI';
import newsAPI from '../../services/newsAPI';

// Evergreen Components
import { Pane, Heading, Button } from 'evergreen-ui';

// My Components
import NewsList from '../NewsList/NewsList';
import FixtureList from '../FixtureList/FixtureList';

const Team = () => {
  const { teamID, leagueID, teamName } = useParams();

  const [selected, setSelected] = useState()
  const [teamInfo, setTeamInfo] = useState({});
  const [teamStats, setTeamStats] = useState({});
  const [teamFixtures, setTeamFixtures] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [teamNews, setTeamNews] = useState([]);

  useEffect(() => {
    footballAPI.getTeamInfo(teamID)
      .then(team => setTeamInfo(team))
    footballAPI.getTeamStats(teamID, leagueID)
      .then(stats => setTeamStats(stats))
    footballAPI.getTeamFixtures(teamID, leagueID)
      .then(fixtures => setTeamFixtures(fixtures))
    footballAPI.getTeamPlayers(teamID, '2019-2020')
      .then(players => setTeamPlayers(players))
    
    newsAPI.getTeamNews(teamName)
      .then(news => setTeamNews(news))
  }, [teamID, leagueID, teamName])

  const handleClick = (e) => {
    switch (e.target.name) {
      case 'stats': 
        setSelected(<p>{JSON.stringify(teamStats)}</p>) // Team Stats Component
        break;
      case 'fixtures':
        setSelected(<FixtureList fixtures={teamFixtures} />)
        break;
      case 'squad':
        setSelected(<p>{JSON.stringify(teamPlayers)}</p>) // Player List & Player Card Components
        break;
      default: 
        setSelected(<NewsList news={teamNews} />)
        break;
    }
  }

  return (
    <div className="Team">
      {teamInfo.team_id ?
          <>
            <Pane  marginTop={20}>
              <Pane display="flex" alignItems="center">
                <img alt="Home Team Logo" src={teamInfo.logo} />
                <Pane marginRight={50}>
                  <Heading size={600}>TEAM</Heading>
                  <Pane>{teamInfo.name}</Pane>
                </Pane>  
                <Pane>
                  <Pane>Country: {teamInfo.country}</Pane>
                  <Pane>Founded: {teamInfo.founded}</Pane>
                  <Pane>Venue Name & City: {`${teamInfo.venue_name}, ${teamInfo.venue_city}`}</Pane>
                  <Pane>Venue Capacity: {teamInfo.venue_capacity}</Pane>
                </Pane>
              </Pane>
            </Pane>
            <Pane>
              <Button name='news' marginRight={16} onClick={handleClick}>News</Button>
              <Button name='stats' marginRight={16} onClick={handleClick}>Stats</Button>
              <Button name='fixtures' marginRight={16} onClick={handleClick}>Fixtures</Button>
              <Button name='squad' marginRight={16} onClick={handleClick}>Squad</Button>
            </Pane>
            <Pane >
              {selected ?
                selected
                : <NewsList news={teamNews} />
              }
            </Pane>
          </>
          : <h1>Loading...</h1>
      }
    </div>
  );
}

export default Team;
