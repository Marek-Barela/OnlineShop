import { RootState } from '../redux/root-reducer';
import { ProductItem } from './model';

export function getSingleProduct(state: RootState): ProductItem {
  return state.singleMaleProduct.product;
}