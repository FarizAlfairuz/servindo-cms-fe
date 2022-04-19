import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILED,
} from '../types/authTypes';

export const fetchAuthRequest = () => ({
  type: FETCH_AUTH_REQUEST,
});

export const fetchAuthSuccess = (currentUser) => ({
  type: FETCH_AUTH_SUCCESS,
  payload: currentUser,
});

const fetchAuthFailed = (error) => ({
  type: FETCH_AUTH_FAILED,
  payload: error,
});

const fetchAuth = () => (dispatch) => {
  dispatch(fetchAuthRequest);
};
