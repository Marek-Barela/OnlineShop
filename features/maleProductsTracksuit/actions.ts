import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'tracksuitproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'tracksuitproducts/FETCH_PRODUCTS_REQUESTED',
  'tracksuitproducts/FETCH_PRODUCTS_SUCCEEDED',
  'tracksuitproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();