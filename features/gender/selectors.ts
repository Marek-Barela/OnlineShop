import { RootState } from '../redux/root-reducer';

export function getGender(state: RootState): string {
  return state.gender.gender;
}