import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PodcastScreen = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image source={require('../assets/podcast.jpg')} style={styles.picture}>
            </Image>
            <Text style={styles.title}>Gin Podcast Episode 7 - A gin-gin situation</Text>
            <View style={styles.line} />
            <Text style={styles.paragraph}>The next episode of Gin Podcast, with number 7, will talk about
            a gin-gin situation, as the title says otherwise. The podcast will be available on Spotify starting
            with Wednesday the 12th October, at 12:00, so stay tuned, it is going to be an interesting podcast.</Text>
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

export default PodcastScreen