// Utils
import moment from 'moment';

// API Constants
const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const longForm = 'YYYY-MM-DD';

// Fetch Factory
const fetchRequest = (url, options = {}) => {
  return fetch(`${BASE_URL}/${url}`, options)
    .then(res => res.status < 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch(err => {
      console.log(`${err.message} while fetching /${url}`);
    })
}

const getBreakingNews = (date) => {
  return fetchRequest(`top-headlines?category=sports&q=football&from=${moment().format("YYYY-MM-DD")}&apiKey=${API_KEY}`)
    .then(data => data.articles)
    .then(articles => articles.filter(article => !article.title.includes('NFL') && !article.title.includes('quarterbacks') && !article.url.includes('www.sportingnews.com') && !article.url.includes('https://tbrfootball.com/')))
}

const getTeamNews = (teamName) => {
  return fetchRequest(
    `everything?q=${teamName}&from=${moment().subtract(3, 'days').format("YYYY-MM-DD")}&to=${moment().format("YYYY-MM-DD")}&sortBy=relevancy&apiKey=${API_KEY}`
    ).then(data => data.articles.filter(article => article.title.includes(teamName)));
}

const getLeagueNews = (leagueName) => {
  return fetchRequest(
    `everything?q=${leagueName}&from=${moment().subtract(3, 'days').format("YYYY-MM-DD")}&to=${moment().format("YYYY-MM-DD")}&sortBy=relevancy&apiKey=${API_KEY}`
    ).then(data => data.articles.slice(0, 10));
}

// Get Fixture News (for upcoming or completed fixture)
const getFixtureNews = ({homeTeam, awayTeam, event_date, status}) => {
  event_date = new Date(event_date);
  const isFixtureComplete = (status === 'Match Finished') ? true : false;
  let fromDate, toDate;
  if (isFixtureComplete) {
    fromDate = moment(event_date).format(); // Grab articles from start time of fixture only
    toDate = moment(event_date).add(4, 'days').format(longForm);
  } else {
    fromDate = moment(event_date).subtract(4, 'days').format(longForm);
    toDate = moment(event_date).format(longForm);
  }

  return fetchRequest(
    `everything?q=${homeTeam.team_name}&q=${awayTeam.team_name}&from=${fromDate}&to=${toDate}&sortBy=relevancy&apiKey=${API_KEY}`
    ).then(data =>
      (isFixtureComplete)
      ? data.articles.filter(article => new Date(article.publishedAt) >= event_date)
      : data.articles.filter(article => article.title.includes(homeTeam) || article.title.includes(awayTeam))
    )
  }

export default {
  getBreakingNews,
  getTeamNews,
  getLeagueNews,
  getFixtureNews
}