import { RootAction } from '../redux/root-actions';
import { changeGender } from './actions';
import { getType } from 'typesafe-actions';

export type CounterState = {
  gender: string
};

export const initialState: CounterState = {
  gender: "woman"
}

export default function (state: CounterState = initialState, action: RootAction): CounterState {
  switch (action.type) {
    case (getType(changeGender)):
      return {
        ...state,
        gender: action.payload
      }
    default:
      return state
  }
}
