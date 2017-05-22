import React from 'react'
import styled from 'styled-components'

import { Product, Heading } from 'components'

import { ProductImage } from '../../../../public/adoribull v2.png'

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

const ProductList = ({ tag, ...props }) => (
  <div {...props}>
    <StyledHeading>Holy Shit Product</StyledHeading>
    <Grid>
      <StyledProduct
        title="Item Name"
        image="http://localhost:3001/adoribull%20v2.png"
        link="http://weebitmuddled.com/shop/adoribull-sticker-set/"
        addToCart={null}
        tags={['Iron Bull', 'Dorian', 'Adoribull', 'Dragon Age']}
        categories={['Sticker']}
        quantityMax={10}
      >
        Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
      </StyledProduct>
      <StyledProduct
        title="Item Name"
        image="http://localhost:3001/adoribull%20v2.png"
        link="http://weebitmuddled.com/shop/adoribull-sticker-set/"
        addToCart={null}
        tags={['Iron Bull', 'Dorian', 'Adoribull', 'Dragon Age']}
        categories={['Sticker', 'Poster', 'Butt', 'Print', 'Super Fancy Print']}
        quantityMax={10}
      >
        Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
      </StyledProduct>
      <StyledProduct
        title="Item Name"
        image="http://localhost:3001/adoribull%20v2.png"
        link="http://weebitmuddled.com/shop/adoribull-sticker-set/"
        addToCart={null}
        tags={['Iron Bull', 'Dorian', 'Adoribull', 'Dragon Age']}
        categories={['Sticker']}
        quantityMax={10}
      >
        Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
      </StyledProduct>
      <StyledProduct
        title="Item Name"
        image="http://localhost:3001/adoribull%20v2.png"
        link="http://weebitmuddled.com/shop/adoribull-sticker-set/"
        addToCart={null}
        tags={['Iron Bull', 'Dorian', 'Adoribull', 'Dragon Age']}
        categories={['Sticker']}
        quantityMax={10}
      >
        Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
      </StyledProduct>
      <StyledProduct
        title="Item Name"
        image="http://localhost:3001/adoribull%20v2.png"
        link="http://weebitmuddled.com/shop/adoribull-sticker-set/"
        addToCart={null}
        tags={['Iron Bull', 'Dorian', 'Adoribull', 'Dragon Age']}
        categories={['Sticker']}
        quantityMax={10}
      >
        Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
      </StyledProduct>
      <StyledProduct
        title="Item Name"
        image="http://localhost:3001/adoribull%20v2.png"
        link="http://weebitmuddled.com/shop/adoribull-sticker-set/"
        addToCart={null}
        tags={['Iron Bull', 'Dorian', 'Adoribull', 'Dragon Age']}
        categories={['Sticker']}
        quantityMax={10}
      >
        Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
      </StyledProduct>
      <StyledProduct
        title="Item Name"
        image="http://localhost:3001/adoribull%20v2.png"
        link="http://weebitmuddled.com/shop/adoribull-sticker-set/"
        addToCart={null}
        tags={['Iron Bull', 'Dorian', 'Adoribull', 'Dragon Age']}
        categories={['Sticker']}
        quantityMax={10}
      >
        Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
      </StyledProduct>
    </Grid>
  </div>
)

export default ProductList
