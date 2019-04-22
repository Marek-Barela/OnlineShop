import { RootAction } from '../redux/root-actions';
import { addProductToCart, updateAmountOfProductsInCart } from './actions';
import { getType } from 'typesafe-actions';
import { ProductItem } from './model';

export type CartState = {
  cart: ProductItem[];
};

export const initialState: CartState = {
  cart: []
}

export default function (state: CartState = initialState, action: RootAction): CartState {
  switch (action.type) {
    case (getType(addProductToCart)): {
      const newItem = action.payload;
      newItem.quantity = 1;
      const newCartState = [...state.cart, newItem];

      return {
        ...state,
        cart: newCartState
      };
    }
    case (getType(updateAmountOfProductsInCart)): {
      const newState = [...state.cart]
      newState
        .filter(item => item._id === action.payload._id)
        .map(item => item.quantity = item.quantity + 1);
      return {
        ...state,
        cart: newState
      };
    }
    default:
      return state
  }
}
