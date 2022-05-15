import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from '../types/authTypes';

const initialState = {
  loading: false,
  currentUser: [],
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        currentUser: {
          username: undefined,
          password: undefined,
        },
      };

    case LOGIN_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload,
        error: '',
      };

    case LOGIN_FAILED:
      return {
        ...state,
        currentUser: [],
        error: action.payload,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload,
        error: '',
      };

    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
