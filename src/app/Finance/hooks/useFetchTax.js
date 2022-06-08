import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTaxes, getSingleTax } from '../../../redux/actions/taxAction';

export const useGetAllTaxes = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTaxes(query));
  }, [query]);

  const taxes = useSelector((state) => state.taxReducer.taxes);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.taxReducer.loading);

  return { taxes, pagination, loading };
};

export const useGetSingleTax = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleTax(id));
  }, [id]);

  const tax = useSelector((state) => state.taxReducer.taxes[0]);
  const loading = useSelector((state) => state.taxReducer.loading);

  return { tax, loading };
};
