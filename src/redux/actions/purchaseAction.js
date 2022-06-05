import PurchaseAPI from '../../api/PurchaseAPI';
import {
  FETCH_PURCHASES_REQUEST,
  FETCH_PURCHASES_SUCCESS,
  FETCH_PURCHASES_FAILED,
} from '../types/purchaseTypes';
import { getPagination } from './paginationAction';

const fetchPurchasesRequest = () => ({
  type: FETCH_PURCHASES_REQUEST,
});

const fetchPurchasesSuccess = (purchases) => ({
  type: FETCH_PURCHASES_SUCCESS,
  payload: purchases,
});

const fetchPurchasesFailed = (error) => ({
  type: FETCH_PURCHASES_FAILED,
  payload: error,
});

export const getAllPurchases = (query) => (dispatch) => {
  dispatch(fetchPurchasesRequest());
  PurchaseAPI.getAllPurchases(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchPurchasesSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchPurchasesFailed(errorMsg));
    });
};

// export const getSinglePurchase = (id) => (dispatch) => {
//   dispatch(fetchPurchasesRequest());
//   PurchaseAPI.getSinglePurchase(id)
//     .then((res) => {
//       const purchase = res.data.data;
//       dispatch(fetchPurchasesSuccess([purchase]));
//     })
//     .catch((err) => {
//       const errorMsg = err.message;
//       dispatch(fetchPurchasesFailed(errorMsg));
//     });
// };
