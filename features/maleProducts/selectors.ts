import { RootState } from '../redux/root-reducer';
import { JSONCategoriesResponse } from './model';

export function getProducts(state: RootState): JSONCategoriesResponse {
  return state.maleProducts.products;
}