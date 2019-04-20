import { fetchSingleProduct, fetchSingleProductRequest } from './actions';
import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { ProductItem } from './model';

export function* handleFetchProduct() {
  const state = yield select();
  const getProductID = state.setSingleID.id;
  try {
    yield put(fetchSingleProductRequest.request());
    const DatabaseResponse: ProductItem[] = yield call(() => {
      return fetch(`https://vitalina-database.herokuapp.com/api/male/products/${getProductID}`)
        .then(res => {
          if (!res.ok) {
            throw new Error("Error getting the stuff");
          }
          return res;
        })
        .then(res => res.json())
        .catch(err => console.log(err));
    });
    yield put(fetchSingleProductRequest.success((DatabaseResponse)));
  } catch (err) {
    console.log(err);
    yield put(fetchSingleProductRequest.failure(err));
  }
}

export default function* () {
  yield all([
    takeEvery(getType(fetchSingleProduct), handleFetchProduct),
  ]);
}
