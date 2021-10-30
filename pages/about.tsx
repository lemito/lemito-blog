import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'


const Index = () => {
  return (
    <>
    <Container>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Intro/>
        <Container>
          <p className="text-center ">Lorem ipsum dolor sit amet ...</p>         
        </Container>
      </Layout>
    </Container>  
    </>
  )
}

export default Index
