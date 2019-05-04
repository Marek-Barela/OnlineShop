import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from './model';

export const fetchProducts = createAction(
  'femaleproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'femaleproducts/FETCH_PRODUCTS_REQUESTED',
  'femaleproducts/FETCH_PRODUCTS_SUCCEEDED',
  'femaleproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();