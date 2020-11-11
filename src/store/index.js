import {createStore, applyMiddleware} from 'redux';
import weatherInfo from '../reducers/weatherInfo';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const configureStore = () => {
    const middlewares = [thunk, logger];
    return createStore(weatherInfo, applyMiddleware(...middlewares));
};
