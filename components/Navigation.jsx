import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-vector-icons';
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
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationComponent = ({ navigation }) => {
    const token = useSelector(state => state.user.idToken)
    return (
        <NavigationContainer >
            {token !== undefined ? (
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Discover" component={DiscoverStack}/>
                    <Tab.Screen name="Chat" component={ChatStack} />
                    <Tab.Screen name="Profile" component={ProfileStack} />
                </Tab.Navigator>
            ) : (

                <Stack.Navigator>
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer >
    );
}


function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name="Edit Profile" component={EditProfileScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Chatroom" component={ChatroomScreen} />
        </Stack.Navigator>
    );
}


function DiscoverStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Discover" component={DiscoverScreen} />
            <Stack.Screen name="Events" component={EventScreen} />
            <Stack.Screen name="Student Organisations" component={Organisations} />
            <Stack.Screen name="My Organisations" component={MyOrganisations} />
        </Stack.Navigator>
    );
}

export default NavigationComponent;