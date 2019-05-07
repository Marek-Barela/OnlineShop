import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'dressproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'dressproducts/FETCH_PRODUCTS_REQUESTED',
  'dressproducts/FETCH_PRODUCTS_SUCCEEDED',
  'dressproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();