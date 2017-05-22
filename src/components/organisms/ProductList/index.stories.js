import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProductList } from 'components'

storiesOf('ProductList', module)
  .add('default', () => (
    <ProductList />
  ))
