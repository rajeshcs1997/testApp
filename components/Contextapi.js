import * as React from 'react';
import { Text, View } from 'react-native';

const nameContext = React.createContext();
const ageContext = React.createContext();
const Child3 = () => {
  const name = React.useContext(nameContext)
  const age = React.useContext(ageContext)
  return (
    <Text>my name is: {name} and my age: {age}</Text>
  );
}
const Child2 = () => {
  return (
    <View>
      <Child3 />
    </View>
  );
}
const Child1 = () => {
  return (
    <View>
      <Child2 />
    </View>
  );
}

export default Contextapi = () => {
  return (
    <nameContext.Provider value={"rajesh prajapti"}>
      <ageContext.Provider value={24}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>This is context page</Text>
          <Child1 />
        </View>
      </ageContext.Provider>
    </nameContext.Provider>
  );
}
// import * as React from 'react';
// import { Text, View } from 'react-native';

// myContext = React.useContext();

// const iState = {
//  name: "rajesh prajapati"
// }

// const reducer = (state=iState, action) =>{
  
// }
// const Child3 = () => {
  
//   return (
//    <Text>my name is: {name} and my age: {age}</Text>
  
// }
// const Child2 = () => {
//   return (
//     <View>
//       <Child3 />
//     </View>
//   );
// }
// const Child1 = () => {
//   return (
//     <View>
//       <Child2 />
//     </View>
//   );
// }

// export default Contextapi = () => {
//   return (
//    <nameContext.Provider value={"rajesh prajapti"}>
//      <ageContext.Provider value={24}>
//        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//          <Text>This is context page</Text>
//          <Child1 />
//        </View>
//      </ageContext.Provider>
//     </nameContext.Provider>
//   );
// }