import axios from 'axios'

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.NEXT_PUBLIC_REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.NEXT_PUBLIC_REACT_APP_RAPIDAPI_KEY,
  };



export const getCryptoServices = async()=>{
    const options ={
        method:'GET',
        headers:cryptoApiHeaders,
        limit:'10',
        url:`${process.env.NEXT_PUBLIC_REACT_APP_CRYPTO_API_URL}/coins`
    }
    const result = await axios.request(options)
    return result.data
}

export const getCryptoDetailServices = async(coin_uuid)=>{
    const options ={
        method:'GET',
        headers:cryptoApiHeaders,
        url:`${process.env.NEXT_PUBLIC_REACT_APP_CRYPTO_API_URL}/coin/${coin_uuid}`
    }
    const result = await axios.request(options)
    return result.data

}

export const getCryptoHistoryServices = async(coin_uuid,timeperiod)=>{
    const options ={
        method:'GET',
        headers:cryptoApiHeaders,
        url:`${process.env.NEXT_PUBLIC_REACT_APP_CRYPTO_API_URL}/coin/${coin_uuid}/history`,
        params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod:timeperiod},
    }
    const result = await axios.request(options)
    return result.data
}