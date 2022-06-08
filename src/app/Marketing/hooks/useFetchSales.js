import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSales } from '../../../redux/actions/saleAction';

export const useGetAllSales = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSales(query));
  }, [query]);

  const sales = useSelector((state) => state.saleReducer.sales);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.saleReducer.loading);

  return { sales, pagination, loading };
};
