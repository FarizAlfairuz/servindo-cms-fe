import {
  FETCH_VENDORS_REQUEST,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAILED,
} from '../types/vendorTypes';

const initialState = {
  loading: false,
  vendors: [],
  error: '',
};

const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VENDORS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_VENDORS_SUCCESS:
      return {
        loading: false,
        vendors: action.payload,
        error: '',
      };

    case FETCH_VENDORS_FAILED:
      return {
        ...state,
        vendors: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default vendorReducer;
