import * as types from '../constants/actionTypes';
import {getDayOfMonthFromMillis, getDayOfWeekFromMillis, getHoursFromMillis, getLastItemInArray} from '../utils/utils';

let initialState = {
    isLoading: false,
    forecastsList: [],
    error: null,
};

const createForecastDataList = (forecastsList) => {
    let day = null;
    let forecastDataList = [];

    forecastsList.forEach(element => {
        let forecastDay = getDayOfWeekFromMillis(element.dt);

        if (day !== forecastDay) {
            day = forecastDay;
            forecastDataList.push({
                day: getDayOfMonthFromMillis(element.dt),
                isExpanded: false,
                forecasts: [],
            });
        }

        getLastItemInArray(forecastDataList).forecasts.push({
            hours: getHoursFromMillis(element.dt),
            imageUrl: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
            weatherDescription: element.weather[0].description,
            temperature: `${element.main.temp_min}*C/${element.main.temp_max}*C`,
        });
    });

    return forecastDataList;
};

const weatherForecast = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FORECAST_REQUEST.START:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_FORECAST_REQUEST.SUCCESS:
            return {
                ...state,
                forecastsList: createForecastDataList(action.result.list),
                isLoading: false,
            };
        case types.GET_FORECAST_REQUEST.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export default weatherForecast;
