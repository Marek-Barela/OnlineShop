import { combineReducers } from 'redux';
import { RootAction } from './root-actions';
import gender from '../gender/reducer';
import maleProducts from '../maleProducts/reducer';

const reducerMap = {
  gender,
  maleProducts
};

export type RootState = { [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]> };
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);