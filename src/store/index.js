import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const configureStore = () => {
    const middlewares = [thunk, logger];
    return createStore(rootReducer, applyMiddleware(...middlewares));
};
