import React from 'react'
import { shallow } from 'enzyme'
import ProductList from '.'

const wrap = (props = {}) => shallow(<ProductList {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
