import {
  FETCH_OTHER_INCOMES_REQUEST,
  FETCH_OTHER_INCOMES_SUCCESS,
  FETCH_OTHER_INCOMES_FAILED,
} from '../types/otherIncomeTypes';

const initialState = {
  loading: false,
  otherIncomes: [],
  error: '',
};

const otherIncomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OTHER_INCOMES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_OTHER_INCOMES_SUCCESS:
      return {
        loading: false,
        otherIncomes: action.payload,
        error: '',
      };

    case FETCH_OTHER_INCOMES_FAILED:
      return {
        ...state,
        otherIncomes: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default otherIncomeReducer;
