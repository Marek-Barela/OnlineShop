import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'tracksuitfemaleproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'tracksuitfemaleproducts/FETCH_PRODUCTS_REQUESTED',
  'tracksuitfemaleproducts/FETCH_PRODUCTS_SUCCEEDED',
  'tracksuitfemaleproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();