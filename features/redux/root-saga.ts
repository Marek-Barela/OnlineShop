import { fork } from 'redux-saga/effects';
import maleProducts from '../maleProducts/saga';
import singleMaleProduct from '../singleMaleProduct/saga';
import maleShirts from '../maleProductsShirts/saga';
import maleJeans from '../maleProductsJeans/saga';
import maleJacket from '../maleProductsJacket/saga';
import maleTrousers from '../maleProductsTrousers/saga';
import maleElasticSides from '../maleProductsElasticSides/saga';
import maleMoccasins from '../maleProductsMoccasins/saga';
import maleShoes from '../maleProductsShoes/saga';
import maleTracksuit from '../maleProductsTracksuit/saga';
import maleTshirt from '../maleProductsTshirt/saga';
import maleBackpacks from '../maleProductsBackpacks/saga';
import maleBags from '../maleProductsBags/saga';
import maleWatches from '../maleProductsWatches/saga';
import 'isomorphic-unfetch';
import es6promise from 'es6-promise';
es6promise.polyfill();

export default function* rootSaga() {
  yield fork(maleProducts);
  yield fork(singleMaleProduct);
  yield fork(maleShirts);
  yield fork(maleJeans);
  yield fork(maleJacket);
  yield fork(maleTrousers);
  yield fork(maleElasticSides);
  yield fork(maleMoccasins);
  yield fork(maleShoes);
  yield fork(maleTracksuit);
  yield fork(maleTshirt);
  yield fork(maleBackpacks);
  yield fork(maleBags);
  yield fork(maleWatches);
}