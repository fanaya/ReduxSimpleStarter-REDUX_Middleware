import axios from 'axios';

const API_key = 'f0402116df3629fb626b32267d75fede';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}