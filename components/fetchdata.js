import React, {useState, useEffect} from 'react';
import { Text, View,TouchableOpacity, StyleSheet,Image, ScrollView } from 'react-native';

export default function fetchdata({navigation}) {
	const [ manudata, setMenudata ] = useState([]);
	useEffect( () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((json) => setMenudata(json.data))
      .catch((error) => console.error(error))
  }, []);
  return (
  	<ScrollView>
    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {manudata && manudata.map((res)=>(
      	<>
      		<Text>{res.id}</Text>
      		<Text>{res.first_name}</Text>
      		<Text>{res.last_name}</Text>
      		<Text>{res.email}</Text>
      		<Image
		        style={{width: 100, height: 100}} 
		        source={{
		          uri: res.avatar,
		        }}
		      />
      	</>
      	))}
      	<Text>rajesh</Text>
	      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonround: {
	  alignItems: "center",
	  padding: 10,
	  width: 350,
	  height:80,
	  backgroundColor : '#18d992',
	  borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
  },
  button: {
	  alignItems: "center",
	  padding: 10,
	  width: 350,
	  height:90,
	  backgroundColor : '#18d992',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopWidth:1,
		borderColor:'#18d000'
  },
  buttontext: {
  	fontWeight: 'bold',
  	color: '#ffffff'
  }
});
