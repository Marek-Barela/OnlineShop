import { RootAction } from '../redux/root-actions';
import { fetchSingleProductRequest, switchSingleProductImage } from './actions';
import { getType } from 'typesafe-actions';

export type ProductState = {
  product: any;
  currentProductImage: string,
  isFetching: boolean;
};

export const initialState: ProductState = {
  product: [],
  currentProductImage: "",
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
    case (getType(switchSingleProductImage)):
      return {
        ...state,
        currentProductImage: action.payload
      };
    default:
      return state
  }
}
