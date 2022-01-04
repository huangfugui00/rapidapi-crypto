import React from 'react'
import {coin} from '../utils/type'
import Image from 'next/image'
import millify  from 'millify'

type CryptoCardProp={
    coin:coin
}
const CryptoCard = ({coin}:CryptoCardProp) => {
    return (
        <div className='bg-gray-100 rounder-lg  '>
            {/* head  */}
            <div className="flex justify-between items-center p-4 border-b">
                <span>{`${coin.rank}.${coin.name}`}</span>
                <div className="relative h-8 w-8">
                    <Image src={coin.iconUrl} layout="fill" objectFit="cover"/>
                </div>
            </div>
            {/* message */}
            <div className="flex flex-col p-4 gap-2">
                <span className="text-sm text-gray-500">{`Price:${millify(coin.price)}`}</span>
                <span className="text-sm text-gray-500">{`Market Cap:${millify(coin.marketCap)}`}</span>
                <span className="text-sm text-gray-500">{`Daily Change:${coin.change}`}</span>
            </div>

        </div>
    )
}

export default CryptoCard
