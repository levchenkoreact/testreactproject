import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    secondaryContainer: {
        width: '80%',
        flexDirection: 'row',
        marginBottom: 20,
    },
    secondaryContainerSpaceBetween: {
        width: '80%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
    },
    secondaryContainerSpaceBetweenVertical: {
        width: '80%',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    secondarySubContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    secondaryContainerCenter: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
    },
    regularText: {
        fontSize: 18,
    },
    bigText: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    bigImage: {
        position: 'absolute',
        left: 40,
        marginRight: 20,
        width: 66,
        height: 66,
    },
    loadingBg: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000000AA',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
