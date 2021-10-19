import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';



const Choose = ({navigation}) => {
  return (
    <>
    <StatusBar backgroundColor="#419474" />
      <View>
        <ImageBackground
          source={require('../assests/img/welcome.png')}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            justifyContent:"center",
            alignItems:"center"
            
          }}
        >
        <Image 
          source={require('../assests/img/logo1.png')} 
          style={{marginTop:80,width:160,height:70}}

        />
          <Text style={{fontSize:50,color:"#14466b",marginBottom:50,marginTop:-10,}}>Welcome</Text>
         <View>

          <TouchableOpacity onPress={() =>navigation.navigate("SignUp")}>
          <Text style={{color:"white",fontSize:20,backgroundColor:"darkorange",width:300,textAlign:"center",padding:13,borderRadius:10,marginTop:10,fontSize:16}}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>navigation.navigate("SelectRole")}>
            <Text style={{marginTop:20,color:"white",fontSize:20,backgroundColor:"#14466b",width:300,textAlign:"center",padding:13,borderRadius:10,fontSize:16}}>SIGN IN</Text>
            </TouchableOpacity>
            

          </View>
        </ImageBackground>
      </View>
    </>
  )
}
export default Choose;
