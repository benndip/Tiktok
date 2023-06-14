import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.5)',
        justifyContent: 'space-around',
        position: 'absolute',
        zIndex: 1,
        top: height * 0.05
    },
    touch: {
        height: 40,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    verticalSeparator: {
        width: 3,
        height: 16,
        backgroundColor: '#BEBEBE',
        marginHorizontal: 10,
        borderColor: '#000000',
        borderRadius: 3
    },
    jobsAndFeedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 5,
        width: 95,
        height: 45,
        zIndex: 2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'absolute',
        top: height * 0.15,
        zIndex: 1,
    },
    belowLine: {
        position: 'absolute',
        bottom: 5,
        backgroundColor: '#F9AE2A',
        width: 16,
        height: 3,
        borderRadius: 4,
    },
    swipAnimText: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default styles;