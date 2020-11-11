import * as types from '../constants';
import {getWeatherInfo} from '../requests';
import {errorMessages} from '../constants';

export const getWeatherInfoAction = () => {
    return (dispatch, getState) => {
        dispatch({type: types.actionTypes.GET_WEATHER_REQUEST.START});
        getWeatherInfo().then(
            (result) => {
                if (result) {
                    dispatch(getWeatherInfoSuccess(result));
                } else {
                    dispatch(getWeatherInfoError(errorMessages.ERROR));
                }
            },
            (error) => {
                dispatch(getWeatherInfoError(error));
            },
        );
    };
};

export const getWeatherInfoSuccess = (result) => {
    return {
        type: types.actionTypes.GET_WEATHER_REQUEST.SUCCESS,
        result
    };
};

export const getWeatherInfoError = (error) => {
    return {
        type: types.actionTypes.GET_WEATHER_REQUEST.FAILURE,
    };
};
