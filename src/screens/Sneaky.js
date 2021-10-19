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


export const Sneaky = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#14466b" }}>
        <View>
          <Image
            source={require('../assests/img/girl.jpg')}
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
              Sneaky
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
            Sizing gives a perfect insight into your measurement without relying much on conventional methods such as inch tapes.
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
            With the latest technology, such as Artificial Intelligence, Augmented Reality, and Computer Vision, Sizing requires no human interventions. Sizing also upgrades the quality of trial procedures by introducing a safe contactless approach.
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
            Thus, it proves to be an unbeatable match for all of your size-related issues by introducing
        </Text>



          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", }}>
              <MaterialCommunityIcons name="check-all" size={22} style={{ marginTop: 0, color: "lightgreen", marginLeft: 10, marginRight: 10 }} />
              <Text style={{ color: "white", fontSize: 16, }}>Tailored approach measurement technique.</Text>
            </View>
            <View style={{ flexDirection: "row", }}>
              <MaterialCommunityIcons name="check-all" size={22} style={{ marginTop: 0, color: "lightgreen", marginLeft: 10, marginRight: 10 }} />
              <Text style={{ color: "white", fontSize: 16 }}>360-degree trial analysis.</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <MaterialCommunityIcons name="check-all" size={22} style={{ marginTop: 0, color: "lightgreen", marginLeft: 10, marginRight: 10, }} />
              <Text style={{ color: "white", fontSize: 16 }}>24x7 precise outcome</Text>
            </View>
          </View>
          

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sneaky;
