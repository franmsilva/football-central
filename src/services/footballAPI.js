import moment from 'moment';

// Constants
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v2';
const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
const API_HOST = process.env.REACT_APP_FOOTBALL_API_HOST;
const API_OPTIONS = {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": API_HOST,
    "x-rapidapi-key": API_KEY,
  }
}
const leagueIDs = [766, 775, 524, 754, 525, 891];


// Fetch Factory 
const fetchRequest = (url, options = {}) => {
  return fetch(`${BASE_URL}/${url}`, API_OPTIONS)
    .then(res => res.status < 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch(err => {
      console.log(`${err.message} while fetching /${url}`);
      console.log(err);
    }) 
}

// Get fixtures for today's date and filter for those with the desired leagueIDs
const getTodaysFixtures = () => {
  return fetchRequest (`fixtures/date/${moment().format("YYYY-MM-DD")}`)
    .then(data => data.api.fixtures.filter(fixture => leagueIDs.includes(fixture.league_id)))
}

// Get fixtures for yesterday's date and filter for those with the desired leagueIDs
const getYesterdaysFixtures = () => {
  return fetchRequest (`fixtures/date/${moment().subtract(1, 'days').format("YYYY-MM-DD")}`)
    .then(data => data.api.fixtures.filter(fixture => leagueIDs.includes(fixture.league_id)))
}

// Get all fixture data by fixtureID 
const getFixtureData = (fixtureID) => {
  return fetchRequest (`fixtures/id/${fixtureID}`)
    .then(data => data.api.fixtures[0])
}

// Get all predictions data by fixtureID
const getPredictions = (fixtureID) => {
  return fetchRequest (`predictions/${fixtureID}`)
    .then(data => data.api.predictions[0])
}

// Get all team info by teamID
const getTeamInfo = (teamID) => {
  return fetchRequest (`/teams/team/${teamID}`)
    .then(data => data.api.teams[0])
}

// Get all team stats by teamID and leagueID
const getTeamStats = (teamID, leagueID) => {
  return fetchRequest (`statistics/${leagueID}/${teamID}`)
    .then(data => data.api.statistics)
}

// Get all team fixtures by teamID and leagueID
const getTeamFixtures = (teamID, leagueID) => {
  return fetchRequest (`fixtures/team/${teamID}/${leagueID}`)
    .then(data => data.api.fixtures)
}

// Get all team players by teamID and season
const getTeamPlayers = (teamID, season) => {
  return fetchRequest (`players/squad/${teamID}/${season}`)
    .then(data => data.api.players)
}

// Get player statistics by teamID, season, competition
const getPlayerStatistics = (teamID, season, competition) => {
  return fetchRequest (`players/team/${teamID}`)
    .then(data => data.api.players.filter(player => player.league === competition && player.season === season && player.games.appearences > 0))
}

// Get league info by leagueID
const getLeagueInfo = (leagueID) => {
  return fetchRequest (`leagues/league/${leagueID}`)
    .then(data => data.api.leagues[0])
}

// Get league standing by leagueID
const getLeagueStandings = (leagueID) => {
  return fetchRequest (`leagueTable/${leagueID}`)
    .then(data => data.api.standings[0])
}

// Get all league fixtures by leagueID
const getLeagueFixtures = (leagueID) => {
  return fetchRequest (`fixtures/league/${leagueID}`)
    .then(data => data.api.fixtures)
}

// Get league's current round by leagueID
const getCurrentRound = (leagueID) => {
  return fetchRequest (`fixtures/rounds/${leagueID}/current`)
    .then(data => data.api.fixtures[0].split('_-_')[1])
}

// Get top 10 league scorers by leagueID 
const getTopScorers = (leagueID) => {
  return fetchRequest (`topscorers/${leagueID}`)
    .then(data => data.api.topscorers.slice(0,10))
}

// Get all available countries
const getCountries = () => {
  return fetchRequest (`countries`)
    .then(data => data.api.countries)
}

export default {
  getTodaysFixtures,
  getYesterdaysFixtures,
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
  getCurrentRound,
  getTopScorers,
  getCountries,
}