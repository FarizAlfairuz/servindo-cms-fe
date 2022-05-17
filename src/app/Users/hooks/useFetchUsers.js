import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getSingleUser } from '../../../redux/actions/userActions';

export const useGetAllUsers = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers(query));
  }, [query.limit, query.page]);

  const users = useSelector((state) => state.userReducer.users);
  const pagination = useSelector((state) => state.paginationReducer.pagination);
  const loading = useSelector((state) => state.userReducer.loading);

  return { users, pagination, loading };
};

export const useGetSingleUser = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [id]);

  const user = useSelector((state) => state.userReducer.users[0]);
  const loading = useSelector((state) => state.userReducer.loading);

  return { user, loading };
};
