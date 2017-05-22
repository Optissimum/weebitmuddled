import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

export const fontSize = ({ height }) => height ? `${height / 16}rem` : '1.25em'

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;

  & > img {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`

const Image = ({ src, alt, ...props }) => {
  return (<Wrapper {...props} >
    <img href={src} alt={alt} />
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
