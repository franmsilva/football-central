// Utils 
import moment from 'moment';

// API Constants
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v2';
const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
const API_HOST = process.env.REACT_APP_FOOTBALL_API_HOST;


// Fetch Factory 
const fetchRequest = (url, options = {}) => {
  return fetch(`${BASE_URL}/${url}`, options)
    .then(res => res.status < 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch(err => {
      console.log(`${err.message} while fetching /${url}`);
    }) 
}

const getTodaysFixtures = () => {
  const leagueIDs = [766, 775, 524, 754, 525, 891];

  return fetchRequest (
    `fixtures/date/${moment().format("YYYY-MM-DD")}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.fixtures.filter(fixture => leagueIDs.includes(fixture.league_id)))
}

const getFixtureData = (fixtureID) => {
  return fetchRequest (
    `fixtures/id/${fixtureID}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.fixtures[0])
}

const getPredictions = (fixtureID) => {
  return fetchRequest (
    `predictions/${fixtureID}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.predictions[0])
}

const getTeamInfo = (teamID) => {
  return fetchRequest (
    `/teams/team/${teamID}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.teams[0])
}

const getTeamStats = (teamID, leagueID) => {
  return fetchRequest (
    `statistics/${leagueID}/${teamID}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.statistics)
}
const getTeamFixtures = (teamID, leagueID) => {
  return fetchRequest (
    `fixtures/team/${teamID}/${leagueID}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.fixtures)
}

const getTeamPlayers = (teamID, season) => {
  return fetchRequest (
    `players/squad/${teamID}/${season}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.players)
}

const getPlayerStatistics = (teamID, season, competition) => {
  return fetchRequest (
    `players/team/${teamID}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.players.filter(player => player.league === competition && player.season === season && player.games.appearences > 0))
}

const getLeagueInfo = (leagueID) => {
  return fetchRequest (
    `leagues/league/${leagueID}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.leagues[0])
}

const getLeagueStandings = (leagueID) => {
  return fetchRequest (
    `leagueTable/${leagueID}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.standings[0])
}

const getLeagueFixtures = (leagueID) => {
  return fetchRequest (
    `fixtures/league/${leagueID}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.fixtures)
}

const getTopScorers = (leagueID) => {
  return fetchRequest (
    `topscorers/${leagueID}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.topscorers.slice(0,10))
}

const getCountries = () => {
  return fetchRequest (
    `countries`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  ).then(data => data.api.countries)
}

export default {
  getTodaysFixtures,
  getFixtureData,
  getPredictions,
  getTeamInfo,
  getTeamStats,
  getTeamFixtures,
  getTeamPlayers,
  getPlayerStatistics,
  getLeagueInfo,
  getLeagueStandings,
  getLeagueFixtures,
  getTopScorers,
  getCountries,
}