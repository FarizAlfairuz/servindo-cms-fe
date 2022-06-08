import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import OtherIncomeAPI from '../../../api/OtherIncomeAPI';
import { AlertContext } from '../../../contexts/AlertContext';
import useAPI, {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from '../../Common/hooks/useAPI';
import { alertFailed, alertSuccess } from '../../../redux/actions/alertAction';

const useOtherIncomeService = () => {
  const [createState, dispatchCreate] = useAPI();
  const [updateState, dispatchUpdate] = useAPI();
  const [deleteState, dispatchDelete] = useAPI();

  const dispatch = useDispatch();
  const snackbarRef = useContext(AlertContext);
  const history = useHistory();

  const createOtherIncome = useCallback((data) => {
    dispatchCreate({ type: FETCH_REQUEST });
    OtherIncomeAPI.createOtherIncome(data)
      .then((res) => {
        const response = res.data;
        dispatchCreate({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/income');
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

  const updateOtherIncome = useCallback((id, data) => {
    dispatchUpdate({ type: FETCH_REQUEST });
    OtherIncomeAPI.updateSingleOtherIncome(id, data)
      .then((res) => {
        const response = res.data;
        dispatchUpdate({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/income');
        snackbarRef.current.show();
      })
      .catch((err) => {
        const errorMsg = { message: err.response.data.message };

        dispatchUpdate({ type: FETCH_FAILED, payload: errorMsg });
        dispatch(alertFailed(errorMsg));
        snackbarRef.current.show();
      });
  });

  const deleteOtherIncome = useCallback((id) => {
    dispatchDelete({ type: FETCH_REQUEST });
    OtherIncomeAPI.deleteSingleOtherIncome(id)
      .then((res) => {
        const response = res.data;

        dispatchDelete({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/income');
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
    createOtherIncome,
    updateState,
    updateOtherIncome,
    deleteState,
    deleteOtherIncome,
  };
};

export default useOtherIncomeService;
