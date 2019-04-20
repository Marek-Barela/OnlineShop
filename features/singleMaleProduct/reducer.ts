import { RootAction } from '../redux/root-actions';
import { fetchSingleProductRequest } from './actions';
import { getType } from 'typesafe-actions';

export type ProductState = {
  product: any;
  isFetching: boolean;
};

export const initialState: ProductState = {
  product: [],
  isFetching: false
}

export default function (state: ProductState = initialState, action: RootAction): ProductState {
  switch (action.type) {
    case (getType(fetchSingleProductRequest.request)):
      return {
        ...state,
        isFetching: true,
      };
    case (getType(fetchSingleProductRequest.success)):
      return {
        ...state,
        product: action.payload,
        isFetching: false,
      };
    case (getType(fetchSingleProductRequest.failure)):
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state
  }
}
