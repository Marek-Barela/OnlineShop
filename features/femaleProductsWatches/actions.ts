import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'femalewatchesproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'femalewatchesproducts/FETCH_PRODUCTS_REQUESTED',
  'femalewatchesproducts/FETCH_PRODUCTS_SUCCEEDED',
  'femalewatchesproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();