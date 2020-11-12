import * as types from '../constants/actionTypes';

let initialState = {
    name: '',
    currentTime: null,
    weatherType: '',
    weatherIconUrl: '',
    temp: {
        currentTemp: '',
        tempMax: '',
        tempMin: '',
        tempFeelsLike: '',
    },
    windSpeed: '',
    humidity: '',
    windDirection: '',
    sunrise: null,
    sunset: null,
    isLoading: false,
    error: null,
};

const weatherInfo = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_WEATHER_REQUEST.START:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_WEATHER_REQUEST.SUCCESS:
            return {
                ...state,
                isLoading: false,
                name: action.result.name,
                currentTime: action.result.dt,
                weatherType: action.result.weather[0].main,
                weatherIconUrl: action.result.weather[0].icon,
                temp: {
                    currentTemp: action.result.main.temp,
                    tempMax: action.result.main.temp_max,
                    tempMin: action.result.main.temp_min,
                    tempFeelsLike: action.result.main.feels_like,
                },
                windSpeed: action.result.wind.speed,
                humidity: action.result.main.humidity,
                deg: action.result.wind.deg,
                sunrise: action.result.sys.sunrise,
                sunset: action.result.sys.sunset,
            };
        case types.GET_WEATHER_REQUEST.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export default weatherInfo;
