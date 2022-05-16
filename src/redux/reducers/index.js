import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import paginationReducer from './paginationReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  paginationReducer,
});

export default rootReducer;
