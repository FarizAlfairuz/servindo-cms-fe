import VendorAPI from '../../api/VendorAPI';
import {
  FETCH_VENDORS_REQUEST,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAILED,
} from '../types/vendorTypes';
import { getPagination } from './paginationAction';

const fetchVendorsRequest = () => ({
  type: FETCH_VENDORS_REQUEST,
});

const fetchVendorsSuccess = (vendors) => ({
  type: FETCH_VENDORS_SUCCESS,
  payload: vendors,
});

const fetchVendorsFailed = (error) => ({
  type: FETCH_VENDORS_FAILED,
  payload: error,
});

export const getAllVendors = (query) => (dispatch) => {
  dispatch(fetchVendorsRequest());
  VendorAPI.getAllVendors(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchVendorsSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchVendorsFailed(errorMsg));
    });
};

export const getSingleVendor = (id) => (dispatch) => {
  dispatch(fetchVendorsRequest());
  VendorAPI.getSingleVendor(id)
    .then((res) => {
      const vendor = res.data.data;
      dispatch(fetchVendorsSuccess([vendor]));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchVendorsFailed(errorMsg));
    });
};
