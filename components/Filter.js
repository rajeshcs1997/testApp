import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Chip } from 'react-native-elements';

const Filter = ({navigation}) => {
	const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
        <TextInput
          placeholder="Search..."
        />
      </View>
      <View style={styles.divstyle1}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontSize:25, color: '#fff'}}>Highest rate first</Text>
        </View>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </View>
      </View>
      <View style={styles.divstyle2}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>
        	<Chip
				    title="Mathematics"
				    type="outline"
					/>
					<Chip
				    title="Physics"
				    type="outline"
					/>
					<Chip
				    title="Chemestry"
				    type="outline"
					/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>
        	<Chip
				    title="Biology"
				    type="outline"
					/>
					<Chip
				    title="Cse"
				    type="outline"
					/>
					<Chip
				    title="Chemical"
				    type="outline"
					/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>
        	<Chip
				    title="Mathematics"
				    type="outline"
					/>
					<Chip
				    title="Physics"
				    type="outline"
					/>
					<Chip
				    title="Chemestry"
				    type="outline"
					/>
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
  divstyle1: {
    padding: 10,
    width: 350,
    height:120,
    backgroundColor : '#18d992',
    justifyContent: 'center',
    borderRadius: 15,
    margin:20
  },
  divstyle2: {
    padding: 10,
    width: 350,
    height:220,
    backgroundColor : '#18d992',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop:70
  },
});

export default Filter;
