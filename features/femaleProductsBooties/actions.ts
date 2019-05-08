import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'bootiesproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'bootiesproducts/FETCH_PRODUCTS_REQUESTED',
  'bootiesproducts/FETCH_PRODUCTS_SUCCEEDED',
  'bootiesproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();