import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'tshirtproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'tshirtproducts/FETCH_PRODUCTS_REQUESTED',
  'tshirtproducts/FETCH_PRODUCTS_SUCCEEDED',
  'tshirtproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();