import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'femalejewelryproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'femalejewelryproducts/FETCH_PRODUCTS_REQUESTED',
  'femalejewelryproducts/FETCH_PRODUCTS_SUCCEEDED',
  'femalejewelryproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();