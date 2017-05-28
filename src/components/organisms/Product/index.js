import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { uniqueId } from 'lodash'

import { Button, Input, Image, Modal, Link, Paragraph, Heading, Badge } from 'components'
import { Input as Number } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid transparent;
  margin: 1rem;


  &:hover {
    border-color: ${palette('gum', 3)};
    border-radius: 5px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`

const StyledImage = styled(Image)`
  cursor: ${ifProp('modalView', 'hand', 'pointer')};
  flex: none;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`


const Text = styled.div`
  width: 66%;
  margin-left: 1rem;
  overflow: auto;
  > :first-child {
    margin: 0;
  }
`

const BadgeDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  flex-flow: wrap;
  @media screen and (max-width: 900px) {
    padding: 0.5rem;
  }
`

const TagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  align-content: flex-end;
`

const StyledBadge = styled(Badge)`
  margin-right: 0.2rem;
  flex: 0 1 auto;
`

const BuyBar = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 2rem;

  & > * {
    margin-top: 0.5rem;
  }
`

const Product = ({ title, image, link, to, tags, categories, quantityMax, children, addToCart, isOpen, onClose, modalShow, ...props }) => {
  return (
    <Wrapper {...props}>
      {image && <StyledImage onClick={modalShow} src={image} alt={title} width={400} />}
      <Text>
        <Heading level={2}>
          {link ? <Link href={link}>{title}</Link> : null}
          {to ? <Link to={to}>{title}</Link> : null}
          { (!link && !to) ? <div>{title}</div> : null}
        </Heading>
        <Paragraph>{children}</Paragraph>
        <BadgeDiv>
          <TagWrapper>
            {tags && tags.map(tag => <StyledBadge key={uniqueId()} palette="gum">{tag}</StyledBadge>)}
          </TagWrapper>
          <TagWrapper>
            {categories && categories.map(category => <StyledBadge key={uniqueId()} palette="primary">{category}</StyledBadge>)}
          </TagWrapper>
        </BadgeDiv>
      </Text>
      <BuyBar>
        <Input type="select" >
          {categories.map(category => <option key={uniqueId()} value={category} >{category}</option>)}
        </Input>
        <Number type="number" />
        <Button onClick={addToCart}>Add to Cart</Button>
      </BuyBar>
      <Modal name="image" title={title} onClose={onClose} closable isOpen={isOpen} ><Image src={image} alt={title} /></Modal>
    </Wrapper>
  )
}

Product.propTypes = {
  reverse: PropTypes.bool,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  to: PropTypes.string,
  categories: PropTypes.array,
  quantityMax: PropTypes.number,
  tags: PropTypes.array,
  addToCart: PropTypes.func,
  onClose: PropTypes.func,
  modalShow: PropTypes.func,
  children: PropTypes.string,
}

export default Product
