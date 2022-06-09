import {
  FETCH_LEASES_REQUEST,
  FETCH_LEASES_SUCCESS,
  FETCH_LEASES_FAILED,
} from '../types/leaseTypes';

const initialState = {
  loading: false,
  leases: [],
  error: '',
};

const leaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEASES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LEASES_SUCCESS:
      return {
        loading: false,
        leases: action.payload,
        error: '',
      };

    case FETCH_LEASES_FAILED:
      return {
        ...state,
        leases: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default leaseReducer;
