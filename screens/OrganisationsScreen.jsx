import { View, Text, Pressable, StyleSheet, Alert, ImageBackground, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Organisations = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

        <ScrollView>
        <ImageBackground source={require("../assets/international.jpg")} style={styles.SubView} imageStyle=
        {{borderRadius: 8}}>
          <ImageBackground style={styles.overlay} />
            <Pressable onPress={() => Alert.alert('Error page not found')}>
            <Text style={styles.ViewText}>International Club</Text>
            </Pressable>
        </ImageBackground>

        <ImageBackground source={require("../assets/danish-class.jpg")} style={styles.SubView2} imageStyle=
        {{borderRadius: 8}}>
        <ImageBackground style={styles.overlay} />
          <Pressable onPress={() => Alert.alert('Error page not found')}>
            <Text style={styles.ViewText}>Danish Lessons</Text>
          </Pressable>  
        </ImageBackground>

        <ImageBackground source={require("../assets/art-club.jpg")} style={styles.SubView3} imageStyle=
        {{borderRadius: 8}}>
        <ImageBackground style={styles.overlay} />
          <Pressable onPress={() => Alert.alert('This page is still under progress, it will be ready for you in no time.')}>
            <Text style={styles.ViewText}>Art Club</Text>  
          </Pressable>
        </ImageBackground>

         <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonStyling} onPress={() => navigation.navigate('My Organisations')}>
            <Text style={styles.buttonText}>My organisations</Text>
        </Pressable>
        </View>

        </ScrollView>
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
        width: "100%",
        height: 140,
        padding: 15,
        marginTop: 8,
        marginLeft: 14,
        borderRadius: 5,
      },

      ViewText: {
        marginTop: 30,
        paddingRight: 20,
        color: "whitesmoke",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },

      SubView2: {
        width: "100%",
        height: 140,
        padding: 15,
        marginTop: 20,
        marginLeft: 14,
        borderRadius: 5,
      },

      SubView3: {
        width: "100%",
        height: 140,
        padding: 15,
        marginTop: 20,
        marginLeft: 14,
        marginBottom: 30,
        borderRadius: 5,
      },

    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "#778899",
      width: '100%',
      height: 140,
      opacity: .6,
      borderRadius: 8
    },

    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    paddingLeft: 35,
    paddingTop: 11,
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 15
  },

  buttonStyling: {
    backgroundColor: "#384E77",
    width: "50%",
    height: 45,
    borderRadius: 4
  }
})

export default Organisations;