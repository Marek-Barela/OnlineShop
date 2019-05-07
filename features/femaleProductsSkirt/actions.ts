import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'skirtproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'skirtproducts/FETCH_PRODUCTS_REQUESTED',
  'skirtproducts/FETCH_PRODUCTS_SUCCEEDED',
  'skirtproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();