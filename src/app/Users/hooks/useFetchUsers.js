import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/actions/userActions';

const useFetchUsers = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers(query));
  }, [query.limit, query.page]);

  const users = useSelector((state) => state.userReducer.users);
  const pagination = useSelector((state) => state.paginationReducer.pagination);

  return { users, pagination };
};

export default useFetchUsers;
