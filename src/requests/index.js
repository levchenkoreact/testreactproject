import {callApi} from '../api/rest';

const WEATHER_INFO = '/data/2.5/weather';
const WEATHER_FORECAST = '/data/2.5/forecast';

export const getWeatherInfo = () => {
    return callApi(WEATHER_INFO, 'GET', null);
};

export const getWeatherForecast = () => {
    return callApi(WEATHER_FORECAST, 'GET', null);
};
