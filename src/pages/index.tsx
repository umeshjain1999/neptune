import type { NextPage } from 'next'
import { Heading1 } from 'src/components'
import styled from '@emotion/styled'

const Home: NextPage = () => {
  const PageWrapper = styled.div`
    padding: 1rem;
  `
  return (
    <PageWrapper>
      <Heading1>Dasboard</Heading1>
    </PageWrapper>
  )
}

export default Home
