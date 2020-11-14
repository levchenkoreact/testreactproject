import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import ActivityIndicator from '../../components/activityIndicator';

import {useSelector, shallowEqual} from 'react-redux';

import {useDispatch} from 'react-redux';
import {getWeatherInfoAction} from '../../actions/weatherInfo';

import routes from '../../navigation/routes';
import * as i18n from '../../i18n';
import styles from './styles';
import {formatMillisecondsToTime} from '../../utils/utils';

const cityName = 'Minsk';
const units = 'metric';
const apiKey = '0ac8d7aaee48212323ef27b26fc6a0e4';

export default function WeatherInfoScreen(props) {
    const {navigation} = props;
    //Single Object
    const {
        isLoading, name, currentTime, weatherType, weatherIconUrl, temp, windSpeed, humidity, deg, sunrise, sunset,
    } = useSelector(
        ({
             isLoading, name, currentTime, weatherType, weatherIconUrl, temp, windSpeed, humidity, deg, sunrise, sunset,
         }) => ({
            isLoading, name, currentTime, weatherType, weatherIconUrl, temp, windSpeed, humidity, deg, sunrise, sunset,
        }),
        shallowEqual,
    );

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getWeatherInfoAction({cityName, units, apiKey}));
    }, [dispatch]);

    const temperature = () => {
        const {currentTemp, tempMin, tempMax, tempFeelsLike} = temp
        return <View style={styles.secondaryContainerSpaceBetween}>
            <View style={styles.secondarySubContainer}>
                <Text style={styles.bigText}>{currentTemp}*C</Text>
                <View>
                    <Text style={styles.regularText}>{tempMin}*C</Text>
                    <Text style={styles.regularText}>{tempMax}*C</Text>
                </View>
            </View>
            <Text style={styles.regularText}>Чувствуется как: {tempFeelsLike}*C</Text>
        </View>;
    };

    return (
        <View style={{flex: 1}}>
            {!isLoading && (
                <View style={styles.mainContainer}>
                    <Text style={styles.bigText}>{name}</Text>
                    <View style={styles.secondaryContainerCenter}>
                        <Image
                            style={styles.bigImage}
                            source={{uri: `http://openweathermap.org/img/wn/${weatherIconUrl}@2x.png`}}
                        />
                        <View>
                            <Text style={styles.regularText}>{formatMillisecondsToTime(currentTime)}</Text>
                            <Text style={styles.regularText}>{weatherType}</Text>
                        </View>
                    </View>

                    {temperature()}

                    <View style={styles.secondaryContainerSpaceBetweenVertical}>
                        <Text style={styles.regularText}>Скорость ветра: {windSpeed} м/с </Text>
                        <Text style={styles.regularText}>Влажность: {humidity}% </Text>
                        <Text style={styles.regularText}>Направление ветра: {deg}*</Text>
                        <Text style={styles.regularText}>Восход: {formatMillisecondsToTime(sunrise)}</Text>
                        <Text style={styles.regularText}>Закат: {formatMillisecondsToTime(sunset)}</Text>
                    </View>
                </View>
            )}
            {(isLoading) && (
                <View style={styles.loadingBg}>
                    <ActivityIndicator color={'white'}/>
                </View>
            )}
        </View>
    );
}
