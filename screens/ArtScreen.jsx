import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ArtScreen = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image source={require('../assets/art-of-cisternerne.jpg')} style={styles.picture}>
            </Image>
            <Text style={styles.title}>CBS Art of Cisternerne</Text>
            <View style={styles.line} />
            <Text style={styles.paragraph}>CBS Art department invites you to join the exhibition called 'Art of Cisternerne',
            where you can see cisterns and art of it. You can visit the exhibition at Søndermarken, which is located 
            in Frederiksberg area of Copenhagen, and it can be visited between 17th September - 20th December.</Text>
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

export default ArtScreen