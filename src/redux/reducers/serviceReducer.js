import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILED,
} from '../types/serviceTypes';

const initialState = {
  loading: false,
  services: [],
  error: '',
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SERVICES_SUCCESS:
      return {
        loading: false,
        services: action.payload,
        error: '',
      };

    case FETCH_SERVICES_FAILED:
      return {
        ...state,
        services: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default serviceReducer;
