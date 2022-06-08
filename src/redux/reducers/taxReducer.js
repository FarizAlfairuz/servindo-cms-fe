import {
  FETCH_TAXES_REQUEST,
  FETCH_TAXES_SUCCESS,
  FETCH_TAXES_FAILED,
} from '../types/taxTypes';

const initialState = {
  loading: false,
  taxes: [],
  error: '',
};

const taxReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAXES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TAXES_SUCCESS:
      return {
        loading: false,
        taxes: action.payload,
        error: '',
      };

    case FETCH_TAXES_FAILED:
      return {
        ...state,
        taxes: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default taxReducer;
