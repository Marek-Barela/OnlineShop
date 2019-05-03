import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'watchesproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'watchesproducts/FETCH_PRODUCTS_REQUESTED',
  'watchesproducts/FETCH_PRODUCTS_SUCCEEDED',
  'watchesproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();