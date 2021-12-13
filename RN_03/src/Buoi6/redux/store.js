import {combineReducers, createStore} from 'redux';
import countReducer from './reducers/countReducer';
import userReducer from './reducers/userReducer';

export const store = createStore(
  combineReducers({count: countReducer, user: userReducer}),
);
