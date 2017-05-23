import React from 'react'
import { PageTemplate, Header, Footer, ProductList } from 'components'

const CartPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />} >
      <ProductList />
    </PageTemplate>

  )
}

export default CartPage
