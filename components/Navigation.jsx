import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
// import { View, Text } from 'react-native';
import ChatroomScreen from "../screens/ChatroomScreen";
import MyOrganisations from "../screens/MyOrganisations";
import Organisations from "../screens/OrganisationsScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import HomeScreen from "./../screens/HomeScreen";
import DiscoverScreen from "./../screens/DiscoverScreen"
import SignupScreen from "./../screens/SignupScreen";
import LoginScreen from "./../screens/LoginScreen";
import EditProfileScreen from "./../screens/EditProfileScreen";
import EventScreen from "./../screens/EventScreen";
import CbsYogaScreen from "./../screens/CbsYogaScreen";
import CoffeeTalkScreen from '../screens/CoffeeTalkScreen';
import GhostTownScreen from '../screens/GhostTownScreen';
import GraduationScreen from '../screens/GraduationScreen';
import ArtScreen from '../screens/ArtScreen';
import PodcastScreen from '../screens/PodcastScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const homeName = 'Home';
const discoverName = 'Discover';
const chatName = 'Chat';
const profileName = 'Profile'


const NavigationComponent = ({ navigation }) => {
    const token = useSelector(state => state.user.idToken)
    return (
        <NavigationContainer >
            {token !== undefined ? (
                <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color,size }) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === homeName) {
                            iconName = focused
                            ? 'home' : 'home-outline'
                        } else if (rn === discoverName){
                            iconName = focused 
                            ? 'list' : 'list-outline'
                        } else if (rn === chatName) {
                            iconName = focused 
                            ? 'chatbubbles' : 'chatbubbles-outline'
                        } else if (rn === profileName) {
                            iconName = focused
                            ? 'settings' : 'settings-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#384E77',
                    tabBarInactiveTintColor: 'grey',

                })}>
                    <Tab.Screen name='Home' component={HomeStack} />
                    <Tab.Screen name='Discover' component={DiscoverStack}/>
                    <Tab.Screen name='Chat' component={ChatStack} />
                    <Tab.Screen name='Profile' component={ProfileStack} />
                </Tab.Navigator>
            ) : (

                <Stack.Navigator>
                    <Stack.Screen name='Signup' component={SignupScreen} />
                    <Stack.Screen name='Login' component={LoginScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer >
    );
}

function HomeStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='HomePage' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='cbsYoga' component={CbsYogaScreen}></Stack.Screen>
            <Stack.Screen name='Coffee' component={CoffeeTalkScreen}></Stack.Screen>
            <Stack.Screen name='GhostTown' component={GhostTownScreen}></Stack.Screen>
            <Stack.Screen name='Graduation' component={GraduationScreen}></Stack.Screen>
            <Stack.Screen name='Art' component={ArtScreen}></Stack.Screen>
            <Stack.Screen name='Podcast' component={PodcastScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='ProfilePage' component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name='EditProfile' component={EditProfileScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Chatroom' component={ChatroomScreen} />
        </Stack.Navigator>
    );
}


function DiscoverStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='DiscoverPage' component={DiscoverScreen} />
            <Stack.Screen name='Events' component={EventScreen} />
            <Stack.Screen name='Student Organisations' component={Organisations} />
            <Stack.Screen name='My Organisations' component={MyOrganisations} />
        </Stack.Navigator>
    );
}

export default NavigationComponent;