import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Image from '.'

storiesOf('Image', module)
  .add('default', () => (
    <Image icon="close" />
  ))
  .add('palette', () => (
    <Image icon="close" palette="primary" />
  ))
  .add('palette reverse', () => (
    <Image icon="close" palette="primary" reverse />
  ))
  .add('height', () => (
    <Image icon="close" height={100} />
  ))
