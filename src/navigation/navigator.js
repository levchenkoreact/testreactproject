import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import routes from './routes';
import * as i18n from '../i18n';

import WeatherInfoScreen from '../containers/weatherInfoScreen';
import WeatherForecastScreen from '../containers/weatherForecastScreen';

const Stack = createStackNavigator();
export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={routes.WEATHER_FORECAST}>
                <Stack.Screen
                    name={routes.WEATHER_INFO}
                    component={WeatherInfoScreen}
                    options={{
                        headerTitle: i18n.strings('headerTitle.weatherInfoScreen'),
                        headerBackTitle: ' ',
                    }}
                />
                <Stack.Screen
                    name={routes.WEATHER_FORECAST}
                    component={WeatherForecastScreen}
                    options={{
                        headerTitle: i18n.strings('headerTitle.weatherForecastScreen'),
                        headerBackTitle: ' ',
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
