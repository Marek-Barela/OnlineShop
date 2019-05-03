import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'jewelryproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'jewelryproducts/FETCH_PRODUCTS_REQUESTED',
  'jewelryproducts/FETCH_PRODUCTS_SUCCEEDED',
  'jewelryproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();