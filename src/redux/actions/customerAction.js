import CustomerAPI from '../../api/CustomerAPI';
import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILED,
} from '../types/customerTypes';
import { getPagination } from './paginationAction';

const fetchCustomersRequest = () => ({
  type: FETCH_CUSTOMERS_REQUEST,
});

const fetchCustomersSuccess = (customers) => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  payload: customers,
});

const fetchCustomersFailed = (error) => ({
  type: FETCH_CUSTOMERS_FAILED,
  payload: error,
});

export const getAllCustomers = (query) => (dispatch) => {
  dispatch(fetchCustomersRequest());
  CustomerAPI.getAllCustomers(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchCustomersSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchCustomersFailed(errorMsg));
    });
};

export const getSingleCustomer = (id) => (dispatch) => {
  dispatch(fetchCustomersRequest());
  CustomerAPI.getSingleCustomer(id)
    .then((res) => {
      const customer = res.data.data;
      dispatch(fetchCustomersSuccess([customer]));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchCustomersFailed(errorMsg));
    });
};
