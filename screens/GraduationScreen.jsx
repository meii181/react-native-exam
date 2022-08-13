import { View, Text, StyleSheet } from 'react-native';

const GraduationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>This is the page about dismission.</Text>
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

export default GraduationScreen