import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'moccasinsproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'moccasinsproducts/FETCH_PRODUCTS_REQUESTED',
  'moccasinsproducts/FETCH_PRODUCTS_SUCCEEDED',
  'moccasinsproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();