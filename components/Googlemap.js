import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const Googlemap = () => {
  return (
    <View style={styles.container}>
      <Text>this is google map</Text>
      <MapView
      	provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       	style={styles.map}
		    initialRegion={{
		      latitude: 26.0739,
		      longitude:  83.1859,
		      latitudeDelta: 0.0922,
		      longitudeDelta: 0.0421,
		    }}
		  >
		  	<Marker
          coordinate={{latitude: 26.0739,
          longitude: 83.1859}}
          title={"title"}
          description={"description"}
         >
         	
         </Marker>
		  </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   //width: 400,
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default Googlemap;
