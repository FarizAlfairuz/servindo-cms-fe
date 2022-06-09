import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllServices,
  getSingleService,
} from '../../../redux/actions/serviceAction';

export const useGetAllServices = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices(query));
  }, [query]);

  const services = useSelector((state) => state.serviceReducer.services);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.serviceReducer.loading);

  return { services, pagination, loading };
};

export const useGetSingleService = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleService(id));
  }, [id]);

  const service = useSelector((state) => state.serviceReducer.services[0]);
  const loading = useSelector((state) => state.serviceReducer.loading);

  return { service, loading };
};
