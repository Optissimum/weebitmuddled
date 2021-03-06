import React from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'

import {
  Block,
  Paragraph,
  IconButton,
  LogoImage,
  Tooltip,
} from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size('maxWidth')};
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  &:first-child {
    flex: none;
  }
  @media screen and (max-width: 640px) {
    padding: 0.25rem;
    width: 100%;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('secondary', 1, true)};
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  width: 100%;
  letter-spacing: 0.05em;
  @media screen and (max-width: 640px) {
    text-align: center;
    font-size: 1rem;
  }
`

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  > :not(:first-child) {
    margin-left: 0.5rem;
  }
`

const Hero = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <Section>
          <LogoImage height={265} />
          <ButtonGroup>
            <Tooltip reverse data-title="All the art I do" align="start" position="bottom">
              <IconButton icon="tumblr" href="http://moremuddled.tumblr.com">Art Site</IconButton>
            </Tooltip>
            <Tooltip reverse data-title="My personal blog" align="end" position="bottom">
              <IconButton icon="tumblr" href="http://weebitmuddled.tumblr.com">Tumblr</IconButton>
            </Tooltip>
          </ButtonGroup>
        </Section>
        <Section>
          <Text>
            <strong>PSST. HEY. GUESS WHAT.</strong>
            <br />
            I love Lup
          </Text>
        </Section>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
