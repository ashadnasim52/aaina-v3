import React, {useState, useEffect} from 'react';
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
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {Avatar} from '@ui-kitten/components';
import {options} from '../utils/option';
import CreatePage from './CreatePage';
import {Container, Content, Left, Right, Thumbnail} from 'native-base';
const image1 = require('../assests/img/girl.jpg');

const Profile = ({route, navigation}) => {
  const [isPermission, setIsPermission] = useState(false);
  const [image, setImage] = useState();

  const {value1} = route.params;
  const {weight} = route.params;
  const {height} = route.params;
  const {name} = route.params;
  const {value} = route.params;
  const {values} = route.params;
  const {images} = route.params;
  const {image1} = route.params;
  const {image2} = route.params;
  const {image3} = route.params;

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  backgroundColor: '#14466b',
                  marginHorizontal: '30%',
                  borderRadius: 10,
                  padding: 4,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Body Profile
              </Text>
            </View>
            {
              (value=="Male")? 
           
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 30,
              }}>
              <View>
                <View
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'orange',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={
                      image1
                        ? {uri: image1.uri}
                        : require('../assests/img/front.png')
                    }
                    style={{width: 150, height: 150, borderRadius: 10}}
                  />
                </View>
                <Text style={{textAlign: 'center', marginTop: 10}}>
                  Front Photo
                </Text>
              </View>

              <View>
                <View
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'orange',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={
                      image3
                        ? {uri: image3.uri}
                        : require('../assests/img/side.png')
                    }
                    style={{width: 150, height: 150, borderRadius: 10}}
                  />
                </View>
                <Text style={{textAlign: 'center', marginTop: 10}}>
                  Side Photo
                </Text>
              </View>
            </View> 

            :
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 30,
              }}>
              <View>
                <View
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'orange',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={
                      images
                        ? {uri: images.uri}
                        : require('../assests/img/front.png')
                    }
                    style={{width: 150, height: 150, borderRadius: 10}}
                  />
                </View>
                <Text style={{textAlign: 'center', marginTop: 10}}>
                  Front Photo
                </Text>
              </View>

              <View>
                <View
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'orange',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={
                      image2
                        ? {uri: image2.uri}
                        : require('../assests/img/side.png')
                    }
                    style={{width: 150, height: 150, borderRadius: 10}}
                  />
                </View>
                <Text style={{textAlign: 'center', marginTop: 10}}>
                  Side Photo
                </Text>
              </View>
            </View>
            }

            <View style={{ flexDirection: "row", marginTop: 40 }}>
              <View style={{ marginRight: "10%", marginLeft: 20 }}>
                <Text style={{ marginBottom: 20, fontSize: 18, color: "darkorange", fontWeight: "bold", textDecorationLine: "underline" }}>Parameter</Text>
                <Text style={styles.text}>Fullname</Text>
                <Text style={styles.text}>Gender</Text>
                <Text style={styles.text}>Height</Text>
                <Text style={styles.text}>Weight</Text>
                <Text style={styles.text}>Size</Text>
                <Text style={styles.text}>Body Mass Index (BMI)</Text>
                <Text style={styles.text}>Neck</Text>
                <Text style={styles.text}>Chest</Text>
                <Text style={styles.text}>Waist</Text>
                <Text style={styles.text}>Hips</Text>
              </View>
              <View>
                <Text
                  style={{
                    marginBottom: 20,
                    fontSize: 18,
                    color: 'darkorange',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  Value
                </Text>
                <Text style={styles.text1}>{JSON.stringify(name)}</Text>
                <Text style={styles.text1}>{JSON.stringify(value)}</Text>
                <Text style={styles.text1}>{JSON.stringify(height)} cm</Text>
                <Text style={styles.text1}>{JSON.stringify(weight)} Kg</Text>
                <Text style={styles.text1}>{JSON.stringify(value1)}</Text>
                <Text style={styles.text1}>15.43</Text>
                <Text style={styles.text1}> 15.36 inch / 6.05 cm</Text>
                <Text style={styles.text1}> 38.99 inch / 15.35 cm</Text>
                <Text style={styles.text1}>33.46 inch / 13.17 cm</Text>
                <Text style={styles.text1}>36.03 inch / 14.19 cm</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
    color: 'green',
  },
  text1: {
    marginBottom: 20,
    color: 'grey',
  },
});
