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

interface image{
        thumbnail:{
            contentUrl:string
        }
    
}
interface provider{
    image:image
    name:string,
}

export type newsType={
    url:string,
    name:string,
    description:string,
    image:image,
    provider:provider[]
    datePublished:string,
}

export type coin={
    uuid:string,
    symbol:string,
    name:string,
    color:string,
    iconUrl:string,
    description:string,
    marketCap:number,
    price:number,
    btcPrice:string,
    listedAt:string,
    change:string,
    rank:string,
    volume:number,
    allTimeHigh:{
        price:number,
    },
    numberOfMarkets:number,
    numberOfExchanges:number,
    supply:{
        confirmed:boolean,
        circulating:number,
        total:number,
    }

}

export type historyData={
    price:number,
    timestamp:string,

}