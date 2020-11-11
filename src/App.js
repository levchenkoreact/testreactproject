import React from 'react';
import 'react-native-gesture-handler';

import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './store';

import Navigator from './navigation/navigator';

const store = configureStore();

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Provider store={store}>
                <Navigator/>
            </Provider>
        </SafeAreaView>
    );
};

export default App;
