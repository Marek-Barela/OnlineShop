import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'shoesproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'shoesproducts/FETCH_PRODUCTS_REQUESTED',
  'shoesproducts/FETCH_PRODUCTS_SUCCEEDED',
  'shoesproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();