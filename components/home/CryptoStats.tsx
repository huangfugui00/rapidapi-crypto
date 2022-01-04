import React from 'react'
import {stats} from '../../utils/type'
import millify from 'millify'

type cryptoProp={
    crypto:stats
}
const CryptoStats = ({crypto}:cryptoProp) => {
    return (
        <div className="grid grid-cols-12">
          <div className="col-span-6 mb-12">
            <p className="mb-2 text-sm text-gray-500">Total Cryptocurrencies</p>
            <p>{millify(crypto.total)}</p>
          </div>
          <div className="col-span-6 mb-12">
            <p className="mb-2 text-sm text-gray-500">Total Exchanges</p>
            <p>{millify(crypto.totalExchanges)}</p>
          </div>
          <div className="col-span-6 mb-12">
            <p className="mb-2 text-sm text-gray-500">Total Market Caps</p>
            <p>{`$${millify(crypto.totalMarketCap)}`}</p>
          </div>
          <div className="col-span-6 mb-12">
            <p className="mb-2 text-sm text-gray-500">Total 24h Volume</p>
            <p>{`$${millify(crypto.total24hVolume)}`}</p>
          </div>
          <div className="col-span-6 mb-12">
            <p className="mb-2 text-sm text-gray-500">Total Markets</p>
            <p>{`${millify(crypto.totalMarkets)}`}</p>
          </div>
          <div className="col-span-6 mb-12">
            <p className="mb-2 text-sm text-gray-500">Total coins</p>
            <p>{`${millify(crypto.totalCoins)}`}</p>
          </div>
        </div>
            
    )
}

export default CryptoStats
