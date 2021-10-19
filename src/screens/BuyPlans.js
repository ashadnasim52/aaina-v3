import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, Modal} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const BuyPlans = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibles, setModalVisibles] = useState(false);
  const [modalVisibless, setModalVisibless] = useState(false);

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#14466b'}}>
        {/* =========================1st start============= */}
        <View>
          <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={false}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={{backgroundColor: 'white'}}>
              <Text
                style={{
                  fontSize: 30,
                  alignSelf: 'center',
                  color: 'black',
                  marginTop: 15,
                }}>
                Basic
              </Text>
              <AntDesign
                onPress={() => setModalVisible(!modalVisible)}
                name="close"
                style={{
                  fontSize: 25,
                  color: 'red',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginTop: -50,
                }}
              />
            </View>

            <ScrollView
              style={{
                backgroundColor: '#14466b',
                borderWidth: 1,
                borderColor: 'white',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                marginTop: 30,
              }}>
              <View>
                <View>
                  <Text
                    style={{fontSize: 35, alignSelf: 'center', color: 'white'}}>
                    $50/Month
                  </Text>
                  <Text
                    style={{color: 'white', alignSelf: 'center', fontSize: 17}}>
                    with Annual Contract
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: 30,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> 2000
                    Dimensions
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Automated Size Gradation.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Automated Size Control.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Product
                    Detail
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Product
                    Show on Aaiena platform
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Backlink Integration
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Email
                    Chat Support.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Dedicated Account Manager.
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      name="close"
                      color={'red'}
                      size={15}
                      style={{marginTop: 15, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 0,
                        fontSize: 16,
                        color: 'grey',
                        textDecorationLine: 'line-through',
                      }}>
                      {' '}
                      Email Notification
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      name="close"
                      color={'red'}
                      size={15}
                      style={{marginTop: 15, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 0,
                        fontSize: 16,
                        color: 'grey',
                        textDecorationLine: 'line-through',
                      }}>
                      {' '}
                      Analytics Integration
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      name="close"
                      color={'red'}
                      size={15}
                      style={{marginTop: 15, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 0,
                        fontSize: 16,
                        color: 'grey',
                        textDecorationLine: 'line-through',
                      }}>
                      Monthly Data report
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      name="close"
                      color={'red'}
                      size={15}
                      style={{marginTop: 15, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 0,
                        fontSize: 16,
                        color: 'grey',
                        textDecorationLine: 'line-through',
                      }}>
                      Knowledge based consultation
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      name="close"
                      color={'red'}
                      size={15}
                      style={{marginTop: 15, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 0,
                        fontSize: 16,
                        color: 'grey',
                        textDecorationLine: 'line-through',
                      }}>
                      {' '}
                      Dedicated slack channel
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      name="close"
                      color={'red'}
                      size={15}
                      style={{marginTop: 15, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 0,
                        fontSize: 16,
                        color: 'grey',
                        textDecorationLine: 'line-through',
                      }}>
                      {' '}
                      Widget Customisation
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      name="close"
                      color={'red'}
                      size={15}
                      style={{marginTop: 15, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        marginRight: '2%',
                        fontSize: 16,
                        color: 'grey',
                        textDecorationLine: 'line-through',
                      }}>
                      {' '}
                      sizingline solution with unlimited volume custom dimension
                      topology and blend shapes
                    </Text>
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      padding: 6,
                      width: '40%',
                      alignSelf: 'center',
                      borderRadius: 10,
                      color: 'green',
                      textAlign: 'center',
                      marginTop: '10%',
                      marginBottom: 20,
                      fontSize: 20,
                    }}>
                    Buy Now
                  </Text>
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>

        {/* ==================1st end=============== */}

        {/* ==================================2nd start ============== */}

        <View>
          <Modal
            animationType="slide"
            visible={modalVisibles}
            transparent={false}
            onRequestClose={() => {
              setModalVisibles(!modalVisibles);
            }}>
            <View style={{backgroundColor: 'white'}}>
              <Text
                style={{
                  fontSize: 30,
                  alignSelf: 'center',
                  color: 'black',
                  marginTop: 15,
                }}>
                Professional
              </Text>
              <AntDesign
                onPress={() => setModalVisibles(!modalVisibles)}
                name="close"
                style={{
                  fontSize: 25,
                  color: 'red',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginTop: -50,
                }}
              />
            </View>

            <ScrollView
              style={{
                backgroundColor: '#14466b',
                borderWidth: 1,
                borderColor: 'white',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                marginTop: 30,
              }}>
              <View>
                <View>
                  <Text
                    style={{fontSize: 35, alignSelf: 'center', color: 'white'}}>
                    $200/Month
                  </Text>
                  <Text
                    style={{color: 'white', alignSelf: 'center', fontSize: 17}}>
                    with Annual Contract
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: 30,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> 2000
                    Dimensions
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Automated Size Gradation.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Automated Size Control.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Product
                    Detail
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Product
                    Show on Aaiena platform
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Backlink Integration
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Email
                    Chat Support.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Dedicated Account Manager.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Email
                    Notification
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Analytics Integration
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Monthly
                    Data report
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Knowledge based consultation
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      name="close"
                      color={'red'}
                      size={15}
                      style={{marginTop: 15, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 0,
                        fontSize: 16,
                        color: 'grey',
                        textDecorationLine: 'line-through',
                      }}>
                      {' '}
                      Dedicated slack channel
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      name="close"
                      color={'red'}
                      size={15}
                      style={{marginTop: 15, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 0,
                        fontSize: 16,
                        color: 'grey',
                        textDecorationLine: 'line-through',
                      }}>
                      {' '}
                      Widget Customisation
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign
                      name="close"
                      color={'red'}
                      size={15}
                      style={{marginTop: 15, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        marginRight: '2%',
                        fontSize: 16,
                        color: 'grey',
                        textDecorationLine: 'line-through',
                      }}>
                      {' '}
                      sizingline solution with unlimited volume custom dimension
                      topology and blend shapes
                    </Text>
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      padding: 6,
                      width: '40%',
                      alignSelf: 'center',
                      borderRadius: 10,
                      color: 'green',
                      textAlign: 'center',
                      marginTop: '10%',
                      marginBottom: 20,
                      fontSize: 20,
                    }}>
                    Buy Now
                  </Text>
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>

        {/* =====================2nd end ===================================== */}

        {/* ==========================3rd==================== */}

        <View>
          <Modal
            animationType="slide"
            visible={modalVisibless}
            transparent={false}
            onRequestClose={() => {
              setModalVisibless(!modalVisibless);
            }}>
            <View style={{backgroundColor: 'white'}}>
              <Text
                style={{
                  fontSize: 30,
                  alignSelf: 'center',
                  color: 'black',
                  marginTop: 15,
                }}>
                Enterprise
              </Text>
              <AntDesign
                onPress={() => setModalVisibless(!modalVisibless)}
                name="close"
                style={{
                  fontSize: 25,
                  color: 'red',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginTop: -50,
                }}
              />
            </View>

            <ScrollView
              style={{
                backgroundColor: '#14466b',
                borderWidth: 1,
                borderColor: 'white',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                marginTop: 30,
              }}>
              <View>
                <View>
                  <Text
                    style={{fontSize: 35, alignSelf: 'center', color: 'white'}}>
                    Request for Quote
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: 30,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> 2000
                    Dimensions
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Automated Size Gradation.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Automated Size Control.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Product
                    Detail
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Product
                    Show on Aaiena platform
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Backlink Integration
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Email
                    Chat Support.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Dedicated Account Manager.
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Email
                    Notification
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Analytics Integration
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Monthly
                    Data report
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Knowledge based consultation
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    Dedicated slack channel
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} /> Widget
                    Customisation
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 16,
                      color: 'white',
                    }}>
                    <AntDesign name="check" color={'green'} size={15} />{' '}
                    sizingline solution with unlimited volume custom dimension
                    topology and blend shapes
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      padding: 6,
                      width: '40%',
                      alignSelf: 'center',
                      borderRadius: 10,
                      color: 'green',
                      textAlign: 'center',
                      marginTop: '10%',
                      marginBottom: 20,
                      fontSize: 20,
                    }}>
                    Request Now
                  </Text>
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>

        {/* ==============================3rd end ==================== */}

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: '5%',
              marginBottom: '10%',
              color: '#14466b',
              fontWeight: 'bold',
              fontSize: 20,
              backgroundColor: 'white',
              width: 220,
              alignSelf: 'center',
              padding: 7,
              borderRadius: 5,
            }}>
            CHOOSE YOUR PLANS
          </Text>
        </View>

        <View
          style={{
            height: '25%',
            backgroundColor: 'lightgrey',
            marginBottom: '5%',
            borderRadius: 20,
            marginHorizontal: '3%',
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, marginTop: '2%'}}>
            Basic
          </Text>
          <Text style={{textAlign: 'center', fontSize: 30, marginTop: '2%'}}>
            $50/Month
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '5%',
            }}>
            <Text
              style={{
                backgroundColor: 'white',
                padding: 12,
                color: '#14466b',
                borderRadius: 10,
                fontWeight: 'bold',
              }}
              onPress={() => setModalVisible(true)}>
              Buy Now
            </Text>
            <Text
              style={{
                backgroundColor: 'white',
                padding: 12,
                color: '#14466b',
                borderRadius: 10,
                fontWeight: 'bold',
              }}
              onPress={() => setModalVisible(true)}>
              Plan Details
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '25%',
            backgroundColor: 'lightgrey',
            marginBottom: '5%',
            borderRadius: 20,
            marginHorizontal: '3%',
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, marginTop: '2%'}}>
            Professional
          </Text>
          <Text style={{textAlign: 'center', fontSize: 30, marginTop: '2%'}}>
            $200/Month
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '5%',
            }}>
            <Text
              style={{
                backgroundColor: 'white',
                padding: 12,
                color: '#14466b',
                borderRadius: 10,
                fontWeight: 'bold',
              }}
              onPress={() => setModalVisibles(true)}>
              Buy Now
            </Text>
            <Text
              style={{
                backgroundColor: 'white',
                padding: 12,
                color: '#14466b',
                borderRadius: 10,
                fontWeight: 'bold',
              }}
              onPress={() => setModalVisibles(true)}>
              Plan Details
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '25%',
            backgroundColor: 'lightgrey',
            marginBottom: '5%',
            borderRadius: 20,
            marginHorizontal: '3%',
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, marginTop: '2%'}}>
            Enterprise
          </Text>
          <Text style={{textAlign: 'center', fontSize: 30, marginTop: '2%'}}>
            Request for Quote
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '5%',
            }}>
            <Text
              style={{
                backgroundColor: 'white',
                padding: 12,
                color: '#14466b',
                borderRadius: 10,
                fontWeight: 'bold',
              }}
              onPress={() => setModalVisibless(true)}>
              Request Now
            </Text>
            <Text
              style={{
                backgroundColor: 'white',
                padding: 12,
                color: '#14466b',
                borderRadius: 10,
                fontWeight: 'bold',
              }}
              onPress={() => setModalVisibless(true)}>
              View More
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default BuyPlans;

const styles = StyleSheet.create({});
