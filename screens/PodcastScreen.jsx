import { View, Text, StyleSheet } from 'react-native';

const PodcastScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>This is the page about the episode 7 of the podcast.</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PodcastScreen