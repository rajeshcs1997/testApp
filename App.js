import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import Preparing from './components/Preparing';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
	      <Stack.Navigator initialRouteName="Home">
	        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
	        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
	        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
	        <Stack.Screen name="Preparing" component={Preparing} options={{ headerShown: false }}/>
	      </Stack.Navigator>
	    </NavigationContainer>
  );
};

export default App;
