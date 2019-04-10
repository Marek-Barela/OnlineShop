import { RootAction } from '../redux/root-actions';
import { addProductToCart, updateAmountOfProductsInCart } from './actions';
import { getType } from 'typesafe-actions';
import { ProductItem } from './model';

export type CardState = {
  cart: ProductItem[];
};

export const initialState: CardState = {
  cart: []
}

export default function (state: CardState = initialState, action: RootAction): CardState {
  switch (action.type) {
    case (getType(addProductToCart)): {
      const newItem = action.payload;
      newItem.quantity = 1;
      const newCardState = [...state.cart, newItem];

      return {
        ...state,
        cart: newCardState
      };
    }
    case (getType(updateAmountOfProductsInCart)): {
      const newState = [...state.cart]
      newState
        .filter(item => item.id === action.payload.id)
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
