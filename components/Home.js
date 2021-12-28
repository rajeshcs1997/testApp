import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ( {navigation} ) =>{
  return (
    <>
      <StatusBar
        backgroundColor="#18d992"
       />
      <View style={styles.container}>
        <Image
        style={styles.stretch}
        source={require('../assets/globe.png')}
        />
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.welcomeText1}>You can study various science right at home</Text>
        <View style={styles.buttonview}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        >
        <Text>Next <Icon name="chevron-right" color="black" /></Text>
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18d992',
  },
  buttonview:{
    position: 'absolute',
    bottom: 0,
    width:500,
    height:150,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90
  },
  welcomeText: {
    fontSize: 50,
    color: '#ffffff'
  },
  welcomeText1: {
    fontSize: 25,
    color: '#ffffff',
    paddingLeft: 50,
    paddingRight:50
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebb134',
    height: 50,
    width: 150,
    borderRadius: 30
  },
});

export default Home;