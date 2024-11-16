import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../component/NewsCard';

const CategoryNews = () => {
    const {data: news } = useLoaderData();

    return (
        <div>
            <h2 className='font-semibold mb-3 ml-4' >Dragon News Home</h2>
            <p className='text-gray-400'>{news.length} News found in this category </p>

<div className='grid grid-cols-1 gap-6'>

{

news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews} ></NewsCard> )

}

</div>

        </div>
    );
};

export default CategoryNews;