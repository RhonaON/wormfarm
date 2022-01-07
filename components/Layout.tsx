import React from 'react'

import { Navbar } from './Navbar'
import { Footer } from './Footer'

// interface = we're going to make a type
// ReactNode is a type for anything that could be a react child

export interface LayoutProps {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
