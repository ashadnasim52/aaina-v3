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

export const Instore = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#14466b" }}>
        <View>
          <Image
            source={require('../assests/img/instore10.png')}
            style={{ width:"100%", height: 400, }}
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
              In Store
            </Text>

          </View>



          <Text
            style={{
              margin: 10,
              flex: 1,
              fontFamily: 'roboto',
              color: 'white',
            }}>
            AAIENA’s In-Store facilitates the trial procedure by substituting it with advanced contactless virtual try-on so that they can opt for suitable apparel.
          </Text>
          <Text style={{ color: "orange", marginLeft: 10, fontSize: 20 }}>1. Configure your Digital Store</Text>
          <Text style={{ color: "white", marginLeft: 10,fontFamily:"sans-serif-light" }}>Our self-formulated dashboard aims to set up your store. But before this configuration, you must ensure to plan your digitalized inventories.</Text>
          <Text style={{ color: "orange", marginLeft: 10, fontSize: 20,marginTop:10 }}>2. Installation & Training</Text>
          <Text style={{ color: "white", marginLeft: 10,fontFamily:"sans-serif-light"}}>With gadgets such as the iPad or laptop, AAIENA will integrate to the larger screen connected into your store.</Text>
          <Text style={{ color: "orange", marginLeft: 10, fontSize: 20,marginTop:10 }}>3. You are good to go</Text>
          <Text style={{ color: "white", marginLeft: 10, marginBottom: 20,fontFamily:"sans-serif-light" }}>Bravo! Your customers are all set to experience a rich contactless virtual try-on without any hindrances.</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Instore;
