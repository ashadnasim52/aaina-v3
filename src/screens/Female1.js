import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  StyleSheet,
  PermissionsAndroid,
  View,
  Image,
  ImageBackground,
  Modal,
  Text,
  TextInput,
  Input,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';

const Female1 = ({route, navigation}) => {
  // const { value } = route.params;
  const value = '';

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [values, setValues] = useState(null);
  const [value1, setValue1] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [name, setName] = useState(null);

  const obj22 = {
    value1: value1,
    weight: weight,
    height: height,
    name: name,
    value: value,
    values: values,
  };

  const handleChange = (type) => {
    if (type === 'button1') {
      setValues('Triangle');
      setModalVisible(!modalVisible);
    } else if (type === 'button2') {
      setValues('Diamond');
      setModalVisible(!modalVisible);
    } else if (type === 'button3') {
      setValues('Rectangle');
      setModalVisible(!modalVisible);
    } else if (type === 'button4') {
      setValues('Inverted');
      setModalVisible(!modalVisible);
    } else if (type === 'button5') {
      setValues('Hourglass');
      setModalVisible(!modalVisible);
    }
  };

  const handleChange1 = (type) => {
    if (type === 'button10') {
      setValue1('Extra Small');
      setModalVisible1(!modalVisible1);
    } else if (type === 'button20') {
      setValue1('Small');
      setModalVisible1(!modalVisible1);
    } else if (type === 'button30') {
      setValue1('Medium');
      setModalVisible1(!modalVisible1);
    } else if (type === 'button40') {
      setValue1('Large');
      setModalVisible1(!modalVisible1);
    } else if (type === 'button50') {
      setValue1('Extra-Large');
      setModalVisible1(!modalVisible1);
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
                <View style={{flexDirection: 'row', marginTop: 30}}>
                  <View>
                    <View
                      style={{
                        height: 150,
                        width: 120,
                        backgroundColor: 'white',
                        marginRight: 20,
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'black',
                          marginTop: 50,
                          fontSize: 19,
                        }}
                        onPress={() => setModalVisible(!modalVisible)}>
                        Body Shapes
                      </Text>
                    </View>
                  </View>

                  {/*=============2nd image========================================================*/}
                  <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={() => handleChange('button1')}>
                    <View>
                      <View
                        style={{backgroundColor: 'white', borderRadius: 10}}>
                        <Image
                          source={require('../assests/img/triangle.png')}
                          style={{height: 150, width: 120}}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: 'black',
                            marginTop: 5,
                            fontSize: 19,
                            marginTop: -30,
                          }}
                          onPress={() => handleChange('button1')}>
                          Triangle
                        </Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={() => handleChange('button2')}>
                    <View>
                      <View
                        style={{
                          backgroundColor: 'white',
                          marginRight: 20,
                          borderRadius: 10,
                        }}>
                        <Image
                          source={require('../assests/img/diamond.png')}
                          style={{height: 150, width: 120}}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: 'black',
                            marginTop: 5,
                            fontSize: 19,
                            marginTop: -30,
                            marginLeft: -10,
                          }}>
                          Diamond
                        </Text>
                      </View>
                    </View>
                  </TouchableHighlight>

                  {/*=============2nd image========================================================*/}
                  <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={() => handleChange('button3')}>
                    <View>
                      <View
                        style={{backgroundColor: 'white', borderRadius: 10}}>
                        <Image
                          source={require('../assests/img/rectangle.png')}
                          style={{height: 150, width: 120}}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: 'black',
                            marginTop: 5,
                            fontSize: 19,
                            marginTop: -30,
                          }}>
                          Rectangle
                        </Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={() => handleChange('button4')}>
                    <View>
                      <View
                        style={{
                          backgroundColor: 'white',
                          marginRight: 20,
                          borderRadius: 10,
                        }}>
                        <Image
                          source={require('../assests/img/inverted.png')}
                          style={{height: 150, width: 120}}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: 'black',
                            marginTop: 5,
                            fontSize: 19,
                            marginTop: -30,
                            marginLeft: -10,
                          }}
                          onPress={() => handleChange('button4')}>
                          Inverted
                        </Text>
                      </View>
                    </View>
                  </TouchableHighlight>

                  {/*=============2nd image========================================================*/}
                  <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={() => handleChange('button5')}>
                    <View>
                      <View
                        style={{backgroundColor: 'white', borderRadius: 10}}>
                        <Image
                          source={require('../assests/img/hourglass.png')}
                          style={{height: 150, width: 120}}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: 'black',
                            marginTop: 5,
                            fontSize: 19,
                            marginTop: -30,
                          }}>
                          Hourglass
                        </Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                </View>
              </ScrollView>

              <View></View>
            </View>
          </View>
        </Modal>

        {/* ===========================2nd modal start from here================================================================= */}

        <Modal
          animationType="slide"
          visible={modalVisible1}
          transparent={true}
          onRequestClose={() => {
            setModalVisible1(!modalVisible1);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView1}>
              <ScrollView>
                <Text
                  onPress={() => handleChange1('button10')}
                  style={styles.text1}>
                  Extra Small
                </Text>

                <Text
                  onPress={() => handleChange1('button20')}
                  style={styles.text1}
                  onChange={(e) => setValue1(e.target.value)}>
                  Small
                </Text>

                <Text
                  onPress={() => handleChange1('button30')}
                  style={styles.text1}
                  onChange={(e) => setValue1(e.target.value)}>
                  Medium
                </Text>

                <Text
                  onPress={() => handleChange1('button40')}
                  style={styles.text1}
                  onChange={(e) => setValue1(e.target.value)}>
                  Large
                </Text>

                <Text
                  onPress={() => handleChange1('button50')}
                  style={styles.text1}
                  onChange={(e) => setValue1(e.target.value)}>
                  Extra Large
                </Text>
              </ScrollView>
              <View></View>
            </View>
          </View>
        </Modal>

        {/* ===============================2nd modal ends here ===================================================================== */}

        <View style={{}}>
          <Image
            source={require('../assests/img/FEMALE.jpg')}
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
                <Text style={{width: 150}}>Your Weight (in Kg)</Text>
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
                  keyboardType="numeric"
                />
              </View>
              <View style={{marginLeft: 30, width: 150}}>
                <Text>Your height (in cm)</Text>
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

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View
                  style={{marginTop: 30, marginBottom: 50, marginRight: 60}}>
                  <Text>
                    Your Body Shape <AntDesign name="caretdown" />
                  </Text>
                  <Text>{values}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible1(true)}>
                <View style={{marginTop: 30, marginBottom: 50}}>
                  <Text>
                    Your Body Size <AntDesign name="caretdown" />
                  </Text>
                  <Text>{value1}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            {values == null ||
            value1 == null ||
            weight == null ||
            height == null ||
            name == null ? (
              <TouchableOpacity
                onPress={() => alert('*All Fields Should Be Filled')}>
                <View
                  style={{
                    marginTop: 0,
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
                onPress={() => navigation.navigate('Female', obj22)}>
                <View
                  style={{
                    marginTop: 0,
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

export default Female1;

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
    height: 1000,
    marginBottom: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  modalView1: {
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
