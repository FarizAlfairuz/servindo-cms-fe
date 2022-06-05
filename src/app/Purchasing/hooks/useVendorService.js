import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import VendorAPI from '../../../api/VendorAPI';
import { AlertContext } from '../../../contexts/AlertContext';
import useAPI, {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from '../../Common/hooks/useAPI';
import { alertFailed, alertSuccess } from '../../../redux/actions/alertAction';

const useVendorService = () => {
  const [createState, dispatchCreate] = useAPI();
  const [updateState, dispatchUpdate] = useAPI();
  const [deleteState, dispatchDelete] = useAPI();

  const dispatch = useDispatch();
  const snackbarRef = useContext(AlertContext);
  const history = useHistory();

  const createVendor = useCallback((data) => {
    dispatchCreate({ type: FETCH_REQUEST });
    VendorAPI.createVendor(data)
      .then((res) => {
        const response = res.data;
        dispatchCreate({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/vendor');
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

  const updateVendor = useCallback((id, data) => {
    dispatchUpdate({ type: FETCH_REQUEST });
    VendorAPI.updateSingleVendor(id, data)
      .then((res) => {
        const response = res.data;
        dispatchUpdate({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/vendor');
        snackbarRef.current.show();
      })
      .catch((err) => {
        const errorMsg = { message: err.response.data.message };

        dispatchUpdate({ type: FETCH_FAILED, payload: errorMsg });
        dispatch(alertFailed(errorMsg));
        snackbarRef.current.show();
      });
  });

  const deleteVendor = useCallback((id) => {
    dispatchDelete({ type: FETCH_REQUEST });
    VendorAPI.deleteSingleVendor(id)
      .then((res) => {
        const response = res.data;

        dispatchDelete({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/vendor');
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
    createVendor,
    updateState,
    updateVendor,
    deleteState,
    deleteVendor,
  };
};

export default useVendorService;
