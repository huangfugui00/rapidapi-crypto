import React from 'react'
import {newsType} from '../../utils/type'
import Image from 'next/image'
import moment from 'moment'

type newsCardProp={
    news:newsType
}
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const NewsCard = ({news}:newsCardProp) => {
    console.log(news)
    return (
        <div className="bg-gray-200 p-4  rounded-md">
            <div className="flex mb-4 relative">
                <h1 className="text-xl font-bold mr-12 md:mr-18 lg:mr-24 line-clamp-3 h-20">{news.name}</h1>
                <div className="absolute w-20 h-20 right-1 ">
                    <Image src={news.image?.thumbnail?.contentUrl || demoImage} alt="" layout="fill" objectFit="cover"
                    className="rounded-lg"/>
                </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-lg">
                        <Image src={news.provider[0].image?.thumbnail?.contentUrl || demoImage} alt="" layout="fill" objectFit="cover"
                        className="rounded-full"/>
                    </div>
                    <span className="text-sm">{news.provider[0].name}</span>
                </div>
                {/* <span className="text-sm">{moment(news.datePublished).startOf('ss').fromNow()}</span> */}
            </div>
        </div>
    )
}

export default NewsCard
