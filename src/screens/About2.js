import React from 'react';
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
import { useNavigation } from '@react-navigation/core';

const img1=require('../assests/img/sizing2.webp')
const img2= require('../assests/img/inweb3.png')
const img3=require('../assests/img/sneaky1.jpg')
const img4=require('../assests/img/instore10.png')
const img5=require('../assests/img/inapp10.png')
const img6=require('../assests/img/inweb10.png')


const About2 = (props) => {
    const nav =useNavigation();

  return (
    <>
         
    
      <ScrollView style={{backgroundColor:"#14466b"}}>
    

      <View style={{marginBottom: 40}}>
          <TouchableOpacity onPress={() => nav.navigate(props.link)}>
            <Card style={{marginTop: 30}}>
              <CardItem
                style={{
                  marginLeft: 20,
                  marginTop: 50,
                  height: 30,
                  marginBottom: 30,
                }}>
                <Left>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: -20,
                      fontWeight: 'bold',
                      color: '#14466b',
                      marginTop: -20,
                      marginLeft: 0,
                    }}>
                    {props.serve}
                  </Text>
                
                </Left>
                <Right>
                  <Image
                    source={props.imgsrc}
                    style={{
                      width: 220,
                      height: 190,
                      marginRight: -18,
                      marginTop: -15,
                      borderRadius: 25,
                      resizeMode:"cover"
                    }}
                  />
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </>
  );
};

export default About2;
