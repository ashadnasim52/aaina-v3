import React, {Component, useState} from 'react';
import {
  Image,
  View,
  ScrollView,
  TextInput,
  Alert,
  ImageBackground,
  Linking,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthToDp, heightToDp} from './Responsive';
import {Text, Button} from 'native-base';
const BcPage = ({navigation, route}) => {
  console.log({data: route.params.data});

  const contactToWhatsapp = name => {
    const link = `https://wa.me/${route.params.data.whatsAppNumber}?text=I want to buy ${name}`;
    Linking.openURL(encodeURI(link)).then(() => {
      console.log('opened');
    });
  };
  return (
    <>
      <View style={{backgroundColor: '#2B547E', height: 80}}>
        <View
          style={{
            height: 50,
            backgroundColor: '#fff',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center',
            borderRadius: 10,
            margin: 20,
            marginTop: 20,
          }}>
          <Icon
            name="fa-search"
            style={{
              paddingRight: widthToDp((number = 3)),
              paddingLeft: widthToDp((number = 3)),
              fontSize: widthToDp((number = 4)),
            }}
          />
          <TextInput placeholder="Search Any Product" />
        </View>
      </View>

      <ScrollView style={{backgroundColor: '#2B547E'}}>
        <View style={{marginTop: heightToDp((number = 2))}}>
          <Image
            source={{
              uri: route.params.data.image,
            }}
            style={{
              width: '100%',
              height: heightToDp((number = 35)),
              justifyContent: 'center',
            }}
          />
        </View>

        <View>
          <View style={{marginTop: widthToDp((number = 2))}}>
            <Text
              style={{
                color: 'white',
                fontSize: widthToDp((number = 7)),
                textAlign: 'center',
                textDecorationLine: 'underline',
              }}>
              About {route.params.data.client}
            </Text>
            <Text
              style={{
                color: 'lightgrey',
                fontSize: widthToDp((number = 4)),
                marginLeft: 10,
                marginTop: 10,
              }}>
              {route.params.data.about}
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            // justifyContent: 'space-around',
          }}>
          {route.params.data.products.map(product => (
            <View
              style={{
                backgroundColor: 'white',
                height: 300,
                marginHorizontal: 8,
                marginVertical: 6,
                borderRadius: 10,
                width: '45%',
              }}>
              <ImageBackground
                source={{uri: product.image}}
                style={{
                  width: 170,
                  height: 250,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'rgba(55, 81, 126, 0.8)',
                    marginTop: 200,
                    height: 50,
                    opacity: 0.9,
                    fontSize: 14,
                  }}>
                  {product.name}
                </Text>
              </ImageBackground>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 50,
                }}>
                <TouchableOpacity
                  onPress={() => contactToWhatsapp(product.name)}>
                  <Text
                    style={{
                      backgroundColor: '#2B547E',
                      color: 'white',
                      paddingHorizontal: 40,
                      paddingVertical: 10,
                      borderRadius: 20,
                    }}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text
                    style={{
                      margin: 8,
                      backgroundColor: '#2B547E',
                      color: 'white',
                      width: 70,
                      height: 35,
                      paddingLeft: 12,
                      paddingTop: 7,
                      borderRadius: 5,
                      fontWeight: 'bold',
                    }}>
                    Ettire
                  </Text>
                </TouchableOpacity> */}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};
export default BcPage;
