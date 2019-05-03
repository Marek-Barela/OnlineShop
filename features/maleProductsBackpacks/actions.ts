import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'backpackproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'backpackproducts/FETCH_PRODUCTS_REQUESTED',
  'backpackproducts/FETCH_PRODUCTS_SUCCEEDED',
  'backpackproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();