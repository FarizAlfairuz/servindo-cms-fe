import OperationalAPI from '../../api/OperationalAPI';
import {
  FETCH_OPERATIONALS_REQUEST,
  FETCH_OPERATIONALS_SUCCESS,
  FETCH_OPERATIONALS_FAILED,
} from '../types/operationalTypes';
import { getPagination } from './paginationAction';

const fetchOperationalsRequest = () => ({
  type: FETCH_OPERATIONALS_REQUEST,
});

const fetchOperationalsSuccess = (operationals) => ({
  type: FETCH_OPERATIONALS_SUCCESS,
  payload: operationals,
});

const fetchOperationalsFailed = (error) => ({
  type: FETCH_OPERATIONALS_FAILED,
  payload: error,
});

export const getAllOperationals = (query) => (dispatch) => {
  dispatch(fetchOperationalsRequest());
  OperationalAPI.getAllOperationals(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchOperationalsSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchOperationalsFailed(errorMsg));
    });
};

export const getSingleOperational = (id) => (dispatch) => {
  dispatch(fetchOperationalsRequest());
  OperationalAPI.getSingleOperational(id)
    .then((res) => {
      const operational = res.data.data;
      dispatch(fetchOperationalsSuccess([operational]));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchOperationalsFailed(errorMsg));
    });
};
