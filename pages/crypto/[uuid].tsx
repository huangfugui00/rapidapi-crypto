import React,{useState,useEffect} from 'react'
import {GetStaticPropsContext,InferGetStaticPropsType} from 'next'
import { getCryptoDetailServices, getCryptoHistoryServices,getCryptoServices } from '../../services/crypto';

import {coin,historyData} from '../../utils/type'
import millify from 'millify'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Grid4x4OutlinedIcon from '@mui/icons-material/Grid4x4Outlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import MultilineChartOutlinedIcon from '@mui/icons-material/MultilineChartOutlined';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import HTMLReactParser from 'html-react-parser';
import LineChart from '../../components/crypto/LineChart'

const Index = ({coin}:InferGetStaticPropsType<typeof getStaticProps>) => {
   
    if(!coin){
        return<></>
    }
    const times = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    const [cryptoDetails,setCryptoDetail] = useState<coin>(coin)
    const [timeperiod, setTimeperiod] = useState('7d');
    const [histroies,setHistories] = useState<historyData[]>([])
    useEffect(() => {
       const getHistoryData  = async(timeperiod:string)=>{
         const result = await getCryptoHistoryServices(cryptoDetails.uuid,timeperiod)
         setHistories(result?.data?.history)
       }
       getHistoryData(timeperiod)
    }, [timeperiod])

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <AttachMoneyOutlinedIcon/> },
        { title: 'Rank', value: cryptoDetails.rank, icon: <Grid4x4OutlinedIcon /> },
        { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <TimelineOutlinedIcon /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <AttachMoneyOutlinedIcon /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails.allTimeHigh?.price && millify(cryptoDetails.allTimeHigh?.price)}`, icon: <NightlifeOutlinedIcon /> },
      ];
    
      const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <MultilineChartOutlinedIcon /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyOffCsredOutlinedIcon /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlinedIcon /> : <ClearOutlinedIcon />, icon: <ErrorOutlineOutlinedIcon /> },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ErrorOutlineOutlinedIcon /> },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ErrorOutlineOutlinedIcon /> },
      ];
    
    return (
        <div className="p-8">   
            <div>
                <h1 className="text-center text-blue-600  text-3xl font-bold mb-8">{cryptoDetails.name}(${cryptoDetails.symbol}) Price</h1>
                <p className='text-center text-gray-500 text-sm mb-8'>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
                <hr className="text-gray-300"/>
            </div>

            <div className="mt-4  gap-2 ">
                <div className="mt-4">
                <Select
                    value={timeperiod}
                    onChange={(e)=>setTimeperiod(e.target.value)}
                    sx={{width:'96px',height:'48px'}}
                >
                    {
                        times.map((time)=>
                        <MenuItem value={time}>{time}</MenuItem>
                        )
                    }
                </Select>
                </div>

                {/* title */}
                <div className="flex justify-between items-center mt-2">
                    <h2 className="text-xl font-bold">{cryptoDetails.name} Price Chart</h2>
                    <div className="flex gap-4  text-sm">
                        <span>Change:{cryptoDetails.change}</span>
                        <span>Current price:${millify(cryptoDetails.price)}</span>
                    </div>

                </div>



                <LineChart historys={histroies} />

                                {/* statics  */}
                <div className="flex flex-col  lg:flex-row gap-4 justify-between mt-8">
                    {/* value statics */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">{cryptoDetails.name} Value Statistics</h3>
                        <p className="text-sm text-gray-500 mb-4">An overview showing the stats of {cryptoDetails.name}</p>
                        {
                            stats.map((stat)=>
                            <div className="flex justify-between items-center py-2 border-b">
                                <div className="flex items-center">
                                    <div className="text-sm">{stat.icon}</div>
                                    <span className="text-xs ">{stat.title}</span>
                                </div> 
                                <span className="text-sm">{stat.value}</span>
                                
                            </div>
                            )
                        }
                    </div>

                    {/* other statics  */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Other Statistics</h3>
                        <p className="text-sm text-gray-500 mb-4">An overview showing the stats of all cryptocurrencies</p>
                        {
                            genericStats.map((stat)=>
                            <div className="flex justify-between items-center py-2 border-b">
                                <div className="flex items-center">
                                    <div className="text-sm">{stat.icon}</div>
                                    <span className="text-xs ">{stat.title}</span>
                                </div> 
                                <span className="text-sm">{stat.value}</span>
                                
                            </div>
                            )
                        }
                    </div>
                </div>

                {/* crypto intro  */}
                <div className="mt-8 ">
                    <h2 className="text-xl font-bold mb-4">What is {cryptoDetails.name}</h2>
                    <div className="coin-desc">
                        {HTMLReactParser(cryptoDetails.description)}
                    </div>
                </div>




            </div>
          

        </div>
    )
}



export async function getStaticPaths(){
    const result = await getCryptoServices() 
    const coins:coin[] = result?.data?.coins?.slice(0,10)
    return {
        paths:coins.map(({uuid})=>({params:{uuid}})),
        fallback:true,
    }
}

export async function getStaticProps<GetStaticProps>(context:GetStaticPropsContext){

    if (context.params && context.params.uuid && typeof context.params.uuid ==='string' ){
        const result = await getCryptoDetailServices(context.params.uuid);
        const coin = result?.data?.coin
        
        if(!coin){ 
            return {
            notFound:true,
           }}
        return {
            props: { coin },
          };
    }
    return {
        notFound:true,
       }

}

export default Index
