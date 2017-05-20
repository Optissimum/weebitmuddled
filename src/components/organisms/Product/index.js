import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Feature, Button, Input } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid transparent;

  &:hover {
    border-color: ${palette('gum', 0)};
    border-radius: 5px;
  }
`

const StyledFeature = styled(Feature)`
  padding-bottom: 0;
`

const RightBar = styled.div`
  display: flex;
  padding-bottom: 2rem;;
`

const BuyBlock = styled.div`
  position: absolute;
  bottom: 1rem;
`

const Product = ({ title, image, link, tags, categories, quantityMax, children, addToCart, ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledFeature
        title={title}
        img={image}
        to={link}
        tags={tags}
        categories={categories}
      >
        {children}
      </StyledFeature>
      <RightBar>
        <BuyBlock>
          <Input type="select" style={{ marginBottom: '1rem' }}>
            {Array(quantityMax).map(() => <option>{arguments[1]}</option>)}
          </Input>
          <Button onClick={addToCart}>Add to Cart</Button>
        </BuyBlock>
      </RightBar>
    </Wrapper>
  )
}

Product.propTypes = {
  reverse: PropTypes.bool,
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  string: PropTypes.link,
  categories: PropTypes.array,
  quantityMax: PropTypes.number,
  tags: PropTypes.array,
  addToCart: PropTypes.func,
  children: PropTypes.string,
}

export default Product
