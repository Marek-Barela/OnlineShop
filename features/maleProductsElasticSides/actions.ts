import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'elasticsidesproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'elasticsidesproducts/FETCH_PRODUCTS_REQUESTED',
  'elasticsidesproducts/FETCH_PRODUCTS_SUCCEEDED',
  'elasticsidesproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();