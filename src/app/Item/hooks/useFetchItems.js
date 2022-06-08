import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllItems, getSingleItem } from '../../../redux/actions/itemAction';

export const useGetAllItems = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems(query));
  }, [query]);

  const items = useSelector((state) => state.itemReducer.items);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.itemReducer.loading);

  return { items, pagination, loading };
};

export const useGetSingleItem = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleItem(id));
  }, [id]);

  const item = useSelector((state) => state.itemReducer.items[0]);
  const loading = useSelector((state) => state.itemReducer.loading);

  return { item, loading };
};
