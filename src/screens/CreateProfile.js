import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const CreateProfile = ({navigation}) => {
  const [value, setValue] = useState();
  const [background1,setBackground1]=useState("")
  const [background2,setBackground2]=useState("")
  const [border,setBorder]=useState("")
  const [border1,setBorder1]=useState("")


  const obj1 = {
    value: value, 
  }

  const handleChange = (type) => {
    if(type==='button1'){
        setValue("Male")
        setBackground1("red")
        setBackground2("white")
        setBorder(20)
  
     
       }
    else if(type==='button2'){
        setValue("Female")
        setBackground2("red")
        setBackground1("white")
        setBorder1(20)
        
    }  
}
 return(
   <>
   <View>
     <Image 
       source={require("../assests/img/gym.jpg")}
       style={{width:"100%",height:230,resizeMode:"cover"}}
     />
   </View>
   <View style={{marginTop:40}}>
     <Text style={{textAlign:"center",fontSize:25}}>Your Details</Text>
   </View>
   <View style={{marginTop:40,flexDirection:"row",justifyContent:"space-around"}}>
    
    <TouchableOpacity onPress={() => handleChange( 'button1')}>
      <View  style={{width:160,height:160,backgroundColor:background1,borderRadius:border,}}>
      <Image 
        source={require("../assests/img/MALE.jpg")}
        style={{width:150,height:150,borderRadius:20,alignSelf:"center",marginTop:5}}
      />
          <Text  style={{fontSize:20,textAlign:"center",marginTop:5}}>Male</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleChange( 'button2')}>
      <View style={{width:160,height:160,backgroundColor:background2,borderRadius:border1,}}>
      <Image 
        source={require("../assests/img/FEMALE.jpg")}
        style={{width:150,height:150,borderRadius:20,alignSelf:"center",marginTop:5}}
      />
          <Text  style={{fontSize:20,textAlign:"center",marginTop:5}}>Female</Text>
      </View>
      </TouchableOpacity>
   </View>

   <View style={{marginTop:70}}>
     {(value==null)? <Text style={{marginTop:20,fontSize:20,textAlign:"center",backgroundColor:"#D6415C",padding:10,height:50,marginHorizontal:90,borderRadius:20,color:"white",}} id="button3" onPress={()=>alert("Please Select Your Gender")}>Continue <AntDesign name="arrowright" size={16}/></Text>:

   <View >
      {(value=="Male")? <Text style={{marginTop:20,fontSize:20,textAlign:"center",backgroundColor:"#D6415C",padding:10,height:50,marginHorizontal:90,borderRadius:20,color:"white",}} onPress={()=>navigation.navigate("CreateProfile1",obj1)} id="button3">Continue <AntDesign name="arrowright" size={16}/></Text>:<Text style={{marginTop:20,fontSize:20,textAlign:"center",backgroundColor:"#D6415C",padding:10,color:"white",height:50,marginHorizontal:90,borderRadius:20}} onPress={()=>navigation.navigate("Female1",obj1)} >Continue <AntDesign name="arrowright" size={16}/></Text>}
  </View>
     }
  </View>
   </>
 )

}

export default CreateProfile;
