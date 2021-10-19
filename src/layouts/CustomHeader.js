import {useNavigation} from '@react-navigation/native';
// import {Avatar, Icon, Text, Layout} from '@ui-kitten/components';
// import React from 'react';
// import {StyleSheet, View, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../RootNavigation';
import {DrawerActions} from '@react-navigation/native';
import {ACCENT, PRIMARY} from '../theme/colors';
import React from 'react';
import ImagePicker from 'react-native-image-picker';
import {
  Container,
  Header,
  CardItem,
  Card,
  Left,
  Right,
  Item,
  Input,
  Button,
  Drawer,
  Icon,
} from 'native-base';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
  TextInput,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {Layout} from '@ui-kitten/components';
// const CustomHeader = ({navigation}) => {
//   const nav = useNavigation();
//   return (
//     <Layout style={styles.header}>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.dispatch(DrawerActions.toggleDrawer());
//         }}>
//         <Icon style={styles.icon} fill="#A8A8A8" name="menu-2-outline" />
//       </TouchableOpacity>
//       <View>
//         <Text style={styles.subtext} category="label">
//           plans
//         </Text>
//         <Text style={styles.text} category="h6">
//           your plans
//         </Text>
//       </View>
//       <Avatar
//         source={{
//           uri: 'https://picsum.photos/id/1005/367/267',
//         }}
//       />
//     </Layout>
//   );
// };

const CustomHeader = ({navigation}) => {
  const nav = useNavigation();
  const [image, setImage] = React.useState(null);
  const [isPermission, setIsPermission] = React.useState(false);

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
      ImagePicker.showImagePicker(options, response => {
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

  return (
    <>
      <Layout style={{backgroundColor: '#14466b'}}>
        <View
          style={{
            backgroundColor: '#fff',
            height: 60,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon name="menu" style={{fontSize: 30}} />
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <Text style={{alignSelf: 'center', color: 'grey'}}>Location</Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="location-pin"
                style={{fontSize: 20, color: 'green'}}
              />
              <Text style={{fontWeight: 'bold', color: 'grey'}}>Priya, </Text>
              <Text style={{color: 'grey'}}>India</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('EditPage')}>
            <Image
              source={{
                uri: image ? setImage : 'https://picsum.photos/id/1005/367/267',
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        </View>
      </Layout>
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    // backgroundColor: '#fff',
  },
  icon: {
    width: 32,
    height: 32,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Merriweather-BlackItalic',
    color: PRIMARY,
  },
  subtext: {
    textAlign: 'center',
    fontFamily: 'Merriweather-Light',
  },
});
