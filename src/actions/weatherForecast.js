import * as types from '../constants';
import {getWeatherForecast} from '../requests';
import {errorMessages} from '../constants';

export const getWeatherForecastAction = (props) => {
    return (dispatch, getState) => {
        dispatch({type: types.actionTypes.GET_WEATHER_REQUEST.START});
        getWeatherForecast(props).then(
            (result) => {
                if (result) {
                    dispatch(getWeatherForecastSuccess(result));
                } else {
                    dispatch(getWeatherForecastError(errorMessages.ERROR));
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
        type: types.actionTypes.GET_WEATHER_REQUEST.SUCCESS,
        result,
    };
};

export const getWeatherForecastError = (error) => {
    return {
        type: types.actionTypes.GET_WEATHER_REQUEST.FAILURE,
    };
};
