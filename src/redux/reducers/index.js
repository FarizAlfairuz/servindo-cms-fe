import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import paginationReducer from './paginationReducer';
import alertReducer from './alertReducer';
import changelogReducer from './changelogReducer';
import purchaseReducer from './purchaseReducer';
import vendorReducer from './vendorReducer';
import customerReducer from './customerReducer';
import saleReducer from './saleReducer';
import itemReducer from './itemReducer';
import incomeReducer from './incomeReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  paginationReducer,
  alertReducer,
  changelogReducer,
  purchaseReducer,
  vendorReducer,
  customerReducer,
  saleReducer,
  itemReducer,
  incomeReducer,
});

export default rootReducer;
