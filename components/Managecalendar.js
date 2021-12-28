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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Lecture = ({navigation}) => {

  return (
    <View style={styles.container}>
    	<Calendar 
    		style={{
			    width:400,
			    height:400
			  }}
    	/>
    	<TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Barchart')}
      >
      	<Text style={styles.lessiontext1}>Mathematics 01</Text>
        <Text style={styles.lessiontext2}>Online Maths for free has been brought here for the ease of students, so that they can get access to each and every fundamental concept and learn quickly.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        //onPress={() => navigation.navigate('Managecalendar')}
      >
      	<Text style={styles.lessiontext1}>Mathematics 01</Text>
        <Text style={styles.lessiontext2}>Online Maths for free has been brought here for the ease of students, so that they can get access to each and every fundamental concept and learn quickly.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
	  padding: 10,
	  width: 370,
	  height:120,
	  backgroundColor : '#18d992',
		justifyContent: 'center',
		borderRadius: 15,
		margin:20
  },
  lessiontext1: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  lessiontext2: {
    fontSize: 14,
    color: '#fff'
  },
});

export default Lecture;
