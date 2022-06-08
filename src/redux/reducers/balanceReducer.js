import {
  FETCH_BALANCE_REQUEST,
  FETCH_BALANCE_SUCCESS,
  FETCH_BALANCE_FAILED,
} from '../types/balanceTypes';

const initialState = {
  loading: false,
  balance: [],
  error: '',
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BALANCE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BALANCE_SUCCESS:
      return {
        loading: false,
        balance: action.payload,
        error: '',
      };

    case FETCH_BALANCE_FAILED:
      return {
        ...state,
        balance: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default balanceReducer;
