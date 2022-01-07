import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Worm Farm</title>
        <meta name="description" content="A happy place for happy worms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to Worm Farm!
        </h1>
      </main>
    </div>
  )
}

export default Home
