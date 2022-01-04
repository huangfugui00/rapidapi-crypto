import React from 'react'
import {coin} from '../utils/type'
import CryptoCard from './CryptoCard'
type CryptocurrenciesProp={
    coins:coin[]
}
const Cryptocurrencies = ({coins}:CryptocurrenciesProp) => {
    if(coins.length<=0){
        return<></>
    }
      
    return (
        <div className="grid grid-cols-12 gap-8">
            {
                coins.map((coin)=>( 
                    <div className="col-span-6 lg:col-span-4 xl:col-span-3">
                        <CryptoCard coin={coin}/>
                    </div>
                ))
            }
            
            
        </div>
    )
}

export default Cryptocurrencies
