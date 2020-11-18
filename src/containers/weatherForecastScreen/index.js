import React, {useState} from 'react';

import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getWeatherForecastAction} from '../../actions/weatherForecast';

import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import ActivityIndicatorDefault from '../../components/activityIndicator';
import ForecastItem from '../../components/forecastItem';

const cityName = 'Minsk';
const units = 'metric';
const apiKey = '0ac8d7aaee48212323ef27b26fc6a0e4';

export default function WeatherForecastScreen() {
    const [forecastData, setForecastData] = useState([]);

    const {
        isLoading, forecastsList,
    } = useSelector(
        ({
             weatherForecast: {isLoading, forecastsList},
         }) => ({
            isLoading, forecastsList,
        }),
        shallowEqual,
    );

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getWeatherForecastAction({cityName, units, apiKey}));
    }, [dispatch]);

    React.useEffect(() => {
        setForecastData(forecastsList)
    },[forecastsList])

    const renderItem = ({item}) => {
        return <View style={styles.forecastDayItem}>
            <TouchableOpacity onPress={() => {
                let newArray = [...forecastData]
                let newIndex = forecastData.indexOf(item)
                newArray[newIndex].isExpanded = !newArray[newIndex].isExpanded
                setForecastData(newArray)
            }}>
                <Text style={styles.forecastDayItemText}>{item.day}</Text>
                {
                    item.isExpanded && item.forecasts.map((forecast) => {
                        console.log("forecast");
                        console.log(forecast);
                        return <ForecastItem item={forecast}/>;
                    })}
            </TouchableOpacity>
        </View>;
    };

    return (
        <SafeAreaView stlye={{flex: 1}}>
            {isLoading ? <ActivityIndicatorDefault color={'white'}/> : <FlatList
                data={forecastData}
                keyExtractor={item => item.dt}
                renderItem={(item) => renderItem(item)}
            />}
        </SafeAreaView>
    );
}
