import OtherIncomeAPI from '../../api/OtherIncomeAPI';
import {
  FETCH_OTHER_INCOMES_REQUEST,
  FETCH_OTHER_INCOMES_SUCCESS,
  FETCH_OTHER_INCOMES_FAILED,
} from '../types/otherIncomeTypes';
import { getPagination } from './paginationAction';

const fetchOtherIncomesRequest = () => ({
  type: FETCH_OTHER_INCOMES_REQUEST,
});

const fetchOtherIncomesSuccess = (otherIncomes) => ({
  type: FETCH_OTHER_INCOMES_SUCCESS,
  payload: otherIncomes,
});

const fetchOtherIncomesFailed = (error) => ({
  type: FETCH_OTHER_INCOMES_FAILED,
  payload: error,
});

export const getAllOtherIncomes = (query) => (dispatch) => {
  dispatch(fetchOtherIncomesRequest());
  OtherIncomeAPI.getAllOtherIncomes(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchOtherIncomesSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchOtherIncomesFailed(errorMsg));
    });
};

export const getSingleOtherIncome = (id) => (dispatch) => {
  dispatch(fetchOtherIncomesRequest());
  OtherIncomeAPI.getSingleOtherIncome(id)
    .then((res) => {
      const otherIncome = res.data.data;
      dispatch(fetchOtherIncomesSuccess([otherIncome]));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchOtherIncomesFailed(errorMsg));
    });
};
