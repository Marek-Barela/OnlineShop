import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'bagsproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'bagsproducts/FETCH_PRODUCTS_REQUESTED',
  'bagsproducts/FETCH_PRODUCTS_SUCCEEDED',
  'bagsproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();