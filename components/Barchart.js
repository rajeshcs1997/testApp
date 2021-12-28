import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const Preparing = ({navigation}) => {
  const data = {
    labels: ["Sun", "Mon", "Wed", "Thu", "Fri", "Sut"],
    datasets: [
      {
        data: [0, 25, 50, 75, 100]
      }
    ]
  };
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around',alignItems: 'center', paddingBottom:50}}>
        <View style={styles.profile}>
          <Icon name="person" size={40} color="#18d992"/>
        </View>
        <Text style={styles.profilename}>Your Name</Text>
        <Text style={styles.profilenumber}>4.6</Text>
      </View>
      <BarChart
        //style={graphStyle}
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        //yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#18d992",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 0) => `rgba(55, 50, 0, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#fff"
          }
        }}
        //verticalLabelRotation={30}
      />
      <Text style={styles.lessiontext2}>Online Maths for free has been brought here for the ease of students, so that they can get access to each and every fundamental concept and learn quickly.</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.button1} >
          <View>
            <Text style={{fontSize:20, color: '#fff'}}>Average Score</Text>
            <Text style={{fontSize:40, color: '#fff', textAlign: 'center',fontWeight: 'bold'}}>70%</Text>
          </View>
        </View>
        <View style={styles.button2} >
          <View>
            <Text style={{fontSize:20, color: '#fff'}}>Exam Taken</Text>
            <Text style={{fontSize:40, color: '#fff', textAlign: 'center',fontWeight: 'bold'}}>12</Text>
          </View>
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
  profile: {
    width:50,
    height:50,
    borderRadius:50,
    borderRadius:40,
    borderWidth: 1,
    borderColor:'#18d992',
    alignItems: 'center',
  },
  profilename: {
    fontSize:20,
    marginLeft:30,
    marginRight:30
  },
  profilenumber: {
    fontWeight: 'bold',
    fontSize:20,
    marginLeft:120,
  },
  lessiontext2: {
    marginTop: 50,
    fontSize: 14,
    color: 'grey'
  },
  button1: {
    padding: 10,
    width: 175,
    height:120,
    backgroundColor : '#18d992',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#18d000',
    borderRightWidth: 2,
  },
  button2: {
    padding: 10,
    width: 175,
    height:120,
    backgroundColor : '#18d992',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: '#18d000',
    borderLeftWidth: 2,
  },
});

export default Preparing;
