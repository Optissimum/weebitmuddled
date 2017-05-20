import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Product } from 'components'

storiesOf('Product', module)
  .add('default', () => (
    <Product
      title="Item Name"
      image="http://weebitmuddled.com/wp-content/uploads/2016/06/adoribull-v1-300x280.png"
      link="http://weebitmuddled.com/shop/adoribull-sticker-set/"
      addToCart={action('Item added')}
      tags={['Iron Bull', 'Dorian', 'Adoribull', 'Dragon Age']}
      categories={['Sticker']}
      quantityMax={10}
    >
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Product>
  ))
  .add('reverse', () => (
    <Product reverse />
  ))
