import axios from 'axios';

const API_KEY = 'f488e855e86d5d17b55cad86fcc8c2f3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const api = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(api);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

