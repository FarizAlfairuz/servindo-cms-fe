import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILED,
} from '../types/authTypes';

const initialState = {
  loading: false,
  currentUser: [],
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH_REQUEST:
      return {
        ...state,
        currentUser: {
          username: undefined,
          password: undefined,
        },
      };

    case FETCH_AUTH_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload,
        error: '',
      };

    case FETCH_AUTH_FAILED:
      return {
        ...state,
        currentUser: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
