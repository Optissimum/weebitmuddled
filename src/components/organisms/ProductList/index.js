import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Product, Spinner, Heading } from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  & > * {
    width: calc(75% - 2rem);
    @media screen and (max-width: 640px) {
      width: calc(100% - 1rem);
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const StyledProduct = styled(Product)`
  margin: 1rem;
`

const ProductList = ({ tag, loading, products, ...props }) => (
  <div>
    { loading ? <Spinner /> : <div {...props}>
      <StyledHeading>Tag name will be here</StyledHeading>
      <Grid>
        {products.map(() => (
          <StyledProduct
            title="Kadan et Amatus"
            image="http://localhost:3001/adoribull%20v2.png"
            link="http://weebitmuddled.com/shop/adoribull-sticker-set/"
            addToCart={null}
            tags={['Iron Bull', 'Dorian', 'Adoribull', 'Dragon Age']}
            categories={['Sticker', 'Poster', 'Laptop Skin']}
            quantityMax={10}
            key={_.uniqueId()}
          >
            Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
          </StyledProduct>
        ))}
      </Grid>
    </div>
    }
  </div>
)

ProductList.propTypes = {
  tag: PropTypes.string,
  products: PropTypes.array,
  loading: PropTypes.bool,

}

export default ProductList
