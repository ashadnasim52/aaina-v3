import {FlexStyleProps, PropsService} from '@ui-kitten/components/devsupport';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Modal,
  Text,
  TextInput,
  Input,
} from 'react-native';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';

const CreateProfile1 = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value1, setValue] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [name, setName] = useState(null);

  const handleChange = type => {
    if (type === 'button1') {
      setValue('Extra Small');
      setModalVisible(!modalVisible);
    } else if (type === 'button2') {
      setValue('Small');
      setModalVisible(!modalVisible);
    } else if (type === 'button3') {
      setValue('Medium');
      setModalVisible(!modalVisible);
    } else if (type === 'button4') {
      setValue('Large');
      setModalVisible(!modalVisible);
    } else if (type === 'button5') {
      setValue('Extra-Large');
      setModalVisible(!modalVisible);
    }
  };

  return (
    <>
      <KeyboardAwareScrollView></KeyboardAwareScrollView>
    </>
  );
};

export default CreateProfile1;

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
    height: 230,
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
    paddingTop: 3,
  },
});
