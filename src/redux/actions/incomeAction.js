import IncomeAPI from '../../api/IncomeAPI';
import {
  FETCH_INCOMES_REQUEST,
  FETCH_INCOMES_SUCCESS,
  FETCH_INCOMES_FAILED,
} from '../types/incomeTypes';
import { getPagination } from './paginationAction';

const fetchIncomesRequest = () => ({
  type: FETCH_INCOMES_REQUEST,
});

const fetchIncomesSuccess = (incomes) => ({
  type: FETCH_INCOMES_SUCCESS,
  payload: incomes,
});

const fetchIncomesFailed = (error) => ({
  type: FETCH_INCOMES_FAILED,
  payload: error,
});

export const getAllIncomes = (query) => (dispatch) => {
  dispatch(fetchIncomesRequest());
  IncomeAPI.getAllIncomes(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchIncomesSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchIncomesFailed(errorMsg));
    });
};
