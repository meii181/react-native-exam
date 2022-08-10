
import { useState } from 'react';
import { View, Text, StyleSheet, Alert, Pressable, ScrollView, ImageBackground} from 'react-native';
import EventList from './list';

const DiscoverScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

          <ScrollView>

            <ImageBackground source={require("../assets/events.jpg")} style={styles.SubView} imageStyle={{borderRadius: 8}}>
              <ImageBackground style={styles.overlay} />
                <Pressable onPress={() => navigation.navigate('Events')}>
                <Text style={styles.ViewText1}>All Events</Text>
                </Pressable>
            </ImageBackground>

            <ImageBackground source={require("../assets/blog.jpg")} style={styles.SubView2} imageStyle={{borderRadius: 8}}>
            <ImageBackground style={styles.overlay1} />
              <Pressable onPress={() => navigation.navigate('Student Organisations')}>
                <Text style={styles.ViewText2}> Student Organisations</Text>
              </Pressable>  
            </ImageBackground>

            <ImageBackground source={require("../assets/organisations.jpg")} style={styles.SubView3} imageStyle={{borderRadius: 8}}>
            <ImageBackground style={styles.overlay2} />
              <Pressable onPress={() => Alert.alert('Error page not found')}>
                <Text style={styles.ViewText3}>All Posts</Text>  
              </Pressable>
            </ImageBackground>         


          </ScrollView>



        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f1f2f4",
        paddingTop: 30
      },

      Title: {
        color: "#5E239D",
        fontSize: 20,
        fontWeight: "bold",
      },


      SubView: {
        height: 140,
        width: "100%",
        padding: 20,
        marginTop: 8,
        marginLeft: 19
        
      },

      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "purple",
        width: '100%',
        opacity: .5,
        borderRadius: 8
      },

      ViewText1: {
        marginTop: 20,
        paddingVertical: 8,
        paddingEnd: 39,
        color: "whitesmoke",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
      },

      ViewText2: {
        marginTop: 7,
        paddingVertical: 8,
        paddingEnd: 39,
        color: "whitesmoke",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
      },

      ViewText3: {
        marginTop: 23,
        paddingVertical: 8,
        paddingEnd: 35,
        color: "whitesmoke",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
      },

      SubView2: {
        height: 140,
        width: "100%",
        padding: 20,
        marginTop: 30,
        marginLeft: 19
      },

      overlay1: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        backgroundColor: "#2d304c",
        opacity: .5,
        borderRadius: 8
      },


      SubView3: {
        height: 140,
        width: "100%",
        padding: 20,
        marginTop: 30,
        marginLeft: 19
      },

      overlay2: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        backgroundColor: "#2f3b25",
        opacity: .5,
        borderRadius: 8
      },


      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default DiscoverScreen;

