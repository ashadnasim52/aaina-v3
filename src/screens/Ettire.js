import React from 'react';
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


export const Ettire = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#14466b" }}>
        <View>
          <Image
            source={require('../assests/img/Ettire10.jpg')}
            style={{ width:"100%", height: 400 }}
          />
          <View
            style={{
              backgroundColor: "white",
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
                textAlign: "center"
              }}>
              Ettire
            </Text>
          </View>


          <Text
            style={{
              margin: 10,
              flex: 1,
              fontFamily: 'lucida grande',
              color: '#fff',
              textAlign: "auto",
              fontSize: 16

            }}>
            Generally, conventional trial procedure consumes customer's precious energy and time. One of the prime causes comes out to be the trial room. Customers favor trying out multiple apparels in the trial room. However, compromising with the current trial room scenario wouldn't prove to be a promising sign. When it comes to a well-designed 3D virtual trial room, ETTIRE is no less than a masterpiece.
         </Text>
          <Text
            style={{
              margin: 10,
              fontFamily: 'lucida grande',
              color: '#fff',
              textAlign: "auto",
              fontSize: 16,
              marginTop: 0

            }}>
            From customers accessing the trial room to the outfit selection, ETTIRE propagates customer's desired outcomes.ETTIRE consists of a real-time mechanism that expedites the trial prospects. Thus, if substituted with a conventional trial room, ETTIRE eradicates the flaws arising during the trial.
         </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ettire;
