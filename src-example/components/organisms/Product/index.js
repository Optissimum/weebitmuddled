import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Feature, Button, Input, Badge } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;

  &:hover {
    background-color: #fefefe;
  }
`

const RightBar = styled.div`
  display: flex;
  padding-bottom: 16px;
`

const BuyBlock = styled.div`
  position: absolute;
  bottom: 1rem;
`

const Product = (props) => {
  return (
    <Wrapper {...props}>
      <Feature
        title={props.title}
        img={props.image}
        link={props.link}
        tags={props.tags}
        categories={props.categories}
      >
        {props.children}
      </Feature>
      <RightBar>
        <BuyBlock>
          <Input type="select" style={{ marginBottom: '1rem' }}>
            {Array(10).map(() => <option>{arguments[1]}</option>)}
          </Input>
          <Button onClick={props.addToCart}>Add to Cart</Button>
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
  tags: PropTypes.array,
  addToCart: PropTypes.func,
  children: PropTypes.string,
}

export default Product
