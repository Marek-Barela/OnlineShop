import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'tshirtfemaleproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'tshirtfemaleproducts/FETCH_PRODUCTS_REQUESTED',
  'tshirtfemaleproducts/FETCH_PRODUCTS_SUCCEEDED',
  'tshirtfemaleproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();