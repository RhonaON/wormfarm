import type { NextPage } from 'next'
import { Container, Stack, Heading, Text } from '@chakra-ui/react'

import { Head } from '../../components/Head'
import { ThingList } from '../../components/ThingList'
import type { Thing } from '../../types'

const things: Array<Thing> = [
  { id: 1, name: 'Charlie' },
  { id: 2, name: 'a ghost' },
  { id: 3, name: 'Mrs Hoo-Hoo' },
  { id: 4, name: 'you' },
]

const Things: NextPage = () => {
  return (
    <>
      <Head />

      <Container>
        <ThingList things={things} />
      </Container>
    </>
  )
}

export default Things
