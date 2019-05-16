import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'bagsfemaleproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'bagsfemaleproducts/FETCH_PRODUCTS_REQUESTED',
  'bagsfemaleproducts/FETCH_PRODUCTS_SUCCEEDED',
  'bagsfemaleproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();