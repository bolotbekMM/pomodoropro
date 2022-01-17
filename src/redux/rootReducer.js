import { Reducer } from './Reducer/Reducer';
import { combineReducers } from 'redux';

let rootReducer = combineReducers({
  Store: Reducer,
});

export { rootReducer };
