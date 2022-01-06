import React,{useState, useEffect} from 'react'
import {InferGetStaticPropsType} from 'next'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import {getCryptoServices} from '../../services/crypto'
import {getCryptoNews} from '../../services/cryptoNews'
import {coin,newsType} from '../../utils/type'
import NewsCard from '../../components/news/NewsCard';
import Link from 'next/link'


const Index = ({coins}:InferGetStaticPropsType<typeof getStaticProps>) => {
    if(!coins){
        return<></>
    }
    const [croptySel,setCroptySel] = useState('Cryptocurrency')
    const [news,setNews] = useState<newsType[]>([])
    const coinsName = coins.map((coin)=>coin.name)
    useEffect(() => {
        const getCryptoNewsSer = async()=>{
            const newsResult =await getCryptoNews(croptySel,20)
            if(newsResult){
                setNews(newsResult.value)
            }
        }
        getCryptoNewsSer()
    }, [croptySel])

    return (
        <div className="p-4">
            <div className="mt-4">
                <Select
                    value={croptySel}
                    onChange={(e)=>setCroptySel(e.target.value)}
                    sx={{width:'96px',height:'48px'}}
                >
                    {
                        coinsName.map((coinName)=>
                            <MenuItem value={coinName}>{coinName}</MenuItem>
                        )
                    }
                </Select>
            </div>

            {/* newsCart */}
            <div className="mt-4 grid grid-cols-12 gap-4">
                {news?.map((cryptoNews,index)=>
                <div key={cryptoNews.name} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                    <Link href={cryptoNews.url}>
                        <a>
                            <NewsCard news={cryptoNews}/>
                        </a>
                    </Link>
                </div>                 
                )}
            </div>

            
        </div>
    )
}

export async function getStaticProps(){

    const result = await getCryptoServices() 
   
    const coins:coin[] = result?.data?.coins
    
    return {
        props:{
          coins:coins?coins:null,
      }
    }
  }

export default Index
