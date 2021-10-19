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

const img1 = require('../assests/img/sizing2.webp')
const img2 = require('../assests/img/inweb3.png')
const img3 = require('../assests/img/sneaky1.jpg')
const img4 = require('../assests/img/instore10.png')
const img5 = require('../assests/img/inapp10.png')
const img6 = require('../assests/img/inweb10.png')


const About1 = (props) => {
  const nav = useNavigation();

  return (
    <>

      <ScrollView style={{ backgroundColor: "#14466b" }}>


        <View style={{ marginBottom: 40 }}>


          <TouchableOpacity onPress={() => nav.navigate(props.link)}>
            <Card style={{ marginTop: 20 }}>
              <CardItem
                style={{
                  marginLeft: 20,
                  marginTop: 0,
                  height: 80,
                  marginBottom: 30,
                }}>
                <Left>
                  <Image
                    source={props.imgsrc}
                    style={{
                      width: 160,
                      height: 150,
                      marginBottom: -20,
                      marginLeft: -40,
                      marginTop: 0,
                      borderRadius: 25,
                    }}
                  />
                </Left>
                <Right>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: 0,
                      marginRight: 50,
                      color: "#14466b"
                    }}>
                    {props.product}
                  </Text>

                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </>
  );
};

export default About1;
