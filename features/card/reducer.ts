import { RootAction } from '../redux/root-actions';
import { addProductToCard } from './actions';
import { getType } from 'typesafe-actions';
import { ProductItem } from './model';

export type CardState = {
  card: ProductItem[];
};

export const initialState: CardState = {
  card: []
}

export default function (state: CardState = initialState, action: RootAction): CardState {
  switch (action.type) {
    case (getType(addProductToCard)): {
      const newItem = action.payload;
      const newCardState = [...state.card, newItem]

      return {
        ...state,
        card: newCardState
      };
    }
    default:
      return state
  }
}
