import { SIZES, FONTS } from './../../constants/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    descCon: {
        width: '65%',
        marginRight: '5%',
    },
    postImg: {
        width: "100%",
        height: '100%',
        borderRadius: 20
    },
    postImgMain: {
        width: '30%',
        borderRadius: 10,
        // backgroundColor: '#673'
    },
    postInput: {
        width: '100%',
        flex: 1,
        fontSize: SIZES.medium,
        fontFamily: FONTS.medium,
        color: '#000'
    },
    saveConInner: {
        flexDirection: 'row',
        padding: '5%',
        width: '100%',
        height: 200
    },
    bottomCon: {
        position: 'absolute',
        width: '100%',
        paddingHorizontal: 70,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
    }
});

export default styles;