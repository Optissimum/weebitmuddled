import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components'

class InputContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { value: 0,
      type: props.type }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({
      value: Math.max(0, this.state.value + Number(e.target.value)),
    })
  }

  render() {
    return (
      <Input
        type={this.state.type}
        handleClick={this.handleClick}
        value={this.state.value}
      />
    )
  }
}

InputContainer.propTypes = {
  type: PropTypes.string,
}

export default InputContainer
