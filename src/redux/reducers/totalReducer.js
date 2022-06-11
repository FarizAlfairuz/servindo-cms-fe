import {
  FETCH_TOTAL_REQUEST,
  FETCH_TOTAL_SUCCESS,
  FETCH_TOTAL_FAILED,
} from '../types/financialTypes';

const initialState = {
  loading: false,
  total: [],
  error: '',
};

const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOTAL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TOTAL_SUCCESS:
      return {
        loading: false,
        total: action.payload,
        error: '',
      };

    case FETCH_TOTAL_FAILED:
      return {
        ...state,
        total: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default totalReducer;
