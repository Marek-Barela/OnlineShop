import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'blousesproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'blousesproducts/FETCH_PRODUCTS_REQUESTED',
  'blousesproducts/FETCH_PRODUCTS_SUCCEEDED',
  'blousesproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();