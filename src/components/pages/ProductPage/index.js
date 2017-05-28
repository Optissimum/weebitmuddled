import React from 'react'
import { PageTemplate, Header, Footer, ProductList } from 'components'
// import { ProductList } from 'containers'

const products = [1, 2, 3, 4, 5]

const ProductPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />} >
      <ProductList products={products} />
    </PageTemplate>

  )
}

export default ProductPage
