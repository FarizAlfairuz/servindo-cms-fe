import {
  FETCH_FINANCIAL_REQUEST,
  FETCH_FINANCIAL_SUCCESS,
  FETCH_FINANCIAL_FAILED,
} from '../types/financialTypes';

const initialState = {
  loading: false,
  financial: [],
  error: '',
};

const financialReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FINANCIAL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_FINANCIAL_SUCCESS:
      return {
        loading: false,
        financial: action.payload,
        error: '',
      };

    case FETCH_FINANCIAL_FAILED:
      return {
        ...state,
        financial: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default financialReducer;
