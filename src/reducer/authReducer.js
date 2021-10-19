import {
  AUTH_CHECKING_DONE,
  AUTH_FAILED,
  AUTH_SUCCESS,
  CHANGE_CLIENT_TYPE,
  DOING_SIGNIN,
  NO_PROFILE,
  REMOVE_USER,
  SET_PROFILE,
  SET_USER,
  SIGNIN_DONE,
  SKIP_LOGIN,
} from '../actions/action.types';

export default (state, action) => {
  switch (action.type) {
    case AUTH_CHECKING_DONE:
      return {
        ...state,
        isAuthenticated: false,
        authChecking: false,
        skipAuth: false,
        user: null,
        profile: null,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        authChecking: false,
        skipAuth: false,
        user: null,
        profile: null,
      };
    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        authChecking: false,
        skipAuth: false,
        user: action.payload,
      };
    case SKIP_LOGIN:
      return {
        ...state,
        isAuthenticated: false,
        authChecking: false,
        skipAuth: true,
      };

    case REMOVE_USER:
      return {
        ...state,
        isAuthenticated: false,
        authChecking: false,
        user: null,
        profile: null,
        isProfile: false,
      };
    case DOING_SIGNIN:
      return {
        ...state,
        isAuthenticating: true,
      };
    case SIGNIN_DONE:
      return {
        ...state,
        isAuthenticating: false,
      };
    case SET_PROFILE:
      return {
        ...state,
        isProfile: true,
        profile: action.payload,
      };
    case NO_PROFILE:
      return {
        ...state,
        isProfile: false,
      };
    case CHANGE_CLIENT_TYPE:
      return {
        ...state,
        isB2B: action.payload,
      };
    default:
      return state;
  }
};
