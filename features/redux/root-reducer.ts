import { combineReducers } from 'redux';
import { RootAction } from './root-actions';
import counter from '../counter/reducer';
import gender from '../gender/reducer';

const reducerMap = {
  counter,
  gender
};

export type RootState = { [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]> };
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);