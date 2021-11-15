import {Button} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  ScrollView,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CreateProfile2 from './CreateProfile2';
import {Dimensions} from 'react-native';
import {options} from '../utils/option';
import {ACCENT, PRIMARY, WHITE} from '../theme/colors';
import axios from 'axios';

const CreateProfile = ({navigation}) => {
  const [value, setValue] = useState();
  const [background1, setBackground1] = useState('');
  const [background2, setBackground2] = useState('');
  const [border, setBorder] = useState('');
  const [border1, setBorder1] = useState('');

  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const [frontImage, setFrontImage] = useState(null);
  const [sideImage, setSideImage] = useState(null);
  const [height, setHeight] = useState(null);
  const [size, setSize] = useState(null);
  const [bodyShape, setBodyShape] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [pickImageModal, setpickImageModal] = useState(initialState);
  // GENDER

  const obj1 = {
    value: value,
  };

  const handleChange = type => {
    if (type === 'button1') {
      setValue('Male');
      setBackground1('red');
      // setBackground2('white');
      setBorder(20);
    } else if (type === 'button2') {
      setValue('Female');
      setBackground2('red');
      setBackground1('white');
      // setBorder1(20);
    }
  };
  const submit = async () => {
    console.log({
      gender,
      frontImage,
      sideImage,
      height,
      size,
      bodyShape,
    });
    const formData = new FormData();
    formData.append('gender', 'm');
    formData.append('height', 134);
    formData.append('size', 'S');
    formData.append('bodyShape', 'na');
    // formData.append('frontImage', frontImage.uri);
    // formData.append('sideImage', sideImage.uri);
    formData.append('frontImage', {
      uri:
        Platform.OS === 'ios'
          ? frontImage.uri.replace('file://', '')
          : frontImage.uri,
      name: frontImage.fileName,
      type: frontImage.type,
    });
    formData.append('sideImage', {
      uri:
        Platform.OS === 'ios'
          ? sideImage.uri.replace('file://', '')
          : sideImage.uri,
      name: sideImage.fileName,
      type: sideImage.type,
    });
    console.log({formData});
    const {data} = await axios.post(
      'http://aaiena.tech/compareBodyMeasurement',
      formData,
    );

    console.log({data});
  };
  if (pickImageModal)
    return (
      <CreateProfile2
        setFrontImage={setFrontImage}
        setSideImage={setSideImage}
        setpickImageModal={setpickImageModal}
        submit={submit}
      />
    );
  return (
    <>
      <View>
        <Image
          source={require('../assests/img/gym.jpg')}
          style={{width: '100%', height: 190, resizeMode: 'cover'}}
        />
      </View>
      {/* <View style={{marginTop: 40}}>
        <Text style={{textAlign: 'center', fontSize: 25}}>Your Details</Text>
      </View> */}

      <View style={{flex: 1, backgroundColor: PRIMARY}}>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              handleChange('button1');
              setGender('M');
            }}>
            <View
              style={{
                width: 160,
                height: 160,
                backgroundColor: background1,
              }}>
              <Image
                source={require('../assests/img/MALE.jpg')}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 20,
                  alignSelf: 'center',
                  marginTop: 5,
                }}
              />
              <Text style={{fontSize: 20, textAlign: 'center', marginTop: 5}}>
                Male
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleChange('button2');

              setGender('f');
            }}>
            <View
              style={{
                width: 160,
                height: 160,
                backgroundColor: background2,
                // borderWidth: border1,
              }}>
              <Image
                source={require('../assests/img/FEMALE.jpg')}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 20,
                  alignSelf: 'center',
                  marginTop: 5,
                }}
              />
              <Text style={{fontSize: 20, textAlign: 'center', marginTop: 5}}>
                Female
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{marginTop: 40, marginHorizontal: 20}}>
            <TextInput
              value={name}
              onChangeText={text => {
                setName(text.replace(/[^A-Za-z]/g, ''));
              }}
              style={{
                borderWidth: 1,
                marginTop: 10,
                height: 40,
                // paddingBottom: 0,
                borderColor: WHITE,
                paddingVertical: 5,
                fontSize: 16,
              }}
              placeholder="Enter Your Name"
            />
          </View>
          <View style={{marginTop: 20, marginHorizontal: 20}}>
            <TextInput
              value={height}
              onChangeText={text => {
                setHeight(text.replace(/[^0-9]/g, ''));
              }}
              style={{
                borderWidth: 1,
                marginTop: 10,
                height: 40,
                // paddingBottom: 0,
                borderColor: WHITE,
                paddingVertical: 5,
                fontSize: 16,
              }}
              keyboardType="numeric"
              placeholder="Your height (in cm)"
            />
          </View>

          <View style={{marginTop: 10, marginLeft: 20}}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={{marginTop: 10, marginBottom: 10}}>
                <Text>
                  Your Body Size <AntDesign name="caretdown" />
                </Text>

                <Text>{}</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* 
          <Button primary block rounded onPress={() => setpickImageModal(true)}>
            <Text>Pick Images</Text>
          </Button> */}
        </View>
      </View>

      {/* <View style={{marginTop: 70}}>
        {value == null ? (
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              textAlign: 'center',
              backgroundColor: '#D6415C',
              padding: 10,
              height: 50,
              marginHorizontal: 90,
              borderRadius: 20,
              color: 'white',
            }}
            id="button3"
            onPress={() => alert('Please Select Your Gender')}>
            Continue <AntDesign name="arrowright" size={16} />
          </Text>
        ) : (
          <View>
            {value == 'Male' ? (
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 20,
                  textAlign: 'center',
                  backgroundColor: '#D6415C',
                  padding: 10,
                  height: 50,
                  marginHorizontal: 90,
                  borderRadius: 20,
                  color: 'white',
                }}
                onPress={() => navigation.navigate('CreateProfile1', obj1)}
                id="button3">
                Continue <AntDesign name="arrowright" size={16} />
              </Text>
            ) : (
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 20,
                  textAlign: 'center',
                  backgroundColor: '#D6415C',
                  padding: 10,
                  color: 'white',
                  height: 50,
                  marginHorizontal: 90,
                  borderRadius: 20,
                }}
                onPress={() => navigation.navigate('Female1', obj1)}>
                Continue <AntDesign name="arrowright" size={16} />
              </Text>
            )}
          </View>
        )}
      </View> */}

      <View style={{backgroundColor: PRIMARY}}>
        <TouchableOpacity onPress={() => setpickImageModal(true)}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              textAlign: 'center',
              backgroundColor: '#D6415C',
              padding: 10,
              height: 50,
              marginHorizontal: 90,
              borderRadius: 20,
              color: 'white',
              backgroundColor: ACCENT,
              marginBottom: 20,
            }}
            id="button3">
            Next <AntDesign name="arrowright" size={16} />
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Modal
        animationType="slide"
        visible={pickImageModal}
        transparent={true}
        style={{
          height: Dimensions.get('screen').height,
        }}
        onRequestClose={() => {
          setpickImageModal(false);
        }}>
       
      </Modal> */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Button
                onPress={() => setSize('xs')}
                style={[
                  styles.text1,
                  {
                    backgroundColor: size === 'xs' ? ACCENT : PRIMARY,
                  },
                ]}>
                <Text>Extra Small</Text>
              </Button>
              <Button
                onPress={() => setSize('s')}
                style={[
                  styles.text1,
                  {
                    backgroundColor: size === 's' ? ACCENT : PRIMARY,
                  },
                ]}>
                <Text>Extra Small</Text>
              </Button>
              <Button
                onPress={() => setSize('M')}
                style={[
                  styles.text1,
                  {
                    backgroundColor: size === 'M' ? ACCENT : PRIMARY,
                  },
                ]}>
                <Text> Medium</Text>
              </Button>
              <Button
                onPress={() => setSize('l')}
                style={[
                  styles.text1,
                  {
                    backgroundColor: size === 'l' ? ACCENT : PRIMARY,
                  },
                ]}>
                <Text>Large</Text>
              </Button>
              <Button
                onPress={() => setSize('xl')}
                style={[
                  styles.text1,
                  {
                    backgroundColor: size === 'xl' ? ACCENT : PRIMARY,
                  },
                ]}>
                <Text> Extra Large</Text>
              </Button>
              <Button
                onPress={() => setSize('xxl')}
                style={[
                  styles.text1,
                  {
                    backgroundColor: size === 'xxl' ? ACCENT : PRIMARY,
                  },
                ]}>
                <Text>Extra Extra Large</Text>
              </Button>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 400,
  },
  modalView: {
    margin: 30,
    backgroundColor: '#14466b',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    width: 340,
    height: 280,
    marginBottom: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  text1: {
    fontSize: 15,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    width: 160,
    height: 30,
    textAlign: 'center',
    marginTop: 10,
    // paddingTop: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
