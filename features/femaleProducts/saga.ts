import * as api from './api';
import { fetchProducts, fetchProductsRequest } from './actions';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { ProductItem } from './model';

export function* handleFetchProducts() {
  try {
    yield put(fetchProductsRequest.request());
    const JSONResponse: ProductItem[] = yield call(api.getProductsFromJSON);
    yield put(fetchProductsRequest.success((JSONResponse)));
  } catch (err) {
    console.log(err);
    yield put(fetchProductsRequest.failure(err));
  }
}

export default function* () {
  yield all([
    takeEvery(getType(fetchProducts), handleFetchProducts),
  ]);
}
