import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routes from './routes';
import * as i18n from '../i18n';

import WeatherInfoScreen from '../containers/weatherInfoScreen';
import WeatherForecastScreen from '../containers/weatherForecastScreen';

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                barStyle={{ backgroundColor: '#694fad',  paddingBottom: 48, marginBottom: 48  }}
            >
                <Tab.Screen
                    name={routes.WEATHER_INFO}
                    component={WeatherInfoScreen}
                    options={{
                        headerTitle: i18n.strings('headerTitle.weatherInfoScreen'),
                        headerBackTitle: ' ',

                    }}
                />
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
