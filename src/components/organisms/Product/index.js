import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { uniqueId } from 'lodash'

import { Feature, Button, Input } from 'components'
import { Input as Number } from 'containers'

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
  display: flex;
  flex: 5;
  padding-bottom: 0;
`

const BuyBar = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 2rem;

  & > * {
    margin-top: 1rem;
  }
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
      <BuyBar>
        <Input type="select" >
          {categories.map(category => <option key={uniqueId()} value="{category}" >{category}</option>)}
        </Input>
        <Number type="number" />
        <Button onClick={addToCart}>Add to Cart</Button>
      </BuyBar>
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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
}

export default Product
