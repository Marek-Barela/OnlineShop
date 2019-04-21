import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'jeansproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'jeansproducts/FETCH_PRODUCTS_REQUESTED',
  'jeansproducts/FETCH_PRODUCTS_SUCCEEDED',
  'jeansproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();