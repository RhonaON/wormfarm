import type { NextPage } from 'next'
import { Container, Stack, Heading, Text } from '@chakra-ui/react'
import { load } from 'graphql-let'

import { Head } from '../../components/Head'
import { ThingList } from '../../components/ThingList'

const { useThingsViewerQuery } = load('../../graphql/ThingsViewer.graphql')

const Things: NextPage = () => {
  const thingsViewerQuery = useThingsViewerQuery()

  const { loading, error, data } = thingsViewerQuery
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error! {error.message}</div>
  if (data == null || data.things == null) return null

  return (
    <>
      <Head />

      <Container>
        <ThingList things={data.things} />
      </Container>
    </>
  )
}

export default Things
