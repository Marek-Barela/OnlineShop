import { RootState } from '../redux/root-reducer';

export function getID(state: RootState): String {
  return state.setSingleID.id;
}