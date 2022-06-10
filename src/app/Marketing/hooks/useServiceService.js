import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ServiceAPI from '../../../api/ServiceAPI';
import { AlertContext } from '../../../contexts/AlertContext';
import useAPI, {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from '../../Common/hooks/useAPI';
import { alertFailed, alertSuccess } from '../../../redux/actions/alertAction';

const useServiceService = () => {
  const [createState, dispatchCreate] = useAPI();
  const [updateState, dispatchUpdate] = useAPI();
  const [deleteState, dispatchDelete] = useAPI();

  const dispatch = useDispatch();
  const snackbarRef = useContext(AlertContext);
  const history = useHistory();

  const createService = useCallback((data) => {
    dispatchCreate({ type: FETCH_REQUEST });
    ServiceAPI.createService(data)
      .then((res) => {
        const response = res.data;
        dispatchCreate({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/sales?tab=item-services');
        snackbarRef.current.show();
      })
      .catch((err) => {
        const errorMsg = {
          message: err.response.data.message,
          description: err.message,
        };

        dispatchCreate({ type: FETCH_FAILED, payload: errorMsg });
        dispatch(alertFailed(errorMsg));
        snackbarRef.current.show();
      });
  }, []);

  const updateService = useCallback((id, data) => {
    dispatchUpdate({ type: FETCH_REQUEST });
    ServiceAPI.updateSingleService(id, data)
      .then((res) => {
        const response = res.data;
        dispatchUpdate({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/sales?tab=item-services');
        snackbarRef.current.show();
      })
      .catch((err) => {
        const errorMsg = { message: err.response.data.message };

        dispatchUpdate({ type: FETCH_FAILED, payload: errorMsg });
        dispatch(alertFailed(errorMsg));
        snackbarRef.current.show();
      });
  });

  const deleteService = useCallback((id) => {
    dispatchDelete({ type: FETCH_REQUEST });
    ServiceAPI.deleteSingleService(id)
      .then((res) => {
        const response = res.data;

        dispatchDelete({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/sales?tab=item-services');
        snackbarRef.current.show();
      })
      .catch((err) => {
        const errorMsg = { message: err.response.data.message };

        dispatchDelete({ type: FETCH_FAILED, payload: errorMsg });
        dispatch(alertFailed(errorMsg));
        snackbarRef.current.show();
      });
  });

  return {
    createState,
    createService,
    updateState,
    updateService,
    deleteState,
    deleteService,
  };
};

export default useServiceService;
