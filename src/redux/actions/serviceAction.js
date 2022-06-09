import ServiceAPI from '../../api/ServiceAPI';
import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILED,
} from '../types/serviceTypes';
import { getPagination } from './paginationAction';

const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

const fetchServicesSuccess = (services) => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: services,
});

const fetchServicesFailed = (error) => ({
  type: FETCH_SERVICES_FAILED,
  payload: error,
});

export const getAllServices = (query) => (dispatch) => {
  dispatch(fetchServicesRequest());
  ServiceAPI.getAllServices(query)
    .then((res) => {
      const { edge, cursor } = res.data.data;

      dispatch(fetchServicesSuccess(edge));
      dispatch(getPagination(cursor));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchServicesFailed(errorMsg));
    });
};

export const getSingleService = (id) => (dispatch) => {
  dispatch(fetchServicesRequest());
  ServiceAPI.getSingleService(id)
    .then((res) => {
      const service = res.data.data;
      dispatch(fetchServicesSuccess([service]));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchServicesFailed(errorMsg));
    });
};
