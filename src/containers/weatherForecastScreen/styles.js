import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    forecastFlatList: {
        flex: 1,
    },
    bigImage: {
        position: 'absolute',
        left: 40,
        marginRight: 20,
        width: 66,
        height: 66,
    },
    forecastDayItem: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    forecastDayItemText: {
        width: '100%',
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
    },
});

export default styles;
