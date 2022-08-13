import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const CbsYogaScreen = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image source={require('../assets/christmas.jpg')} style={styles.picture}>
            </Image>
            <Text style={styles.title}>Christmas with CBS Yoga</Text>
            <View style={styles.line} />
            <Text style={styles.paragraph}>CBS Yoga invites you to an exciting special Yoga class for 
            Christmas, which is also perfect right before the winter holiday. If you wish to get prepared both
            mentally and physically, you're invited to take part of CBS club at CBS Frederiksberg, on Wednesday, the 15th
            December at 13:00. Get ready for lots of fun because you're going to get plenty of it with the other
            colleagues!</Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },

    picture: {
        width: '100%',
        height: 230
    },

    title: {
        marginTop: 20,
        fontSize: 23,
        fontWeight: 'bold'
    },

    line: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        marginTop: 20
    },

    paragraph: {
        marginHorizontal: 25,
        paddingLeft: 5,
        marginVertical: 20,
        lineHeight: 25,
        fontSize: 15,
        width: '90%'

    }
})

export default CbsYogaScreen