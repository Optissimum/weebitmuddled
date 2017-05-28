import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { prop, ifProp } from 'styled-tools'

export const fontSize = ({ height }) => height ? `${height / 16}rem` : '1.25em'

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
  width: ${prop('width', '64')}px;
  height: auto;
  margin: 0.1em;
  box-sizing: border-box;

  & > img {
    width: 100%;
    height: 100%;
  }
`

const Image = ({ src, alt, ...props }) => {
  return (<Wrapper {...props} >
    <img src={src} alt={alt} />
  </Wrapper>)
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

export default Image
