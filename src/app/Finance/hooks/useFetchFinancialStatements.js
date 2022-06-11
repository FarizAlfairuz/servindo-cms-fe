import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFinancials } from '../../../redux/actions/financialAction';
import { getTotal } from '../../../redux/actions/totalAction';

export const useGetAllFinancials = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFinancials(query));
  }, [query]);

  const financials = useSelector((state) => state.financialReducer.financial);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.financialReducer.loading);

  return { financials, pagination, loading };
};

export const useGetTotal = (year) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal(year));
  }, [year]);

  const total = useSelector((state) => state.totalReducer.total);
  const loading = useSelector((state) => state.financialReducer.loading);

  return { total, loading };
};
