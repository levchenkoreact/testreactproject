import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import routes from './routes';
import * as i18n from '../i18n';

import WeatherInfoScreen from '../containers/weatherInfoScreen';
import WeatherForecastScreen from '../containers/weatherForecastScreen';

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name={routes.WEATHER_INFO}
                    component={WeatherInfoScreen}
                    options={{
                        headerTitle: i18n.strings('headerTitle.weatherInfoScreen'),
                        headerBackTitle: ' ',
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size}/>
                        ),
                    }}/>
                <Tab.Screen
                    name={routes.WEATHER_FORECAST}
                    component={WeatherForecastScreen}
                    options={{
                        headerTitle: i18n.strings('headerTitle.weatherForecastScreen'),
                        headerBackTitle: ' ',
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
