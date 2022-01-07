import React from "react"
import type { Thing } from "../types"
import { Heading, Stack, UnorderedList } from '@chakra-ui/react'
import { ThingListItem } from "./ThingLIstItem"

export interface ThingListProps {
  things: Array<Thing>
}

export function ThingList(props: ThingListProps) {
  const { things } = props
  return (
    <Stack>
      <Heading>Hello! Woah.</Heading>
      
      <UnorderedList>
        {things.map(thing => (
          <ThingListItem key={thing.id} thing={thing} />
        ))}
      </UnorderedList>
    </Stack>
  )
}

