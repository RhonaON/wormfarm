import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Container,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Worm Farm</title>
        <meta name="description" content="A happy place for happy worms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Stack>
          <Heading>
            Welcome to Worm Farm!
          </Heading>
          <Text>
            So apparently... Charlie is a cat. A really good cat you see.
          </Text>
        </Stack>
      </Container>
    </>
  )
}

export default Home
