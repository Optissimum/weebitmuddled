import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CartPage } from 'components'

storiesOf('CartPage', module)
  .add('default', () => (
    <CartPage />
  ))
