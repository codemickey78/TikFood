import { SIZES } from './../../constants/theme';
import { StyleSheet } from 'react-native';

const profileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    backImg: {
        width: '100%',
        height: 200,
        flex: 1
    },
    imgBack: {
        width: '100%',
        height: 200,
        borderBottomRightRadius: SIZES.large,
        borderBottomLeftRadius: SIZES.large
    },
    safeArea: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    profMain: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#fff',
        position: 'absolute',
        top: '20%',
    }
});


export { profileStyle }