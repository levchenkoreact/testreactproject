import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bigImage: {
        position: 'absolute',
        left: 40,
        marginRight: 20,
        width: 66,
        height: 66,
    },
    forecastDayItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth:1, borderColor:'black'
    },
    forecastDayItemText: {
        fontSize: 18,
    },
});

export default styles;
