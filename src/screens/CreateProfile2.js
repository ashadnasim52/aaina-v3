
import React, { useState,useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Modal,
  Text,
  SafeAreaView,
  PermissionsAndroid,
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {Avatar} from '@ui-kitten/components';
import {options} from '../utils/option';
import CreatePage from './CreatePage';
const image1 = require("../assests/img/girl.jpg");

const CreateProfile2 =({route,navigation})=>{
  const { value1 } = route.params;
  const { weight } = route.params;
  const { height } = route.params;
  const { name } = route.params;
  const { value } = route.params;
  
  
  const [isPermission, setIsPermission] = useState(false);
  const [image, setImage] = useState();
  const [image2, setImage2] = useState();

  const obj3 ={
    value1: value1,
    weight:weight,
    height:height,
    name:name,
    value:value,
    image1:image,
    image3:image2
  }


  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);

      console.log('isG', granted);
      console.log('isGranted', PermissionsAndroid.RESULTS.GRANTED);
      if ('granted' == PermissionsAndroid.RESULTS.GRANTED) {
        setIsPermission(true);
      } else {
        console.log('permission denied');
        setIsPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const pickImage = async () => {
    if (isPermission) {
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          //  calling upload function to upload the selected image
          // sending the whole image response as parameter

          // setSelfie(response);
          setImage(response);
        }
      });
    } else {
      requestStoragePermission();
    }
    // launchImageLibrary(mediaOpt, (res) => {
    //   console.log(res);
    //   setImages([...images, res]);
    // });
  };


  const pickImage2 = async () => {
    if (isPermission) {
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          //  calling upload function to upload the selected image
          // sending the whole image response as parameter

          // setSelfie(response);
          setImage2(response);
        }
      });
    } else {
      requestStoragePermission();
    }
    // launchImageLibrary(mediaOpt, (res) => {
    //   console.log(res);
    //   setImages([...images, res]);
    // });
  };

 

  return(
    <>
    <SafeAreaView>
    <View>
    <View>
       <Image 
         source={image1}
         style={{width:"100%",height:210,resizeMode:"cover"}}
       />
     </View>
     <View style={{marginTop:30}}>
       <Text style={{textAlign:"center",fontSize:20}}>
         Upload Your Photo
       </Text>
       
      
     </View>
<View style={{flexDirection:"row",justifyContent:"space-around",marginTop:30}}>
     <TouchableOpacity onPress={pickImage}>
      <View >
          <View style={{width:150,height:150,backgroundColor:"white",borderRadius:10}}>
          <Image 
          source = { image 
          ? 
          { uri: image.uri } 
          : 
           require('../assests/img/front.png')
          } 
          
              style={{width:150,height:150,borderRadius:10}}
              />
           </View>
      <Text style={{textAlign:"center",marginTop:10}}>Front Photo</Text>
     </View>
     </TouchableOpacity> 

<TouchableOpacity onPress={pickImage2}>
      <View>
      <View style={{width:150,height:150,backgroundColor:"white",borderRadius:10}}>
      <Image 
          source = { image2 
          ? 
          { uri: image2.uri } 
          : 
           require('../assests/img/front.png')
          } 
          
         style={{width:150,height:150,borderRadius:10}}
       />
       </View>
       <Text style={{textAlign:"center",marginTop:10}}>Side Photo</Text>
       </View>
       </TouchableOpacity>

</View>
<TouchableOpacity onPress={()=>navigation.navigate("Profile",obj3)}>
       <View style={{marginTop:60,backgroundColor:"#D6415C",marginHorizontal:90,height:50,paddingTop:10,borderRadius:10}}>
       <Text style={{textAlign:"center",fontSize:20,color:"white"}}>Continue <AntDesign name="arrowright" size={16}/></Text>
       </View>
</TouchableOpacity>

     </View>
     </SafeAreaView>
    </>
  )
}

export default CreateProfile2;