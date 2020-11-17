import * as types from '../constants/actionTypes';

let initialState = {
    isLoading: false,
    error: null,
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
