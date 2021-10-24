import {Text, Layout, Button} from '@ui-kitten/components';

import React, {useContext, useState} from 'react';
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
import {PhoneSignIn} from './PhoneSignIn';
import {AuthContext} from '../context/context';

const slides = [
  {
    title: 'Specify body dimensions',
    text: 'Input accurate weight & height for proper analysis.',
    image: StepOne,
    id: '1',
    backgroundColor: '#F7941E',
  },
  {
    title: 'Head-to-toe picture',
    text: 'Upload front & side view pictures covering the entire body frame.',
    image: StepTwo,
    id: '2',
    backgroundColor: '#C64EB1',
  },
  {
    title: 'Automatic virtual avatar',
    text: 'Bravo! Your virtual figure will be on display.',
    image: StepThree,
    id: '3',
    backgroundColor: '#00AD94',
  },
  {
    title: 'Proper Size Recommendations',
    text: 'Now know your tailored shoulder, chest, waist & hips size.',
    image: StepFour,
    id: '4',
    backgroundColor: '#12BFC2',
  },
  {
    title: 'You are good to go!',
    text: 'Get ready to witness a completely different trial outlook.',
    image: StepFive,
    id: '5',
    backgroundColor: '#14466b',
  },
];
const Onboarding = ({setisFirstTime}) => {
  console.log({setisFirstTime});
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDisplayCard, setIsDisplayCard] = useState(false);
  const showCards = () => {
    // setDisplayCard('flex');
    setIsDisplayCard(true);
  };
  const nav = useNavigation();

  return (
    <>
      {/* <StatusBar hidden /> */}
      <Layout style={styles.container}>
        {/* <Button transparent light>
                <Text>Skip</Text>
              </Button> */}

        <View style={[styles.logoContainer]}>
          <Animatable.View
            animation="slideInUp"
            onAnimationEnd={showCards}
            duration={2500}>
            <Image
              source={LOGO}
              style={{
                height: 125,
                width: 125,
                flex: 1,
                resizeMode: 'contain',
              }}
            />
          </Animatable.View>
        </View>
        {isDisplayCard && (
          <>
            <Animatable.View
              animation="fadeIn"
              style={styles.carouselContainer}>
              <View>
                <Carousel
                  scrollEnabled={true}
                  data={slides}
                  layout={'tinder'}
                  layoutCardOffset={9}
                  containerCustomStyle={{overflow: 'visible'}}
                  contentContainerCustomStyle={{overflow: 'visible'}}
                  renderItem={({item, index}) => {
                    return (
                      <View
                        style={[
                          styles.carouselCard,
                          {
                            backgroundColor: item.backgroundColor,
                          },
                        ]}>
                        <Image
                          style={styles.carouselImage}
                          source={item.image}
                        />
                        <Text style={styles.title} category="h3">
                          {item.title}
                        </Text>
                        <Text style={styles.text} category="p1">
                          {item.text}
                        </Text>
                      </View>
                    );
                  }}
                  sliderWidth={Dimensions.get('window').width}
                  itemWidth={Dimensions.get('window').width - 40}
                  loop={false}
                  onSnapToItem={index => setActiveSlide(index)}
                  inactiveSlideOpacity={1}
                />
              </View>
            </Animatable.View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {activeSlide == slides.length - 1 ? (
                <Button
                  onPress={() => {
                    try {
                      setisFirstTime(true);
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                  style={{
                    marginVertical: 20,
                    borderRadius: 25,
                    width: '90%',
                    backgroundColor: '#14466b',
                    borderColor: '#14466b',
                  }}>
                  Get Started Now
                </Button>
              ) : (
                <Pagination
                  dotsLength={slides.length}
                  activeDotIndex={activeSlide}
                  containerStyle={{
                    backgroundColor: 'transparent',
                    width: '100%',
                  }}
                  dotStyle={{
                    width: '100%',
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: '#14466b',
                  }}
                  inactiveDotStyle={
                    {
                      // Define styles for inactive dots here
                    }
                  }
                  inactiveDotOpacity={0.5}
                  inactiveDotScale={0.6}
                />
              )}
            </View>
          </>
        )}
      </Layout>
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -30,
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 0.2,

    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    flex: 0.8,
  },
  carouselCard: {
    height: 450,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 25,
  },
  carouselImage: {
    height: 290,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});
