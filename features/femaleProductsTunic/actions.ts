import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'tunicproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'tunicproducts/FETCH_PRODUCTS_REQUESTED',
  'tunicproducts/FETCH_PRODUCTS_SUCCEEDED',
  'tunicproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();