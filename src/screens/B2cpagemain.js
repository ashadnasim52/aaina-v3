import React, {useEffect, useState} from 'react';

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

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ClientCards from './ClientCards';
import ClientCards1 from './ClientCards1';

const deepakimg = require('../assests/img/Deepak_Garments.jpg');
const chahanimg = require('../assests/img/Chauhan_Lifestyle.jpg');
const benzorimg = require('../assests/img/Benzor.jpg');
const Leatherimg = require('../assests/img/Leather_Home.jpg');
const Lookimg = require('../assests/img/look_me.jpg');
const Glitzimg = require('../assests/img/g_g.jpg');
import firestore from '@react-native-firebase/firestore';

const B2cpagemain = props => {
  const [sizing, setSizing] = useState(null);
  const getData = async () => {
    // (await firestore().collection('about').doc().get()).data()
    try {
      const about = await firestore().collection('app').doc('clients').get();
      console.log({about});
      console.log('about', about.data());
      // setAbout(about.data());
      setSizing(about.data());
    } catch (error) {
      console.log({error});
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const [searchQuery, setSearchQuery] = React.useState('');

  const nav = useNavigation();

  const onChangeSearch = text => {
    setSearchQuery(text);
    console.log(text);
  };

  return (
    <>
      <ScrollView style={{backgroundColor: '#14466b'}}>
        <View
          style={{
            backgroundColor: '#14466b',
            height: 100,
            justifyContent: 'center',
            paddingHorizontal: 20,
            marginTop: 0,
          }}>
          <View
            style={{
              height: 50,
              backgroundColor: '#fff',
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <Icon
              name="search"
              style={{paddingRight: 10, paddingLeft: 8, fontSize: 17}}
            />
            <TextInput
              placeholder="Search Any Client"
              onChangeText={text => onChangeSearch(text)}
            />
          </View>
        </View>

        <View style={{marginBottom: 60}}>
          <View></View>
          <View style={{inlineHeight: 40}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: 'black',
                marginBottom: 40,
                color: 'white',
                fontWeight: 'bold',
                marginTop: -10,
              }}>
              Our Clients
            </Text>
          </View>
          {console.log({sizing: sizing})}
          {sizing &&
            sizing?.clients?.map(client => (
              <ClientCards1
                imgsrc={client.image}
                client={client.name}
                link={client?.link}
                props={client}
              />
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default B2cpagemain;
