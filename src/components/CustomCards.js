import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View,TextInput} from 'react-native';
import {Card, Icon, Text} from '@ui-kitten/components';
import {PRIMARY} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';

const CustomCards = (props) => {
  const nav = useNavigation();
  return (
    <>
    <TouchableOpacity  onPress={() => nav.navigate('DetailScreen')}>
   
      <View style={styles.cards}>
        <View style={styles.cardRight}>
          <Image
            style={styles.image}
            source={props.imgsrc}
          />
        </View>
        <View style={[styles.cardLeft]}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <Text
                category="h6"
                style={{
                  color:"#3d3d3d",
                  fontWeight:"bold",
                  fontFamily: 'roboto-Bold',
                  marginLeft:15
                }}>
                {props.plan}
              </Text>
              <Text
                category="label"
                style={{
                  fontFamily: 'roboto-Light',
                  color:"#a9a9a9"
                }}>
                Duration 5 days
              </Text>
            </View>
            <View
              style={{
                // justifyContent: 'flex-end',
                justifyContent: 'center',
              }}>
              <Icon style={styles.icon} fill="#8F9BB3" name="gift-outline" />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text
              appearance="hint"
              category="label"
              style={{
                fontFamily: 'roboto-Regular',
              }}>
              No of trials left:- 5
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>

    </>
  );
};

export default CustomCards;

const styles = StyleSheet.create({
  cards: {
    marginTop: 10,
    marginBottom: 7,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
     backgroundColor: '#14466b',
     marginBottom:20,
  },
  image: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  icon: {
    width: 22,
    height: 22,
  },
  cardLeft: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10,
    backgroundColor: '#ffffff',
    flex: 1,
    // height: '80%',
    marginVertical: 20,
  },
  cardRight: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 1,
    borderRadius: 15,
    // padding: 10,
    backgroundColor: '#E7E7E7',
    flex: 1,
    // height: '80%',
    // marginVertical: 20,
  },
});
