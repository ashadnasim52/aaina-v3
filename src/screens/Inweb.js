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

export const Inweb = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#14466b",height:1200 }}>
        <View>
          <Image
            source={require('../assests/img/inweb10.png')}
            style={{ width:"100%", height: 350,}}
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
              In Web
            </Text>

          </View>



          <Text
            style={{
              margin: 10,
              flex: 1,
              fontFamily: 'roboto',
              color: 'white',
            }}>
         
AAEINA becomes a handy asset as a website platform where customers virtually try-on countless apparel without rooting to unnecessary mobile apps. With virtual trial room technology, you can fabricate your virtual avatar with the snap of your fingers. AAIENA provides the customer with the necessary license to pick their favorite get-ups as per their preferences.
         </Text>
            <Text
            style={{
              margin: 10,
              flex: 1,
              fontFamily: 'roboto',
              color: 'white',
              marginBottom:20
            }}
            >
  AAIENA web platform is an ideal alternative that would curb the frequent human interactions and return rates occurring due to sizing issues. Through customer insight, you could devise several business ideas through AAIENA. Thus, customers would not be in any spot of bother before purchasing the apparel.
   </Text>
       
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Inweb;
