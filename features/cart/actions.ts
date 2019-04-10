import { createAction } from 'typesafe-actions';
import { ProductItem } from './model';

export const addProductToCart = createAction(
  'cart/ADD_PRODUCT_TO_CART',
  addProduct => { return (product: ProductItem) => addProduct(product) }
);

export const updateAmountOfProductsInCart = createAction(
  'cart/UPDATE_AMOUNT_OF_PRODUCTS_IN_CART',
  addProduct => { return (product: ProductItem) => addProduct(product) }
);