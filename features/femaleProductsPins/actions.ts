import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'pinsproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'pinsproducts/FETCH_PRODUCTS_REQUESTED',
  'pinsproducts/FETCH_PRODUCTS_SUCCEEDED',
  'pinsproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();