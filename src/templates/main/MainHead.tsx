import Head from 'next/head'
import { HeadType } from './types'

const MainHead = ({ head }: { head: HeadType }) => {
  return (
    <Head>
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/babyoda.jpeg" />
    </Head>
  )
}

export default MainHead
