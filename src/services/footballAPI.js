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

const getTodaysAction = () => {
  return fetchRequest (
    'fixtures/league/766/2020-06-10',
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      }
    }
  )
}

module.exports = {
  getTodaysAction
}