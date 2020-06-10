const BASE_URL = 'http://newsapi.org/v2';
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

// Fetch Factory 
const fetchRequest = (url, options = {}) => {
  return fetch(`${BASE_URL}/${url}`, options)
    .then(res => res.status < 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch(err => {
      console.log(`${err.message} while fetching /${url}`);
    }) 
}

const getBreakingNews = () => {
  return fetchRequest(`top-headlines?country=gb&category=sports&q=football&from=2020-06-05&apiKey=${API_KEY}`)
}

module.exports = {
  getBreakingNews
}