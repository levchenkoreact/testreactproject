import {callApi} from '../api/rest';

const WEATHER_INFO = (cityName, units, apiKey) => `/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`;
const WEATHER_FORECAST = '/data/2.5/forecast';

export const getWeatherInfo = (props) => {
    const {cityName, units, apiKey} = props;
    return callApi(WEATHER_INFO(cityName, units, apiKey), 'GET', null);
};

export const getWeatherForecast = () => {
    return callApi(WEATHER_FORECAST, 'GET', null);
};
