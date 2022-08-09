import axios from 'axios';

export const footballClient = () =>
  axios.create({
    baseURL: `https://${process.env.FOOTBALL_API_HOST}/v3`,
    headers: {
      'X-RapidAPI-Key': process.env.FOOTBALL_API_KEY,
      'X-RapidAPI-Host': process.env.FOOTBALL_API_HOST,
    },
    timeout: 10000,
  });
