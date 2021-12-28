import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InitialProfile from './InitialProfile';
import Filter from './Filter';
import fetchdata from './fetchdata';
import Testing from './Testing';
import Contextapi from './Contextapi';
import Googlemap from './Googlemap';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is home page</Text>
    </View>
  );
}


function NotificationScreen5() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is notification page</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <Tab.Navigator
    initialRouteName="Profile"
    tabBarOptions={{
      activeTintColor: '#18d992',
    }}
  >
    <Tab.Screen
      name="Contextapi"
      component={Contextapi}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="share"
      component={Testing}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={InitialProfile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Filter"
      component={Filter}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="storefront-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="fetchdata"
      component={fetchdata}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="access-point" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Googlemap"
      component={Googlemap}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="access-point" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}