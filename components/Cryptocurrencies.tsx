import React,{useState,useEffect} from 'react'
import {coin} from '../utils/type'
import CryptoCard from './CryptoCard'
import MyInput from './MyInput'

type CryptocurrenciesProp={
    coins:coin[]
}
const Cryptocurrencies = ({coins}:CryptocurrenciesProp) => {
   
    if(coins.length<=0){
        return<></>
    }

    const [searchTerm, setSearchTerm] = useState('')
    const [coinsDisplay, setCoinsDisplay] = useState<coin[]>()

    useEffect(() => {
        if(searchTerm){
            const filteredData =coins.filter((item) => item.name.toLowerCase().includes(searchTerm));
            setCoinsDisplay(filteredData)
        }else{
            setCoinsDisplay(coins)
        }
    }, [coins,searchTerm])



      
    return (
        <div>
            
            {coins.length>20 && (
                <div className="mb-4">
                <MyInput
                    placeholder="Search Cryptocurrency"
                    value={searchTerm}
                    setValue={setSearchTerm}
                />
                </div>
            )}
      
            <div className="grid grid-cols-12 gap-8">
                {
                    coinsDisplay?.map((coin)=>( 
                        <div className="col-span-6 lg:col-span-4 xl:col-span-3">
                            <CryptoCard coin={coin}/>
                        </div>
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Cryptocurrencies
