import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WishlistPage } from 'components'

storiesOf('WishlistPage', module)
  .add('default', () => (
    <WishlistPage />
  ))
