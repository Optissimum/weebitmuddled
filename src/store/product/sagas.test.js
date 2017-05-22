import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'
import saga, * as sagas from './sagas'

describe('createProduct', () => {
  const data = { title: 'test' }

  it('calls success', () => {
    const generator = sagas.createProduct(data)
    expect(generator.next().value).toEqual(call(api.post, '/products', data))
    expect(generator.next(data).value).toEqual(put(actions.productCreateSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createProduct(data)
    expect(generator.next().value).toEqual(call(api.post, '/products', data))
    expect(generator.throw('test').value).toEqual(put(actions.productCreateFailure('test')))
  })
})

describe('readProductList', () => {
  it('calls success', () => {
    const data = [1, 2, 3]
    const generator = sagas.readProductList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/products', { params: { _limit: 1 } }))
    expect(generator.next(data).value).toEqual(put(actions.productListReadSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readProductList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/products', { params: { _limit: 1 } }))
    expect(generator.throw('test').value).toEqual(put(actions.productListReadFailure('test')))
  })
})

test('watchProductCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchProductCreateRequest()
  expect(generator.next().value).toEqual(take(actions.PRODUCT_CREATE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.createProduct, ...Object.values(payload)))
})

test('watchProductListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchProductListReadRequest()
  expect(generator.next().value).toEqual(take(actions.PRODUCT_LIST_READ_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.readProductList, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchProductCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchProductListReadRequest))
})
