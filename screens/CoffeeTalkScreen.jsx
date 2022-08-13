import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const CoffeeTalkScreen = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image source={require('../assets/coffee-talk.jpg')} style={styles.picture}>
            </Image>
            <Text style={styles.title}>Coffee Talk</Text>
            <View style={styles.line} />
            <Text style={styles.paragraph}>Isn't it nice to talk with other people, 
            while enjoying your morning coffee together? At CBS Frederiskberg, in the cafeteria area,
            you can have a coffee talk with your fellow colleagues from Monday to Friday, from
            8:30 - 12:00, where you can talk about your student life, your future plans and so on. </Text>
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

export default CoffeeTalkScreen