import {
  PAGINATION_REQUEST,
  PAGINATION_SUCCESS,
  PAGINATION_FAILED,
} from '../types/paginationTypes';

const initialState = {
  pagination: {
    hasNext: false,
    hasPrev: false,
    totalPages: 0,
    totalRows: 0,
  },
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGINATION_REQUEST:
      return {
        ...state,
      };

    case PAGINATION_SUCCESS:
      return {
        pagination: action.payload,
      };

    case PAGINATION_FAILED:
      return {
        pagination: [],
      };

    default:
      return state;
  }
};

export default paginationReducer;
