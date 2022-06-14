import {
  ALERT_SUCCESS,
  ALERT_FAILED,
  ALERT_REQUEST,
} from '../types/alertTypes';

export const alertSuccess = (message) => ({
  type: ALERT_SUCCESS,
  payload: message,
});

export const alertFailed = (message) => ({
  type: ALERT_FAILED,
  payload: message,
});

export const alertRequest = () => ({
  type: ALERT_REQUEST,
});
