import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const GraduationScreen = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image source={require('../assets/graduate.jpg')} style={styles.picture}>
            </Image>
            <Text style={styles.title}>CBS Dismission</Text>
            <View style={styles.line} />
            <Text style={styles.paragraph}>CBS invites you to take part of the dismission ceremony for the 
            Winter 2023 graduates, therefore the happily event will take place on Monday, the 30th January 2023, starting with 11:00,
            in the main hall of CBS Frederiksberg.</Text>
            <Text style={styles.graduationText}>Tillykke til alle dimittender!</Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
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

    },
    graduationText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 10
    }
})

export default GraduationScreen