import { useCallback } from 'react';
import UserAPI from '../../../api/UserAPI';
import useAPI, { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED } from './useAPI';

const useSearch = () => {
  const [search, dispatchSearch] = useAPI();

  const searchUser = useCallback((query) => {
    dispatchSearch({ type: FETCH_REQUEST });
    UserAPI.getAllUsers({ search: query })
      .then((res) => {
        const response = res.data.data.edge;
        dispatchSearch({ type: FETCH_SUCCESS, payload: response });
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatchSearch({ type: FETCH_FAILED, payload: errorMsg });
      });
  });

  return { search, searchUser };
};

export default useSearch;
