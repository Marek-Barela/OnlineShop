import { RootAction } from '../redux/root-actions';
import { addProductToCart } from './actions';
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
      const newCardState = [...state.cart, newItem]

      return {
        ...state,
        cart: newCardState
      };
    }
    default:
      return state
  }
}
