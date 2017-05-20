import React from 'react'
import styled from 'styled-components'

import { Feature, Link, Heading, Paragraph } from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const FeatureList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>Item Types</StyledHeading>
    <Description>
      Below are the types of products offered today. More coming soon!<br />
    </Description>
    <Grid>
      <StyledFeature
        title="Stickers"
      >
      Stickers come in a number of sizes, depending on manufactorer. Check out each item to see availible sizes!
      </StyledFeature>
    </Grid>
  </div>
)

export default FeatureList
