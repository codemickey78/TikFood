import { StyleSheet } from 'react-native';
const proStyles = StyleSheet.create({
    mainCon: {
        marginTop: 10,
        backgroundColor: '#764',
        height: '100%',
        
    }
});


const allPostStyle = StyleSheet.create({
    mainRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        overflow: 'scroll',
        backgroundColor: '#763',
    },
    mainCol: {
        width: '30%',
        height: 200,
        marginBottom: '2.5%',
        // marginRight: '3%',
        borderRadius: 10,
        backgroundColor: '#746'
    }
})

export { proStyles, allPostStyle }