import { RootState } from '../redux/root-reducer';
import { ProductItem } from './model';

export function getSingleProduct(state: RootState): ProductItem {
  return state.singleProduct.product;
}

export function getDefaultProductImage(state: RootState): string {
  return state.singleProduct.currentProductImage;
}