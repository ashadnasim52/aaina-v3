import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';

import Logo from '../assests/image1.png';
import {ACCENT, PRIMARY} from '../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const OPTVerification = () => {
  const [email, setEmail] = useState('');

  const nav = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={ACCENT} />
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Layout style={styles.container}>
          <Layout style={styles.topContainer}>
            <Text style={styles.text} category="h3">
              Forget Pasword?
            </Text>
            <Text
              appearance="hint"
              style={{
                textAlign: 'center',
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              id, molestiae maiores quis aperiam voluptates.
            </Text>
          </Layout>
          <Layout style={styles.imageContainer}>
            <Image source={Logo} style={styles.image} />
          </Layout>
          <Layout style={styles.mainContainer}>
            <Input
              placeholder="please enter your OTP"
              value={email}
              style={styles.input}
              accessoryLeft={(props) => (
                <Icon name="email-outline" {...props} />
              )}
              onChangeText={(nextValue) => setEmail(nextValue)}
            />

            <Button style={styles.button}>Verify</Button>
            <Text appearance="hint" status="primary">
              OR
            </Text>
            <Layout
              style={{
                flexDirection: 'row',
              }}>
              <Button
                style={{
                  marginRight: 15,
                  borderRadius: 25,
                }}
                status="danger"
                accessoryLeft={(props) => <Icon {...props} name="google" />}
              />
              <Button
                style={{
                  marginLeft: 15,
                  borderRadius: 25,
                }}
                status="primary"
                accessoryLeft={(props) => <Icon {...props} name="facebook" />}
              />
            </Layout>
          </Layout>
        </Layout>
      </KeyboardAwareScrollView>
    </>
  );
};

export default OPTVerification;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  topContainer: {
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
  },
  button: {
    width: '100%',
    borderRadius: 25,
    marginVertical: 5,
  },
  icon: {
    width: 32,
    height: 32,
  },
  input: {
    marginTop: 8,
  },
});
