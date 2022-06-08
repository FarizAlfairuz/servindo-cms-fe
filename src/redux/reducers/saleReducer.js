import {
  FETCH_SALES_REQUEST,
  FETCH_SALES_SUCCESS,
  FETCH_SALES_FAILED,
} from '../types/saleTypes';

const initialState = {
  loading: false,
  sales: [],
  error: '',
};

const saleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SALES_SUCCESS:
      return {
        loading: false,
        sales: action.payload,
        error: '',
      };

    case FETCH_SALES_FAILED:
      return {
        ...state,
        sales: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default saleReducer;
