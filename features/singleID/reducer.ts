import { RootAction } from '../redux/root-actions';
import { setSingleId, setSingleGender } from './actions';
import { getType } from 'typesafe-actions';

export type State = {
  id: string;
  gender: string;
};

export const initialState: State = {
  id: "",
  gender: ""
}

export default function (state: State = initialState, action: RootAction): State {
  switch (action.type) {
    case (getType(setSingleId)):
      return {
        ...state,
        id: action.payload
      }
    case (getType(setSingleGender)):
      return {
        ...state,
        gender: action.payload
      }
    default:
      return state
  }
}
