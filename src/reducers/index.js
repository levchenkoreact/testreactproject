import {combineReducers} from 'redux';
import weatherForecast from './weatherForecast';
import weatherInfo from './weatherInfo';

export default combineReducers({
    weatherInfo,
    weatherForecast,
});
