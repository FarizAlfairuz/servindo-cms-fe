import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import paginationReducer from './paginationReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  paginationReducer,
  alertReducer,
});

export default rootReducer;
