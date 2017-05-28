import React from 'react'
import { PageTemplate, Header, Footer, Hero, FeatureList } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />} hero={<Hero />} >
      <FeatureList />
    </PageTemplate>
  )
}

export default HomePage
