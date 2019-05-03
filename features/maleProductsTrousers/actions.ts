import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'trousersproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'trousersproducts/FETCH_PRODUCTS_REQUESTED',
  'trousersproducts/FETCH_PRODUCTS_SUCCEEDED',
  'trousersproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();