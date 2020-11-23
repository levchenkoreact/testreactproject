import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const ForecastItem = ({item}) => {
    return <View style={styles.forecastItemContent}>
        <Text>{item.hours}</Text>
        <Image
            style={styles.bigImage}
            source={{uri: item.imageUrl}}
        />
        <Text>{item.weatherDescription}</Text>
        <Text>{item.temperature}</Text>
    </View>;
};

export default ForecastItem;
