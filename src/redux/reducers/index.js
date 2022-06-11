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
import balanceReducer from './balanceReducer';
import otherIncomeReducer from './otherIncomeReducer';
import operationalReducer from './operationalReducer';
import taxReducer from './taxReducer';
import leaseReducer from './leaseReducer';
import serviceReducer from './serviceReducer';
import tabReducer from './tabReducer';
import financialReducer from './financialReducer';
import totalReducer from './totalReducer';

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
  balanceReducer,
  otherIncomeReducer,
  operationalReducer,
  taxReducer,
  leaseReducer,
  serviceReducer,
  tabReducer,
  financialReducer,
  totalReducer,
});

export default rootReducer;
