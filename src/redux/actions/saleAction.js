import SaleAPI from '../../api/SaleAPI';
import {
  FETCH_SALES_REQUEST,
  FETCH_SALES_SUCCESS,
  FETCH_SALES_FAILED,
} from '../types/saleTypes';
import { getPagination } from './paginationAction';

const fetchSalesRequest = () => ({
  type: FETCH_SALES_REQUEST,
});

const fetchSalesSuccess = (sales) => ({
  type: FETCH_SALES_SUCCESS,
  payload: sales,
});

const fetchSalesFailed = (error) => ({
  type: FETCH_SALES_FAILED,
  payload: error,
});

export const getAllSales = (query) => (dispatch) => {
  dispatch(fetchSalesRequest());
  SaleAPI.getAllSales(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchSalesSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchSalesFailed(errorMsg));
    });
};
