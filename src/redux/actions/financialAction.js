import FinancialStatementAPI from '../../api/FinancialStatementAPI';
import {
  FETCH_FINANCIAL_REQUEST,
  FETCH_FINANCIAL_SUCCESS,
  FETCH_FINANCIAL_FAILED,
} from '../types/financialTypes';
import { getPagination } from './paginationAction';

const fetchFinancialRequest = () => ({
  type: FETCH_FINANCIAL_REQUEST,
});

const fetchFinancialSuccess = (financial) => ({
  type: FETCH_FINANCIAL_SUCCESS,
  payload: financial,
});

const fetchFinancialFailed = (error) => ({
  type: FETCH_FINANCIAL_FAILED,
  payload: error,
});

export const getAllFinancials = (query) => (dispatch) => {
  dispatch(fetchFinancialRequest());
  FinancialStatementAPI.getAllFinancialStatements(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchFinancialSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchFinancialFailed(errorMsg));
    });
};
