import {
  FETCH_PURCHASES_REQUEST,
  FETCH_PURCHASES_SUCCESS,
  FETCH_PURCHASES_FAILED,
} from '../types/purchaseTypes';

const initialState = {
  loading: false,
  purchases: [],
  error: '',
};

const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PURCHASES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PURCHASES_SUCCESS:
      return {
        loading: false,
        purchases: action.payload,
        error: '',
      };

    case FETCH_PURCHASES_FAILED:
      return {
        ...state,
        purchases: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default purchaseReducer;
