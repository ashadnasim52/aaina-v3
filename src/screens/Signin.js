import React, {useState, useContext, useRef, useEffect} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Input,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import {Layout} from '@ui-kitten/components';
import RBSheet from 'react-native-raw-bottom-sheet';
import Logo from '../assests/image1.png';
import {ACCENT, PRIMARY} from '../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../context/context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from 'react-native-reanimated';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);

  const {state, dispatch} = useContext(AuthContext);

  console.log(state.isB2B);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  const nav = useNavigation();
  const refRBSheet = useRef();

  useEffect(() => {
    // Initial configuration
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Repleace with your webClientId
      // Generated from Firebase console
      webClientId: 'REPLACE_YOUR_WEB_CLIENT_ID_HERE',
    });
    // Check if user is already signed in
    _isSignedIn();
  }, []);

  const _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      // Set User Info if user is already signed in
      _getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
    setGettingLoginStatus(false);
  };

  const _getCurrentUserInfo = async () => {
    try {
      let info = await GoogleSignin.signInSilently();
      console.log('User Info --> ', info);
      setUserInfo(info);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Unable to get user's info");
        console.log("Unable to get user's info");
      }
    }
  };
  const _signIn = async () => {
    // It will prompt google Signin Widget
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      setUserInfo(userInfo);
    } catch (error) {
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
      }
    }
  };

  const _signOut = async () => {
    setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Removing user Info
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
    setGettingLoginStatus(false);
  };

  if (gettingLoginStatus) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <>
        {!state.isB2B ? (
          <ScrollView>
            <View>
              <View style={{marginTop: 10}}>
                <Image
                  source={require('../assests/img/logo1.png')}
                  style={{
                    width: 140,
                    height: 60,
                    alignSelf: 'center',
                  }}
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{fontSize: 25, marginLeft: 20}}>Welcome,</Text>
                <Text style={{fontSize: 20, marginLeft: 20, color: 'grey'}}>
                  Sign in to continue!
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{marginLeft: 20, color: 'grey'}}>Email</Text>
                <TextInput
                  placeholder="Enter your email id"
                  value={email}
                  onChangeText={nextValue => setEmail(nextValue)}
                  style={{
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'darkgrey',
                    paddingLeft: 20,
                  }}
                />
                <Text style={{marginLeft: 20, marginTop: 20, color: 'grey'}}>
                  Password
                </Text>
                <TextInput
                  placeholder="Enter password"
                  secureTextEntry={secureTextEntry}
                  value={password}
                  caption="Should contain at least 8 symbols"
                  onChangeText={nextValue => setPassword(nextValue)}
                  style={{
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'darkgrey',
                    paddingLeft: 20,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                  marginVertical: 10,
                  marginEnd: 20,
                }}>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                  <Text style={{color: '#24466b'}}>Forget Password ?</Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 30}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text
                    style={{
                      backgroundColor: '#14466b',
                      color: 'white',
                      textAlign: 'center',
                      padding: 15,
                      marginHorizontal: 20,
                      borderRadius: 10,
                      fontSize: 16,
                    }}>
                    LOGIN
                  </Text>
                </TouchableOpacity>
              </View>
              <>
                <Text
                  style={{alignSelf: 'center', marginTop: 10, color: 'grey'}}>
                  Or
                </Text>

                <View style={{alignSelf: 'center', marginTop: 20}}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        backgroundColor: '#ebeef4',
                        padding: 13,
                        borderRadius: 10,
                        width: 320,
                        textAlign: 'center',
                        color: '#14466b',
                        borderWidth: 1,
                        borderColor: 'white',
                      }}>
                      {' '}
                      <AntDesign
                        name="facebook-square"
                        style={{fontSize: 20}}
                      />{' '}
                      Continue with Facebook
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={_signIn}>
                  <View
                    style={{
                      alignSelf: 'center',
                      flexDirection: 'row',
                      marginTop: 20,
                      backgroundColor: '#ebeef4',
                      borderWidth: 1,
                      width: 320,
                      borderRadius: 10,
                      paddingLeft: 60,
                      padding: 11,
                      borderColor: 'white',
                    }}>
                    <Image
                      source={require('../assests/img/google1.png')}
                      style={{width: 22, height: 22, marginTop: 5}}
                    />
                    <Text style={{marginTop: 5, color: '#14466b'}}>
                      {' '}
                      Continue with Google
                    </Text>
                  </View>
                </TouchableOpacity>
              </>

              <View
                style={{
                  marginTop: 30,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginBottom: 10,
                }}>
                <Text style={{}}>Don't have Account ? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  <Text style={{color: '#14466b', fontWeight: 'bold'}}>
                    SignUp
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                draggableIcon: {
                  backgroundColor: 'blue',
                },
                container: {
                  backgroundColor: '#CAD5E2',
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                },
              }}>
              <Layout
                style={{
                  paddingHorizontal: 30,
                  backgroundColor: 'white',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'green',
                  }}>
                  Enter Email
                </Text>
                <Text category="p1">
                  An email with the password reset link will sent to your
                  registered email address
                </Text>
                <TextInput
                  placeholder=" Enter your Registered Email"
                  value={email}
                  style={[
                    {
                      marginVertical: 20,
                      borderWidth: 1,
                      borderColor: 'grey',
                      borderRadius: 5,
                    },
                  ]}
                  accessoryLeft={props => (
                    <Icon name="email-outline" {...props} />
                  )}
                  onChangeText={nextValue => setEmail(nextValue)}
                />
                <Button
                  style={{}}
                  onPress={() => {
                    nav.navigate('Home');
                  }}
                  title="Login"
                />
              </Layout>
            </RBSheet>
          </ScrollView>
        ) : (
          <ScrollView>
            <View>
              <View style={{marginTop: 10}}>
                <Image
                  source={require('../assests/img/logo1.png')}
                  style={{
                    width: 140,
                    height: 60,
                    alignSelf: 'center',
                  }}
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{fontSize: 25, marginLeft: 20}}>Welcome,</Text>
                <Text style={{fontSize: 20, marginLeft: 20, color: 'grey'}}>
                  Sign in to continue!
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{marginLeft: 20, color: 'grey'}}>Email</Text>
                <TextInput
                  placeholder="Enter your email id"
                  value={email}
                  onChangeText={nextValue => setEmail(nextValue)}
                  style={{
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'darkgrey',
                    paddingLeft: 20,
                  }}
                />
                <Text style={{marginLeft: 20, marginTop: 20, color: 'grey'}}>
                  Password
                </Text>
                <TextInput
                  placeholder="Enter password"
                  secureTextEntry={secureTextEntry}
                  value={password}
                  caption="Should contain at least 8 symbols"
                  onChangeText={nextValue => setPassword(nextValue)}
                  style={{
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'darkgrey',
                    paddingLeft: 20,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                  marginVertical: 10,
                  marginEnd: 20,
                }}>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                  <Text style={{color: '#24466b'}}>Forget Password ?</Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 30}}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeB')}>
                  <Text
                    style={{
                      backgroundColor: '#14466b',
                      color: 'white',
                      textAlign: 'center',
                      padding: 15,
                      marginHorizontal: 20,
                      borderRadius: 10,
                      fontSize: 16,
                    }}>
                    LOGIN
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginTop: 30,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginBottom: 10,
                }}>
                <Text style={{}}>Don't have Account ? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  <Text style={{color: '#14466b', fontWeight: 'bold'}}>
                    SignUp
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                draggableIcon: {
                  backgroundColor: 'blue',
                },
                container: {
                  backgroundColor: '#CAD5E2',
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                },
              }}>
              <Layout
                style={{
                  paddingHorizontal: 30,
                  backgroundColor: 'white',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'green',
                  }}>
                  Enter Email
                </Text>
                <Text category="p1">
                  An email with the password reset link will sent to your
                  registered email address
                </Text>
                <TextInput
                  placeholder=" Enter your Registered Email"
                  value={email}
                  style={[
                    {
                      marginVertical: 20,
                      borderWidth: 1,
                      borderColor: 'grey',
                      borderRadius: 5,
                    },
                  ]}
                  accessoryLeft={props => (
                    <Icon name="email-outline" {...props} />
                  )}
                  onChangeText={nextValue => setEmail(nextValue)}
                />
                <Button
                  style={{}}
                  onPress={() => {
                    nav.navigate('Home');
                  }}
                  title="Login"
                />
              </Layout>
            </RBSheet>
          </ScrollView>
        )}
      </>
    );
  }
};
export default Signin;
