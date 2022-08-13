import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const GhostTownScreen = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image source={require('../assets/ghost-town.jpg')} style={styles.picture}>
            </Image>
            <Text style={styles.title}>CBS Film presents - Ghost World</Text>
            <View style={styles.line} />
            <Text style={styles.paragraph}>CBS Film will present their next film pretty soon, and it is called
            'Ghost World', the plot of the film being about an abandoned world. The film will premiere on Thursday,
            the 27th October at 16:00, make sure you won't miss it!</Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        paddingLeft: 10,
        marginVertical: 20,
        lineHeight: 25,
        fontSize: 15,
        width: '90%'

    }
})

export default GhostTownScreen