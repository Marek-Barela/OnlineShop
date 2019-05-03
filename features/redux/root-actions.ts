import { Dispatch as ReduxDispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as gender from '../gender/actions';
import * as maleProducts from '../maleProducts/actions';
import * as cart from '../cart/actions';
import * as singleMaleProduct from '../singleMaleProduct/actions';
import * as maleShirts from '../maleProductsShirts/actions';
import * as maleJeans from '../maleProductsJeans/actions';
import * as maleJacket from '../maleProductsJacket/actions';
import * as maleTrousers from '../maleProductsTrousers/actions';
import * as maleElasticSides from '../maleProductsElasticSides/actions';
import * as maleMoccasins from '../maleProductsMoccasins/actions';
import * as setProductID from '../singleID/actions';

export const actions = {
  gender,
  maleProducts,
  cart,
  singleMaleProduct,
  maleShirts,
  maleJeans,
  maleJacket,
  maleTrousers,
  maleElasticSides,
  maleMoccasins,
  setProductID
};

type RootAction = ActionType<typeof actions>;
type Dispatch = ReduxDispatch<RootAction>;

export { RootAction, Dispatch };