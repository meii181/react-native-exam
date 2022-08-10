import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

const EventScreen = () => {

    return (
        <View style={styles.container}>
            
            <View style={styles.SubView}>
                <Pressable onPress={() => Alert.alert('Error page not found')}>
                <Text style={styles.ViewText}>Friday Bar</Text>
                </Pressable>
            </View>

            <View style={styles.SubView2}>
              <Pressable onPress={() => Alert.alert('Error page not found')}>
                <Text style={styles.ViewText}>Walking tour</Text>
              </Pressable>  
            </View>

            <View style={styles.SubView3}>
              <Pressable onPress={() => Alert.alert('Error page not found')}>
                <Text style={styles.ViewText}>Trip to Malmö</Text>  
              </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f1f2f4"
      },
      
      Title: {
        color: "#5E239D",
        fontSize: 20,
        fontWeight: "bold"
      },
      SubView: {
        backgroundColor: "#A88CE3",
        height: 90,
        width: "100%",
        padding: 15,
        marginTop: 8,
        borderRadius: 5,
      },

      ViewText: {
        paddingTop: 8,
        paddingLeft: 6,
        color: "whitesmoke",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },

      SubView2: {
        backgroundColor: "#A88CE3",
        height: 90,
        width: "100%",
        padding: 15,
        marginTop: 20,
        borderRadius: 5,
      },

      SubView3: {
        backgroundColor: "#A88CE3",
        height: 90,
        width: "100%",
        padding: 15,
        marginTop: 20,
        borderRadius: 5,
      },

      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default EventScreen;