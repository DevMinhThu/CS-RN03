import {createStore, combineReducers} from 'redux';
import gameReducer from './reducers/gameReducer';

const store = createStore(combineReducers({gameReducer}));

export default store;
