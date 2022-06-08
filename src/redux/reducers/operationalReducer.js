import {
  FETCH_OPERATIONALS_REQUEST,
  FETCH_OPERATIONALS_SUCCESS,
  FETCH_OPERATIONALS_FAILED,
} from '../types/operationalTypes';

const initialState = {
  loading: false,
  operationals: [],
  error: '',
};

const operationalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OPERATIONALS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_OPERATIONALS_SUCCESS:
      return {
        loading: false,
        operationals: action.payload,
        error: '',
      };

    case FETCH_OPERATIONALS_FAILED:
      return {
        ...state,
        operationals: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default operationalReducer;
