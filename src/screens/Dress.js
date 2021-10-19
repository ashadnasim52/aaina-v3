import {TextStyleProps} from '@ui-kitten/components/devsupport';
import {View, Text, Body, CardItem, Left, Right, Button} from 'native-base';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Modal,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Virtual from './Virtual';

const Dress = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rate, setRate] = useState(5);
  const [shoulderRate, setShoulderRate] = useState(7);
  const [ChestRate, setChestRate] = useState(10);
  const [WaistRate, setWaistRate] = useState(16);
  const [HipsRate, setHipsRate] = useState(9);

  return (
    <>
      <ScrollView style={{marginTop: 0}}>
        <Modal animationType="slide" visible={modalVisible} transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <AntDesign
                onPress={() => setModalVisible(!modalVisible)}
                name="close"
                style={{
                  fontSize: 18,
                  color: 'red',
                  fontWeight: 'bold',
                  marginLeft: 200,
                  marginTop: 0,
                }}
              />
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.text1}>Small</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.text1}>Medium</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.text1}>Large</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.text1}>Extra Large</Text>
              </TouchableOpacity>

              <View></View>
            </View>
          </View>
        </Modal>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                alignSelf: 'center',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 17,
              }}>
              Dress Fitting Rating{' '}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{margin: 10}}>
              <Image
                source={require('../assests/temp.jpeg')}
                style={{width: 180, height: 240, borderRadius: 10}}
              />
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 10,
                    color: 'darkorange',
                    marginLeft: 15,
                  }}>
                  Ravin Kumar
                </Text>
              </View>
            </View>
            <View style={{marginTop: 15, marginRight: 10}}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text
                  style={{
                    backgroundColor: '#293c5d',
                    color: 'white',
                    height: 40,
                    width: 150,
                    padding: 10,
                    borderRadius: 5,
                    fontSize: 14,
                    textAlign: 'center',
                  }}>
                  Change Size
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text
                  style={{
                    backgroundColor: '#f7941e',
                    marginTop: 10,
                    color: 'white',
                    height: 40,
                    width: 150,
                    padding: 10,
                    borderRadius: 5,
                    fontSize: 14,
                    textAlign: 'center',
                  }}>
                  Change Body Profile
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Virtual')}>
                <Text
                  style={{
                    backgroundColor: '#810541',
                    marginTop: 105,
                    color: 'white',
                    height: 40,
                    width: 150,
                    padding: 10,
                    borderRadius: 5,
                    fontSize: 13,
                    textAlign: 'center',
                  }}>
                  Virtual Trial Room{' '}
                  <AntDesign name="arrowright" style={{fontSize: 13}} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 30, justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.text}>Shoulder:17.87</Text>
              </View>
              <View>
                <Text style={styles.text}>Waiest:32.87</Text>
              </View>
              <View>
                <Text style={styles.text}>Chest:38.63</Text>
              </View>
              <View>
                <Text style={styles.text}>Hips:37.89</Text>
              </View>
              <View>
                <Text style={styles.text}>BMI:22.66</Text>
              </View>
            </View>
            <View>
              <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 10,
                  marginLeft: 40,
                }}
              />
            </View>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          {
            //0-10 ternary opration for final rating start

            rate >= 0 && rate <= 10 ? (
              //0-10

              rate <= 8 ? (
                //0-8
                rate <= 6 ? (
                  //0-6
                  rate <= 4 ? (
                    //0-4
                    //terminate

                    <View
                      style={{
                        backgroundColor: 'lightgrey',
                        marginTop: 10,
                        height: 55,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10, marginTop: 15}}>
                          Final Rating
                        </Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                              marginRight: 10,
                            }}>
                            {rate}
                          </Text>
                        </Right>
                      </View>

                      {/* <Text style={{ fontSize: 11,fontWeight:"bold", color: "green", marginTop: -12, marginLeft: 10 }}>0-4</Text> */}
                    </View>
                  ) : (
                    //4-6
                    //terminate
                    <View
                      style={{
                        backgroundColor: 'lightgrey',
                        marginTop: 10,
                        height: 55,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10, marginTop: 15}}>
                          Final Rating
                        </Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'orange',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                              marginRight: 10,
                            }}>
                            {rate}
                          </Text>
                        </Right>
                      </View>

                      {/* <Text style={{ fontSize: 11,fontWeight:"bold", color: "green", marginTop: -12, marginLeft: 10 }}>4-6</Text> */}
                    </View>
                  )
                ) : (
                  //6-8
                  //treminate
                  <View
                    style={{
                      backgroundColor: 'lightgrey',
                      marginTop: 10,
                      height: 55,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginLeft: 10, marginTop: 15}}>
                        Final Rating
                      </Text>
                      <Right>
                        <Text
                          style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            height: 30,
                            width: 60,
                            borderRadius: 17,
                            textAlign: 'center',
                            paddingTop: 2,
                            marginTop: 15,
                            marginRight: 10,
                            marginRight: 10,
                          }}>
                          {rate}
                        </Text>
                      </Right>
                    </View>

                    {/* <Text style={{ fontSize: 11,fontWeight:"bold", color: "green", marginTop: -12, marginLeft: 10 }}>6-8</Text> */}
                  </View>
                )
              ) : //8-10
              rate <= 9 ? (
                //8-9
                //treminate
                <View
                  style={{
                    backgroundColor: 'lightgrey',
                    marginTop: 10,
                    height: 55,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10, marginTop: 15}}>
                      Final Rating
                    </Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                          marginRight: 10,
                        }}>
                        {rate}
                      </Text>
                    </Right>
                  </View>

                  {/* <Text style={{ fontSize: 11,fontWeight:"bold", color: "green", marginTop: -12, marginLeft: 10 }}>8-9</Text> */}
                </View>
              ) : (
                //9-10
                //ter
                <View
                  style={{
                    backgroundColor: 'lightgrey',
                    marginTop: 10,
                    height: 55,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10, marginTop: 15}}>
                      Final Rating
                    </Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'green',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                          marginRight: 10,
                        }}>
                        {rate}
                      </Text>
                    </Right>
                  </View>

                  {/* <Text style={{ fontSize: 11,fontWeight:"bold", color: "green", marginTop: -12, marginLeft: 10 }}>9-10</Text> */}
                </View>
              )
            ) : //Above 10 final ratings
            rate > 10 && rate <= 20 ? (
              //10-20
              rate >= 12 ? (
                //12-20
                rate >= 14 ? (
                  //14-20
                  rate >= 16 ? (
                    //16-20
                    //terminate
                    <View
                      style={{
                        backgroundColor: 'lightgrey',
                        marginTop: 10,
                        height: 55,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10, marginTop: 15}}>
                          Final Rating
                        </Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                              marginRight: 10,
                            }}>
                            {20 - rate}
                          </Text>
                        </Right>
                      </View>

                      {/* <Text style={{ fontSize: 11,fontWeight:"bold", color: "green", marginTop: -12, marginLeft: 10 }}>16-20</Text> */}
                    </View>
                  ) : (
                    //14-16
                    //terminate
                    <View
                      style={{
                        backgroundColor: 'lightgrey',
                        marginTop: 10,
                        height: 55,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10, marginTop: 15}}>
                          Final Rating
                        </Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'orange',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                              marginRight: 10,
                            }}>
                            {20 - rate}
                          </Text>
                        </Right>
                      </View>

                      {/* <Text style={{ fontSize: 11,fontWeight:"bold", color: "green", marginTop: -12, marginLeft: 10 }}>14-16</Text> */}
                    </View>
                  )
                ) : (
                  //12-14
                  //terminate
                  <View
                    style={{
                      backgroundColor: 'lightgrey',
                      marginTop: 10,
                      height: 55,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginLeft: 10, marginTop: 15}}>
                        Final Rating
                      </Text>
                      <Right>
                        <Text
                          style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            height: 30,
                            width: 60,
                            borderRadius: 17,
                            textAlign: 'center',
                            paddingTop: 2,
                            marginTop: 15,
                            marginRight: 10,
                            marginRight: 10,
                          }}>
                          {20 - rate}
                        </Text>
                      </Right>
                    </View>

                    {/* <Text style={{ fontSize: 11,fontWeight:"bold", color: "green", marginTop: -12, marginLeft: 10 }}>12-14</Text> */}
                  </View>
                )
              ) : //10-12
              rate >= 11 ? (
                //11-12
                //terminaet
                <View
                  style={{
                    backgroundColor: 'lightgrey',
                    marginTop: 10,
                    height: 55,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10, marginTop: 15}}>
                      Final Rating
                    </Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                          marginRight: 10,
                        }}>
                        {20 - rate}
                      </Text>
                    </Right>
                  </View>

                  {/* <Text style={{ fontSize: 11,fontWeight:"bold", color: "green", marginTop: -12, marginLeft: 10 }}>11-12</Text> */}
                </View>
              ) : (
                //10-11
                //terminate
                <View
                  style={{
                    backgroundColor: 'lightgrey',
                    marginTop: 10,
                    height: 55,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10, marginTop: 15}}>
                      Final Rating
                    </Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'green',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                          marginRight: 10,
                        }}>
                        {20 - rate}
                      </Text>
                    </Right>
                  </View>

                  {/* <Text style={{ fontSize: 11,fontWeight:"bold", color: "green", marginTop: -12, marginLeft: 10 }}>10-11</Text> */}
                </View>
              )
            ) : (
              //invalid value alert
              Alert.alert('Invalid Value')
            )

            //end of final ratings ternary block
          }
        </View>

        <View>
          {
            //0-10 ternary opration for shoulder

            shoulderRate >= 0 && shoulderRate <= 10 ? (
              //0-10

              shoulderRate <= 8 ? (
                //0-8
                shoulderRate <= 6 ? (
                  //0-6
                  shoulderRate <= 4 ? (
                    //0-4
                    //terminate

                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>shoulder</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {shoulderRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        Sleeve is tight fits in the arm.
                      </Text>
                    </View>
                  ) : (
                    //4-6
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>shoulder</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'orange',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {shoulderRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        The sleeve slightly fits the arm.
                      </Text>
                    </View>
                  )
                ) : (
                  //6-8
                  //treminate
                  <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 8,
                      }}>
                      <View>
                        <Text style={{marginLeft: 10}}>shoulder</Text>
                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: 'green',
                            marginLeft: 10,
                          }}>
                          Acceptable fitted in the sleeve that is normal.
                        </Text>
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            height: 30,
                            width: 60,
                            borderRadius: 17,
                            textAlign: 'center',
                            paddingTop: 2,
                            alignSelf: 'center',
                            marginRight: 10,
                          }}>
                          {shoulderRate}
                        </Text>
                      </View>
                    </View>
                  </View>
                )
              ) : //8-10
              shoulderRate <= 9 ? (
                //8-9
                //treminate
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>shoulder</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {shoulderRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Better fitting in arm,can easly move hand.
                  </Text>
                </View>
              ) : (
                //9-10
                //ter
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>shoulder</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'green',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {shoulderRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Perfectly fitted
                  </Text>
                </View>
              )
            ) : //Above 10 shoulders
            shoulderRate > 10 && shoulderRate <= 20 ? (
              //10-20
              shoulderRate >= 12 ? (
                //12-20
                shoulderRate >= 14 ? (
                  //14-20
                  shoulderRate >= 16 ? (
                    //16-20
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>shoulder</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {20 - shoulderRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        out of fit,that is too much loose.
                      </Text>
                    </View>
                  ) : (
                    //14-16
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>shoulder</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'orange',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {20 - shoulderRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        Shoulder is more loose that is out of fitting.
                      </Text>
                    </View>
                  )
                ) : (
                  //12-14
                  //terminate
                  <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginLeft: 10}}>shoulder</Text>
                      <Right>
                        <Text
                          style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            height: 30,
                            width: 60,
                            borderRadius: 17,
                            textAlign: 'center',
                            paddingTop: 2,
                            marginTop: 15,
                            marginRight: 10,
                          }}>
                          {20 - shoulderRate}
                        </Text>
                      </Right>
                    </View>

                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: 'bold',
                        color: 'green',
                        marginTop: -12,
                        marginLeft: 10,
                      }}>
                      Not suited in shoulder,little loose.
                    </Text>
                  </View>
                )
              ) : //10-12
              shoulderRate >= 11 ? (
                //11-12
                //terminaet
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>shoulder</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {20 - shoulderRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    An acceptable loose in the sleeve that is normal for mass of
                    people.
                  </Text>
                </View>
              ) : (
                //10-11
                //terminate
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>shoulder</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'green',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {20 - shoulderRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Perfectly fitted
                  </Text>
                </View>
              )
            ) : (
              //invalid value alert
              Alert.alert('Invalid Value')
            )

            //end of shoulders ternary block
          }
        </View>

        <View>
          {
            //0-10 ternary opration for Chest

            ChestRate >= 0 && ChestRate <= 10 ? (
              //0-10

              ChestRate <= 8 ? (
                //0-8
                ChestRate <= 6 ? (
                  //0-6
                  ChestRate <= 4 ? (
                    //0-4
                    //terminate

                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Chest</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {ChestRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        The attire is too tight in the chest area.
                      </Text>
                    </View>
                  ) : (
                    //4-6
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Chest</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'orange',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {ChestRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        The item is tight in the chest.
                      </Text>
                    </View>
                  )
                ) : (
                  //6-8
                  //treminate
                  <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginLeft: 10}}>Chest</Text>
                      <Right>
                        <Text
                          style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            height: 30,
                            width: 60,
                            borderRadius: 17,
                            textAlign: 'center',
                            paddingTop: 2,
                            marginTop: 15,
                            marginRight: 10,
                          }}>
                          {ChestRate}
                        </Text>
                      </Right>
                    </View>

                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: 'bold',
                        color: 'green',
                        marginTop: -12,
                        marginLeft: 10,
                      }}>
                      The dress is slightly fitted in the chest. The body shape
                      is highlighted.
                    </Text>
                  </View>
                )
              ) : //8-10
              ChestRate <= 9 ? (
                //8-9
                //treminate
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Chest</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {ChestRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Mostly good fit in chest area.
                  </Text>
                </View>
              ) : (
                //9-10
                //ter
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Chest</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'green',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {ChestRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Perfeclty fit in the chest area.
                  </Text>
                </View>
              )
            ) : //Above 10 Chests
            ChestRate > 10 && ChestRate <= 20 ? (
              //10-20
              ChestRate >= 12 ? (
                //12-20
                ChestRate >= 14 ? (
                  //14-20
                  ChestRate >= 16 ? (
                    //16-20
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Chest</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {20 - ChestRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        Too much loose in chest area not wearable.
                      </Text>
                    </View>
                  ) : (
                    //14-16
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Chest</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'orange',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {20 - ChestRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        More loose in chest not comfort.
                      </Text>
                    </View>
                  )
                ) : (
                  //12-14
                  //terminate
                  <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginLeft: 10}}>Chest</Text>
                      <Right>
                        <Text
                          style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            height: 30,
                            width: 60,
                            borderRadius: 17,
                            textAlign: 'center',
                            paddingTop: 2,
                            marginTop: 15,
                            marginRight: 10,
                          }}>
                          {20 - ChestRate}
                        </Text>
                      </Right>
                    </View>

                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: 'bold',
                        color: 'green',
                        marginTop: -12,
                        marginLeft: 10,
                      }}>
                      Loose fitting ,Not good fit in the chest.
                    </Text>
                  </View>
                )
              ) : //10-12
              ChestRate >= 11 ? (
                //11-12
                //terminaet
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Chest</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {20 - ChestRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    The dress is slightly fitted in the chest. The body shape is
                    highlighted
                  </Text>
                </View>
              ) : (
                //10-11
                //terminate
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Chest</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'green',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {20 - ChestRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Perfeclty fit in the chest area.
                  </Text>
                </View>
              )
            ) : (
              //invalid value alert
              Alert.alert('Invalid Value')
            )

            //end of Chests ternary block
          }
        </View>

        <View>
          {
            //0-10 ternary opration for Waist

            WaistRate >= 0 && WaistRate <= 10 ? (
              //0-10

              WaistRate <= 8 ? (
                //0-8
                WaistRate <= 6 ? (
                  //0-6
                  WaistRate <= 4 ? (
                    //0-4
                    //terminate

                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Waist</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {WaistRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        A tight fitting which compresses and sets off the waist
                      </Text>
                    </View>
                  ) : (
                    //4-6
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Waist</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'orange',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {WaistRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        The attire is tightly sets off the waist.
                      </Text>
                    </View>
                  )
                ) : (
                  //6-8
                  //treminate
                  <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginLeft: 10}}>Waist</Text>
                      <Right>
                        <Text
                          style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            height: 30,
                            width: 60,
                            borderRadius: 17,
                            textAlign: 'center',
                            paddingTop: 2,
                            marginTop: 15,
                            marginRight: 10,
                          }}>
                          {WaistRate}
                        </Text>
                      </Right>
                    </View>

                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: 'bold',
                        color: 'green',
                        marginTop: -12,
                        marginLeft: 10,
                      }}>
                      an acceptable fit in the waist that is normal for this
                      mass of people.
                    </Text>
                  </View>
                )
              ) : //8-10
              WaistRate <= 9 ? (
                //8-9
                //treminate
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Waist</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {WaistRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Good fitting at the waistline.
                  </Text>
                </View>
              ) : (
                //9-10
                //ter
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Waist</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'green',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {WaistRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Perfectly fitted at the waistline.
                  </Text>
                </View>
              )
            ) : //Above 10 Waists
            WaistRate > 10 && WaistRate <= 20 ? (
              //10-20
              WaistRate >= 12 ? (
                //12-20
                WaistRate >= 14 ? (
                  //14-20
                  WaistRate >= 16 ? (
                    //16-20
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Waist</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {20 - WaistRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        Waist is too much loose which is out of fit.
                      </Text>
                    </View>
                  ) : (
                    //14-16
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Waist</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'orange',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {20 - WaistRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        more loose,not acceptable for the people.
                      </Text>
                    </View>
                  )
                ) : (
                  //12-14
                  //terminate
                  <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginLeft: 10}}>Waist</Text>
                      <Right>
                        <Text
                          style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            height: 30,
                            width: 60,
                            borderRadius: 17,
                            textAlign: 'center',
                            paddingTop: 2,
                            marginTop: 15,
                            marginRight: 10,
                          }}>
                          {20 - WaistRate}
                        </Text>
                      </Right>
                    </View>

                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: 'bold',
                        color: 'green',
                        marginTop: -12,
                        marginLeft: 10,
                      }}>
                      loose fit in the waistline.
                    </Text>
                  </View>
                )
              ) : //10-12
              WaistRate >= 11 ? (
                //11-12
                //terminaet
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Waist</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {20 - WaistRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    an acceptable loose in the waist that is normal for mass of
                    people.
                  </Text>
                </View>
              ) : (
                //10-11
                //terminate
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Waist</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'green',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {20 - WaistRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Perfectly fitted at the waistline.
                  </Text>
                </View>
              )
            ) : (
              //invalid value alert
              Alert.alert('Invalid Value')
            )

            //end of Waists ternary block
          }
        </View>

        <View>
          {
            //0-10 ternary opration for Hips

            HipsRate >= 0 && HipsRate <= 10 ? (
              //0-10

              HipsRate <= 8 ? (
                //0-8
                HipsRate <= 6 ? (
                  //0-6
                  HipsRate <= 4 ? (
                    //0-4
                    //terminate

                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Hips</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {HipsRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        Narrow fitted in the hips part.
                      </Text>
                    </View>
                  ) : (
                    //4-6
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Hips</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'orange',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {HipsRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        Hips is little good fit in hips.
                      </Text>
                    </View>
                  )
                ) : (
                  //6-8
                  //treminate
                  <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginLeft: 10}}>Hips</Text>
                      <Right>
                        <Text
                          style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            height: 30,
                            width: 60,
                            borderRadius: 17,
                            textAlign: 'center',
                            paddingTop: 2,
                            marginTop: 15,
                            marginRight: 10,
                          }}>
                          {HipsRate}
                        </Text>
                      </Right>
                    </View>

                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: 'bold',
                        color: 'green',
                        marginTop: -12,
                        marginLeft: 10,
                      }}>
                      Slightly fitted in hipline.
                    </Text>
                  </View>
                )
              ) : //8-10
              HipsRate <= 9 ? (
                //8-9
                //treminate
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Hips</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {HipsRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Comfortable fitted in hipline.
                  </Text>
                </View>
              ) : (
                //9-10
                //ter
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Hips</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'green',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {HipsRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Perfectly fitted at hips.
                  </Text>
                </View>
              )
            ) : //Above 10 Hipss
            HipsRate > 10 && HipsRate <= 20 ? (
              //10-20
              HipsRate >= 12 ? (
                //12-20
                HipsRate >= 14 ? (
                  //14-20
                  HipsRate >= 16 ? (
                    //16-20
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Hips</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {20 - HipsRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        generally not wearable due to lossing of attire.
                      </Text>
                    </View>
                  ) : (
                    //14-16
                    //terminate
                    <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft: 10}}>Hips</Text>
                        <Right>
                          <Text
                            style={{
                              backgroundColor: 'orange',
                              color: 'black',
                              height: 30,
                              width: 60,
                              borderRadius: 17,
                              textAlign: 'center',
                              paddingTop: 2,
                              marginTop: 15,
                              marginRight: 10,
                            }}>
                            {20 - HipsRate}
                          </Text>
                        </Right>
                      </View>

                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: 'green',
                          marginTop: -12,
                          marginLeft: 10,
                        }}>
                        More loose in the hips part,Not acceptable by people.
                      </Text>
                    </View>
                  )
                ) : (
                  //12-14
                  //terminate
                  <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginLeft: 10}}>Hips</Text>
                      <Right>
                        <Text
                          style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            height: 30,
                            width: 60,
                            borderRadius: 17,
                            textAlign: 'center',
                            paddingTop: 2,
                            marginTop: 15,
                            marginRight: 10,
                          }}>
                          {20 - HipsRate}
                        </Text>
                      </Right>
                    </View>

                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: 'bold',
                        color: 'green',
                        marginTop: -12,
                        marginLeft: 10,
                      }}>
                      The attire is loose not proper fit.
                    </Text>
                  </View>
                )
              ) : //10-12
              HipsRate >= 11 ? (
                //11-12
                //terminaet
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Hips</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {20 - HipsRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    normal loose in hips.
                  </Text>
                </View>
              ) : (
                //10-11
                //terminate
                <View style={{backgroundColor: 'lightgrey', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10}}>Hips</Text>
                    <Right>
                      <Text
                        style={{
                          backgroundColor: 'green',
                          color: 'black',
                          height: 30,
                          width: 60,
                          borderRadius: 17,
                          textAlign: 'center',
                          paddingTop: 2,
                          marginTop: 15,
                          marginRight: 10,
                        }}>
                        {20 - HipsRate}
                      </Text>
                    </Right>
                  </View>

                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: -12,
                      marginLeft: 10,
                    }}>
                    Perfectly fitted at hips.{' '}
                  </Text>
                </View>
              )
            ) : (
              //invalid value alert
              Alert.alert('Invalid Value')
            )

            //end of Hips ternary block
          }
        </View>
      </ScrollView>
    </>
  );
};

export default Dress;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    justifyContent: 'space-around',
    width: 250,
    height: 400,
    margin: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text1: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#14466b',
    borderRadius: 10,
    width: 160,
    height: 40,
    textAlign: 'center',
  },
});
