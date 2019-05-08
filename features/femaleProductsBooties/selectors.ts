import { RootState } from '../redux/root-reducer';
import { ProductItem } from '../femaleProducts/model';

export function getProducts(state: RootState): ProductItem[] {
  return state.femaleBooties.products;
}