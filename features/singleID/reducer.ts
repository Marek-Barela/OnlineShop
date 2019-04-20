import { RootAction } from '../redux/root-actions';
import { setSingleId } from './actions';
import { getType } from 'typesafe-actions';

export type IDState = {
  id: string;
};

export const initialState: IDState = {
  id: ""
}

export default function (state: IDState = initialState, action: RootAction): IDState {
  switch (action.type) {
    case (getType(setSingleId)):
      return {
        ...state,
        id: action.payload
      }
    default:
      return state
  }
}
