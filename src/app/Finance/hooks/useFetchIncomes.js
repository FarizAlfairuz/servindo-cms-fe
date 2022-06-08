import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllIncomes } from '../../../redux/actions/incomeAction';

export const useGetAllIncomes = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIncomes(query));
  }, [query]);

  const incomes = useSelector((state) => state.incomeReducer.incomes);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.incomeReducer.loading);

  return { incomes, pagination, loading };
};
