import axios from 'axios'

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': process.env.NEXT_PUBLIC_REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.NEXT_PUBLIC_REACT_APP_NEWS_RAPIDAPI_HOST,
};



export  const getCryptoNews = async(category,count)=>{
    const options ={
        method:'GET',
        headers:cryptoNewsHeaders,
        limit:'10',
        url:`${process.env.NEXT_PUBLIC_REACT_APP_NEWS_API_URL}/news/search`,
        params: {q: category, count:count,freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
    }
    const result = await axios.request(options)
    return result.data
}

