import React, {useState, useEffect} from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default function Profile({navigation}) {
	const [ manudata, setMenudata ] = useState([]);
	useEffect( () => {
		let url= "https://6cd79e63aae6.ngrok.io/menu1";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMenudata(data))
      .catch(console.log);
  }, []);
  console.log("hsajfbsd==",manudata)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, marginLeft: 30}}>
      {/*<TouchableOpacity
        style={styles.buttonround}
        //onPress={handleLoginpress}
      >
        <Text style={{fontWeight: 'bold',}}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Preparing')}
      >
        <Text style={styles.buttontext}>Start Prepairing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        //onPress={handleLoginpress}
      >
        <Text style={styles.buttontext}>Discuss</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        //onPress={handleLoginpress}
      >
        <Text style={styles.buttontext}>Olympiad</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        //onPress={handleLoginpress}
      >
        <Text style={styles.buttontext}>Your careers path</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        //onPress={handleLoginpress}
      >
        <Text style={styles.buttontext}>Credits</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        //onPress={handleLoginpress}
      >
        <Text style={styles.buttontext}>Settings</Text>
      </TouchableOpacity>*/}
      <TouchableOpacity
        style={styles.buttonround}
        //onPress={handleLoginpress}
      >
        <Text style={{fontWeight: 'bold',}}>Menu</Text>
      </TouchableOpacity>
      {manudata && manudata.map((res)=>(
      	<>
      		<TouchableOpacity
		        style={styles.button}
		        onPress={() => navigation.navigate('Preparing')}
		      >
		        <Text style={styles.buttontext}>{res.name}</Text>
		      </TouchableOpacity>
      	</>
      	))}
    </View>
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
