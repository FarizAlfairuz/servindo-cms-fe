import UserAPI from '../../api/UserAPI';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from '../types/userTypes';
import { PAGINATION_SUCCESS } from '../types/paginationTypes';

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

const getPagination = (cursor) => ({
  type: PAGINATION_SUCCESS,
  payload: cursor,
});

export const getAllUsers = (query) => (dispatch) => {
  dispatch(fetchUsersRequest);
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
