import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, Modal, Alert } from 'react-native';
import Share from 'react-native-share';
import ImagePicker from 'react-native-image-crop-picker';

const Testing = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [galleryimg, setGalleryimg] = useState("");
  //when we import Share from react-native 

  // const handleShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       message:
  //         'hello , this share is from react native doc share',
  //     });
  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         console.log("shared with activity type of result.activityType")
  //       } else {
  //         console.log("shared")
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       console.log("dismissed")
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  const handlePackageShare = async () =>{
    const shareOption = {
      message: 'this share from react native share',
      url: 'https://picsum.photos/id/237/200/300'
    }
    try {
      const shareResponse = await Share.open(shareOption);
      
    } catch (error) {
      alert(error.message);
    }
  }
  const handleGallaryImage = () =>{
    try {
      setTimeout(() => {
        ImagePicker.openPicker({
          width: 400,
          height: 300,
          cropping: true,
        })
          .then((selectedImg) => {
            console.log(selectedImg);
            if (selectedImg && selectedImg.path) {
              const splitName = selectedImg.path.split("/");
              const filename = splitName[splitName.length - 1];
              setGalleryimg({ ...selectedImg, filename });
            }
          })
          .catch((error) => {
            console.log("===eroror on camera picker====", error);
          });
      }, 1000);
    } catch (error) {
      console.log("===eroror on gallery====", error);
    }
    setModalVisible(!modalVisible)
  }
  const handleCameraImage = () =>{
    try {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      })
        .then((selectedImg) => {
          console.log(selectedImg);
          if (selectedImg && selectedImg.path) {
            const splitName = selectedImg.path.split("/");
            const filename = splitName[splitName.length - 1];
            setGalleryimg({ ...selectedImg, filename });
          }
        })
        .catch((error) => {
          
          console.log("===eroror on camera picker====", error);
        });
    } catch (error) {
      // ~~~~console.log("===eroror on camera picker====", error);
    }
    setModalVisible(!modalVisible)
  }
  console.log("stateimage=====", galleryimg.path)
  return (
    <View style={styles.container}>
      {/*<Button
        onPress={handleShare}
        title="inbuilt share"
        color="red"
        accessibilityLabel="Learn more about this purple button"
      />*/}
      <View style={styles.space}></View>
      <Button
        onPress={handlePackageShare}
        title="react-native-share"
        color="red"
        accessibilityLabel="Learn more about this purple button"
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleGallaryImage}
            >
              <Text style={styles.textStyle}>Select from gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleCameraImage}
            >
              <Text style={styles.textStyle}>Select from camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.space}></View>
      <Button
        onPress={() => setModalVisible(true)}
        title="Choose Image"
        color="green"
      />
      <View style={styles.space}></View>
      <Image
        style={{width:300,height:200}}
        source={{
          uri: galleryimg.path,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    margin: 20
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:400,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    margin:10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Testing;