import React, {useReducer, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import Onboarding from './screens/Onboarding';

import CreateProfile from './screens/CreateProfile';
import Home from './screens/Home';
import HomeB from './screens/HomeB';
import SignUpOrganization from './screens/SignUpOrganization';
import CustomHeader from './layouts/CustomHeader';
import BcPage from './screens/BcPage';
import Benzor from './screens/Benzor';

import B2cpagemain from './screens/B2cpagemain';
import About from './screens/About';
import Sizing from './screens/Sizing';
import Ettire from './screens/Ettire';
import Sneaky from './screens/Sneaky';

import Profile from './screens/Profile';

import Virtual from './screens/Virtual';
import EditPage from './screens/EditPage';

import auth from '@react-native-firebase/auth';
import PhoneSignIn from './screens/PhoneSignIn';
import Splash from './screens/Splash';
import authReducer from './reducer/authReducer';
import initialState from './state/authState';
import {SET_USER} from './actions/action.types';
import {AuthContext} from './context/context';
import database from '@react-native-firebase/database';

let itemsRef = database().ref('/adminNumber');

// AsyncStorage.removeItem('@first_time');
// auth()
//   .signOut()
//   .then(() => console.log('User signed out!'));
const Stack = createStackNavigator();

const Root = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [authState, dispatchAuth] = React.useReducer(authReducer, initialState);
  const [adminNumber, setAdminNumber] = useState(null);
  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log({user});
    setUser(user);
    dispatchAuth({
      type: SET_USER,
      payload: user,
    });
    setTimeout(() => {
      if (initializing) setInitializing(false);
    }, 1000);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {

    // itemsRef.on('value', data => {
    //   // console.log({data: data.val()});
    //   setAdminNumber(data.val());
    // });
  }, []);

  if (initializing)
    return (
      // <View
      //   style={{
      //     flexGrow: 1,
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //   }}>
      //   <ActivityIndicator size="large" color="red" />
      // </View>

      <Splash />
    );
  // if (!user) {
  //   return <PhoneSignIn />;
  // }
  // if (user?.phoneNumber === adminNumber) {
  //   return (
  //     <AuthContext.Provider value={{state: authState, dispatch: dispatchAuth}}>
  //       <Stack.Navigator
  //         screenOptions={{
  //           header: props => <CustomHeader {...props} />,
  //         }}
  //         // initialRouteName={isUserFirstTime ? 'Onboarding' : 'Home'}
  //       >
  //         <Stack.Screen
  //           name="Admin"
  //           component={Admin}
  //           options={{
  //             headerShown: false,
  //           }}
  //         />
  //       </Stack.Navigator>
  //     </AuthContext.Provider>
  //   );
  // }
  return (
    <AuthContext.Provider
      value={{
        state: authState,
        dispatch: dispatchAuth,
      }}>
      <Stack.Navigator
        screenOptions={{
          header: props => <CustomHeader {...props} />,
        }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen
              name="EditPage"
              component={EditPage}
              options={{
                headerShown: false,
              }}
            />

            {/* <Stack.Screen
          name="CreatePage"
          component={CreatePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{
            headerShown: false,
          }}
        /> */}
            <Stack.Screen
              name="B2cpagemain"
              component={B2cpagemain}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="SignUpOrganization"
              component={SignUpOrganization}
              options={{
                headerShown: false,
              }}
            />
            {/* <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            headerShown: false,
          }}
        /> */}

            {/* <Stack.Screen
          name="OPTVerification"
          component={OPTVerification}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dress"
          component={Dress}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectRole"
          component={SelectRole}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Choose"
          component={Choose}
          options={{
            headerShown: false,
          }}
        /> */}
            {/* <Stack.Screen
          name="SignIn"
          component={Signin}
          options={{
            headerShown: false,
          }}
        /> */}
            <Stack.Screen
              name="Sizing"
              component={Sizing}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Ettire"
              component={Ettire}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Sneaky"
              component={Sneaky}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="CreateProfile"
              component={CreateProfile}
              options={{
                headerShown: false,
              }}
            />

            {/* <Stack.Screen
          name="CreateProfile1"
          component={CreateProfile1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WeeklyReport"
          component={WeeklyReport}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CreateProfile2"
          component={CreateProfile2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Female"
          component={Female}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Female1"
          component={Female1}
          options={{
            headerShown: false,
          }}
        /> */}

            <Stack.Screen
              name="Virtual"
              component={Virtual}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="B2C"
              component={BcPage}
              options={{
                headerShown: false,
              }}
            />

            {/* <Stack.Screen
          name="Look"
          component={Look}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Glitz"
          component={Glitz}
          options={{
            headerShown: false,
          }}
        /> */}

            {/* <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chaudhary_Garments"
          component={Chaudhary_Garments}
          options={{
            headerShown: false,
          }}
        /> */}
            <Stack.Screen
              name="Benzor"
              component={Benzor}
              options={{
                headerShown: false,
              }}
            />
            {/* <Stack.Screen
          name="Leather"
          component={Leather}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Instore"
          component={Instore}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Inapp"
          component={Inapp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Inweb"
          component={Inweb}
          options={{
            headerShown: false,
          }}
        /> */}

            {/* <Stack.Screen name="HomeB" component={HomeB} /> */}

            {/* <Stack.Screen name="Notifications" component={Notification} /> */}

            {/* <Stack.Screen
          name="Demo"
          component={Demo}
          options={{
            swipeEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BuyPlans"
          component={BuyPlans}
          options={{
            headerShown: false,
          }}
        /> */}

            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
              }}
            />

            {/* <Stack.Screen name="MyPlans" component={MyPlans} /> */}

            {/* <Stack.Screen name="Setting" component={Setting} /> */}

            <Stack.Screen name="About" component={About} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="PhoneSignIn"
              component={PhoneSignIn}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

export default Root;
