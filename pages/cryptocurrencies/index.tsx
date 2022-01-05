import React from 'react'
import {getCryptoServices} from '../../services/crypto'
import {coin} from '../../utils/type'
import {InferGetStaticPropsType} from 'next'
import Cryptocurrencies from '../../components/Cryptocurrencies'

const Index = ({coins}:InferGetStaticPropsType<typeof getStaticProps>) => {
    if(!coins){
        return<></>
    }
    return (
        <div className="p-8">
            <Cryptocurrencies coins={coins}/>
        </div>
    )
}


export async function getStaticProps(){

    const result = await getCryptoServices() 
    const coins:coin[] = result?.data?.coins
    
    return {
        props:{
          coins:coins?coins:null
      }
    }
  }


export default Index
