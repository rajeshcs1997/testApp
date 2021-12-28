import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

const Lecture = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>the most important principle of Mathematics</Text>
      <View
        style={styles.button}
      >
        <Icon name="play-circle" size={40} color="#18d992"/>
        <Progress.Bar progress={0.67} width={330} height={10} marginTop={35} color='#18d992' borderRadius={10}/>
      </View>
      <View style={styles.lession}>
        <Text style={styles.lessiontext1}>Lesson #1</Text>
        <Text style={styles.lessiontext2}>Online Maths for free has been brought here for the ease of students, so that they can get access to each and every fundamental concept and learn quickly.</Text>
      </View>
      <View style={styles.lession}>
        <Text style={styles.lessiontext1}>Lesson #2</Text>
        <Text style={styles.lessiontext2}>Online Maths for free has been brought here for the ease of students, so that they can get access to each and every fundamental concept and learn quickly.</Text>
      </View>
      <View style={styles.lession}>
        <Text style={styles.lessiontext1}>Lesson #3</Text>
        <Text style={styles.lessiontext2}>Online Maths for free has been brought here for the ease of students, so that they can get access to each and every fundamental concept and learn quickly.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: 'bold',
    margin: 20,
    fontSize: 30
  },
  button: {
    padding: 10,
    width: 350,
    height:120,
    backgroundColor : '#ebb134',
    justifyContent: 'center',
    borderRadius: 15,
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lession: {
    margin:30,
    borderColor:'#18d992',
    borderLeftWidth:5,
    paddingLeft:10
  },
  lessiontext1: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  lessiontext2: {
    fontSize: 14,
    color: 'grey'
  },
});

export default Lecture;
