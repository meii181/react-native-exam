import { View, Text, StyleSheet } from 'react-native';

const CoffeeTalkScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>This is the page about Coffee Talk.</Text>
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

export default CoffeeTalkScreen