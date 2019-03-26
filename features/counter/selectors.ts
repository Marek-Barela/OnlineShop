import { RootState } from '../redux/root-reducer';

export function getCounter(state: RootState): number {
  return state.counter.count;
}