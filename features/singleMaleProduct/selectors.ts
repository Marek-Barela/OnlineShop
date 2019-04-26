import { RootState } from '../redux/root-reducer';
import { ProductItem } from './model';

export function getSingleProduct(state: RootState): ProductItem {
  return state.singleMaleProduct.product;
}

export function getDefaultProductImage(state: RootState): string {
  return state.singleMaleProduct.currentProductImage;
}