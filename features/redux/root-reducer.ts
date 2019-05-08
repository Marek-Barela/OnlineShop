import { combineReducers } from 'redux';
import { RootAction } from './root-actions';
import gender from '../gender/reducer';
import maleProducts from '../maleProducts/reducer';
import femaleProducts from '../femaleProducts/reducer';
import cart from '../cart/reducer';
import singleProduct from '../singleProduct/reducer';
import maleShirts from '../maleProductsShirts/reducer';
import maleJeans from '../maleProductsJeans/reducer';
import maleJacket from '../maleProductsJacket/reducer';
import maleTrousers from '../maleProductsTrousers/reducer';
import maleElasticSides from '../maleProductsElasticSides/reducer';
import maleMoccasins from '../maleProductsMoccasins/reducer';
import maleShoes from '../maleProductsShoes/reducer';
import maleTracksuit from '../maleProductsTracksuit/reducer';
import maleTshirt from '../maleProductsTshirt/reducer';
import maleBackpacks from '../maleProductsBackpacks/reducer';
import maleBags from '../maleProductsBags/reducer';
import maleWatches from '../maleProductsWatches/reducer';
import maleJewelry from '../maleProductsJewelry/reducer';
import femaleDress from '../femaleProductsDress/reducer';
import femaleTunic from '../femaleProductsTunic/reducer';
import femaleBlouses from '../femaleProductsBlouses/reducer';
import femaleSkirt from '../femaleProductsSkirt/reducer';
import femalePins from '../femaleProductsPins/reducer';
import femaleBooties from '../femaleProductsBooties/reducer';
import femaleBallerina from '../femaleProductsBallerina/reducer';
import setSingleID from '../singleID/reducer';

const reducerMap = {
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
  setSingleID
};

export type RootState = { [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]> };
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);