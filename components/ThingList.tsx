import React from 'react'
import type { Thing } from 'graphql-let/__generated__/__types__'
import { Heading, Stack, UnorderedList, Box } from '@chakra-ui/react'
import { ThingListItem } from './ThingListItem'

export interface ThingListProps {
  things: Array<Thing>
}

export function ThingList(props: ThingListProps) {
  const { things } = props
  return (
    <Stack>
      <Box maxW="32rem">
        <Heading as="h2" size="xl">
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
