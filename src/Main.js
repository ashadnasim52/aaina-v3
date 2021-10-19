import * as React from 'react';
import {StatusBar, Settings, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from './context/context';
import authInitialState from './state/authState';
import authReducer from './reducer/authReducer';
import CustomDrawer from './layouts/CustomDrawer';
import Root from './Root';
import axios from 'axios';
import {API} from './utils/Base';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {PRIMARY} from './theme/colors';
const Drawer = createDrawerNavigator();

export default function Main() {
  const [authState, dispatchAuth] = React.useReducer(
    authReducer,
    authInitialState,
  );

  const {isAuthenticated, authChecking, skipAuth, user, profile, role} =
    authState;

  React.useEffect(() => {
    axios.defaults.baseURL = API;
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY} />
      <AuthContext.Provider value={{state: authState, dispatch: dispatchAuth}}>
        <NavigationContainer ref={navigationRef}>
          <Drawer.Navigator
            initialRouteName="Root"
            drawerType="front"
            drawerStyle={
              {
                // backgroundColor: PRIMARY,
                // width: '100%',
              }
            }
            drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Root" component={Root} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}
