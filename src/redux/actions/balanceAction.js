import BalanceAPI from '../../api/BalanceAPI';
import {
  FETCH_BALANCE_REQUEST,
  FETCH_BALANCE_SUCCESS,
  FETCH_BALANCE_FAILED,
} from '../types/balanceTypes';

const fetchBalanceRequest = () => ({
  type: FETCH_BALANCE_REQUEST,
});

const fetchBalanceSuccess = (balance) => ({
  type: FETCH_BALANCE_SUCCESS,
  payload: balance,
});

const fetchBalanceFailed = (error) => ({
  type: FETCH_BALANCE_FAILED,
  payload: error,
});

export const getAllBalances = (year) => (dispatch) => {
  dispatch(fetchBalanceRequest());
  BalanceAPI.getAllBalances(year)
    .then((res) => {
      dispatch(fetchBalanceSuccess(res.data.data));
    })
    .catch((err) => {
      const errorMsg = err.message;
      dispatch(fetchBalanceFailed(errorMsg));
    });
};
