import React, {useState} from 'react';
import ActivityIndicator from '../../components/activityIndicator';

import {useSelector, shallowEqual} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getWeatherForecastAction} from '../../actions/weatherForecast';

import {Image, Text, View, FlatList, SafeAreaView} from 'react-native';

import styles from './styles';
import {formatMillisecondsToTime} from '../../utils/utils';

const cityName = 'Minsk';
const units = 'metric';
const apiKey = '0ac8d7aaee48212323ef27b26fc6a0e4';

export default function WeatherForecastScreen(props) {

    const MOCK_DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    const dateItem = ({item}) => {
        return <View style={{flex: 1}}>
            <Text>{item.title}</Text>
        </View>;
    };

    const forecastItem = ({item}) => {
        return <View>
            <Text>21:00</Text>
            <Image
                style={styles.bigImage}
                source={{uri: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'}}
            />
            <Text>Clouds</Text>
            <Text>2.2/2.2*C</Text>
        </View>;
    };

    return (
        <SafeAreaView>
            <FlatList
                data={MOCK_DATA}
                keyExtractor={item => item.id}
                renderItem={dateItem}
            />
        </SafeAreaView>
    );
}
