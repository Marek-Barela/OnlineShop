import { RootAction } from '../redux/root-actions';
import { changeGender } from './actions';
import { getType } from 'typesafe-actions';

export type GenderState = {
  gender: string
};

export const initialState: GenderState = {
  gender: ""
}

export default function (state: GenderState = initialState, action: RootAction): GenderState {
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
