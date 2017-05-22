import * as actions from './actions'

test('productCreateRequest', () => {
  expect(actions.productCreateRequest({ title: 'test' })).toEqual({
    type: actions.PRODUCT_CREATE_REQUEST,
    data: { title: 'test' },
  })
})

test('productCreateSuccess', () => {
  expect(actions.productCreateSuccess({ id: 1, title: 'test' })).toEqual({
    type: actions.PRODUCT_CREATE_SUCCESS,
    detail: { id: 1, title: 'test' },
  })
})

test('productCreateFailure', () => {
  expect(actions.productCreateFailure('error')).toEqual({
    type: actions.PRODUCT_CREATE_FAILURE,
    error: 'error',
  })
})

test('productListReadRequest', () => {
  expect(actions.productListReadRequest({ fields: 'test' })).toEqual({
    type: actions.PRODUCT_LIST_READ_REQUEST,
    params: { fields: 'test' },
  })
})

test('productListReadSuccess', () => {
  expect(actions.productListReadSuccess([1, 2, 3])).toEqual({
    type: actions.PRODUCT_LIST_READ_SUCCESS,
    list: [1, 2, 3],
  })
})

test('productListReadFailure', () => {
  expect(actions.productListReadFailure('error')).toEqual({
    type: actions.PRODUCT_LIST_READ_FAILURE,
    error: 'error',
  })
})
