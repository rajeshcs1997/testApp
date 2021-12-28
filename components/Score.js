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
import * as Progress from 'react-native-progress';

const Score = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
      >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontSize:25, color: '#fff'}}>Litrature</Text>
          <Text style={{fontSize:15, color: '#fff'}}>24 courses</Text>
        </View>
        <Icon style={styles.searchIcon} name="newspaper-outline" size={40} color="#fff"/>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:20}}>
        <Text style={styles.accuracy}>ACCURACY</Text>
        <Text style={styles.percent}>46%</Text>
      </View>
      <Progress.Bar progress={0.46} width={350} height={20} color='#ebb134' borderRadius={15}/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:20, marginTop: 20}}>
        <Text style={styles.accuracy}>SPEED</Text>
        <Text style={styles.percent1}>67%</Text>
      </View>
      <Progress.Bar progress={0.67} width={350} height={20} color='#ebb134' borderRadius={15}/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:20, marginTop: 20}}>
        <View>
          <Text style={styles.attempt}>4</Text>
          <Text style={styles.right}>correct</Text>
        </View>
        <View>
          <Text style={styles.attempt}>2</Text>
          <Text style={styles.right}>incorrect</Text>
        </View>
        <View>
          <Text style={styles.attempt}>6</Text>
          <Text style={styles.right}>not attempt</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button2}
        //onPress={() => navigation.navigate('Score')}
        >
        <Text style={styles.buttontext}>YOUR SCORE 4</Text>
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
    width: 350,
    height:120,
    backgroundColor : '#18d992',
    justifyContent: 'center',
    borderRadius: 15,
    margin:20
  },
  searchIcon: {
    paddingLeft: 15,
  },
  percent: {
    marginLeft:250,
    fontWeight: 'bold'
  },
  percent1: {
    marginLeft:280,
    fontWeight: 'bold'
  },
  accuracy: {
    fontWeight: 'bold'
  },
  attempt: {
    width:40,
    height:40,
    borderRadius:40,
    borderWidth: 1,
    textAlign: 'center',
    //marginTop:10,
    paddingTop:5,
    fontSize: 20,
    marginRight:40,
    marginLeft:40
  },
  right: {
    marginRight:40,
    marginLeft:40,
    color: 'grey',
    fontSize:13
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 50,
    width: 300,
    borderRadius: 30,
    marginTop: 70,
  },
});

export default Score;
