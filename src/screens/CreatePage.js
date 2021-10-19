import React, {useState, useContext, useRef} from 'react';
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
import {Layout} from '@ui-kitten/components';
import RBSheet from 'react-native-raw-bottom-sheet';
import Logo from '../assests/image1.png';
import {ACCENT, PRIMARY} from '../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../context/context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from 'react-native-reanimated';

const CreatePage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [comapnayName, setComapnayName] = useState('');
  const [name, setName] = useState('');
  const [gst, setGst] = useState('');
  const [pan, setPan] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigation();
  const refRBSheet = useRef();

  return (
    <KeyboardAwareScrollView>
      <View>
        <View style={{marginTop: 10}}>
          <Image
            source={require('../assests/img/logo1.png')}
            style={{
              width: 140,
              height: 60,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 25, marginLeft: 20}}>Welcome,</Text>
          <Text style={{fontSize: 20, marginLeft: 20, color: 'grey'}}>
            Update your details
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{marginLeft: 20, color: 'grey'}}>Company Name</Text>
          <TextInput
            placeholder="Company Name"
            value={comapnayName}
            onChangeText={(nextValue) => setComapnayName(nextValue)}
            style={{
              marginHorizontal: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'darkgrey',
              paddingLeft: 20,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{marginLeft: 20, color: 'grey'}}>Name</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(nextValue) => setName(nextValue)}
            style={{
              marginHorizontal: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'darkgrey',
              paddingLeft: 20,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{marginLeft: 20, color: 'grey'}}>Mobile No</Text>
          <TextInput
            placeholder="Mobile No"
            value={mobileNo}
            onChangeText={(nextValue) => setMobileNo(nextValue)}
            style={{
              marginHorizontal: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'darkgrey',
              paddingLeft: 20,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{marginLeft: 20, color: 'grey'}}>Email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(nextValue) => setEmail(nextValue)}
            style={{
              marginHorizontal: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'darkgrey',
              paddingLeft: 20,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{marginLeft: 20, color: 'grey'}}>PAN</Text>
          <TextInput
            placeholder="PAN"
            value={pan}
            onChangeText={(nextValue) => setPan(nextValue)}
            style={{
              marginHorizontal: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'darkgrey',
              paddingLeft: 20,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{marginLeft: 20, color: 'grey'}}>Gst</Text>
          <TextInput
            placeholder="Gst"
            value={gst}
            onChangeText={(nextValue) => setGst(nextValue)}
            style={{
              marginHorizontal: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'darkgrey',
              paddingLeft: 20,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{marginLeft: 20, color: 'grey'}}>Address</Text>
          <TextInput
            placeholder="Address"
            multiline={true}
            value={address}
            onChangeText={(nextValue) => setAddress(nextValue)}
            style={{
              marginHorizontal: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'darkgrey',
              paddingLeft: 20,
              minHeight: 94,
            }}
          />
        </View>

        <View style={{marginTop: 30, marginBottom: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Text
              style={{
                backgroundColor: '#14466b',
                color: 'white',
                textAlign: 'center',
                padding: 15,
                marginHorizontal: 20,
                borderRadius: 10,
                fontSize: 16,
              }}>
              Create Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default CreatePage;
