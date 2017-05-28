import React from 'react'
import { connect } from 'react-redux'
import { fromModal } from 'store/selectors'
import { modalShow, modalHide } from 'store/actions'

import { Product } from 'components'

const ProductContainer = props => <Product {...props} />

const mapStateToProps = state => ({
  isOpen: fromModal.isOpen(state, state.title),
})

const mapDispatchToProps = dispatch => ({
  modalShow: () => dispatch(modalShow('image')),
  onClose: () => dispatch(modalHide('image')),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
