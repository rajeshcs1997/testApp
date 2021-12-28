import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Maths = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.mathstext}>Mathematics</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 30}}>
	      <TouchableOpacity
		      style={styles.cardview}
		      onPress={() => navigation.navigate('Lecture')}
		    >
	      	<Text style={styles.text1}>Early maths</Text>
	      	<Text style={styles.text2}>24 lessons</Text>
	      	<Text style={styles.text3}>12+</Text>
	      </TouchableOpacity>
	      <View style={styles.cardview}>
	      	<Text style={styles.text1}>Pre Algebra</Text>
	      	<Text style={styles.text2}>11 lessons</Text>
	      	<Text style={styles.text3}>18+</Text>
	      </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 30}}>
	      <View style={styles.cardview}>
	      	<Text style={styles.text1}>Arithmatic</Text>
	      	<Text style={styles.text2}>24 lessons</Text>
	      	<Text style={styles.text3}>12+</Text>
	      </View>
	      <View style={styles.cardview}>
	      	<Text style={styles.text1}>Algebra Basic</Text>
	      	<Text style={styles.text2}>11 lessons</Text>
	      	<Text style={styles.text3}>18+</Text>
	      </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 30}}>
	      <View style={styles.cardview}>
	      	<Text style={styles.text1}>Algebra 1</Text>
	      	<Text style={styles.text2}>24 lessons</Text>
	      	<Text style={styles.text3}>12+</Text>
	      </View>
	      <View style={styles.cardview}>
	      	<Text style={styles.text1}>Algebra 2</Text>
	      	<Text style={styles.text2}>21 lessons</Text>
	      	<Text style={styles.text3}>18+</Text>
	      </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 30}}>
	      <View style={styles.cardview}>
	      	<Text style={styles.text1}>Geometry</Text>
	      	<Text style={styles.text2}>24 lessons</Text>
	      	<Text style={styles.text3}>12+</Text>
	      </View>
	      <View style={styles.cardview}>
	      	<Text style={styles.text1}>Trignometry</Text>
	      	<Text style={styles.text2}>24 lessons</Text>
	      	<Text style={styles.text3}>12+</Text>
	      </View>
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
  mathstext: {
  	fontWeight: 'bold',
  	fontSize: 40
  },
  cardview: {
  	backgroundColor: '#18d992',
  	width: 150,
  	height: 120,
  	borderRadius: 20,
  	marginLeft: 20,
  	marginRight: 20
  },
  text1: {
  	fontWeight: 'bold',
  	fontSize:17,
  	color: '#fff',
  	marginLeft:15,
  	marginTop:15
  },
  text2: {
  	fontSize:15,
  	color: '#fff',
  	marginLeft:15,
  },
  text3: {
  	fontSize:15,
  	backgroundColor: '#ebb134',
  	height:40,
  	width:40,
  	borderRadius:40,
  	paddingLeft:8,
    paddingTop:8,
    marginLeft:100,
    marginTop:10
  }
});

export default Maths;
