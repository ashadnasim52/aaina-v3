import {Text, Layout, Button} from '@ui-kitten/components';

import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';

import LOGO from '../assests/logo.png';

import StepOne from '../assests/onboarding/step1.png';
import StepTwo from '../assests/onboarding/step2.png';
import StepThree from '../assests/onboarding/step3.png';
import StepFour from '../assests/img/sizing1.gif';
import StepFive from '../assests/onboarding/step5.png';
import {PRIMARY} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const Splash = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <View style={[styles.logoContainer]}>
        <Animatable.View animation="fadeIn" duration={1500}>
          <Image
            source={LOGO}
            style={{
              height: 250,
              width: 300,
              flex: 1,
              resizeMode: 'contain',
            }}
          />
        </Animatable.View>
      </View>
    </Layout>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
