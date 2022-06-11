import FinancialStatementAPI from '../../api/FinancialStatementAPI';
import {
  FETCH_TOTAL_REQUEST,
  FETCH_TOTAL_SUCCESS,
  FETCH_TOTAL_FAILED,
} from '../types/financialTypes';
import { getPagination } from './paginationAction';

const fetchTotalRequest = () => ({
  type: FETCH_TOTAL_REQUEST,
});

const fetchTotalSuccess = (total) => ({
  type: FETCH_TOTAL_SUCCESS,
  payload: total,
});

const fetchTotalFailed = (error) => ({
  type: FETCH_TOTAL_FAILED,
  payload: error,
});

export const getTotal = (year) => (dispatch) => {
  dispatch(fetchTotalRequest());
  FinancialStatementAPI.getFinancialTotal(year)
    .then((res) => {
      dispatch(fetchTotalSuccess(res.data.data));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchTotalFailed(errorMsg));
    });
};
