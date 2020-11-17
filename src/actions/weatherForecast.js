import * as types from '../constants/actionTypes';
import {getWeatherForecast} from '../requests';
import {ERROR} from '../constants/errorMessages';

export const getWeatherForecastAction = (props) => {
    return (dispatch, getState) => {
        dispatch({type: types.GET_WEATHER_REQUEST.START});
        getWeatherForecast(props).then(
            (result) => {
                if (result) {
                    dispatch(getWeatherForecastSuccess(result));
                } else {
                    dispatch(getWeatherForecastError(ERROR));
                }
            },
            (error) => {
                dispatch(getWeatherForecastError(error));
            },
        );
    };
};

export const getWeatherForecastSuccess = (result) => {
    return {
        type: types.GET_WEATHER_REQUEST.SUCCESS,
        result,
    };
};

export const getWeatherForecastError = (error) => {
    return {
        type: types.GET_WEATHER_REQUEST.FAILURE,
    };
};
