import * as api from './api';
import { fetchProducts, fetchProductsRequest } from './actions';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { JSONCategoriesLanguageResponse } from './model';

export function* handleFetchProducts() {
  try {
    yield put(fetchProductsRequest.request());
    const JSONResponse: JSONCategoriesLanguageResponse = yield call(api.getProductsFromJSON);
    yield put(fetchProductsRequest.success((JSONResponse.pl)));
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
