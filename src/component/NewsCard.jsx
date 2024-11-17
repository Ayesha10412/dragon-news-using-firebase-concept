import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const NewsCard = ({news}) => {
const {title,
        author,
        thumbnail_url,
        details,
        total_view,
        rating,
        others_info,img} = news ;
        

    return (
        <div className="card w-full bg-base-100 shadow-md border rounded-lg">

             <div className="flex justify-between items-center mt-2 bg-base-200 p-2 ">
          
           <div className='flex gap-2 '>
           <div className="avatar">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div className="ml-2">
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
           </div>
          <div className='flex items-center gap-2 text-xl '>
          <CiBookmark />
          <CiShare2 />
          </div>

        </div>

      {/* Card Image */}
      <figure>
        <img src={thumbnail_url} alt={thumbnail_url} className="rounded-t-lg" />
      </figure>
      {/* Card Body */}
      <div className="card-body p-4">
        {/* Trending Badge */}
        {others_info.is_trending && (
          <div className="badge badge-primary">Trending</div>
        )}
        <h2 className="card-title text-lg font-bold">{news.author.name}</h2>
        <p className="text-sm text-gray-600">
          {details.slice(0, 120)}...
          <Link to={`/news/${news._id}`} className="text-blue-500 cursor-pointer">Read More</Link>
        </p>
        {title}
        {/* <div className="flex items-center mt-2">
          <div className="avatar">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div className="ml-2">
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div> */}
      </div>
      {/* Card Footer */}
      <div className="card-footer flex items-center justify-between p-4 bg-gray-50 border-t">
        <div className="flex items-center space-x-1">
          <FaStar className="text-yellow-500" />
          <span className="text-sm font-semibold">{rating.number}</span>
          <span className="text-xs text-gray-500">({rating.badge})</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEye className="text-gray-500" />
          <span className="text-sm text-gray-700">{total_view} views</span>
        </div>
      </div>
    </div>
    );
};

export default NewsCard;