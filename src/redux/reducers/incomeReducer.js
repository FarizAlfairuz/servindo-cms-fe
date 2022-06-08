import {
  FETCH_INCOMES_REQUEST,
  FETCH_INCOMES_SUCCESS,
  FETCH_INCOMES_FAILED,
} from '../types/incomeTypes';

const initialState = {
  loading: false,
  incomes: [],
  error: '',
};

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INCOMES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_INCOMES_SUCCESS:
      return {
        loading: false,
        incomes: action.payload,
        error: '',
      };

    case FETCH_INCOMES_FAILED:
      return {
        ...state,
        incomes: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default incomeReducer;
