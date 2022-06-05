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

// export const useGetSinglePurchase = (id) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getSinglePurchase(id));
//   }, [id]);

//   const purchase = useSelector((state) => state.purchaseReducer.purchases[0]);
//   const loading = useSelector((state) => state.purchaseReducer.loading);

//   return { purchase, loading };
// };
