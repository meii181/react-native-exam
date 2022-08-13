import { View, Text, StyleSheet } from 'react-native';

const CbsYogaScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>This is CBS Yoga page.</Text>
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

export default CbsYogaScreen