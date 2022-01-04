import Head from 'next/head'
import Link from 'next/link'
import {getCryptoServices} from '../services/crypto'
import {stats,coin} from '../utils/type'
import { InferGetStaticPropsType } from 'next'
import CryptoStats from '../components/home/CryptoStats'
import Cryptocurrencies from '../components/Cryptocurrencies'


export default function Home({crypto,coins}:InferGetStaticPropsType<typeof getStaticProps>) {
  if(!crypto || !coins){
    return<></>
  }
  return (
    <div >
      <Head>
        <title>Crypto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main  */}
      <main  className="p-8">
        <h1 className="text-3xl font-semibold mb-8">Global Crypto Stats</h1>
        <CryptoStats crypto={crypto}/>
        {/* show more */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">The top 10 Cryptos in the word </h2>
          <Link href='/cryptocurrencies'>
            <a className="hover:underline">
              <span>Show more</span>
            </a>
          </Link>   
        </div>        
        <Cryptocurrencies coins={coins}/>





      </main>
      


    </div>
  )
}


// static get crypto

export async function getStaticProps(){

  const result = await getCryptoServices() 
  const stats:stats = result?.data?.stats
  const coins:coin[] = result?.data?.coins?.slice(0,10)
  
  return {
      props:{
        crypto:stats?stats:null,
        coins:coins?coins:null
    }
  }
}