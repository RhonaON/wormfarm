import React from 'react'
import type { Thing } from '../types'
import { Heading, Stack, UnorderedList, Box } from '@chakra-ui/react'
import { ThingListItem } from './ThingListItem'

export interface ThingListProps {
  things: Array<Thing>
}

export function ThingList(props: ThingListProps) {
  const { things } = props
  return (
    <Stack>
      <Heading as="h1" size="4xl">
        Hello! Woah.
      </Heading>
      <Box maxW="32rem">
        <Heading as="h3" size="xl">
          Here are a list of things:
        </Heading>
        <UnorderedList>
          {things.map((thing) => (
            <ThingListItem key={thing.id} thing={thing} />
          ))}
        </UnorderedList>
      </Box>
    </Stack>
  )
}
