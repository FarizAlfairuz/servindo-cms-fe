import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBalances } from '../../../redux/actions/balanceAction';

export const useGetAllBalances = (year) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBalances(year));
  }, [year]);

  const balance = useSelector((state) => state.balanceReducer.balance);
  const loading = useSelector((state) => state.balanceReducer.loading);

  return { balance, loading };
};
