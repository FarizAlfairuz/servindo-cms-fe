import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllVendors,
  getSingleVendor,
} from '../../../redux/actions/vendorAction';

export const useGetAllVendors = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVendors(query));
  }, [query]);

  const vendors = useSelector((state) => state.vendorReducer.vendors);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.vendorReducer.loading);

  return { vendors, pagination, loading };
};

export const useGetSingleVendor = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleVendor(id));
  }, [id]);

  const vendor = useSelector((state) => state.vendorReducer.vendors[0]);
  const loading = useSelector((state) => state.vendorReducer.loading);

  return { vendor, loading };
};
