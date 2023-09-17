import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/products/productsSlice';
import ProductItem from './ProductItem';
import './swiper-custom.css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ProductSlider from '../ProductSlider/ProductSlider';

function Products() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const categories = [...new Set(state.value.map(product => product.category))]
    const normalData = {}

    for(let i = 0; i < categories.length; i++){
        normalData[categories[i]] = []
    }

    for(let key in normalData){
        for(let i = 0; i < state.value.length; i++){
            if(key === state.value[i].category){
                normalData[key].push(state.value[i])
            }
        }
    }

    return (
        <div className='relative'>
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            className='absolute top-0 right-0 w-full z-0'
            >
                <SwiperSlide  className='w-screen'>
                    <img src="/header4.jpg" alt="" className='w-screen'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/header1.jpg" alt="" className='w-screen'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/header2.jpg" alt="" className='w-screen'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/header3.jpg" alt="" className='w-screen'/>
                </SwiperSlide>

                <div className="relative">
                    <div className='absolute h-[5rem] lg:h-[10rem] bg-gradient-to-t from-[#F5F5F5] to-transparent w-full bottom-0 right-0 left-0 z-50 '>

                    </div>
                </div>
            </Swiper>
            <div className="flex justify-center items-center absolute top-[3.4rem] lg:top-[8rem] lg:left-[2rem]">
                <div className="swiper-button-prev swiper-prev text-black" style={{textShadow: "0px 2px 3px white"}}></div>
            </div>
            <div className="flex justify-center items-center absolute top-[3.4rem] lg:top-[8rem] right-[0] lg:right-[2rem]">
                <div className="swiper-button-next swiper-next text-black" style={{textShadow: "0px 2px 3px white"}}></div>
            </div>

            <div className="pt-[7rem] lg:pt-[15rem] px-[0.5rem] gap-[0.5rem] grid grid-cols-2 lg:px-0 lg:grid-cols-4 lg:gap-[1rem] container">
                {state.loading ? <div className="flex bg-[#00000062] items-center justify-center w-full fixed top-0 bottom-0 left-0 right-0 pointer-events-none"><img src="/loader.svg" alt="" className="w-[5rem]" /></div> : null}
                {!state.loading && state.value && state.value.length > 0 ? state.value.map(product => <ProductItem key={product.id} {...product}/>) : !state.loading && <p className="text-center text-[1.5rem] fixed left-0 right-0 text-[#0f1111]">No Match Found</p>}
            </div>

            <div className='py-[5rem] flex flex-col gap-[2rem] px-[1rem] lg:px-0'>
                {!state.loading && state.value && state.value.length > 0 && (
                    Object.values(normalData).map((data,index) => <ProductSlider key={index} products={data} category={"Popular Products in "+ data[0].category[0].toUpperCase() + data[0].category.slice(1)}/>)
                )}
            </div>
        </div>
     );
}

export default Products;
