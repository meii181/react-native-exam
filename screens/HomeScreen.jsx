import { View, Text, StyleSheet, Pressable, ImageBackground, ScrollView } from 'react-native';
import EventList from './list';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {

    const [events] = useState([
        {title: "Christmas with CBS Yoga", id: 1, page: "main", subTexts: "CBS Yoga"},
        {title: "Coffee Talk", id: 2, page: "home", subTexts: "Have a coffee talk with your fellow students!"},
        {title: "CBS Film presents - Ghost World", id: 3, page: "home", subTexts: "CBS Film"},
        {title: "CBS Dismission", id: 4, page: "home", subTexts: "Congratulations to the CBS graduates!"},
        {title: "CBS Art of Cisternerne", id: 5, page: "home", subTexts: "CBS Art"},
        {title: "CBS Gin Podcast EP7", id: 6, page: "home", subTexts: "The 7th episode of CBS Gin Podcast: A gin-gin situation"},
      ]);

    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.HelloText}>Welcome dear student!</Text>

            <ScrollView>
                <ImageBackground source={require("../assets/christmas.jpg")} style={styles.image1} imageStyle={{borderRadius: 8}}>
                <ImageBackground style={styles.overlay} />
                <Pressable onPress={() => navigation.navigate('cbsYoga')}>
                     <EventList events={events.filter((event) => event.id === 1)}/>
                </Pressable>
                </ImageBackground>

                <ImageBackground source={require("../assets/coffee-talk.jpg")} style={styles.image2} imageStyle={{borderRadius: 8}}>
                <ImageBackground style={styles.overlay} />
                <Pressable onPress={() => navigation.navigate('Coffee')}>
                     <EventList events={events.filter((event) => event.id === 2)}/>
                </Pressable>
                </ImageBackground>

                <ImageBackground source={require("../assets/ghost-town.jpg")} style={styles.image2} imageStyle={{borderRadius: 8}}>
                <ImageBackground style={styles.overlay} />
                <Pressable onPress={() => navigation.navigate('GhostTown')}>
                     <EventList events={events.filter((event) => event.id === 3)}/>
                </Pressable>
                </ImageBackground>

                <ImageBackground source={require("../assets/graduate.jpg")} style={styles.image2} imageStyle={{borderRadius: 8}}>
                <ImageBackground style={styles.overlay} />
                <Pressable onPress={() => navigation.navigate('Graduation')}>
                     <EventList events={events.filter((event) => event.id === 4)}/>
                </Pressable>
                </ImageBackground>

                <ImageBackground source={require("../assets/art-of-cisternerne.jpg")} style={styles.image2} imageStyle={{borderRadius: 8}}>
                <ImageBackground style={styles.overlay} />
                <Pressable onPress={() => navigation.navigate('Art')}>
                     <EventList events={events.filter((event) => event.id === 5)}/>
                </Pressable>
                </ImageBackground>

                <ImageBackground source={require("../assets/podcast.jpg")} style={styles.image2} imageStyle={{borderRadius: 8}}>
                <ImageBackground style={styles.overlay} />
                <Pressable onPress={() => navigation.navigate('Podcast')}>
                     <EventList events={events.filter((event) => event.id === 6)}/>
                </Pressable>
                </ImageBackground>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1, 
        padding: 20, 
        margin: 5,
        backgroundColor: '#f1f2f4',
        alignItems: 'center',
        marginTop: 20
    },

    HelloText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 5,
    },

    image1: {
        marginTop: 30,
        width: '100%',
        height: 140,
    },

    image2: {
        marginTop: 30,
        width: '100%',
        height: 140,
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#6a5acd',
        opacity: .6,
        borderRadius: 8,

    }
})
export default HomeScreen;