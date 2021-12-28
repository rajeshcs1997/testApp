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
import Preparing from './Preparing';
import Profile from './Profile';
import Literature from './Literature';
import Score from './Score';
import Maths from './Maths';
import Lecture from './Lecture';
import Managecalendar from './Managecalendar';
import Barchart from './Barchart';
import fetchdata from './fetchdata';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const InitialProfile = () => {

  return (
	  <Stack.Navigator initialRouteName="Home">
	    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
	    <Stack.Screen name="Preparing" component={Preparing} options={{ headerShown: false }}/>
	    <Stack.Screen name="Literature" component={Literature} options={{ headerShown: false }}/>
	    <Stack.Screen name="Score" component={Score} options={{ headerShown: false }}/>
	    <Stack.Screen name="Maths" component={Maths} options={{ headerShown: false }}/>
	    <Stack.Screen name="Lecture" component={Lecture} options={{ headerShown: false }}/>
	    <Stack.Screen name="Managecalendar" component={Managecalendar} options={{ headerShown: false }}/>
	    <Stack.Screen name="Barchart" component={Barchart} options={{ headerShown: false }}/>
	    <Stack.Screen name="fetchdata" component={fetchdata} options={{ headerShown: false }}/>
	  </Stack.Navigator>
  );
};

export default InitialProfile;
