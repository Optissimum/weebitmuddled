import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProductPage } from 'components'

storiesOf('ProductPage', module)
  .add('default', () => (
    <ProductPage />
  ))
