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

const Literature = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.iconview}>
        <Icon style={styles.searchIcon} name="newspaper-outline" size={40} color="#000"/>
      </View>
      <Text style={styles.literature}>LITERATURE</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 30}}>
        <View style={styles.digitview}>
          <Text style={styles.digit}>12</Text>
          <Text style={styles.text}>CHAPTER</Text>
        </View>
        <View style={styles.digitview}>
          <Text style={styles.digit}>30</Text>
          <Text style={styles.text}>TESTS</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Score')}
        >
        <Text style={styles.buttontext}>LET'S START</Text>
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
  iconview: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#ebb134',
    alignItems: 'center',
    justifyContent: 'center',
  },
  literature: {
    fontWeight : 'bold',
    fontSize: 25,
    margin: 25
  },
  digit: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fff'
  },
  digitview: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18d992',
    width: 120,
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin:30
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    backgroundColor: '#18d000',
    width: 120,
    height: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop:15,
    paddingLeft:25,
    marginTop: 25
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebb134',
    height: 50,
    width: 200,
    borderRadius: 30,
    marginTop: 70
  },
  buttontext: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default Literature;
