import {Divider, Layout} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import CustomCards from '../components/CustomCards';
import {AuthContext} from '../context/context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {widthToDp, heightToDp} from './Responsive';

import ClientHome from './client/Home';
import CompanyHome from './company/Home';
import {TouchableOpacity} from 'react-native-gesture-handler';

const sizeimg = require('../assests/temp.jpeg');

const data = [
  {title: 'Title Text', key: 'item1'},
  {title: 'Title Text', key: 'item2'},
];
const Home = props => {
  const {state, dispatch} = useContext(AuthContext);
  const nav = useNavigation();

  // if (state.isB2B) {
  //   // /client
  //   return <CompanyHome />;
  // } else {
  //   // company
  //   return <ClientHome />;
  // }
  console.log(state);
  if (!state?.user?.uid) {
    props.navigation.replace('PhoneSignIn');
    return;
  }
  return (
    <>
      <ScrollView style={{backgroundColor: '#14466b'}}>
        <View style={{height: heightToDp((number = 14))}}>
          <View
            style={{
              height: heightToDp((number = 8)),
              backgroundColor: '#fff',
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
              borderRadius: 10,
              marginTop: heightToDp((number = 3)),
              marginHorizontal: widthToDp((number = 5)),
            }}>
            <Icon
              name="search"
              style={{
                paddingRight: widthToDp((number = 3)),
                paddingLeft: widthToDp((number = 3)),
                fontSize: widthToDp((number = 4)),
              }}
            />
            <TextInput placeholder="Search Any Products...." />
          </View>
        </View>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View
            style={{
              height: heightToDp((number = 12)),
              marginTop: heightToDp((number = 6)),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: heightToDp((number = -6)),
              }}>
              <View style={{marginLeft: widthToDp((number = 4))}}>
                <TouchableOpacity onPress={() => nav.navigate('B2C')}>
                  <View>
                    <Image
                      source={require('../assests/img/Deepak_Garments.jpg')}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 100,
                        resizeMode: 'stretch',
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        marginLeft: 0,
                        marginTop: heightToDp((number = 1)),
                        color: '#fff',
                        width: widthToDp((number = 18)),
                      }}>
                      Deepak Garments
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{marginLeft: 20}}>
                <TouchableOpacity
                  onPress={() => nav.navigate('Chaudhary_Garments')}>
                  <View>
                    <Image
                      source={require('../assests/img/Chauhan_Lifestyle.jpg')}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 100,
                        resizeMode: 'stretch',
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        marginLeft: 0,
                        marginTop: heightToDp((number = 1)),
                        color: '#fff',
                        width: widthToDp((number = 18)),
                      }}>
                      Chauhan Garments
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{marginLeft: 20}}>
                <TouchableOpacity onPress={() => nav.navigate('Leather')}>
                  <View>
                    <Image
                      source={require('../assests/img/Leather_Home.jpg')}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 100,
                        resizeMode: 'stretch',
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        marginLeft: 0,
                        marginTop: heightToDp((number = 1)),
                        color: '#fff',
                        width: widthToDp((number = 18)),
                      }}>
                      Leather Home
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{marginLeft: 20}}>
                <TouchableOpacity onPress={() => nav.navigate('Glitz')}>
                  <View>
                    <Image
                      source={require('../assests/img/g_g.jpg')}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 100,
                        resizeMode: 'stretch',
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        marginLeft: 0,
                        marginTop: heightToDp((number = 1)),
                        color: '#fff',
                        width: widthToDp((number = 18)),
                      }}>
                      Glitz & Glamour
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{marginLeft: 20}}>
                <TouchableOpacity onPress={() => nav.navigate('Look')}>
                  <View>
                    <Image
                      source={require('../assests/img/look_me.jpg')}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        marginLeft: 0,
                        marginTop: heightToDp((number = 1)),
                        color: '#fff',
                        width: widthToDp((number = 18)),
                      }}>
                      Look Me
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{marginLeft: 20}}>
                <TouchableOpacity onPress={() => nav.navigate('Benzor')}>
                  <View>
                    <Image
                      source={require('../assests/img/Benzor.jpg')}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        marginLeft: 0,
                        marginTop: heightToDp((number = 1)),
                        color: '#fff',
                        width: widthToDp((number = 18)),
                      }}>
                      Benzor
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => nav.navigate('B2cpagemain')}>
                <View
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                    backgroundColor: 'white',
                    height: 70,
                    width: 70,
                    borderRadius: 10,
                  }}>
                  <Text style={{marginTop: 20, marginLeft: 20}}>
                    <Feather
                      name="more-horizontal"
                      style={{
                        color: 'black',
                        fontSize: 28,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}
                    />
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: -5,
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    View More
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <Layout
          style={{
            flex: 1,
          }}>
          <Layout
            style={{borderTopRightRadius: 15, borderTopLeftRadius: 15}}
            level="2">
            <ScrollView style={{backgroundColor: '#14466b'}}>
              <CustomCards imgsrc={sizeimg} plan="Sizing" />
              {/* <CustomCards imgsrc={sizeimg} plan="Ettire" /> */}
            </ScrollView>
          </Layout>
        </Layout>
      </ScrollView>
    </>
  );
};

export default Home;
