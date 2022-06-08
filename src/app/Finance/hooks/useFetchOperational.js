import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllOperationals,
  getSingleOperational,
} from '../../../redux/actions/operationalAction';

export const useGetAllOperationals = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOperationals(query));
  }, [query]);

  const operationals = useSelector(
    (state) => state.operationalReducer.operationals
  );
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.operationalReducer.loading);

  return { operationals, pagination, loading };
};

export const useGetSingleOperational = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleOperational(id));
  }, [id]);

  const operational = useSelector(
    (state) => state.operationalReducer.operationals[0]
  );
  const loading = useSelector((state) => state.operationalReducer.loading);

  return { operational, loading };
};
