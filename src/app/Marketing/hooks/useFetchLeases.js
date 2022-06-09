import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLeases } from '../../../redux/actions/leaseAction';

export const useGetAllLeases = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLeases(query));
  }, [query]);

  const leases = useSelector((state) => state.leaseReducer.leases);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.leaseReducer.loading);

  return { leases, pagination, loading };
};
