import TaxAPI from '../../api/TaxAPI';
import {
  FETCH_TAXES_REQUEST,
  FETCH_TAXES_SUCCESS,
  FETCH_TAXES_FAILED,
} from '../types/taxTypes';
import { getPagination } from './paginationAction';

const fetchTaxesRequest = () => ({
  type: FETCH_TAXES_REQUEST,
});

const fetchTaxesSuccess = (taxes) => ({
  type: FETCH_TAXES_SUCCESS,
  payload: taxes,
});

const fetchTaxesFailed = (error) => ({
  type: FETCH_TAXES_FAILED,
  payload: error,
});

export const getAllTaxes = (query) => (dispatch) => {
  dispatch(fetchTaxesRequest());
  TaxAPI.getAllTaxes(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchTaxesSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchTaxesFailed(errorMsg));
    });
};

export const getSingleTax = (id) => (dispatch) => {
  dispatch(fetchTaxesRequest());
  TaxAPI.getSingleTax(id)
    .then((res) => {
      const tax = res.data.data;
      dispatch(fetchTaxesSuccess([tax]));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchTaxesFailed(errorMsg));
    });
};
