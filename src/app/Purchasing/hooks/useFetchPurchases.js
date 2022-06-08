import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPurchases } from '../../../redux/actions/purchaseAction';

export const useGetAllPurchases = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPurchases(query));
  }, [query]);

  const purchases = useSelector((state) => state.purchaseReducer.purchases);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.purchaseReducer.loading);

  return { purchases, pagination, loading };
};
