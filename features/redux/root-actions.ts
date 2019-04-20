import { Dispatch as ReduxDispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as gender from '../gender/actions';
import * as maleProducts from '../maleProducts/actions';
import * as cart from '../cart/actions';
import * as singleMaleProduct from '../singleMaleProduct/actions';
import * as setProductID from '../singleID/actions';

export const actions = {
  gender,
  maleProducts,
  cart,
  singleMaleProduct,
  setProductID
};

type RootAction = ActionType<typeof actions>;
type Dispatch = ReduxDispatch<RootAction>;

export { RootAction, Dispatch };