import { Dispatch as ReduxDispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as gender from '../gender/actions';
import * as maleProducts from '../maleProducts/actions';
import * as femaleProducts from '../femaleProducts/actions';
import * as cart from '../cart/actions';
import * as singleProduct from '../singleProduct/actions';
import * as maleShirts from '../maleProductsShirts/actions';
import * as maleJeans from '../maleProductsJeans/actions';
import * as maleJacket from '../maleProductsJacket/actions';
import * as maleTrousers from '../maleProductsTrousers/actions';
import * as maleElasticSides from '../maleProductsElasticSides/actions';
import * as maleMoccasins from '../maleProductsMoccasins/actions';
import * as maleShoes from '../maleProductsShoes/actions';
import * as maleTracksuit from '../maleProductsTracksuit/actions';
import * as maleTshirt from '../maleProductsTshirt/actions';
import * as maleBackpacks from '../maleProductsBackpacks/actions';
import * as maleBags from '../maleProductsBags/actions';
import * as maleWatches from '../maleProductsWatches/actions';
import * as maleJewelry from '../maleProductsJewelry/actions';
import * as femaleDress from '../femaleProductsDress/actions';
import * as femaleTunic from '../femaleProductsTunic/actions';
import * as femaleBlouses from '../femaleProductsBlouses/actions';
import * as femaleSkirt from '../femaleProductsSkirt/actions';
import * as femalePins from '../femaleProductsPins/actions';
import * as femaleBooties from '../femaleProductsBooties/actions';
import * as femaleBallerina from '../femaleProductsBallerina/actions';
import * as femaleTracksuit from '../femaleProductsTracksuit/actions';
import * as setProductID from '../singleID/actions';

export const actions = {
  gender,
  maleProducts,
  femaleProducts,
  cart,
  singleProduct,
  maleShirts,
  maleJeans,
  maleJacket,
  maleTrousers,
  maleElasticSides,
  maleMoccasins,
  maleShoes,
  maleTracksuit,
  maleTshirt,
  maleBackpacks,
  maleBags,
  maleWatches,
  maleJewelry,
  femaleDress,
  femaleTunic,
  femaleBlouses,
  femaleSkirt,
  femalePins,
  femaleBooties,
  femaleBallerina,
  femaleTracksuit,
  setProductID
};

type RootAction = ActionType<typeof actions>;
type Dispatch = ReduxDispatch<RootAction>;

export { RootAction, Dispatch };