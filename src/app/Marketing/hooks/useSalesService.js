import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SaleAPI from '../../../api/SaleAPI';
import { AlertContext } from '../../../contexts/AlertContext';
import useAPI, {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from '../../Common/hooks/useAPI';
import { alertFailed, alertSuccess } from '../../../redux/actions/alertAction';

const useSaleService = () => {
  const [createState, dispatchCreate] = useAPI();

  const dispatch = useDispatch();
  const snackbarRef = useContext(AlertContext);
  const history = useHistory();

  const createSale = useCallback((data) => {
    dispatchCreate({ type: FETCH_REQUEST });
    SaleAPI.createSale(data)
      .then((res) => {
        const response = res.data;
        dispatchCreate({ type: FETCH_SUCCESS, payload: response });
        dispatch(alertSuccess(response.message));
        history.push('/dashboard/sales?tab=item-sales');
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

  return {
    createState,
    createSale,
  };
};

export default useSaleService;
