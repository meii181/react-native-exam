import TodoScreen from "./screens/TodoScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MenuScreen from "./screens/MenuScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import SignupScreen from "./screens/SignupScreen";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import chatReducer from './store/reducers/ChatReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const rootReducer = combineReducers({
  chat: chatReducer,
  // posts: postReducer,
  // events: eventReducer
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={SignupScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Chat" component={ChatStack} />
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
      </NavigationContainer>

    </Provider>
  )
}

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="AndreScreen" component={Screen3} />
    </Stack.Navigator>
  );
}


