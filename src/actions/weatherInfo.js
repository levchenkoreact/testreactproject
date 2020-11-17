import * as types from '../constants/actionTypes';
import {getWeatherInfo} from '../requests';
import {ERROR} from '../constants/errorMessages';

export const getWeatherInfoAction = (props) => {
    return (dispatch, getState) => {
        dispatch({type: types.GET_WEATHER_REQUEST.START});
        getWeatherInfo(props).then(
            (result) => {
                if (result) {
                    dispatch(getWeatherInfoSuccess(result));
                } else {
                    dispatch(getWeatherInfoError(ERROR));
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
        type: types.GET_WEATHER_REQUEST.SUCCESS,
        result
    };
};

export const getWeatherInfoError = (error) => {
    return {
        type: types.GET_WEATHER_REQUEST.FAILURE,
    };
};
