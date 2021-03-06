import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

import { Button } from 'components'

const fontSize = ({ height }) => `${height / 35.5555555556}rem`

const styles = css`
  font-family: ${font('primary')};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${ifProp({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em')};
  height: ${ifProp({ type: 'textarea' }, 'auto', '2.2222222222em')};
  color: ${palette('grayscale', 0)};
  background-color: ${palette('grayscale', 0, true)};
  border: 1px solid ${ifProp('invalid', palette('danger', 2), palette('grayscale', 3))};
  border-radius: 2px;

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }

  &[type=number] {
    flex: 2;
    width: 2rem;
    margin-right: 0;
    border-radius: 0.125em 0px 0px 0.125em;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      opacity: 0;
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 2.5em;
  width: auto;

  & > * {
    margin: 0;
    padding: 0;
  }

  & Button:first-child {
    border-radius: 0px 0.125em 0px 0px;
  }

  & Button:last-child {
    border-radius: 0px 0px 0.125em 0px;
  }
`


const StyledTextarea = styled.textarea`${styles}`
const StyledSelect = styled.select`${styles}`
const StyledInput = styled.input`${styles}`

const Input = ({ ...props }) => {
  if (props.type === 'textarea') {
    return <StyledTextarea {...props} />
  } else if (props.type === 'number') {
    return (<Wrapper {...props}>
      <StyledInput {...props} />
      <ButtonWrapper >
        <Button
          value="1"
          onClick={(e) => {
            props.handleClick(e)
            e.preventDefault()
          }}
        >+</Button>
        <Button
          value="-1"
          onClick={(e) => {
            props.handleClick(e)
            e.preventDefault()
          }}
        >-</Button>
      </ButtonWrapper>
    </Wrapper>)
  } else if (props.type === 'select') {
    return <StyledSelect {...props} />
  }
  return <StyledInput {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  invalid: PropTypes.bool,
  handleClick: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  height: 40,
}

export default Input
