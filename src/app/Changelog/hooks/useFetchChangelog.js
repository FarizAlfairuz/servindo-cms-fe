import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChangelog } from '../../../redux/actions/changelogAction';

export const useGetChangelog = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChangelog(query));
  }, [query]);

  const changelog = useSelector((state) => state.changelogReducer.changelog);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.changelogReducer.loading);

  return { changelog, pagination, loading };
};
