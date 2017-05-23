import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import { uniqueId } from 'lodash'

import { Icon, Link, Paragraph, Heading, Badge, PreformattedText } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  opacity: ${ifProp('soon', 0.4, 1)};
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const StyledIcon = styled.img`
  flex: none;
  height: 100%;
  width: 33%;
  @media screen and (max-width: 640px) {
    width: 32px;
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
  position: relative
  right: 0;
  bottom: 0;
  margin-top: 2rem;
`

const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`

const StyledBadge = styled(Badge)`
  margin-right: 0.2rem;
  @media screen and (max-width: 640px) {
    margin-right: 0.1rem;
  }
`

const Feature = ({ img, title, link, to, code, children, tags, categories, ...props }) => {
  return (
    <Wrapper {...props}>
      {img && <StyledIcon src={img} alt={title} width={64} />}
      <Text>
        <Heading level={2}>
          {link ? <Link href={link}>{title}</Link> : null}
          {to ? <Link to={link}>{title}</Link> : title}
        </Heading>
        <Paragraph>{children}</Paragraph>
        {code && <PreformattedText block>{code}</PreformattedText>}
        <BadgeDiv>
          <TagWrapper>
            {tags && tags.map(tag => <StyledBadge key={uniqueId()} palette="gum">{tag}</StyledBadge>)}
          </TagWrapper>
          <TagWrapper>
            {categories && categories.map(category => <StyledBadge key={uniqueId()} palette="primary">{category}</StyledBadge>)}
          </TagWrapper>
        </BadgeDiv>
      </Text>
    </Wrapper>
  )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  link: PropTypes.string,
  to: PropTypes.string,
  tags: PropTypes.array,
  categories: PropTypes.array,
  children: PropTypes.any,
  code: PropTypes.node,
}

export default Feature
