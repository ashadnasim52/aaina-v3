import React, { useState, useContext, useRef } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Input,
  TextInput,
  Button,
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import {  Layout,CheckBox,Select,SelectItem,IndexPath,Divider,Icon,} from '@ui-kitten/components';
import RBSheet from 'react-native-raw-bottom-sheet';
import Logo from '../assests/image1.png';
import { ACCENT, PRIMARY } from '../theme/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/context';
import Entypo from 'react-native-vector-icons/Entypo';
import { color } from 'react-native-reanimated';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [name, setName] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [gender, setGender] = useState('Male');

  const {state, dispatch} = useContext(AuthContext);
  console.log(state.isB2B);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  const nav = useNavigation();
  const refRBSheet = useRef();

  const placeholder = {
    label: 'Select Gender...',
    value: null,
    color: '#9EA0A4',
  };


  return (
    <>
    <ScrollView>
      <View>
        <View style={{ marginTop: 10 }}>
          <Image
            source={require('../assests/img/logo1.png')}
            style={{
              width: 140,
              height: 60,
              alignSelf: "center"
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, marginLeft: 20 }}>Welcome,</Text>
          <Text style={{ fontSize: 20, marginLeft: 20, color: "grey" }}>Sign Up as Individual</Text>
        </View>
       <View style={{marginTop:20}}>
     
       <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            useNativeAndroidPickerStyle={false}
            placeholder={placeholder}
            style={pickerSelectStyles}
            items={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
                { label: 'Others', value: 'Others' },
            ]}
        />


       <TextInput 
       placeholder="Name"  
       value={name} 
       onChangeText={(nextValue) => setName(nextValue)}
         style={{marginHorizontal:20,borderWidth:1,borderRadius:10,borderColor:"darkgrey",paddingLeft:20,marginTop:10}}
       />
       <TextInput 
       placeholder="Email"  
       value={email} 
       accessoryLeft={(props) => (
                <Icon name="person-outline" {...props} />
              )}
       onChangeText={(nextValue) => setEmail(nextValue)}
         style={{marginHorizontal:20,borderWidth:1,borderRadius:10,borderColor:"darkgrey",paddingLeft:20,marginTop:10}}
       />
       <TextInput 
       placeholder="Password" 
       secureTextEntry={secureTextEntry} 
       value={password}
       caption="Should contain at least 8 symbols"
       onChangeText={(nextValue) => setPassword(nextValue)}
         style={{marginHorizontal:20,borderWidth:1,borderRadius:10,borderColor:"darkgrey",paddingLeft:20,marginTop:10}}
       />
        <TextInput 
       placeholder="Confirm Password" 
       secureTextEntry={secureTextEntry} 
       value={confirmPassword}
       caption="Should contain at least 8 symbols"
       onChangeText={(nextValue) => setConfirmPassword(nextValue)}
         style={{marginHorizontal:20,borderWidth:1,borderRadius:10,borderColor:"darkgrey",paddingLeft:20,marginTop:10}}
       />
       </View>
   

       <View
              style={{
                // justifyContent: 'flex-start',
                // alignItems: 'flex-start',
                width: '100%',
                marginLeft:20,
                marginTop:20,
              }}>
              <CheckBox
                checked={checked}
                onChange={(nextChecked) => setChecked(nextChecked)}>
                <Text style={{color:"black"}}>Accept our Terms and Condition</Text>
              </CheckBox>
            </View>

       <View style={{marginTop:10}}>
       <TouchableOpacity onPress={() => navigation.navigate('Home')}>
         <Text style={{backgroundColor:"#14466b",color:"white",textAlign:"center",padding:15,marginHorizontal:20,borderRadius:10,fontSize:16,fontWeight:"bold"}}>Sign Up</Text>
         </TouchableOpacity>
       </View>
       {!state.isB2B && (
         <>
       <Text style={{alignSelf:"center",marginTop:5,color:"grey"}}>OR</Text>

       <View style={{alignSelf:"center",marginTop:10}}>
       <TouchableOpacity onPress={() => navigation.navigate('SignUpOrganization')}>
       <Text style={{backgroundColor:"#ebeef4",padding:13,borderRadius:10,width:320,textAlign:"center",color:"#14466b",borderWidth:1,borderColor:"white",fontWeight:"bold",}}>SIGN UP AS ORGANIZATION  <Entypo name="arrow-bold-right"  style={{fontSize:15}} /></Text>
       </TouchableOpacity>
       </View>
       </>
       )}

<View style={{marginTop:20,flexDirection:"row",alignSelf:"center",marginBottom:10}}>
  <Text style={{}}>Have an Account ? </Text>
  <TouchableOpacity onPress={() => {
                navigation.navigate('SelectRole');
              }}>
  <Text style={{color:'#14466b',fontWeight:"bold"}}>Sign In Here</Text>
  </TouchableOpacity>
</View>
      </View>


<RBSheet
ref={refRBSheet}
closeOnDragDown={true}
closeOnPressMask={false}
customStyles={{
  wrapper: {
    backgroundColor: 'transparent',
  },
  draggableIcon: {
    backgroundColor: PRIMARY,
  },
  container: {
    backgroundColor: '#CAD5E2',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
}}>
<Layout
  style={{
    paddingHorizontal: 30,

    flex: 1,
    justifyContent: 'center',
  }}>
  <Text
    style={{
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 20,
      color:"green",
    }}
    >
    Enter Email
  </Text>
  <Text category="p1">
    An email with the password reset link will sent to your registered
    email address
  </Text>
  <TextInput
    placeholder=" Enter your Registered Email"
    value={email}
    style={[
      {
        marginVertical: 20,
        borderWidth:1,
        borderColor:"grey",
        borderRadius:5
      },
    ]}
    accessoryLeft={(props) => <Icon name="email-outline" {...props} />}
    onChangeText={(nextValue) => setEmail(nextValue)}
  />
  <Button
    style={{}}
    onPress={() => {
      nav.navigate('Main');
    }}
   title="Login" />
  
</Layout>
</RBSheet>
</ScrollView>
    </>
  )
}
export default Signup;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginHorizontal:20
  },
});