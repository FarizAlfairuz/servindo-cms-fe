import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILED,
} from '../types/customerTypes';

const initialState = {
  loading: false,
  customers: [],
  error: '',
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        customers: action.payload,
        error: '',
      };

    case FETCH_CUSTOMERS_FAILED:
      return {
        ...state,
        customers: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default customerReducer;
