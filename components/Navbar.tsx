import React from 'react'
import NextLink from 'next/link'
import { HStack, Link } from '@chakra-ui/react'

export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <HStack as="nav">
      <NextLink href="/" passHref>
        <Link>Home</Link>
      </NextLink>
      <NextLink href="/things" passHref>
        <Link>Things</Link>
      </NextLink>
    </HStack>
  )
}
