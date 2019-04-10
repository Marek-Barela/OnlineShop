import { RootState } from '../redux/root-reducer';
import { ProductItem } from './model';

export function getCardProducts(state: RootState): ProductItem[] {
  return state.card.card;
}