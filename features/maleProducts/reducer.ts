import { RootAction } from '../redux/root-actions';
import { fetchProductsRequest } from './actions';
import { getType } from 'typesafe-actions';

export type ProductsState = {
  products: any;
  isFetching: boolean;
};

export const initialState: ProductsState = {
  products: {},
  isFetching: false
}

export default function (state: ProductsState = initialState, action: RootAction): ProductsState {
  switch (action.type) {
    case (getType(fetchProductsRequest.request)):
      return {
        ...state,
        isFetching: true,
      };
    case (getType(fetchProductsRequest.success)):
      return {
        ...state,
        products: action.payload,
        isFetching: false,
      };
    case (getType(fetchProductsRequest.failure)):
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state
  }
}
