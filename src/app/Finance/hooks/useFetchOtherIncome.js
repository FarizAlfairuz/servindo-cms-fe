import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllOtherIncomes,
  getSingleOtherIncome,
} from '../../../redux/actions/otherIncomeAction';

export const useGetAllOtherIncomes = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOtherIncomes(query));
  }, [query]);

  const otherIncomes = useSelector(
    (state) => state.otherIncomeReducer.otherIncomes
  );
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.otherIncomeReducer.loading);

  return { otherIncomes, pagination, loading };
};

export const useGetSingleOtherIncome = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleOtherIncome(id));
  }, [id]);

  const otherIncome = useSelector(
    (state) => state.otherIncomeReducer.otherIncomes[0]
  );
  const loading = useSelector((state) => state.otherIncomeReducer.loading);

  return { otherIncome, loading };
};
