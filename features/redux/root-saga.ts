import { fork } from 'redux-saga/effects';
import counter from '../counter/saga';
import 'isomorphic-unfetch';
import es6promise from 'es6-promise';
es6promise.polyfill()

export default function* rootSaga() {
  yield fork(counter);
}