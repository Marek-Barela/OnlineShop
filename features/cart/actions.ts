import { createAction } from 'typesafe-actions';
import { ProductItem } from './model';

export const addProductToCart = createAction(
  'card/ADD_PRODUCT_TO_CART',
  addProduct => { return (product: ProductItem) => addProduct(product) }
);