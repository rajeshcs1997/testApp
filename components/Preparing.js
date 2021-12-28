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

const Preparing = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
        <TextInput
          placeholder="Search..."
        />
      </View>
      <Text style={styles.populartext}>Popular course</Text>
      <Text style={styles.heading}>the most important principle of Mathematics</Text>
      <Text style={styles.heading1}>One of the most popular Mathematics course with over 2000 positive reviews</Text>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Maths')}
        >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontSize:25, color: '#fff'}}>Mathematics</Text>
            <Text style={{fontSize:15, color: '#fff'}}>24 courses</Text>
          </View>
          <Icon style={styles.searchIcon} name="logo-react" size={40} color="#fff"/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Literature')}
        >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontSize:25, color: '#fff'}}>Litrature</Text>
            <Text style={{fontSize:15, color: '#fff'}}>24 courses</Text>
          </View>
          <Icon style={styles.searchIcon} name="newspaper-outline" size={40} color="#fff"/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Managecalendar')}
        >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontSize:25, color: '#fff'}}>Management</Text>
            <Text style={{fontSize:15, color: '#fff'}}>24 courses</Text>
          </View>
          <Icon style={styles.searchIcon} name="briefcase-outline" size={40} color="#fff"/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderRadius: 20 ,
    borderColor: '#ebb134',
    borderWidth: 1,
    textAlign: 'center',
    width: 350,
  },
  searchIcon: {
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  populartext: {
    alignSelf: 'flex-start',
    backgroundColor: '#18d992',
    marginLeft: 30,
    width:100,
    height: 25,
    borderRadius:10
  },
  heading: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 20,
    fontSize: 30
  },
  heading1: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    color: 'grey',
    fontSize: 17,
    width: 300,
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
});

export default Preparing;
