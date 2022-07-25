
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, Pressable, ScrollView, Image, ImageBackground} from 'react-native';
import EventList from './list';

const DiscoverScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

          <ScrollView>

            <ImageBackground source={require("../assets/events.jpg")} style={styles.SubView}>
              <ImageBackground style={styles.overlay} />
                <Pressable onPress={() => navigation.navigate('Events')}>
                <Text style={styles.ViewText}>All Events</Text>
                </Pressable>
            </ImageBackground>

            <ImageBackground source={require("../assets/blog.jpg")} style={styles.SubView2}>
            <ImageBackground style={styles.overlay1} />
              <Pressable onPress={() => navigation.navigate('Student Organisations')}>
                <Text style={styles.ViewText}> Student Organisations</Text>
              </Pressable>  
            </ImageBackground>

            <ImageBackground source={require("../assets/organisations.jpg")} style={styles.SubView3}>
            <ImageBackground style={styles.overlay2} />
              <Pressable onPress={() => Alert.alert('Error page not found')}>
                <Text style={styles.ViewText}>All Posts</Text>  
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
      },

      Title: {
        color: "#5E239D",
        fontSize: 20,
        fontWeight: "bold",
      },

      SubView: {
        height: 140,
        width: "110%",
        padding: 20,
        marginTop: 8,
      },

      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "purple",
        opacity: .5,
      },

      ViewText: {
        marginTop: 9,
        paddingVertical: 8,
        paddingEnd: 30,
        color: "whitesmoke",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
      },

      SubView2: {
        height: 140,
        width: "110%",
        padding: 20,
        marginTop: 30,
      },

      overlay1: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#2d304c",
        opacity: .5,
      },


      SubView3: {
        height: 140,
        width: "110%",
        padding: 20,
        marginTop: 30,
      },

      overlay2: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#2f3b25",
        opacity: .5,
      },


      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default DiscoverScreen;

