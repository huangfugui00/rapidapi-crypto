import axios from 'axios'

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  };



export const getCryptoServices = async()=>{
    const options ={
        method:'GET',
        headers:cryptoApiHeaders,
        limit:'10',
        url:`${process.env.REACT_APP_CRYPTO_API_URL}/coins`
    }
    const result = await axios.request(options)
    return result.data
}