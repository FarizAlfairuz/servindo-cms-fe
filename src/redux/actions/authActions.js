import AuthAPI from '../../api/AuthAPI';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from '../types/authTypes';

const fetchAuthRequest = () => ({
  type: LOGIN_REQUEST,
});

const fetchAuthSuccess = (currentUser) => ({
  type: LOGIN_SUCCESS,
  payload: currentUser,
});

const fetchAuthFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

const logoutFailed = (error) => ({
  type: LOGOUT_FAILED,
  payload: error,
});

export const login = (data) => (dispatch) => {
  dispatch(fetchAuthRequest());
  AuthAPI.login(data)
    .then((res) => {
      const currentUser = res.data;
      dispatch(fetchAuthSuccess(currentUser));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchAuthFailed(errorMsg));
    });
};

export const logout = () => (dispatch) => {
  dispatch(logoutRequest());
  AuthAPI.logout()
    .then((res) => {
      const currentUser = res.data;

      dispatch(logoutSuccess(currentUser));
    })
    .catch((err) => {
      const errorMsg = err.message;

      dispatch(logoutFailed(errorMsg));
    });
};
