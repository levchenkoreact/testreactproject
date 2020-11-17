import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import routes from './routes';
import * as i18n from '../i18n';

import WeatherInfoScreen from '../containers/weatherInfoScreen';
import WeatherForecastScreen from '../containers/weatherForecastScreen';

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#e91e63',
                }}>
                <Tab.Screen
                    name={routes.WEATHER_INFO}
                    component={WeatherInfoScreen}
                    options={{
                        headerTitle: i18n.strings('headerTitle.weatherInfoScreen'),
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="weather-cloudy" color={color} size={size}/>
                        ),
                    }}/>
                <Tab.Screen
                    name={routes.WEATHER_FORECAST}
                    component={WeatherForecastScreen}
                    options={{
                        headerTitle: i18n.strings('headerTitle.weatherForecastScreen'),
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="clipboard-list" color={color} size={size}/>
                        ),
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
