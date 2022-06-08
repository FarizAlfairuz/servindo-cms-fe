import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCustomers,
  getSingleCustomer,
} from '../../../redux/actions/customerAction';

export const useGetAllCustomers = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCustomers(query));
  }, [query]);

  const customers = useSelector((state) => state.customerReducer.customers);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.customerReducer.loading);

  return { customers, pagination, loading };
};

export const useGetSingleCustomer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCustomer(id));
  }, [id]);

  const customer = useSelector((state) => state.customerReducer.customers[0]);
  const loading = useSelector((state) => state.customerReducer.loading);

  return { customer, loading };
};
