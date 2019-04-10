import { RootState } from '../redux/root-reducer';
import { ProductItem } from './model';

export function getCartProducts(state: RootState): ProductItem[] {
  return state.cart.cart;
}