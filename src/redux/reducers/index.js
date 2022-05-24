import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import paginationReducer from './paginationReducer';
import alertReducer from './alertReducer';
import changelogReducer from './changelogReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  paginationReducer,
  alertReducer,
  changelogReducer,
});

export default rootReducer;
