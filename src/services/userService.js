import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UserAPI from '../api/UserAPI';
import { AlertContext } from '../contexts/AlertContext';
import useAPI, {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from '../hooks/useAPI';
import { alertFailed, alertSuccess } from '../redux/actions/alertAction';

const useUserService = () => {
  const [createState, dispatchCreate] = useAPI();
  const dispatch = useDispatch();
  const snackbarRef = useContext(AlertContext);
  const history = useHistory();

  const createUser = useCallback((data) => {
    dispatchCreate({ type: FETCH_REQUEST });
    UserAPI.createUser(data)
      .then((res) => {
        const response = res.data;
        dispatchCreate({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/user');
        snackbarRef.current.show();
      })
      .catch((err) => {
        const errorMsg = {
          message: err.response.data.message,
          description: err.response.data.errors.fields.username.message,
        };

        dispatchCreate({ type: FETCH_FAILED, payload: errorMsg });
        dispatch(alertFailed(errorMsg));
        snackbarRef.current.show();
      });
  }, []);

  return { createState, createUser };
};

export default useUserService;
