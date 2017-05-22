export const PRODUCT_CREATE = 'PRODUCT_CREATE'
export const PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST'
export const PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS'
export const PRODUCT_CREATE_FAILURE = 'PRODUCT_CREATE_FAILURE'

export const productCreateRequest = (data, resolve, reject) => ({
  type: PRODUCT_CREATE_REQUEST,
  data,
  resolve,
  reject,
})

export const productCreateSuccess = detail => ({
  type: PRODUCT_CREATE_SUCCESS,
  detail,
})

export const productCreateFailure = error => ({
  type: PRODUCT_CREATE_FAILURE,
  error,
})

export const PRODUCT_LIST_READ = 'PRODUCT_LIST_READ'
export const PRODUCT_LIST_READ_REQUEST = 'PRODUCT_LIST_READ_REQUEST'
export const PRODUCT_LIST_READ_SUCCESS = 'PRODUCT_LIST_READ_SUCCESS'
export const PRODUCT_LIST_READ_FAILURE = 'PRODUCT_LIST_READ_FAILURE'

export const productListReadRequest = (params, resolve, reject) => ({
  type: PRODUCT_LIST_READ_REQUEST,
  params,
  resolve,
  reject,
})

export const productListReadSuccess = list => ({
  type: PRODUCT_LIST_READ_SUCCESS,
  list,
})

export const productListReadFailure = error => ({
  type: PRODUCT_LIST_READ_FAILURE,
  error,
})
