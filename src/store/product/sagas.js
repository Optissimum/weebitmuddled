import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

export function* createProduct(newData) {
  try {
    const data = yield call(api.post, '/products', newData)
    yield put(actions.productCreateSuccess(data))
  } catch (e) {
    yield put(actions.productCreateFailure(e))
  }
}

export function* readProductList(params) {
  try {
    const data = yield call(api.get, '/products', { params })
    yield put(actions.productListReadSuccess(data))
  } catch (e) {
    yield put(actions.productListReadFailure(e))
  }
}

export function* watchProductCreateRequest() {
  while (true) {
    const { data } = yield take(actions.PRODUCT_CREATE_REQUEST)
    yield call(createProduct, data)
  }
}

export function* watchProductListReadRequest() {
  while (true) {
    const { params } = yield take(actions.PRODUCT_LIST_READ_REQUEST)
    yield call(readProductList, params)
  }
}

export default function* () {
  yield fork(watchProductCreateRequest)
  yield fork(watchProductListReadRequest)
}
