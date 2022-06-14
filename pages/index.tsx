import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { AboutUs } from '../components/AboutUs'
import { Masthead } from '../components/Masthead'



const Home: NextPage = () => {

 
  return (
    <div>
      <Head>
        <title>Propiedades AMH</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
        <Masthead />
        <AboutUs />
      
     
    </div>
  )
}

export default Home
