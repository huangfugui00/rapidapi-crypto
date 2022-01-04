export type stats={
    total: number,
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number,
}

export type exchange={
    uuid:string,
    rank:number,
    iconUrl:string,
    description:string,
    // numberOfMarkets
    // volume
    // marketShare
}

export type coin={
    uuid:string,
    symbol:string,
    name:string,
    color:string,
    iconUrl:string,
    marketCap:number,
    price:number,
    btcPrice:string,
    listedAt:string,
    change:string,
    rank:string,
}