import { createAction } from 'typesafe-actions';
import { ProductItem } from './model';

export const addProductToCard = createAction(
  'card/ADD_PRODUCT_TO_CARD',
  addProduct => { return (product: ProductItem) => addProduct(product) }
);