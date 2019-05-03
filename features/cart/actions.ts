import { createAction } from 'typesafe-actions';
import { ProductItem } from './model';

export const addProductToCart = createAction(
  'cart/ADD_PRODUCT_TO_CART',
  addProduct => (product: ProductItem) => addProduct(product)
);

export const deleteProductFromCart = createAction(
  'cart/DELETE_PRODUCT_FROM_CART',
  deleteProduct => (_id: string) => deleteProduct(_id)
);

export const updateAmountOfProductsInCart = createAction(
  'cart/UPDATE_AMOUNT_OF_PRODUCTS_IN_CART',
  updateAmountOfProducts => (product: ProductItem) => updateAmountOfProducts(product)
);