import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../femaleProducts/model';

export const fetchProducts = createAction(
  'ballerinaproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'ballerinaproducts/FETCH_PRODUCTS_REQUESTED',
  'ballerinaproducts/FETCH_PRODUCTS_SUCCEEDED',
  'ballerinaproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();