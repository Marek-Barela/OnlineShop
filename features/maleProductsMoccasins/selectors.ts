import { RootState } from '../redux/root-reducer';
import { ProductItem } from '../maleProducts/model';

export function getProducts(state: RootState): ProductItem[] {
  return state.maleMoccasins.products;
}