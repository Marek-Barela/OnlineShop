import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'jacketproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'jacketproducts/FETCH_PRODUCTS_REQUESTED',
  'jacketproducts/FETCH_PRODUCTS_SUCCEEDED',
  'jacketproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();