import type { NextPage } from 'next'
import { Head } from '../components/Head'
import { Container, Stack, Heading, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head />

      <Container>
        <Stack>
          <Heading>Welcome to WormFarm!</Heading>
          <Text>
            So apparently... Charlie is a cat. A really good cat you see.
          </Text>
        </Stack>
      </Container>
    </>
  )
}

export default Home
