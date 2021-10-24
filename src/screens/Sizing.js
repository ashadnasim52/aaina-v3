import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';

export const Sizing = () => {
  const [sizing, setSizing] = useState(null);
  const getData = async () => {
    // (await firestore().collection('about').doc().get()).data()
    try {
      const about = await firestore().collection('app').doc('about').get();
      console.log({about});
      console.log('about', about.data()?.ourProducts?.Sizing);
      // setAbout(about.data());
      setSizing(about.data()?.ourProducts?.Sizing);
    } catch (error) {
      console.log({error});
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#14466b'}}>
        <View>
          <Image
            source={{
              uri: sizing?.image,
            }}
            style={{width: '100%', height: 400}}
          />
          <View
            style={{
              backgroundColor: 'white',
              margin: 25,
              borderRadius: 25,
              height: 120,
              marginTop: -60,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: '#14466b',
                fontWeight: 'bold',
                fontFamily: 'roboto',
                margin: 40,
                textAlign: 'center',
              }}>
              {sizing?.title}
            </Text>
          </View>

          <Text
            style={{
              margin: 10,
              flex: 1,
              fontFamily: 'lucida grande',
              color: '#fff',
              textAlign: 'auto',
              fontSize: 16,
            }}>
            {sizing?.description}
          </Text>

          <View style={{marginTop: 20, flex: 1, marginHorizontal: 10}}>
            {sizing?.points.split(',').map(point => (
              <View style={{flexDirection: 'row', marginVertical: 3}}>
                <MaterialCommunityIcons
                  name="check-all"
                  size={22}
                  style={{
                    color: 'lightgreen',
                    marginRight: 4,
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    flex: 1,
                    flexWrap: 'wrap',
                  }}>
                  {point}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sizing;
