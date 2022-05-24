import ChangelogAPI from '../../api/ChangelogAPI';
import {
  FETCH_CHANGELOG_REQUEST,
  FETCH_CHANGELOG_SUCCESS,
  FETCH_CHANGELOG_FAILED,
} from '../types/changelogTypes';
import { getPagination } from './paginationAction';

const fetchChangelogRequest = () => ({
  type: FETCH_CHANGELOG_REQUEST,
});

const fetchChangelogSuccess = (changelog) => ({
  type: FETCH_CHANGELOG_SUCCESS,
  payload: changelog,
});

const fetchChangelogFailed = (error) => ({
  type: FETCH_CHANGELOG_FAILED,
  payload: error,
});

export const getChangelog = (query) => (dispatch) => {
  dispatch(fetchChangelogRequest());
  ChangelogAPI.getChangelog(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchChangelogSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchChangelogFailed(errorMsg));
    });
};
