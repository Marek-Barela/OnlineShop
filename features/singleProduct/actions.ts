import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from './model';

export const fetchSingleProduct = createAction(
  'singleproduct/FETCH_SINGLE_PRODUCT'
);

export const switchSingleProductImage = createAction(
  'singleproduct/SWITCH_SINGLE_PRODUCT_IMAGE',
  setImg => (img: string) => setImg(img)
);

export const fetchSingleProductRequest = createAsyncAction(
  'singleproduct/FETCH_SINGLE_PRODUCT_REQUESTED',
  'singleproduct/FETCH_SINGLE_PRODUCT_SUCCEEDED',
  'singleproduct/FETCH_SINGLE_PRODUCT_FAILED',
)<undefined, ProductItem[], Error>();