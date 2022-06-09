import LeaseAPI from '../../api/LeaseAPI';
import {
  FETCH_LEASES_REQUEST,
  FETCH_LEASES_SUCCESS,
  FETCH_LEASES_FAILED,
} from '../types/leaseTypes';
import { getPagination } from './paginationAction';

const fetchLeasesRequest = () => ({
  type: FETCH_LEASES_REQUEST,
});

const fetchLeasesSuccess = (leases) => ({
  type: FETCH_LEASES_SUCCESS,
  payload: leases,
});

const fetchLeasesFailed = (error) => ({
  type: FETCH_LEASES_FAILED,
  payload: error,
});

export const getAllLeases = (query) => (dispatch) => {
  dispatch(fetchLeasesRequest());
  LeaseAPI.getAllLeases(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchLeasesSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchLeasesFailed(errorMsg));
    });
};
