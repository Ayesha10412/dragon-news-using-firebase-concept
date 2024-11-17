import React from 'react';
import Header from '../component/Header';
import RightNav from '../component/Layoutcomponent/RightNav';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];
    console.log(news)

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 mt-12'>
                <section className=' col-span-9 '>
<h2 className='font-bold text-xl mb-3'>Dragon News</h2>
{/* card */}

<div className="card bg-base-100  border-2">
  <figure className="px-5 pt-5">
    <img
      src={news?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">{news?.title}</h2>
    <p className='text-gray-400 text-sm mt-5'>{news?.details} </p>
    <div className="card-actions mt-10">
      <Link to={`/category/${news?.category_id}`} className="btn btn-neutral bg-[#D72050] text-white border-none ">
      <FaArrowLeft></FaArrowLeft> All news in this category</Link>
    </div>
  </div>
</div>

                </section>

                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;