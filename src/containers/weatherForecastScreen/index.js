import React, {useEffect, useState} from 'react';

import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getWeatherForecastAction} from '../../actions/weatherForecast';

import {FlatList, RefreshControl, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

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

    const onRefresh = () => {
        dispatch(getWeatherForecastAction({cityName, units, apiKey}));
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeatherForecastAction({cityName, units, apiKey}));
    }, [dispatch]);

    useEffect(() => {
        if (forecastData.length !== 0) {
            forecastData.forEach((item, index) => {
                forecastsList[index].isExpanded = item.isExpanded;
            });
        }

        setForecastData(forecastsList);
    }, [forecastsList]);

    const renderItem = ({item}) => {
        return <View>
            <TouchableOpacity
                style={styles.forecastDayItem}
                onPress={() => {
                    let newArray = [...forecastData];
                    let newIndex = forecastData.indexOf(item);
                    newArray[newIndex].isExpanded = !newArray[newIndex].isExpanded;
                    setForecastData(newArray);
                }}>
                <Text style={styles.forecastDayItemText}>{item.day}</Text>
                {
                    item.isExpanded && item.forecasts.map((forecast) => {
                        return <ForecastItem item={forecast}/>;
                    })
                }
            </TouchableOpacity>
        </View>;
    };

    return (
        <SafeAreaView stlye={styles.forecastFlatList}>
            {isLoading ? <ActivityIndicatorDefault color={'white'}/> : <FlatList
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={onRefresh}/>
                }
                data={forecastData}
                keyExtractor={item => item.dt}
                renderItem={(item) => renderItem(item)}
            />}
        </SafeAreaView>
    );
}
