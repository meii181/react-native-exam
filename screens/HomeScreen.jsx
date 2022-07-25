import { View, Text, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';
import EventList from './list';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {

    const [events] = useState([
        {title: "Christmas with CBS Yoga", id: 1, page: "main", subTexts: "CBS Yoga"},
        {title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nanumy eirmad tempar", id: 2, page: "home", subTexts: "Example of subtext"},
        {title: "CBS Film presents - Ghost World", id: 3, page: "home", subTexts: "CBS Film"},
        {title: "CBS Dismission", id: 4, page: "home", subTexts: "Congratulations to the CBS graduates!"},
        {title: "CBS Art of Cisternerne", id: 5, page: "home", subTexts: "CBS Art"},
        {title: "CBS Gin Podcast EP7", id: 6, page: "home", subTexts: "The 7th episode of CBS Gin Podcast: A gin-gin situation"},
      ]);

    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.HelloText}>Welcome Back</Text>
            <ScrollView>
                <Pressable onPress={() => Alert.alert('Sorry, for the delay')} style={styles.button}>
                     <EventList events={events.filter((event) => event.id === 1)}/>
                </Pressable>

                <Pressable onPress={() => Alert.alert('Error Page not found')}>
                     <EventList events={events.filter((event) => event.page === 'home')}/>
                </Pressable>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1, 
        padding: 20, 
        backgroundColor: '#f1f2f4',
        alignItems: 'center'
    },
    HelloText: {
        fontSize: 30,
        fontWeight: "bold",
        textDecorationLine: 'none',
        paddingBottom: 5,
    }  
})
export default HomeScreen;