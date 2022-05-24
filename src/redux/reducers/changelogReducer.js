import {
  FETCH_CHANGELOG_REQUEST,
  FETCH_CHANGELOG_SUCCESS,
  FETCH_CHANGELOG_FAILED,
} from '../types/changelogTypes';

const initialState = {
  loading: false,
  changelog: [],
  error: '',
};

const changelogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHANGELOG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CHANGELOG_SUCCESS:
      return {
        loading: false,
        changelog: action.payload,
        error: '',
      };

    case FETCH_CHANGELOG_FAILED:
      return {
        ...state,
        changelog: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default changelogReducer;
