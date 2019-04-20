import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from './model';

export const fetchProducts = createAction(
  'maleproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'maleproducts/FETCH_PRODUCTS_REQUESTED',
  'maleproducts/FETCH_PRODUCTS_SUCCEEDED',
  'maleproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();