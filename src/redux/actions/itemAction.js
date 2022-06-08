import ItemAPI from '../../api/ItemAPI';
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILED,
} from '../types/itemTypes';
import { getPagination } from './paginationAction';

const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST,
});

const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items,
});

const fetchItemsFailed = (error) => ({
  type: FETCH_ITEMS_FAILED,
  payload: error,
});

export const getAllItems = (query) => (dispatch) => {
  dispatch(fetchItemsRequest());
  ItemAPI.getAllItems(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchItemsSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchItemsFailed(errorMsg));
    });
};

export const getSingleItem = (id) => (dispatch) => {
  dispatch(fetchItemsRequest());
  ItemAPI.getSingleItem(id)
    .then((res) => {
      const item = res.data.data;
      dispatch(fetchItemsSuccess([item]));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchItemsFailed(errorMsg));
    });
};
