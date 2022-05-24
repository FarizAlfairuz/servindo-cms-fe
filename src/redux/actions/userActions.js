import UserAPI from '../../api/UserAPI';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from '../types/userTypes';
import { getPagination } from './paginationAction';

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailed = (error) => ({
  type: FETCH_USERS_FAILED,
  payload: error,
});

export const getAllUsers = (query) => (dispatch) => {
  dispatch(fetchUsersRequest());
  UserAPI.getAllUsers(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchUsersSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchUsersFailed(errorMsg));
    });
};

export const getSingleUser = (id) => (dispatch) => {
  dispatch(fetchUsersRequest());
  UserAPI.getSingleUser(id)
    .then((res) => {
      const user = res.data.data;
      dispatch(fetchUsersSuccess([user]));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchUsersFailed(errorMsg));
    });
};
