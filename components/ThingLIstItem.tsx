import React from "react"
import type { Thing } from "../types"
import { Stack, ListItem, Text } from '@chakra-ui/react'


export interface ThingListItemProps {
  thing: Thing
}

export function ThingListItem(props: ThingListItemProps) {
  const { thing } = props
  const { name } = thing

  return (
    <ListItem>
      <Stack>
        <Text>name: {name}</Text>
      </Stack>
    </ListItem>
  )
}

