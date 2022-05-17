import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import { ALERT_SUCCESS, ALERT_FAILED } from '../types/alertTypes';

const initialState = {
  message: '',
  description: '',
  success: true,
  background: 'bg-green-600',
  icon: <CheckCircleIcon className="w-4 h-4" />,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        message: action.payload,
        description: '',
        success: true,
        background: 'bg-green-600',
        icon: <CheckCircleIcon className="w-4 h-4" />,
      };

    case ALERT_FAILED:
      return {
        message: action.payload.message,
        description: action.payload.description,
        success: false,
        background: 'bg-red-600',
        icon: <ExclamationCircleIcon className="w-4 h-4" />,
      };

    default:
      return state;
  }
};

export default alertReducer;
