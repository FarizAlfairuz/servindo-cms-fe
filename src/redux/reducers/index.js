import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import paginationReducer from './paginationReducer';
import alertReducer from './alertReducer';
import changelogReducer from './changelogReducer';
import purchaseReducer from './purchaseReducer';
import vendorReducer from './vendorReducer';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  paginationReducer,
  alertReducer,
  changelogReducer,
  purchaseReducer,
  vendorReducer,
  customerReducer,
});

export default rootReducer;
