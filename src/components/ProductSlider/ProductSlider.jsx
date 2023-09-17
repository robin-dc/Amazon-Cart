import React, { useEffect, useState } from 'react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './swiper.css';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../features/products/productDetailSlice';
import { Link } from 'react-router-dom';

const ProductSlider = ({products, category}) => {
    const [isMobile, setIsMobile] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            };
    }, [isMobile]);

    const slideToShow = isMobile ? 3 : 5
  return (

    <div className='relative py-[2rem] bg-white drop-shadow-2xl container swiper'>
        <div className='px-[1rem] lg:px-[2rem] pb-[2rem] flex gap-[0.5rem] lg:gap-[0.8rem] items-center'>
            <span className='h-[2.2rem] lg:h-[2rem] w-[5px] bg-[#febd69]'></span>
            <h3 className='font-semibold text-[1rem] lg:text-[1.2rem]'>
                {category}
            </h3>
        </div>
        <Swiper
            // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={slideToShow}
        navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        className='static'
        >
            {products.map(({title, id, image, category, price, description, rating: {rate, count}}) => (
                <SwiperSlide  className='px-[1rem] cursor-pointer' key={id}>
                    <Link to={`/products/${id}`} onClick={() => {
                        dispatch(setProduct({title, id, image, category, price, description, rating: {rate, count}}))
                        window.scrollTo(0, 0)
                    }}>
                        <img src={image} alt="" className="w-fit lg:w-fit mx-auto h-[7rem] lg:h-[12rem] mb-[0.5rem]"/>

                        <div className='flex gap-[0.5rem] lg:gap-[0.7rem] items-center py-[0.5rem]'>
                            <small className='rounded-sm bg-red-700 py-[2px] lg:py-[4px] px-[6px] lg:px-[8px] text-white text-[0.55rem] lg:text-[0.7rem]'>40% off</small>
                            <small className='text-red-700 text-[0.6rem] lg:text-[0.8rem] font-semibold'>Deal</small>
                        </div>
                        <div>
                            <p className="text-[0.7rem] lg:text-[1rem] rounded-full font-semibold">${price}</p>
                            <p className='text-[0.7rem] lg:text-[1rem]'>
                                <small className='text-gray-400 font-normal'>List Price: </small>
                                <small className='line-through text-gray-400 font-normal'>${price+200}</small>
                            </p>
                        </div>

                        <h3 className="text-[0.8rem] lg:text-[0.9rem] truncate pr-[1rem]">{description}</h3>
                    </Link>

                </SwiperSlide>
            ))}

        </Swiper>
        <div className="hidden lg:flex justify-center items-center absolute top-[40%] lg:left-[1rem] translate-y-[-50%] z-50">
            <div className="swiper-button-prev text-gray-500 rounded-md px-[1.5rem] py-[3rem] drop-shadow-md bg-[#f5f5f5de]"></div>
        </div>
        <div className="hidden lg:flex justify-center items-center absolute top-[40%] translate-y-[-50%] z-50 lg:right-[1rem]">
            <div className="swiper-button-next text-gray-500 rounded-md px-[1.5rem] py-[3rem] drop-shadow-md bg-[#f5f5f5de]"></div>
        </div>
        <div className=".swiper-scrollbar transition-all duration-500"></div>
        {/* <div className=".swiper-scrollbar-drag"></div> */}
    </div>
  )
}

export default ProductSlider
