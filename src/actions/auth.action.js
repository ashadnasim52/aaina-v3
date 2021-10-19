import Axios from 'axios';
import Snackbar from 'react-native-snackbar';
import {PRIMARY, ACCENT} from '../theme/colors';
import AsyncStorage from '@react-native-community/async-storage';
// AUTHENTICATION CHECK IMPORTS
import jwtDecode from 'jwt-decode';
import {
  AUTH_CHECKING,
  AUTH_CHECKING_DONE,
  AUTH_FAILED,
  CHANGE_CLIENT_TYPE,
  DOING_SIGNIN,
  NO_PROFILE,
  SET_PROFILE,
  SET_USER,
  SIGNIN_DONE,
} from './action.types';
import {useContext} from 'react';
import {AuthContext} from '../context/context';

export const signUp = async (_obj) => {
  try {
    const {data} = await Axios.post('/api/v1/auth/signup', _obj);
    console.log(data);
    if (data.error)
      return Snackbar.show({
        text: data.message,
        textColor: 'white',
        backgroundColor: 'red',
      });

    Snackbar.show({
      text: data.message,
      textColor: 'white',
      backgroundColor: ACCENT,
    });
  } catch (error) {
    console.error(error);
    Snackbar.show({
      text: 'Something went wrong',
      textColor: 'white',
      backgroundColor: 'red',
    });
  }
};

export const signIn = async (_obj, dispatch) => {
  try {
    dispatch({
      type: DOING_SIGNIN,
    });
    const {data} = await Axios.post('/api/v1/auth/signin', _obj);
    console.log(data);
    if (data.error)
      return Snackbar.show({
        text: data.message,
        textColor: 'white',
        backgroundColor: 'red',
      });

    Axios.defaults.headers.common['authorization'] = await data.token;
    await AsyncStorage.setItem('@aaina_login', data.token);
    const decoded = await jwtDecode(data.token);
    // console.log(decoded);
    // check token is expired or not
    const now = Date.now().valueOf() / 1000;

    if (
      (typeof decoded.exp !== 'undefined' && decoded.exp < now) ||
      (typeof decoded.nbf !== 'undefined' && decoded.nbf > now)
    ) {
      return Snackbar.show({
        text: 'Please signin again , token expired',
        textColor: 'white',
        backgroundColor: 'red',
      });
    }

    // DISPATCH SETUSER DECODED
    dispatch({
      type: SET_USER,
      payload: decoded,
    });
    dispatch({
      type: SIGNIN_DONE,
    });
    Snackbar.show({
      text: data.message,
      textColor: 'white',
      backgroundColor: ACCENT,
    });
    // fetch user profile if exists
    const {data: profileData} = await Axios.get('/api/v1/profile/self');
    console.log(profileData);
    if (profileData.error) {
      // no profile found
      dispatch({
        type: NO_PROFILE,
        payload: profileData.payload,
      });
    } else {
      // profile found
      dispatch({
        type: SET_PROFILE,
        payload: profileData.payload,
      });
    }
  } catch (error) {
    console.error(error);
    Snackbar.show({
      text: 'Something went wrong',
      textColor: 'white',
      backgroundColor: 'red',
    });
  }
};

export const checkAuth = async (dispatch) => {
  const localItem = await AsyncStorage.getItem('@aaina_login');
  if (!localItem)
    return dispatch({
      type: AUTH_FAILED,
    });
  console.log({localItem});
  const decoded = await jwtDecode(localItem);

  console.log({decoded});
  // check token is expired or not
  const now = Date.now().valueOf() / 1000;

  if (
    (typeof decoded.exp !== 'undefined' && decoded.exp < now) ||
    (typeof decoded.nbf !== 'undefined' && decoded.nbf > now)
  ) {
    Snackbar.show({
      text: 'Please signin again , token expired',
      textColor: 'white',
      backgroundColor: 'red',
    });

    return dispatch({
      type: AUTH_FAILED,
    });
  } else {
    Axios.defaults.headers.common['authorization'] = localItem;

    // DISPATCH SETUSER DECODED
    dispatch({
      type: SET_USER,
      payload: decoded,
    });

    // fetch user profile if exists
    const {data} = await Axios.get('/api/v1/profile/self');
    console.log(data);
    if (data.error) {
      // no profile found
      dispatch({
        type: NO_PROFILE,
        payload: data.payload,
      });
    } else {
      // profile found
      dispatch({
        type: SET_PROFILE,
        payload: data.payload,
      });
    }
  }
};

export const setClientType = async (dispatch) => {
  // console.log({payload});
  dispatch({
    type: CHANGE_CLIENT_TYPE,
    payload: false,
  });
};
