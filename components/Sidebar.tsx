import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MultilineChartOutlinedIcon from '@mui/icons-material/MultilineChartOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

const Sidebar = () => {
    const [navItem,setNavItem] = useState('home')

    return (
        <div className='bg-indigo-800 h-full grid grid-cols-12 py-4'>
            <div className="col-span-9 ">  
                {/* brand */}
                <div className="flex items-center gap-4 mx-4">
                <div className="relative h-16 w-16">        
                    <Image src="/images/Cryptocurrency.png"
                    alt="brand"
                    objectFit="contain"
                    layout="fill"
                    />         
                </div>
                <Link href="/">
                    <a>
                        <h1 className="text-white text-2xl font-serif">Crypto</h1>
                    </a>
                </Link>
                </div>
                {/* nav list */}
                    <div className="mt-8">
                        <Link href='/'>
                            <a className= {`px-2 mb-4 flex items-center gap-2 text-gray-200   ${navItem==='home'&&'bg-blue-500'}`}
                            onClick={()=>setNavItem('home')}>
                                <HomeOutlinedIcon/>
                                <span className="text-sm">Home</span>
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className= {`px-2 mb-4 flex items-center gap-2 text-gray-200  ${navItem==='cryptocurrency'&&'bg-blue-500'}`}
                            onClick={()=>setNavItem('cryptocurrency')}>
                                <MultilineChartOutlinedIcon/>
                                <span className="text-sm">Cryptocurrency</span>
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className= {`px-2 mb-4 flex items-center gap-2 text-gray-200   ${navItem==='exchanges'&&'bg-blue-500'}`}
                            onClick={()=>setNavItem('exchanges')}>
                                <CurrencyExchangeOutlinedIcon/>
                                <span className="text-sm">Exchanges</span>
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className= {`px-2 mb-4 flex items-center gap-2 text-gray-200   ${navItem==='news'&&'bg-blue-500'}`}
                            onClick={()=>setNavItem('news')}>
                                <NewspaperOutlinedIcon/>
                                <span className="text-sm">News</span>
                            </a>
                        </Link>
                    </div>

            </div>
        
        {/* rigth */}
        <div  className="col-span-3"></div>
        </div>
       
    )
}

export default Sidebar
