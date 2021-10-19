import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';

export const Inapp = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#14466b",height:800}}>
        <View>
          <Image
            source={require('../assests/img/inapp10.png')}
            style={{ width:"100%", height: 330,marginLeft:-5}}
          />
          <View
            style={{
              backgroundColor: '#fff',
              margin: 25,
              borderRadius: 25,
              height: 120,
              marginTop: -60,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                fontWeight: 'bold',
                fontFamily: 'georgia',
                margin: 40,
                textAlign: "center"
              }}>
              In App
            </Text>

          </View>



          <Text
            style={{
              margin: 10,
              flex: 1,
              fontFamily: 'roboto',
              color: 'white',
            }}>
            AAIENA app is one-touch virtual trial alternative for seamless shopping experiences. With panoramic view virtual trial technology, customers can easily trace their apparel with 360 degrees rotation of their virtual avatar. You can readily switch these awesome features in your app in case you wish to upgrade it in better way.
            </Text>
            <Text
            style={{
              margin: 10,
              flex: 1,
              fontFamily: 'roboto',
              color: 'white',
              marginBottom:20
            }}
            >Now, you can also share your digital catalogues and product recommendations with your customers in case they are unable to select their preferences.</Text>
       
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Inapp;
