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
  const {value} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [value1, setValue] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [name, setName] = useState(null);

  const obj2 = {
    value1: value1,
    weight: weight,
    height: height,
    name: name,
    value: value,
  };

  const handleChange = (type) => {
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
      <KeyboardAwareScrollView>
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
                <Text
                  onPress={() => handleChange('button1')}
                  style={styles.text1}>
                  Extra Small
                </Text>

                <Text
                  onPress={() => handleChange('button2')}
                  style={styles.text1}
                  onChange={(e) => setValue(e.target.value)}>
                  Small
                </Text>

                <Text
                  onPress={() => handleChange('button3')}
                  style={styles.text1}
                  onChange={(e) => setValue(e.target.value)}>
                  Medium
                </Text>

                <Text
                  onPress={() => handleChange('button4')}
                  style={styles.text1}
                  onChange={(e) => setValue(e.target.value)}>
                  Large
                </Text>

                <Text
                  onPress={() => handleChange('button5')}
                  style={styles.text1}
                  onChange={(e) => setValue(e.target.value)}>
                  Extra Large
                </Text>
              </ScrollView>
              <View></View>
            </View>
          </View>
        </Modal>
        <View style={{}}>
          <Image
            source={require('../assests/img/MALE.jpg')}
            style={{width: '100%', height: 250}}
          />
          <View style={{marginTop: 50, marginHorizontal: 20}}>
            <TextInput
              value={name}
              onChangeText={(text) => {
                setName(text.replace(/[^A-Za-z]/g, ''));
              }}
              style={{
                borderBottomWidth: 1,
                marginTop: -10,
                height: 30,
                paddingBottom: 0,
              }}
              placeholder="Enter Your Name"
            />
          </View>

          <View style={{marginTop: 30, marginLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={{width: 150, marginBottom: 10}}>
                  Your Weight (in Kg)
                </Text>
                <TextInput
                  value={weight}
                  onChangeText={(text) => {
                    setWeight(text.replace(/[^0-9]/g, ''));
                  }}
                  style={{
                    borderBottomWidth: 1,
                    marginTop: -10,
                    height: 30,
                    paddingBottom: 0,
                  }}
                  keyboardType="number-pad"
                />
              </View>
              <View style={{marginLeft: 30, width: 150}}>
                <Text style={{marginBottom: 10}}>Your height (in cm)</Text>
                <TextInput
                  value={height}
                  onChangeText={(text) => {
                    setHeight(text.replace(/[^0-9]/g, ''));
                  }}
                  style={{
                    borderBottomWidth: 1,
                    marginTop: -10,
                    height: 30,
                    paddingBottom: 0,
                  }}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={{marginTop: 30, marginBottom: 50}}>
                <Text>
                  Your Body Size <AntDesign name="caretdown" />
                </Text>

                <Text>{value1}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            {value1 == null ||
            name == null ||
            height == null ||
            weight == null ? (
              <TouchableOpacity
                onPress={() => alert('*All Fields Should be Filled')}>
                <View
                  style={{
                    marginTop: 10,
                    backgroundColor: '#D6415C',
                    marginHorizontal: 90,
                    height: 50,
                    paddingTop: 10,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
                    Continue <AntDesign name="arrowright" size={16} />
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate('CreateProfile2', obj2)}>
                <View
                  style={{
                    marginTop: 10,
                    backgroundColor: '#D6415C',
                    marginHorizontal: 90,
                    height: 50,
                    paddingTop: 10,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
                    Continue <AntDesign name="arrowright" size={16} />
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
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
