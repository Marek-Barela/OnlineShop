import { RootState } from '../redux/root-reducer';
import { ProductItem } from './model';

export function getProducts(state: RootState): ProductItem[] {
  return state.femaleProducts.products;
}