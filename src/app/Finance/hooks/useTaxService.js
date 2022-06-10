import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import TaxAPI from '../../../api/TaxAPI';
import { AlertContext } from '../../../contexts/AlertContext';
import useAPI, {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from '../../Common/hooks/useAPI';
import { alertFailed, alertSuccess } from '../../../redux/actions/alertAction';

const useTaxService = () => {
  const [createState, dispatchCreate] = useAPI();
  const [updateState, dispatchUpdate] = useAPI();
  const [deleteState, dispatchDelete] = useAPI();

  const dispatch = useDispatch();
  const snackbarRef = useContext(AlertContext);
  const history = useHistory();

  const createTax = useCallback((data) => {
    dispatchCreate({ type: FETCH_REQUEST });
    TaxAPI.createTax(data)
      .then((res) => {
        const response = res.data;
        dispatchCreate({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/outcome?tab=tax');
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

  const updateTax = useCallback((id, data) => {
    dispatchUpdate({ type: FETCH_REQUEST });
    TaxAPI.updateSingleTax(id, data)
      .then((res) => {
        const response = res.data;
        dispatchUpdate({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/outcome?tab=tax');
        snackbarRef.current.show();
      })
      .catch((err) => {
        const errorMsg = { message: err.response.data.message };

        dispatchUpdate({ type: FETCH_FAILED, payload: errorMsg });
        dispatch(alertFailed(errorMsg));
        snackbarRef.current.show();
      });
  });

  const deleteTax = useCallback((id) => {
    dispatchDelete({ type: FETCH_REQUEST });
    TaxAPI.deleteSingleTax(id)
      .then((res) => {
        const response = res.data;

        dispatchDelete({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/outcome?tab=tax');
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
    createTax,
    updateState,
    updateTax,
    deleteState,
    deleteTax,
  };
};

export default useTaxService;
